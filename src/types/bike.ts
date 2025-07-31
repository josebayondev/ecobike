export interface Bike {
  id: string;
  name: string;
  model: string;
  type: 'electric' | 'manual';
  available: boolean;
  battery: number | null;
  location: string;
  pricePerHour: number;
  imageUrl: string;
}

export interface BikesData {
  bikes: Bike[];
}
