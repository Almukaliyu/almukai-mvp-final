import Header from '@/components/Header';

export default function Home(){
  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container py-8'>
        <section className='card mb-6'>
          <h1 className='text-3xl font-bold'>Welcome to Almukai MVP</h1>
          <p className='mt-2 text-slate-300'>AI mentorship, human mentors, interactive MIL lessons, referrals, and admin tools.</p>
        </section>

        <section className='grid md:grid-cols-3 gap-4'>
          <a href='/mentor' className='card p-4 text-center'>AI Mentor</a>
          <a href='/mentors' className='card p-4 text-center'>Human Mentors</a>
          <a href='/mil' className='card p-4 text-center'>MIL Lessons</a>
        </section>
      </main>
    </div>
  )
}
