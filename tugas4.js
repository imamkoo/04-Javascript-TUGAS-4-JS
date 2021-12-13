x = 160
y = 155
z = 176

function tinggi_badan() {
    if (x > y && x > z) {
        console.log("X adalah tertinggi : " + x + "cm")
    } else if (x === y) {
        if (z > x && z > y) {
            console.log("Z adalah tertinggi : " + z + "cm");
        } else if (z === x) {
            console.log("Tinggi ketiganya sama : " + x + "cm");
        } else {
            console.log("Tinggi X dan Y sama : " + x + "cm");
        }
    } else if (y > x && y > z) {
        console.log("Y adalah tertinggi : " + y + "cm");
    } else if (y === z) {
        if (x > y && x > z) {
            console.log("X adalah tertinggi : " + x + "cm");
        } else if (y === x) {
            console.log("Tinggi ketiganya sama : " + y + "cm");
        } else {
            console.log("Tinggi Y dan Z sama : " + y + "cm");
        }
    } else if (z > x && z > y) {
        console.log("Z adalah tertinggi : " + z + "cm");
    } else if (z === x) {
        if (y > z && y > x) {
            console.log("Y adalah tertinggi : " + y + "cm");
        } else if (z === y) {
            console.log("Tinggi ketiganya sama : " + z + "cm");
        } else {
            console.log("Tinggi Z dan X sama : " + z + "cm");
        }
    }
}

function urutan_tinggi() {
    if (x > y && x > z) {
        if (y > z) {
            console.log("Urutan tinggi badan : " +
                '\n' + x + "cm" +
                '\n' + y + "cm" +
                '\n' + z + "cm");
        } else if (z > y) {
            console.log("Urutan tinggi badan : " +
                '\n' + x + "cm" +
                '\n' + z + "cm" +
                '\n' + y + "cm");
        } else {
            console.log("Urutan tinggi badan : " +
                '\n' + x + "cm" +
                '\n' + y + "cm" +
                '\n' + z + "cm");
        }
    } else if (y > z && y > x) {
        if (x > z) {
            console.log("Urutan tinggi badan : " +
                '\n' + y + "cm" +
                '\n' + x + "cm" +
                '\n' + z + "cm");
        } else if (z > x) {
            console.log("Urutan tinggi badan : " +
                '\n' + y + "cm" +
                '\n' + z + "cm" +
                '\n' + x + "cm");
        } else {
            console.log("Urutan tinggi badan : " +
                '\n' + y + "cm" +
                '\n' + x + "cm" +
                '\n' + z + "cm");
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log("Urutan tinggi badan : " +
                '\n' + z + "cm" +
                '\n' + x + "cm" +
                '\n' + y + "cm");
        } else if (y > x) {
            console.log("Urutan tinggi badan : " +
                '\n' + z + "cm" +
                '\n' + y + "cm" +
                '\n' + x + "cm");
        } else {
            console.log("Urutan tinggi badan : " +
                '\n' + z + "cm" +
                '\n' + x + "cm" +
                '\n' + y + "cm");
        }
    } else {
        console.log("Urutan tinggi sama : " + x + "cm")
    }
}

tinggi_badan()
urutan_tinggi()