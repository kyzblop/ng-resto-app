export class Restaurant {

    id : Number;
    name : string;
    picture : string;
    adresse : string;
    derniereVisite : Date;
    types : Array<string>;

    constructor(
        name: string = "Entrer un nom",
        picture: string = "data:image/jpeg;base64,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" ,
        adresse: string = "Entrer une adresse" ,
        derniereVisite: Date = new Date(),
        types: string[] = [],
    ) {
        this.name = name;
        this.picture = picture;
        this.adresse = adresse;
        this.derniereVisite = derniereVisite;
        this.types = types;
    }

    
}