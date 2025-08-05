# 🚲 EcoBike - Sistema de Alquiler de Bicicletas

Una aplicación web moderna para el alquiler de bicicletas ecológicas, construida con React y FastAPI.

## 🚀 Características

- 📱 Interfaz de usuario moderna y responsive
- 🔐 Sistema de login y registro de usuarios
- 🚲 Catálogo de bicicletas disponibles (eléctricas y manuales)
- 🔋 Indicador de batería para bicicletas eléctricas
- 💳 Sistema de reservas y pagos
- 🌐 API REST con documentación automática

## 🛠️ Tecnologías

### Frontend
- **React 18** con TypeScript
- **Vite** como bundler
- **Tailwind CSS** para estilos
- **React Router** para navegación

### Backend
- **FastAPI** (Python)
- **Pydantic** para validación de datos
- **Uvicorn** como servidor ASGI
- **CORS** configurado para desarrollo

## 📁 Estructura del Proyecto

```
EcoBike/
├── frontend/           # Aplicación React
│   ├── src/
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/      # Páginas principales
│   │   └── assets/     # Imágenes y recursos
│   └── package.json
├── backend/            # API FastAPI
│   ├── app/
│   │   ├── main.py     # Aplicación principal
│   │   ├── schemas.py  # Modelos de datos
│   │   └── data.py     # Datos temporales
│   ├── venv/           # Entorno virtual
│   ├── requirements.txt
│   └── COMANDOS.md     # Guía de comandos
└── README.md
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v16 o superior)
- Python (v3.8 o superior)
- npm o yarn

### Frontend (React)

```bash
# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El frontend estará disponible en: http://localhost:5173

### Backend (FastAPI)

```bash
# Navegar al directorio del backend
cd backend

# Crear entorno virtual (primera vez)
python -m venv venv

# Activar entorno virtual
source venv/bin/activate  # En macOS/Linux
# o
venv\Scripts\activate     # En Windows

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor
uvicorn app.main:app --reload --port 8000
```

El backend estará disponible en: http://localhost:8000

## 📚 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Mensaje de bienvenida |
| GET | `/health` | Health check |
| GET | `/bikes` | Obtener todas las bicicletas |
| GET | `/bikes/{bike_id}` | Obtener bicicleta específica |
| GET | `/docs` | Documentación Swagger |

## 🌐 URLs Importantes

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000
- **Documentación API**: http://localhost:8000/docs
- **Endpoint Bicicletas**: http://localhost:8000/bikes

## 🔧 Scripts Disponibles

### Frontend
```bash
npm run dev          # Modo desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
```

### Backend
```bash
# Activar entorno virtual
source venv/bin/activate

# Ejecutar servidor
uvicorn app.main:app --reload --port 8000

# Instalar nueva dependencia
pip install nombre-paquete
pip freeze > requirements.txt
```

## 🎨 Funcionalidades

### ✅ Implementado
- [x] Diseño responsive con Tailwind CSS
- [x] Navegación entre páginas
- [x] Sistema de login (frontend)
- [x] Modal de registro de usuarios
- [x] Catálogo de bicicletas desde API
- [x] Selección de bicicletas
- [x] Indicador de batería
- [x] Estados de carga y error
- [x] API REST funcional
- [x] Documentación automática

### 🔄 En desarrollo
- [ ] Autenticación real con JWT
- [ ] Base de datos (MySQL)
- [ ] Sistema de pagos
- [ ] Gestión de reservas
- [ ] Panel de administración

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Jose Bayon** - [GitHub](https://github.com/tu-usuario)

---

⭐ ¡Dale una estrella si te gusta el proyecto!
