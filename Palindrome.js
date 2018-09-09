// Inisialisasi variabel

var kata = 'kasur rusak';
var reverseOfKata = '';

// fungsi untuk membalik kata

function reverseKata(word) {
  
  // memeriksa apakah input kosong
  if (word === undefined) {
    return false;
  } else {
    var left = 0;
    var right = word.length - 1;
    
    // perulangan antara karakter indeks awal dan akhir
    while (left<right) {
      
      // memeriksa apakah kata pada indeks awal dan akhir sama/ palindrome
      if (word[left++] !== word[right--]) {
        return false;
      } else { return true;}
    }
  }
}

// memanggil fungsi reverseKata dan mencetak hasil pemeriksaan kata palindrome
console.log(reverseKata(kata));

