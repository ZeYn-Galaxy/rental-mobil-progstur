import data from "./src/data.json" assert { type: 'json' };

if (sessionStorage.getItem('saku') == 0 || sessionStorage.getItem('saku') == null) {
    sessionStorage.setItem('saku', 15000000)
}

const list = document.getElementById('list');
const saku = document.getElementById('saku');
saku.innerText = "Saku: Rp. " + parseInt(sessionStorage.getItem('saku')).toLocaleString();


for (let x in data) {
    
    const a = document.createElement('a')
    a.href = "/rental-mobil-progstur/src/form/rental.html"

    const item = document.createElement('div')
    item.className = "item"

    const image = document.createElement('div')
    image.className = "image"

    const img = document.createElement('img')
    img.src = "/rental-mobil-progstur/src/images/" + data[x].Image + ".webp"
    image.appendChild(img)

    const deskripsi = document.createElement('div')
    deskripsi.className = "deskripsi"

    const nama = document.createElement('div')
    nama.className = "nama"

    const textNama = document.createTextNode(x)
    nama.appendChild(textNama)

    const harga = document.createElement('div')
    harga.className = 'harga'
    
    const textHarga = document.createTextNode("Rp. "+ parseInt(data[x].Harga).toLocaleString())
    harga.appendChild(textHarga)

    list.appendChild(a);
    a.appendChild(item)
    item.appendChild(image)
    item.appendChild(deskripsi)
    deskripsi.appendChild(nama)
    deskripsi.appendChild(harga)

    item.addEventListener('click', () => {
        sessionStorage.setItem("rental", x);
    })
}
