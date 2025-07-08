import { IMailer } from "../interfaces/Imailer";

export class Mailer implements IMailer{
   SendEmail(to: string, product: unknown) {
       // send mail
       console.log("sending mail");
       return true;
   }
}
