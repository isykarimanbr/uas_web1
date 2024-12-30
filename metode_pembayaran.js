// Fungsi untuk mendapatkan parameter dari URL

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// Menampilkan detail pembayaran

function displayPaymentDetails() {

    const carName = getQueryParam('mobil');
    const jumlah = getQueryParam('jumlah');
    const total = getQueryParam('total');
    const transactionId = getQueryParam('transactionId');

    document.getElementById('paymentDetails').innerHTML = `

        <h3>Detail Pembayaran</h3>
        <p><strong>Mobil:</strong> ${carName}</p>
        <p><strong>Jumlah Hari:</strong> ${jumlah}</p>
        <p><strong>Total Biaya:</strong> Rp ${total}</p>
        <p><strong>ID Transaksi:</strong> ${transactionId}</p>
    `;

}


// Fungsi untuk menampilkan nomor Virtual Account berdasarkan metode pembayaran yang dipilih

function showVirtualAccount(method) {

    // Sembunyikan semua Virtual Account

    document.getElementById('virtualAccount_credit_card').classList.add('w3-hide');
    document.getElementById('virtualAccount_bank_transfer').classList.add('w3-hide');
    document.getElementById('virtualAccount_e_wallet').classList.add('w3-hide');


    // Tampilkan Virtual Account yang sesuai
    document.getElementById(`virtualAccount_${method}`).classList.remove('w3-hide');

}


// Fungsi untuk konfirmasi pembayaran

function confirmPayment() {

    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (selectedMethod) {
        const confirmation = confirm("Apakah Anda sudah melakukan pembayaran?");
        if (confirmation) {

            // Arahkan ke halaman animasi.html

            window.location.href = "animasi.html";
        } else {

            // Tetap di halaman

            console.log("Pembayaran belum dilakukan.");
        }
    } else {
        alert('Silakan pilih metode pembayaran.');
    }
}

// Panggil fungsi untuk menampilkan detail pembayaran saat halaman dimuat
window.onload = displayPaymentDetails;