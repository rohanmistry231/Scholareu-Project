import {createClient} from "@sanity/client";

export const client =  createClient({
    projectId: '0xt3auma', // find this in your sanity.json
    dataset: 'production', // or the dataset you chose
    useCdn: false, // `false` if you want to ensure fresh data
    apiVersion: '2024-09-05', // use current date (YYYY-MM-DD)
});