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
    location: ILocation;
    createdAt: number;
    updatedAt: number;
}
export declare enum ERechargeDevicesState {
    OFFLINE = 0,
    ONLINE = 1,
    AVAILABLE = 2,
    PEDDING = 3,
    UNAVAILABLE = 4,
    STOP = 5,
    ERROR = 6
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
    location: ILocation;
    createdAt: number;
    updatedAt: number;
}
export declare enum ERechargeSessionStaus {
    PROCESSING = 0,
    CHECKOUT = 1,
    REJECTED = 2,
    SUCCEEDED = 3
}
export interface IRechargeSession {
    id?: string;
    rechargeDevicesId?: string;
    userId: string;
    timeStart: number;
    timeStop: number;
    powerMode: IPowerMode;
    location: ILocation;
    payementStatus: number | ERechargeSessionStaus;
    createdAt: number;
    updatedAt: number;
}
