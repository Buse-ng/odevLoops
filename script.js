// "Tech Career" metnini tersten yazdır

var metin = "Tech Career";
var tersYazdir = metin.split('').reverse().join('');
console.log(tersYazdir);


// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki SADECE poizitif sayıların toplamını ekrana yaz

var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11];
var pozitifSayilarToplam = 0;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        pozitifSayilarToplam += numbers[i];
    }
}

console.log("Pozitif sayıların toplamı: " + pozitifSayilarToplam);


// var numbers = [-22, 5, 11, 78, -4, -250, 35, 56, 11, 24, 77, 11] bu dizideki en büyük sayı hangisidir?

var enBuyukSayi = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] > enBuyukSayi) {
        enBuyukSayi = numbers[i];
    }
}

console.log("En büyük sayı: " + enBuyukSayi);


//1-50 arası sayılar içinde 3’e veya 5’e tam bölünebilen sayıları console a yaz ve kaç adet olduğunu console yaz.

var bolenSayilarToplam = 0;

for (var i = 1; i <= 50; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
        bolenSayilarToplam++;
    }
}

console.log("Toplam " + bolenSayilarToplam + " adet 3'e veya 5'e tam bölünebilen sayı bulundu.");
