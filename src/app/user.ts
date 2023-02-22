export class User {
    constructor(
        
        public fname : string,
        public mname : string,
        public lname : string,
        public textarea: string,
        public age : string,
        public gender : string,
        public hobby : {
             cricket: string,
             dancing :string,
             reading: string,
             singing : string,
             treaking: string
        },
        public company: string
    
    ){

    }
}
