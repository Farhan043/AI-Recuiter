"use client"
import WelcomeContainer from './_components/WelcomeContainer';
import CreateOptions from './_components/CreateOptions';
import LatestInterviewsList from './_components/LatestInterviewsList';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/auth');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0B1E] flex items-center justify-center">
        <div className="animate-pulse text-[#20C7FF]">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0A0B1E] p-6">
      <WelcomeContainer user={user} />
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <CreateOptions />
        <LatestInterviewsList />
      </div>
    </div>
  );
}

export default Dashboard;