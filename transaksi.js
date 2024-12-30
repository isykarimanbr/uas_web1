    // Fungsi untuk mendapatkan parameter dari URL

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }


    // Menampilkan detail mobil yang disewa

    function displayCarDetails() {
        const carName = getQueryParam('mobil');
        const category = getQueryParam('kategori');
        const cost = getQueryParam('biaya');

        if (carName && category && cost) {
            document.getElementById('carDetails').innerHTML = `
                <h3>${carName}</h3>
                <p><strong>Kategori:</strong> ${category}</p>
                <p><strong>Biaya Sewa per Hari:</strong> Rp ${cost}</p>
            `;
        } else {
            document.getElementById('carDetails').innerHTML = "<p>Mobil tidak ditemukan.</p>";
        }
    }


    // Fungsi untuk mengarahkan ke halaman pembayaran

    function goToPayment() {
        const carName = getQueryParam('mobil');
        const jumlah = document.getElementById('jumlah').value;
        const cost = getQueryParam('biaya');
        const totalCost = jumlah * cost;
        const transactionId = generateTransactionId();

        // Mengarahkan ke halaman metode_pembayaran.html dengan parameter
        window.location.href = `metode_pembayaran.html?mobil=${carName}&jumlah=${jumlah}&total=${totalCost}&transactionId=${transactionId}`;
    }

    // Fungsi untuk menghasilkan ID transaksi acak
    function generateTransactionId() {
        return 'TX-' + Math.floor(Math.random() * 1000000); // Contoh format ID transaksi
    }

    // Panggil fungsi untuk menampilkan detail mobil saat halaman dimuat
    window.onload = displayCarDetails;