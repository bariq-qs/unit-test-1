function fishBash(jumlahAngka) {
    for (let i = 1; i <= jumlahAngka; i++) {
        let kata = "";
        if (i % 15 === 0) {
            kata = "fish bash";
        } else if (i % 3 === 0) {
            kata = "fish";
        } else if (i % 5 === 0) {
            kata = "bash";
        }
        console.log(i, kata);
    }
}

module.exports = fishBash