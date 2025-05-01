"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import SideBarOptions from "@/services/Constants"; // ✅ Correct for default export
import {  Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link"; 

 function AppSidebar() {
  const path = usePathname();
  console.log(path);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center space-x-2 mt-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <h2 className="text-lg font-bold">AI<span className="text-blue-700">Cruiter</span></h2>
        </div>
        <Button  className="cursor-pointer mt-4"><Plus />Create New Interview</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SideBarOptions.map((option, index) => (
             <SidebarMenuItem key={index}>
              <SidebarMenuButton asChild className={` ${path == option.path && "bg-blue-200"}`}>
                <Link href={option.path}> 
                <option.icon className={` ${path == option.path && "text-primary"}`} />
                <span className={`text-sm ${path == option.path && "text-primary"}`}>{option.name}</span>
                </Link>
              </SidebarMenuButton>
             </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;





// "use client";
// import { Button } from "@/components/ui/button";
// import React from "react";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import SideBarOptions from "@/services/Constants"; // ✅ Correct for default export
// import {  Plus } from "lucide-react";
// import { usePathname } from "next/navigation";
// import Link from "next/link"; 

//  function AppSidebar() {
//   const path = usePathname();
//   console.log(path);

//   return (
//     <Sidebar>
//       <SidebarHeader>
//         <div className="flex items-center justify-center space-x-2 mt-3">
//           <img src="/logo.png" alt="Logo" className="w-10 h-10" />
//           <h2 className="text-lg font-bold">
//             AI<span className="text-blue-700">Cruiter</span>
//           </h2>
//         </div>
//         <Button className="cursor-pointer mt-4">
//           <Plus />
//           Create New Interview
//         </Button>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarContent>
//             <SidebarMenu>
//               {(SideBarOptions || []).map((option, index) => (
//                 <SidebarMenuItem key={index}>
//                   <SidebarMenuButton
//                     asChild
//                     className={` ${path == option.path && "bg-blue-200"}`}
//                   >
//                     <Link href={option.path}>
//                       <option.icon
//                         className={` ${
//                           path == option.path && "text-primary"
//                         }`}
//                       />
//                       <span
//                         className={`text-sm ${
//                           path == option.path && "text-primary"
//                         }`}
//                       >
//                         {option.name}
//                       </span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter />
//     </Sidebar>
//   );
// }

// export default AppSidebar;
