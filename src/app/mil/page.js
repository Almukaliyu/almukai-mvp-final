'use client';
import { useState } from 'react';
import Header from '@/components/Header';

const lessons = [
  { id:1, title:'Intro to MIL', body:'MIL helps you evaluate information critically.', question:'What does MIL stand for?', options:['Media & Information Literacy','Machine Intelligence Learning','Modern Internet Language'], answer:0 },
  { id:2, title:'Spotting Fake News', body:'Check the source, read beyond the headline, verify.', question:'What should you do before sharing?', options:['Share immediately','Verify the source','Ignore'], answer:1 }
];

export default function MILPage(){
  const [step,setStep] = useState(0);
  const [score,setScore] = useState(0);
  const [sel,setSel] = useState(null);
  const lesson = lessons[step];

  function submitAnswer(i){
    setSel(i);
    if(i === lesson.answer) setScore(s=>s+1);
    setTimeout(()=>{
      setSel(null);
      if(step < lessons.length - 1) setStep(s=>s+1);
      else alert('Done! Score: ' + (score + (i===lesson.answer?1:0)) + '/' + lessons.length);
    }, 600);
  }

  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container py-8'>
        <h1 className='text-2xl font-bold mb-4'>{lesson.title}</h1>
        <p className='text-slate-300 mb-4'>{lesson.body}</p>

        <div className='space-y-3'>
          <div className='font-medium'>{lesson.question}</div>
          {lesson.options.map((opt, i) => (
            <button key={i} onClick={()=>submitAnswer(i)} className={`w-full text-left p-3 rounded ${sel===i ? (i===lesson.answer? 'bg-green-200': 'bg-red-200') : 'bg-slate-50'} border`}>{opt}</button>
          ))}
        </div>
        <div className='mt-4 text-sm text-slate-500'>Progress: {step+1}/{lessons.length} — Score: {score}</div>
      </main>
    </div>
  )
}
