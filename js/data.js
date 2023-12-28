var motocycleInfo = new Array();

motocycleInfo[0] = ["./img/honda-xre-300-rally_0.png", "Honda", "XRE 300", "Moto trail de 300cc, monocilindro.", 291.6, 25.6, 2.8, "Gasolina e/ou Etanol", 13.8, 2, 5, 860, 259, 0];
motocycleInfo[1] = ["./img/honda-sahara-300.png", "Honda", "Sahara 300", "Moto trail de 300cc, monocilindro.", 293.5, 25.2, 2.74, "Gasolina e/ou Etanol", 13.8, 2, 6, 859, 269, 160];
motocycleInfo[2] = ["./img/honda-nx-400-falcon-carburada.png", "Honda", "NX 400 Falcon", "Moto trail de 400cc, monocilindro.", 397, 30.6, 3.51, "Gasolina e/ou Etanol", 15, 2, 5, 850, 242, 145];
motocycleInfo[3] = ["./img/honda-nx-400-falcon-2.png", "Honda", "NX 400i Falcon", "Moto trail de 400cc, monocilindro.", 397, 28.7, 3.27, "Gasolina e/ou Etanol", 15.3, 2, 5, 850, 242, 0];
motocycleInfo[4] = ["./img/yamaha-fazer-250-fz-25.png", "Yamaha", "FZ 25", "Moto naked de 250cc, monocilindro.", 249, 21.5, 2.1, "Gasolina e/ou Etanol", 14, "", 5, 790, "", 150];
motocycleInfo[5] = ["./img/yamaha-tenere-250.png", "Yamaha", "Tenere 250", "Moto trail de 250cc, monocilindro.", 249, 21.5, 2.1, "Gasolina e/ou Etanol", 14, "", 5, 865, "", 0];


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
        motocycleInfo[i][12],
        motocycleInfo[i][13]);
}
