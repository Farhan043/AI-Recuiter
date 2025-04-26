"use client"
import { UserDetailContext } from "@/context/UserDetailContext";
import {supabase} from "@/services/supabaseClient"; // ✅ FIXED IMPORT
import React, { useContext, useEffect, useState } from "react";

function provider({ children }) {

    const [user, setUser] = useState();
    useEffect(() =>{
        createNewUser();
    }, [])
//   const createNewUser = () => {

//     supabase.auth.getUser().then(async ({ data: { user } }) => {
//       //check if user already exists
//       let { data: Users, error } = await supabase
//         .from("Users")
//         .select("*")
//         .eq("email", user?.email);
//       console.log(Users);


//       //if not then create new user
//       if (Users?.length == 0) {
//         const {data, error} =  await supabase.from("Users").insert([
//             {
//             name: user?.user_metadata?.name,
//             email: user?.email,
//             picture: user?.user_metadata?.picture,
//             }
//           ]);
//           console.log(data)
//       }
//     });
//   };

const createNewUser = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
  
    if (userError) {
      console.error("Error fetching user:", userError.message);
      return;
    }
  
    if (!user) {
      console.warn("No authenticated user found");
      return;
    }
  
    let { data: Users, error: selectError } = await supabase
      .from("users") // 🔥 lowercase table name
      .select("*")
      .eq("email", user.email);
  
    if (selectError) {
      console.error("Select error:", selectError.message);
      return;
    }
  
    console.log("Existing users:", Users);
  
    if (!Users || Users.length === 0) {
      const { data: insertData, error: insertError } = await supabase
        .from("users")
        .insert([{
          name: user.user_metadata?.name,
          email: user.email,
          picture: user.user_metadata?.picture,
        }]);
  
      if (insertError) {
        console.error("Insert error:", insertError.message);
      } else {
        console.log("User created:", insertData);
      }
    }
    setUser(Users[0]); // Set the user state
  };
  
  return(
    <UserDetailContext.Provider value={{user, setUser}}>
     <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default provider;

export const useUser=()=>{
    const context = useContext(UserDetailContext);
    return context;
}