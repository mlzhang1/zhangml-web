import axios from "axios";
import { NetLink } from "./netLink";

export const getUser = () => {
     axios.get(NetLink.getUser).then(({data})=>{
         return data;
    });
};