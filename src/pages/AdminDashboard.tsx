import { useAuth } from '@/lib/auth-context'
export default function AdminDashboard(){
 const { session, signOut } = useAuth()
 return <div style={{minHeight:'100vh',padding:32,background:'#0a0a0a'}}><h1 style={{color:'#ec4899',fontSize:32}}>FUNCIONA - SIN CICLO</h1><p>Sesion: {session?.user?.email}</p><button onClick={()=>signOut()} style={{marginTop:16,padding:'8px 16px',background:'#ec4899',borderRadius:8}}>Salir</button></div>
}
