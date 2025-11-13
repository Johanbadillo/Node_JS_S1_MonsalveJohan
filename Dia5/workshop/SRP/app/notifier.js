import { emailClient } from "../infra/emailClient.js";

export class Notifier{
    notify(email,subject,body){
        return emailClient.send(email,subject,body);
    }
}