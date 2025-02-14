"use client";

import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import UserMenu from "./user-menu";
import UserLoading from "./user-loading";

const HeaderClient = ({ user }) => {
  const router = useRouter();
  const { organization } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProject = async () => {
    setIsLoading(true);

    if (organization) {
      router.push("/project/create");
    } else {
      router.push("/onboarding");

      setTimeout(() => {
        router.push("/project/create");
      }, 20000);
    }
  };

  return (
    <header className="container mx-auto">
      <nav className="py-5 px-2 flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold">
            <span className="text-purple-400 dark:text-purple-700">Board</span>
            <span className="text-cyan-400 dark:text-cyan-300">Vault</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <SignedIn>
            <Button
              onClick={handleCreateProject}
              className="bg-purple-600 hover:bg-purple-700 text-white"
              disabled={isLoading}
            >
              <PlusCircleIcon size={18} />
              <span>{isLoading ? "Create Project" : "Create Project"}</span>
            </Button>
          </SignedIn>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                Login
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
      <UserLoading />
    </header>
  );
};

export default HeaderClient;
