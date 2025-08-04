from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .schemas import BikeResponse, Bike
from .data import BIKES_DATA

app = FastAPI(title="EcoBike API", version="1.0.0")

# Configurar CORS para el frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Puerto de Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "EcoBike API is running!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/bikes", response_model=BikeResponse)
async def get_bikes(available_only: bool = False):
    """
    Obtener todas las bicicletas o solo las disponibles
    """
    bikes = BIKES_DATA
    
    if available_only:
        bikes = [bike for bike in bikes if bike["available"]]
    
    return {"bikes": bikes}

@app.get("/bikes/{bike_id}", response_model=Bike)
async def get_bike(bike_id: str):
    """
    Obtener una bicicleta específica por ID
    """
    for bike in BIKES_DATA:
        if bike["id"] == bike_id:
            return bike
    
    return {"error": "Bike not found"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
