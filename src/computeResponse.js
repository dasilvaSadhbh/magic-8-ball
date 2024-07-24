import {responses} from "./responses";

export default function computeResponse(){
    let num = Math.floor(Math.random() * 20);
    return responses[num];
}