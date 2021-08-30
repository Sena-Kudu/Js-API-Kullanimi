import resimGetir from './unsplash_api.js';
import sakaGetir from './joke_api.js';

class Ekran {

    constructor() {
        this.sakaGetirBtn = document.querySelector('.sakaGetirBtn');
        this.sakaGetirBtn.addEventListener('click', ()=> this.sakaGetir());
    }

    async sakaGetir() {
        //console.log("burda");
        const rastgeleResim = await resimGetir();
        const rastgelesaka = await sakaGetir();

        const tumsonuclar = {
            rastgeleResim,
            rastgelesaka
        }

        this.ekranaSonuclariYazdir(tumsonuclar);
    }

    ekranaSonuclariYazdir(sonuclar) {

        document.querySelector('.sonuc').innerHTML = `   <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="${sonuclar.rastgeleResim}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
        
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${sonuclar.rastgelesaka}</p>
              
            </div>
          </div>
      
  
        </div>


      </div>
      `;

    }
}

export default function uygulamayiBaslat() {

    new Ekran();
}