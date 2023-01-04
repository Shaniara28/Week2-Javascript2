//Filter
/* Method filter() berfungsi untuk menyaring elemen array dan membuat array baru yang berisi elemen yang telah disaring. 
filter() tidak mengubah nilai dari array aslinya. filter() tidak mengeksekusi fungsi dengan elemen kosong. */
const angka = [13, 9, 22, 21, 28, 4, 20];
let genap = angka.filter((angka) => angka % 2 == 0);
console.log("Filter");
console.log(genap);

//Push
/* Digunakan untuk menambahkan satu atau lebih elemen diakhir sebuah array. 
Elemen-elemen tersebut dituliskan sebagai parameter pada saat memanggil method.*/
let talent = ["Shania","Dhimas","Ilham","Hosea"];
console.log("\nPush");
talent.push("Rizal");
console.log(talent);

//Pop
/* Digunakan untuk menghapus elemen terakhir dari suatu array dan mengembalikan elemen yang dihapus. 
Method ini tidak menerima parameter apapun. */
let huruf = ["a","b","c","d"];
console.log("\nPop");
huruf.pop();
console.log(huruf);

//Sort
/* Digunakan untuk mengurutkan huruf atau angka secara ascending maupun descending. */
let sortArray = angka.sort((a, b) => {return a-b});
console.log("\nSort");
console.log(sortArray);

//Shift
/* Digunakan untuk menghapus element paling awal dari array. */
let hari = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];
let shiftHari = hari.shift();
console.log("\nShift");
console.log(hari);

//Unshift
/* Digunakan untuk menambahkan value baru ke element paling awal pada array. */
let bulan = ["Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let UnshiftBulan = bulan.unshift("Januari");
console.log("\nUnshift");
console.log(bulan);

//Substring
/* Digunakan untuk mengambil bagian tertentu dari suatu string. Array asli tidak akan dimodifikasi. */
let nama = "Shania Risky Agustin";
let subNama = nama.substring(7, 12);
console.log("\nSubstring");
console.log(subNama);

//Replace
/* Digunakan untuk mengganti bagian dari string yang diberikan dengan substring baru. */
let text = "Saya Belajar Javascript";
let textBaru = text.replace("Javascript", "Phyton");
console.log("\nReplace");
console.log(textBaru);

//ToUpperCase
/* Digunakan untuk merubah semua huruf pada string menjadi huruf besar. */
let namaBesar = nama.toUpperCase();
console.log("\ntoUpperCase");
console.log(namaBesar);

//ToLowerCase
/* Digunakan untuk merubah semua huruf pada string menjadi huruf kecil. */
let namaKecil = nama.toLowerCase();
console.log("\ntoLowerCase");
console.log(namaKecil);