// Fungsi untuk menanyakan apakah pengguna sudah mempunyai akun
function checkAccount() {
    var response = confirm("Apakah Anda sudah mempunyai akun?");
    if (response) {
        // Jika pengguna menjawab "ya", tetap di halaman
        console.log(" Pengguna sudah mempunyai akun.");
    } else {
        // Jika pengguna menjawab "tidak", arahkan ke daftar.html
        window.location.href = "daftar.html";
    }
}
// Memanggil fungsi checkAccount saat halaman dimuat
window.onload = checkAccount;

function searchCar() {
    var input, filter, cards, cardContainer, title, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase(); // Mengubah input menjadi huruf kecil
    cardContainer = document.getElementsByClassName('w3-row-padding')[0]; // Mengambil kontainer kartu
    cards = cardContainer.getElementsByClassName('w3-card-4'); // Mengambil semua kartu

    // Loop melalui semua kartu
    for (i = 0; i < cards.length; i++) {
        title = cards[i].getElementsByTagName("h3")[0]; // Mengambil elemen h3 dari kartu
        if (title) {
            txtValue = title.textContent || title.innerText; // Mengambil teks dari h3
            // Memeriksa apakah teks dalam h3 mengandung input pencarian
            if (txtValue.toLowerCase().indexOf(filter) > -1) {
                cards[i].style.display = ""; // Tampilkan kartu
            } else {
                cards[i].style.display = "none"; // Sembunyikan kartu
            }
        }       
    }
}