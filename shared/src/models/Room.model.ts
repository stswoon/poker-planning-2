import { JsMap } from "./Common.model";

export type RoomId = string;
export type UserId = string;

export interface Room {
    id: RoomId;
    createdDate: number;

    showCards: boolean;
    users: JsMap<UserId, User>;
    votes: JsMap<UserId, Vote>
}

export interface User {
    id: UserId;
    name: string;
    active: boolean;
}

export interface Vote {
    cardValue: string | number
    rotateAngle?: number
}

