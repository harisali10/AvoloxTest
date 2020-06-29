// export class User {
   
    
//     public name:String;
//     public password : String;
    
    
//  }
// ====================================================
// More Templates: https://www.ebenmonney.com/templates
// Email: support@ebenmonney.com
// ====================================================

export class User {
    constructor(email?: string, password?: string,name?: string) {
        this.email = email;
        this.password = password;
        this.name = name;
        // this.rememberMe = rememberMe;
    }

    email: string;
    password: string;
    name:string;
    // rememberMe: boolean;
}