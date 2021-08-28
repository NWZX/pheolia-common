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
    name: string;
    message: string;
    state: number | ERechargeDevicesState;
    currentPower: number;
    currentTimeStart: number;
    powerMode: {
        type: 'DC' | 'AC';
        power: number;
        price: number;
        billing: 'time' | 'session';
    }[];
    localisation: {
        lat: number;
        lng: number;
    };
    createdAt: number;
    updatedAt: number;
}

export enum ERechargeSessionStaus {
    PROCESSING,
    CHECKOUT,
    REJECTED,
    SUCCEEDED
}

export interface IRechargeSession {
  id?: string;
  rechargeDevicesId?: string;
  userId: string;

  timeStart: number;
  timeStop: number;

  powerMode: {
    type: 'DC' | 'AC';
    power: number;
    price: number;
    billing: 'time' | 'session';
  };

  localisation: {
    lat: number;
    lng: number;
  };

  payementStatus: number | ERechargeSessionStaus;
  createdAt: number;
  updatedAt: number;
}

export interface IUser {
  stripeClientId: string;
  createdAt: number;
  updatedAt: number;
}
