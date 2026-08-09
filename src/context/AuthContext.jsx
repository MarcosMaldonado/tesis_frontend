/* oxlint-disable react/only-export-components */
import {createContext,useContext,useMemo,useState} from 'react'
import {api} from '../lib/api'
const AuthContext=createContext(null)
export function AuthProvider({children}){const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('incidenclic_user')||'null'));const login=async(email,password)=>{const {data}=await api.post('/auth/login',{email,password});localStorage.setItem('incidenclic_token',data.token);localStorage.setItem('incidenclic_user',JSON.stringify(data.user));setUser(data.user)};const logout=async()=>{try{await api.post('/auth/logout')}finally{localStorage.clear();setUser(null)}};const value=useMemo(()=>({user,login,logout}),[user]);return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext)
