import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../src/supabase/initalization";
import { checkIfUserIsValid } from "../../src/supabase/user";



const handler =  async(req: NextApiRequest, res: NextApiResponse) => {
    const { friendID, clientID }:any = req.query;
    res.send(checkIfUserIsValid(friendID))
}

export default handler;