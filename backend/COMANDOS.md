# EcoBike Backend - Guía de comandos

## 🚀 Arrancar el servidor FastAPI

### Opción 1: Comando completo (recomendado)
```bash
cd backend
PYTHONPATH=/Users/josebayon/Documents/React/EcoBike/backend /Users/josebayon/Documents/React/EcoBike/backend/venv/bin/uvicorn app.main:app --reload --port 8000
```

### Opción 2: Con entorno virtual activado
```bash
cd backend
source venv/bin/activate          # ← Activar entorno virtual
uvicorn app.main:app --reload --port 8000
```

## 🛑 Parar el servidor
- **Ctrl + C** en el terminal donde está corriendo

## 📍 URLs importantes
- **API Principal:** http://localhost:8000
- **Documentación Swagger:** http://localhost:8000/docs
- **Endpoint Bicicletas:** http://localhost:8000/bikes
- **Health Check:** http://localhost:8000/health

## 🔧 Comandos útiles

### Activar/Desactivar entorno virtual
```bash
cd backend
source venv/bin/activate    # Activar (verás "(venv)" en el prompt)
deactivate                  # Desactivar
```

### Verificar entorno virtual
```bash
cd backend
ls venv/bin/
```

### Instalar nuevas dependencias
```bash
cd backend
source venv/bin/activate
pip install nombre-paquete
pip freeze > requirements.txt
```

### Verificar qué proceso usa un puerto
```bash
lsof -ti:8000
```

### Matar proceso en puerto específico
```bash
lsof -ti:8000 | xargs kill -9
```

## 📝 Notas importantes
- El servidor usa el puerto 8000
- El entorno virtual está en `backend/venv/`
- El archivo principal es `app/main.py`
- CORS configurado para React en puerto 5173
- Hot reload activado (se reinicia automáticamente al cambiar código)

## 🐛 Troubleshooting
- Si "Address already in use": cambiar puerto o matar proceso
- Si "No module named 'app'": usar PYTHONPATH como en Opción 1
- Si "uvicorn command not found": usar ruta completa o activar entorno virtual
