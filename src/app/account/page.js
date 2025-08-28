'use client';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';

export default function Account(){
  const [user,setUser]=useState(null);
  useEffect(()=>{ fetch('/api/auth/me').then(r=>r.json()).then(j=>{ if(!j.error) setUser(j.user); }); },[]);
  if(!user) return (<div><Header /><main className='container py-8'>Please login to view your account.</main></div>);
  return (<div><Header /><main className='container py-8'><div className='card p-4'><h2 className='text-xl font-semibold'>Account</h2><p className='mt-2'>Email: {user.email}</p><p>Credits: {user.credits}</p><div className='mt-3'><label className='text-sm text-slate-500'>Invite Link</label><input readOnly value={typeof window !== 'undefined' ? window.location.origin + '?ref=' + user._id : ''} className='w-full p-2 border rounded mt-1' /></div></div></main></div>); }
