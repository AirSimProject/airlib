import { LatLng } from "../types/LatLng.ts";

/**
 * A generic aircraft.
 */
export interface IAircraft {

    // GENERAL
    /**
     * Unique callsign (id) typically containing airline 
     * abbreviation & flight number.
     * OR N(5int code)  -> Private aircraft
     * OR GA(5int code) -> General aviation aircraft
     */
    callsign: string;

    /**
     * Identifier of type (model).
     * e.g. B737, A380, PA32, C182
     */
    aircraftType: string;

    // LOCATION & MOVEMENT
    getLocation: LatLng;
    getAltitude: number;
    getGroundSpeed: number;



}