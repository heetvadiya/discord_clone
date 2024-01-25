import { UserButton } from "@clerk/nextjs"
export default function Home() {
  return (
    <div>
    <UserButton afterSignOutUrl="/"/>
    <p className='text-6xl font-bold'>  This is protected route </p>
    </div>
  )
}
