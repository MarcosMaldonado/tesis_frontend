import axios from 'axios'
export const api=axios.create({baseURL:import.meta.env.VITE_API_URL||'http://localhost:8000/api',headers:{Accept:'application/json'}})
api.interceptors.request.use((config)=>{const token=localStorage.getItem('gestion_incidencias_token');if(token)config.headers.Authorization=`Bearer ${token}`;return config})
api.interceptors.response.use((r)=>r,(error)=>{if(error.response?.status===401){localStorage.removeItem('gestion_incidencias_token');localStorage.removeItem('gestion_incidencias_user')}return Promise.reject(error)})
