var motocycleInfo = new Array();

// ["IMAGEM", "MARCA", "MODELO", "RESUMO", "CC", "POTÊNCIA", "TORQUE", "COMBUSTÍVEL", "L de COMBUSTÍVEL", "L de ÓLEO", "VELOCIDADES", "ALTURA ASSENTO", "ALTURA SOLO", "TOP SPEED"]

motocycleInfo[0] = ["./img/honda-xre-300-rally_0.png", "Honda", "XRE 300", "Moto trail de 300cc, monocilindro.", 291.6, 25.6, 2.8, "Gasolina e/ou Etanol", 13.8, 2, 5, 860, 259, 136];
motocycleInfo[1] = ["./img/honda-sahara-300.png", "Honda", "Sahara 300", "Moto trail de 300cc, monocilindro.", 293.5, 25.2, 2.74, "Gasolina e/ou Etanol", 13.8, 2, 6, 859, 269, 160];
motocycleInfo[2] = ["./img/honda-nx-400-falcon-carburada.png", "Honda", "NX 400 Falcon", "Moto trail de 400cc, monocilindro.", 397, 30.6, 3.51, "Gasolina e/ou Etanol", 15, 2, 5, 850, 242, 160];
motocycleInfo[3] = ["./img/honda-nx-400-falcon-2.png", "Honda", "NX 400i Falcon", "Moto trail de 400cc, monocilindro.", 397, 28.7, 3.27, "Gasolina e/ou Etanol", 15.3, 2, 5, 850, 242, 145];
motocycleInfo[4] = ["./img/yamaha-fazer-250-fz-25.png", "Yamaha", "FZ 25", "Moto naked de 250cc, monocilindro.", 249, 21.5, 2.1, "Gasolina e/ou Etanol", 14, "", 5, 790, "", 150];
motocycleInfo[5] = ["./img/yamaha-tenere-250.png", "Yamaha", "Tenere 250", "Moto trail de 250cc, monocilindro.", 249, 21.5, 2.1, "Gasolina e/ou Etanol", 16, 1.55, 5, 865, "", 135, "A ar", 1.400];
motocycleInfo[6] = ["./img/honda-xre-190.png", "Honda", "XRE 190", "Moto trail de 190cc, monocilindro.", 184.4, 16.4, 1.66, "Gasolina e/ou Etanol", 13.5, 1.2, 5, 836, "", 135, "A ar", ""];
motocycleInfo[7] = ["./img/honda-bros-160.png", "Honda", "Bros 160", "Moto trail de 160cc, monocilindro.", 162.7, 14.7, 1.60, "Gasolina e/ou Etanol", 12, 1, 5, 842, "", 120, "A ar", ""];
motocycleInfo[8] = ["./img/yamaha-crosser-150.png", "Yamaha", "Crosser 150", "Moto trail de 150cc, monocilindro.", 149.3, 12.4, 1.29, "Gasolina e/ou Etanol", 12, 1, 5, 835, "", 120, "A ar", ""];
motocycleInfo[9] = ["./img/yamaha-tracer-900-gt.png", "Yamaha", "Tracer 900 GT", "Moto sport touring de 850cc, Três cilindros.", 850, 115, 8.92, "Gasolina e/ou Etanol", 18, 3.4, 6, 845, "", 240, "Líquida", ""];
motocycleInfo[10] = ["./img/kawasaki-versys-x-300.png", "kawasaki", "Versys X 300", "Moto trail de 296cc, Dois cilindros.", 296, 40, 2.6, "Gasolina e/ou Etanol", 17, 2.4, 6, 845, "", 160, "Líquida", ""];
motocycleInfo[11] = ["./img/yamaha-lander-250.png", "Yamaha", "lander 250", "Moto trail de 249cc, Dois cilindros.", 249.45, 20.9, 2.1, "Gasolina e/ou Etanol", 11, 1.55, 5, 875, "", 149, "A ar", ""];
motocycleInfo[12] = ["./img/ktm-duke-390.png", "KTM", "Duke 390", "Moto naked de 373cc, monocilindro.", 373.2, 44, 3.57, "Gasolina e/ou Etanol", 9.5, "", 6, "", "", 160, "", ""];
motocycleInfo[13] = ["./img/yamaha-xt-660.png", "Yamaha", "XT 660", "Moto trail de 660cc, monocilindro.", 660, 48, 5.95, "Gasolina e/ou Etanol", 15, 2.9, 5, 865, "", 180, "", ""];
motocycleInfo[14] = ["./img/yamaha-mt-03.png", "Yamaha", "MT 03", "Moto naked de 321cc, Dois cilindros.", 321, 42, 2.96, "Gasolina e/ou Etanol", 14, 2.4, 6, 780, "", 180, "", ""];
motocycleInfo[15] = ["./img/kawasaki-z-300.png", "Kawasaki", "Z 300", "Moto naked de 296cc, Dois cilindros.", 296, 39, 2.8, "Gasolina e/ou Etanol", 17, 2.4, 6, 785, "", 170, "", ""];
motocycleInfo[16] = ["./img/kawasaki-ninja-300.png", "Kawasaki", "Ninja 300", "Moto sport de 296cc, Dois cilindros.", 296, 39, 2.8, "Gasolina e/ou Etanol", 17, 2.4, 6, 785, "", 170, "", ""];


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
