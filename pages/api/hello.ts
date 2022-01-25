import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../src/supabase/initalization";
import { checkIfUserIsValid } from "../../src/supabase/user";



const handler =  async(req: NextApiRequest, res: NextApiResponse) => {
    
    res.status(404).send("hello")
}

export default handler;