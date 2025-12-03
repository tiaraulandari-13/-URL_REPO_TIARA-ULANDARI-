document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");

    title.textContent = "Tiara Ulandari😘😘😘";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });

    document.addEventListener("keydown", (event) => {
        if(event.key === "d")
            document.body.classList.toggle("dark");
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `kamu klik konten ini sebanyak ${count} kali`
    })

    document.addEventListener("keydown", (event) => {
        if (event.key === "f" || event.key === "F") {
            nav.style.fontSize = 
            nav.style.fontSize === "22px" ? "16px" : "22px";
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.style.backgroundColor = "#a66cadff";} 
        else {
            document.body.style.backgroundColor = "#c69fd0ff";}
    });

    const paragrafPertama = document.querySelector("main article p");
    paragrafPertama.textContent ="Paragraf ini telah diperbarui menggunakan Javascript otomatis!💕💕💕";
});


const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    console.log("Tombol warna diklik");

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "Mode Terang";
    } else {
        themeBtn.innerText = "Ubah Warna Tema";
    }
});

const greetBtn = document.getElementById("greetBtn");
const greetingText = document.getElementById("greeting");

greetBtn.addEventListener("click", function () {
    console.log("Tombol sapaan diklik");

    const nama = prompt("Masukkan nama Anda:");

    if (nama) {
        greetingText.innerText = `Halo, ${nama}! Selamat datang di portofolio saya 😊`;
    } else {
        greetingText.innerText = "Halo! Senang Anda berkunjung 😊";
    }
});
 /*Refleksi
 bagian yang sulit saya pahami dibagian mengubah warna saat di scrool
 pada saat sya bisa mengubahnya saya senang
 ;*/
 
