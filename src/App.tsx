import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/lib/auth-context'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import AdminLogin from '@/pages/AdminLogin'
import AdminDashboard from '@/pages/AdminDashboard'
export default function App(){return <AuthProvider><BrowserRouter><Routes><Route path='/admin/login' element={<AdminLogin/>}/><Route path='/admin' element={<ProtectedRoute><AdminDashboard/></ProtectedRoute>}/><Route path='/' element={<Navigate to='/admin/login' replace/>}/></Routes></BrowserRouter></AuthProvider>}
