import { User } from "../types/auth";
import { atom } from "recoil";

export const userState = atom<User>({
    key: "userState",
    default: {
        id: "",
        email: "",
        name: "",
        image: "",
        online : false
    }
})


