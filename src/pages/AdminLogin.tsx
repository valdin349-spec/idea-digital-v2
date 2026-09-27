import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
export default function AdminLogin(){
 const [email,setEmail]=useState('')
 const [pass,setPass]=useState('')
 const [err,setErr]=useState('')
 const nav=useNavigate()
 const login=async()=>{
  const { error } = await supabase.auth.signInWithPassword({ email, password: pass })
  if(error){ setErr(error.message); return }
  nav('/admin')
 }
 return <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#0a0a0a'}}><div style={{background:'#18181b',padding:32,borderRadius:12,width:360}}><h1 style={{color:'#ec4899',fontSize:24,marginBottom:16}}>Admin Login</h1><input value={email} onChange={e=>setEmail(e.target.value)} placeholder='email' style={{width:'100%',padding:8,marginBottom:8}}/><input type='password' value={pass} onChange={e=>setPass(e.target.value)} placeholder='password' style={{width:'100%',padding:8,marginBottom:8}}/><button onClick={login} style={{width:'100%',padding:10,background:'#ec4899',borderRadius:8}}>Entrar</button>{err&&<p style={{color:'red',marginTop:8}}>{err}</p>}</div></div>
}
