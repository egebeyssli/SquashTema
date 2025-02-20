// Sporcu verisi - Bu veriyi server'dan alabilir ya da bir API'den çekebilirsiniz
const sporcular = [
    { isim: "Egebey Sesli" },
    { isim: "Ahmet Yılmaz" },
    { isim: "Mehmet Kara" },
    { isim: "Ayşe Demir" },
    { isim: "Ali Can" }
];

// Sporcular sayfasına tıkladığında listeyi sıralayıp gösterme
if (window.location.pathname === "/sporcular.html") {
    const sporcularListesi = document.getElementById("sporcular-listesi");

    // Sporcuları alfabetik sıraya göre sıralama
    sporcular.sort((a, b) => a.isim.localeCompare(b.isim));

    // Sporcuları liste olarak eklemek
    sporcular.forEach(sporcu => {
        const listItem = document.createElement("li");
        listItem.textContent = sporcu.isim;
        sporcularListesi.appendChild(listItem);
    });
}
