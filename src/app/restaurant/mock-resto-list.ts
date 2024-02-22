import { Restaurant } from "./restaurant";

export const RESTAURANTS: Restaurant[] = [
    {
        id : 1,
        name : "Macdo Lyon",
        picture : "https://lh5.googleusercontent.com/p/AF1QipP9bmSbOEyYWVwDh4Zy4DMRDmjL92QXoTKl8stY=w130-h87-n-k-no",
        adresse : "6 Pl. Gabriel Péri, 69007 Lyon",
        derniereVisite : new Date(),
        types : ["fast-food", "option vege"],

    },
    {
        id : 2,
        name : "KFC Lyon Part Dieu",
        picture : "https://lh5.googleusercontent.com/p/AF1QipP2qB_gLDRjccAiI3Ij6d4S0oIwXkOWTmOs1aDS=w260-h175-n-k-no",
        adresse : "17 Rue Dr Bouchut, 69003 Lyon",
        derniereVisite : new Date(),
        types : ["fast-food"],
    },
    {
        id : 3,
        name : "Burger King Lyon",
        picture : "https://lh5.googleusercontent.com/p/AF1QipM94utaw9fKa0LsqzqXPFtDNTsZJWz5K4K6ln42=w260-h175-n-k-no",
        adresse : "367 Rue Garibaldi, 69007 Lyon",
        derniereVisite : new Date(),
        types : ["fast-food", "option vege"],
    },
]