let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray, filterCallback) => {
    try {
        if (!Array.isArray(dataArray)) throw "Inputan harus array";
        dataArray.forEach((valueArray) => {
            if (typeof(valueArray) !== "number") throw "Data dalam array harus number";
        });
        if (nilaiAwal >= nilaiAkhir) throw "Nilai akhir harus lebih besar dari nilai awal";
        if (dataArray.length < 5) throw "Jumlah angka dalam data Array harus lebih dari 5";
        if (typeof(nilaiAwal) !== "number" || typeof(nilaiAkhir) !== "number") throw "Inputan harus angka";

        filterFunction(nilaiAwal, nilaiAkhir, dataArray);
     
        if (filterNilai.length === 0) throw "Nilai tidak ditemukan";

        let sortNilai = filterNilai.sort(function(a, b){return a-b});
        return sortNilai;
        
    } catch (error) {
        console.log(error);
    }
}

let filterFunction = (nilaiAwal, nilaiAkhir, dataArray) => {
    filterNilai = dataArray.filter(function(currentValue){
        return currentValue > nilaiAwal && currentValue < nilaiAkhir;
    });
    return filterNilai;
}

console.log(seleksiNilai(5, 20, [2, 25, 4, 15, 10, 17], filterFunction));