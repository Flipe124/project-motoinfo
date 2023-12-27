var motocycleInfo = new Array();

motocycleInfo[0] = ["./img/honda-xre-300-rally_0.png", "Honda", "XRE 300", "Moto trail de 300cc, monocilindro.", 291.6, 25.6, 2.8, "Gasolina e/ou Etanol", 13.8, 2, 5, 860, 259];
motocycleInfo[1] = ["./img/honda-sahara-300.png", "Honda", "Sahara 300", "Moto trail de 300cc, monocilindro.", 293.5, 25.2, 2.74, "Gasolina e/ou Etanol", 13.8, 2, 6, 859, 269];


for (i = 0; i < motocycleInfo.length; i++) {
    fillCard(
        motocycleInfo[i][0],
        motocycleInfo[i][1],
        motocycleInfo[i][2],
        motocycleInfo[i][3],
        motocycleInfo[i][4],
        motocycleInfo[i][5],
        motocycleInfo[i][6],
        motocycleInfo[i][7],
        motocycleInfo[i][8],
        motocycleInfo[i][9],
        motocycleInfo[i][10],
        motocycleInfo[i][11],
        motocycleInfo[i][12]);
}
