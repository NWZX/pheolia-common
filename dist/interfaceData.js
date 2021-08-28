"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERechargeSessionStaus = exports.ERechargeDevicesState = void 0;
var ERechargeDevicesState;
(function (ERechargeDevicesState) {
    ERechargeDevicesState[ERechargeDevicesState["OFFLINE"] = 0] = "OFFLINE";
    ERechargeDevicesState[ERechargeDevicesState["ONLINE"] = 1] = "ONLINE";
    ERechargeDevicesState[ERechargeDevicesState["AVAILABLE"] = 2] = "AVAILABLE";
    ERechargeDevicesState[ERechargeDevicesState["PEDDING"] = 3] = "PEDDING";
    ERechargeDevicesState[ERechargeDevicesState["UNAVAILABLE"] = 4] = "UNAVAILABLE";
    ERechargeDevicesState[ERechargeDevicesState["STOP"] = 5] = "STOP";
    ERechargeDevicesState[ERechargeDevicesState["ERROR"] = 6] = "ERROR";
})(ERechargeDevicesState = exports.ERechargeDevicesState || (exports.ERechargeDevicesState = {}));
var ERechargeSessionStaus;
(function (ERechargeSessionStaus) {
    ERechargeSessionStaus[ERechargeSessionStaus["PROCESSING"] = 0] = "PROCESSING";
    ERechargeSessionStaus[ERechargeSessionStaus["CHECKOUT"] = 1] = "CHECKOUT";
    ERechargeSessionStaus[ERechargeSessionStaus["REJECTED"] = 2] = "REJECTED";
    ERechargeSessionStaus[ERechargeSessionStaus["SUCCEEDED"] = 3] = "SUCCEEDED";
})(ERechargeSessionStaus = exports.ERechargeSessionStaus || (exports.ERechargeSessionStaus = {}));
