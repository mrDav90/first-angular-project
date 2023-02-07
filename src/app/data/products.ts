export interface Product {
    id : number;
    name : string ;
    price : number ;
    category : string ;
    quantity : number ;
    description ?: string ;
    picture : string ;
}


export const  products = [
    {
        id : 1 ,
        name : "All Star" ,
        price : 30 ,
        category : "Chaussures" ,
        quantity : 1 ,
        description : "No description",
        picture : "https://images.unsplash.com/photo-1556048219-bb6978360b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    } ,
    {
        id : 2 ,
        name :  "YY" ,
        price  : 30 ,
        category : "T-shirts" , 
        quantity  : 1 ,
        description : "No description" , 
        picture : "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    } ,
    {
        id : 3 ,
        name : "Dickies" ,
        price : 25 ,
        category : "Chemises" ,
        quantity : 1 ,
        description : "No description" ,
        picture : "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=392&q=80"
    }
]