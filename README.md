# Gestión de Incidencias — Frontend

SPA responsive construida con React 19, Vite, React Router, Axios, Tailwind CSS y Lucide. Presenta experiencias adaptadas para superadministrador, administrador, vecino y proveedor.

## Desarrollo local

```powershell
npm install
npm run dev
```

La API se espera en `http://localhost:8000/api`. Puede modificarse con `VITE_API_URL`.

## Verificación

```powershell
npm run build
npm run lint
```

Para ejecutar la plataforma completa con MySQL, Redis, MinIO y Mailpit, usa `docker compose up -d --build` desde el repositorio hermano `tesis_backend`.
