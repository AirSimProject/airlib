import { LatLng } from "../types/LatLng.ts";

/**
 * An aircraft on the ATC display ("BLIP").
 */
export interface IBlip {

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
    /**
     * Array of LatLng position points where 0 = last known location
     */
    locationHistory: LatLng[];

    /**
     * Destination name.
     */
    destination: string;

    /**
     * Ground speed (Displayed without last 0's)
     */
    groundSpeed: number;

    /**
     * Altitude (Displayed without last two 0's)
     */
    altitude: number;

    // MAP STUFF
    markerLocation: any;            // TODO: +Type
    polylineLocationHistory: any;   // TODO: +Type

}