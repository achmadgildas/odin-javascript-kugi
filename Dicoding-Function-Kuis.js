// Fungsi untuk mencari nilai terkecil antara a dan b
function minimal(a, b) {
    return a <= b ? a : b;
}

// Contoh penggunaan fungsi minimal
console.log(minimal(1, 4)); // output: 1
console.log(minimal(3, 2)); // output: 2
console.log(minimal(3, 3)); // output: 3

// Fungsi untuk mencari index angka dalam array
function findIndex(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i; // Mengembalikan index jika angka ditemukan
        }
    }
    return -1; // Mengembalikan -1 jika angka tidak ditemukan
}

// Contoh penggunaan fungsi findIndex
console.log(findIndex([1, 2, 3, 4, 5], 3)); // output: 2
console.log(findIndex([1, 2, 3, 4, 5], 6)); // output: -1
console.log(findIndex([1, 2, 3, 4, 5], 5)); // output: 4
