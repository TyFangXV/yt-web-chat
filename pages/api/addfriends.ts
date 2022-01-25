import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../src/supabase/initalization";
import { checkIfUserIsValid } from "../../src/supabase/user";



const handler =  async(req: NextApiRequest, res: NextApiResponse) => {
    const { friendID, clientID }:any = req.query;;
    if(!friendID || !clientID){
        res.status(300).send("Missing parameters")
        return
    }
    

}

export default handler;