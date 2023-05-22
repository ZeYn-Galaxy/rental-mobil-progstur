import data from "../data.json" assert { type: 'json' };

let rental = sessionStorage.getItem('rental')
document.title = rental

sessionStorage.setItem('harga', data[rental].Harga)
sessionStorage.setItem('maxDurasi', data[rental].MaxDurasi)

const saku = document.getElementById('saku');
saku.innerText = "Saku: Rp. " + parseInt(sessionStorage.getItem('saku')).toLocaleString();

console.log(sessionStorage.getItem('saku'))
const merek = document.getElementById('merek')
merek.innerText = rental

const harga = document.getElementById("form-harga");
const durasi = document.getElementById("durasi")
harga.innerText = `Harga: Rp. ${data[rental].Harga.toLocaleString()} x Durasi \n Durasi: - Hari \n Total: `

durasi.setAttribute('placeholder', `Maksimal durasi (${data[rental].MaxDurasi}) Hari`)

durasi.addEventListener('change', (e) => {
    if (e.target.value > data[rental].MaxDurasi) {
        e.target.value = data[rental].MaxDurasi
    }

    if (e.target.value < 1) {
        e.target.value = 1
    }

    harga.innerText = `Harga: Rp. ${data[rental].Harga.toLocaleString()} x Durasi \n Durasi: ${e.target.value} Hari \n Total: Rp. ${(data[rental].Harga * e.target.value).toLocaleString()}`
})

