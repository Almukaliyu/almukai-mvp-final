'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';

export default function Mentors(){
  const [mentors,setMentors]=useState([]);

  useEffect(()=>{ fetch('/api/mentors').then(r=>r.json()).then(j=>setMentors(j.mentors || [])); },[]);

  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container py-8'>
        <h2 className='text-2xl font-semibold mb-4'>Human Mentors</h2>
        <div className='grid md:grid-cols-2 gap-4'>
          {mentors.map(m=> (<div key={m._id} className='card p-4'><div className='font-semibold'>{m.name}</div><div className='text-sm text-slate-500'>{m.skills}</div><div className='mt-3'><button onClick={()=>{ const when=prompt('Enter date/time'); if(!when) return; fetch('/api/bookings',{method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ mentorId: m._id, when })}).then(r=>r.json()).then(j=>{ if(j.error) alert(j.error); else alert('Booked'); }) }} className='px-3 py-2 bg-blue-600 text-white rounded'>Request</button></div></div>))}
        </div>
      </main>
    </div>
  )
}
