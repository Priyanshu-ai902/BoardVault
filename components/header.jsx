import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { Button } from "./ui/button"
import { PlusCircleIcon } from "lucide-react"

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="py-4 px-3 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold">
            <span className="text-purple-400 dark:text-purple-700">Board</span>
            <span className="text-cyan-400 dark:text-cyan-300">Vault</span>
          </div>
        </Link>






        <div className="flex items-center gap-4">
          <Link href='/project/create'>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            
              <PlusCircleIcon size={18}/>
              <span>Create Project</span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding" >
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
