from pydantic import BaseModel
from typing import Optional, List
from enum import Enum

class BikeType(str, Enum):
    electric = "electric"
    manual = "manual"

class Bike(BaseModel):
    id: str
    name: str
    model: str
    type: BikeType
    available: bool
    battery: Optional[int] = None
    location: str
    pricePerHour: float
    imageUrl: Optional[str] = None

class BikeResponse(BaseModel):
    bikes: List[Bike]
    
    
