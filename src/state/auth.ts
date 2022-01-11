import { User } from "../types/auth";
import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: [] as User[]
})


