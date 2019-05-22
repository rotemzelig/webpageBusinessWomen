

export class Message {
  public name: string;
  public Email: string;
  public Number: string;
  public message: string;

  constructor(email: string,message: string,name: string , phone: string ) {
    this.name = name;
    this.Email = email;
    this.Number = phone;
    this.message = message;
  }
}