import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col justify-center items-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        <Image src="/logo.svg" alt="Logo" height={100} width={100} />
      </div>
    </div>
  );
}

// Okay! Imagine you have a magical box that can open and show you your favorite toys, but sometimes it takes a little time to get everything ready.

// ClerkLoading is like a sign that says, "Hold on, the toys are coming!" It tells you that you need to wait a bit.

// ClerkLoaded is like the moment when the box finally opens, and you can see and play with all your favorite toys. It's when everything is ready and good to go.

// So, ClerkLoading is for waiting, and ClerkLoaded is for when everything is ready
