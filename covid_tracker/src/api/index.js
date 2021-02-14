import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
    try {
        const {data: {confirmed, recovered, deaths, lastUpdate }} = await axios.get(url);
        
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }

        return modifieddata;
    } catch (error) {

    }
}