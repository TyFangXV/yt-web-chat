import { User } from "../types/auth";
import supabase from "./initalization";


export const saveUser = async (user:User) => {
    const { id, email, name, image} = user;
    const userExistence = await supabase.from("user").select("id").eq("email", email);
    if(userExistence.data === null){
        const { data, error } = await supabase.from("user").insert({ id : id, email : email, username : name, profile_pic : image }, { returning: "minimal" });
    }else{
        return "already logged in"
    }
}

export const checkIfUserIsValid = async(id:string)  =>{
    const userExistence = await supabase.from("user").select("id").eq("id", id);
    
    if(userExistence === null){
        return false;
    }else{
        return true;
    }
    
}