export interface IUser {
  stripeClientId: string;
  createdAt: number;
  updatedAt: number;
}

export interface ILocation {
  geohash: string;
  lat: number;
  lng: number;
}

export interface IPowerMode {
  type: 'DC' | 'AC';
  power: number;
  price: number;
  billing: 'time' | 'session';
}

export interface IRechargeStation {
  id?: string;
  name: string;

  chargerCount: number;
  chargerAvailable: number;

  powerMin: number;
  powerMax: number;
  priceMin: number;
  priceMax: number;

  localisation: ILocation;
  createdAt: number;
  updatedAt: number;
}

export enum ERechargeDevicesState {
  OFFLINE, // Disconnected to online service (HS)
  ONLINE, // Connected to online service (HS)
  AVAILABLE, // There is no car charging (Empty)
  PEDDING, // A car  is currently connected and waiting for session start (Can be disconnected by anyone)
  UNAVAILABLE, // There is a car charging (Is locked, can't be disconnected only when session is stop)
  STOP, // Emergency stopping unit (HS)
  ERROR, // Something went wrong (HS)
}

export interface IRechargeDevices {
  id?: string;

  deviceUID?: string;
  stationId: string;
  name: string;
  message: string;
  state: number | ERechargeDevicesState;
  currentPower: number;
  currentTimeStart: number;
  powerMode: IPowerMode[];
  localisation: ILocation;
  createdAt: number;
  updatedAt: number;
}

export enum ERechargeSessionStaus {
  PROCESSING,
  CHECKOUT,
  REJECTED,
  SUCCEEDED,
}

export interface IRechargeSession {
  id?: string;
  rechargeDevicesId?: string;
  userId: string;

  timeStart: number;
  timeStop: number;

  powerMode: IPowerMode;

  localisation: ILocation;

  payementStatus: number | ERechargeSessionStaus;
  createdAt: number;
  updatedAt: number;
}
