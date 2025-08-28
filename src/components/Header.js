import Link from 'next/link';

export default function Header(){
  return (
    <header className="bg-gradient-to-r from-violet-600 to-cyan-500 text-white p-4">
      <div className="container flex items-center justify-between">
        <div className="text-xl font-bold">Almukai</div>
        <nav className="space-x-4 hidden md:block">
          <Link href="/">Home</Link>
          <Link href="/mentor">AI Mentor</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/mil">MIL</Link>
          <Link href="/account">Account</Link>
        </nav>
      </div>
    </header>
  )
}
