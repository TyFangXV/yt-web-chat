import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../src/supabase/initalization";
import { checkIfUserIsValid } from "../../src/supabase/user";



const handler =  async(req: NextApiRequest, res: NextApiResponse) => {
    
    res.send("hello")
}

export default handler;