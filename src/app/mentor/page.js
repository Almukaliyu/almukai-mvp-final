'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function Mentor(){
  const [input,setInput]=useState('');
  const [history,setHistory]=useState([]);
  const [credits,setCredits]=useState(null);

  useEffect(()=>{
    fetch('/api/auth/me').then(r=>r.json()).then(j=>{ if(!j.error) setCredits(j.user?.credits ?? null); });
  },[]);

  async function send(){
    if(!input.trim()) return;
    const res = await fetch('/api/ai/chat', { method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify({ prompt: input }) });
    const j = await res.json();
    if(j.error) { alert(j.error); return; }
    setHistory(h=>[...h, {role:'user', text: input}, {role:'ai', text: j.answer}]);
    setInput('');
    setCredits(j.credits ?? credits);
  }

  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container py-8'>
        <div className='card p-4'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold'>AI Mentor</h2>
            <div className='text-sm text-slate-500'>Credits: {credits ?? '—'}</div>
          </div>
          <textarea rows={4} className='w-full p-3 border rounded mb-3' value={input} onChange={e=>setInput(e.target.value)} />
          <div className='flex gap-2'><button onClick={send} className='px-4 py-2 bg-blue-600 text-white rounded'>Send (1 credit)</button></div>
          <div className='mt-4 space-y-3'>
            {history.map((h,i)=>(<div key={i}><div className='text-xs text-slate-500'>{h.role}</div><div>{h.text}</div></div>))}
          </div>
        </div>
      </main>
    </div>
  )
}
