export interface IProduct {
    id: number | string;
    title: string;
    categories: { name: string }; 
    price: number;
    images?: string[]; 
}