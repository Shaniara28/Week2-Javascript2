const nama = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];

let lowercase = () => {
   namaKecil = nama.map(element => element.toLowerCase());
   return namaKecil;
}

let searchName = (input, batas, callback) => {
    try {
        if (typeof(input) != "string") throw "Inputan harus huruf";
        if (typeof(batas) != "number") throw "Batas harus huruf";
        if (batas > nama.length) throw "Batas melebihi array";
    } catch (error) {
        console.log(error);
    }

    lowercase()
    let filterNama = namaKecil.filter((namaKecil) => {
        return namaKecil.search(input) != -1;
    });

    let batasArray = filterNama.slice(0,batas);

    return batasArray;
}

console.log(searchName("an", 3, lowercase));