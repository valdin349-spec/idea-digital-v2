import { Navigate } from 'react-router-dom'
import { useAuth } from '@/lib/auth-context'
export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { session, loading } = useAuth()
  if (loading) return <div style={{minHeight:'100vh',background:'black',display:'flex',alignItems:'center',justifyContent:'center'}}>Cargando...</div>
  if (!session) return <Navigate to="/admin/login" replace />
  return children
}
