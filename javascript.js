//membuat teks kedalam tag p pada header
document.getElementById("prodi").innerText = "Teknik Informatika";

//membuat element h2 kedalam id/class tentang
var hasil = document.querySelector('#pondok');
var newElemen = document.createElement("li");
var teksElemen = document.createTextNode('Yayasan Nurul Huda Lampung');
newElemen.appendChild(teksElemen);
hasil.appendChild(newElemen);

//membuat element yang dinamis berdasarkan event handler tertentu
//mengubah warna background
const btn = document.getElementById('btn');
btn.addEventListener('click', function onClick(event) {
    // 👇️ change background color
    document.body.style.backgroundColor = 'lightgreen';
});