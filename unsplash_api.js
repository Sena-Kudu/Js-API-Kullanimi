class UnsplashApi {

    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID NMA3ZUbmkA_0yPvtwSQ2z-QmXI6uABfeGouoBWUsBCo'
        this.axiosNesne = axios.create({
            baseURL : this.baseURL,
            headers : {
                Authorization :this.clientID
            },
            params : {
                query : 'animal'
            }
        });

    }

    async randomResimGetir() {

        try {

            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data.urls.regular);
            return resimResponse.data.urls.regular;

        } catch(err){

            console.log(err);
        }


    }

}

export default function resimGetir() {

    const getirilenResim = new UnsplashApi().randomResimGetir();
    return getirilenResim;

}