/* oxlint-disable react/only-export-components */
import {createContext,useContext,useMemo,useState} from 'react'
import {api} from '../lib/api'
const AuthContext=createContext(null)
export function AuthProvider({children}){const [user,setUser]=useState(()=>JSON.parse(localStorage.getItem('gestion_incidencias_user')||'null'));const login=async(email,password)=>{const {data}=await api.post('/auth/login',{email,password});localStorage.setItem('gestion_incidencias_token',data.token);localStorage.setItem('gestion_incidencias_user',JSON.stringify(data.user));setUser(data.user)};const logout=async()=>{try{await api.post('/auth/logout')}finally{localStorage.clear();setUser(null)}};const value=useMemo(()=>({user,login,logout}),[user]);return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>}
export const useAuth=()=>useContext(AuthContext)
