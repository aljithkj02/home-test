export type HomeData = {
    name: string;
    email: string;
    place: string;
    no_of_travellers: number;
    budget: number;
}

export type ConfigObj = {
    API_URL: string;
}

export type ReturnedObj = {
    status: boolean;
    message: string;
}