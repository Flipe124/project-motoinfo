class Motorcycle {
    constructor(src_img, brand, model, info, cc, power, torque, fuel, fuel_capacity, oil_capacity, gear, seat_height, soil_height, max_speed, refrigeration, consumption = "") {
        this.src_img = src_img;
        this.brand = brand;
        this.model = model;
        this.info = info;
        this.cc = cc;
        this.power = power;
        this.torque = torque;
        this.fuel = fuel;
        this.fuel_capacity = fuel_capacity;
        this.oil_capacity = oil_capacity;
        this.gear = gear;
        this.seat_height = seat_height;
        this.soil_height = soil_height;
        this.max_speed = max_speed;
        this.refrigeration = refrigeration;
        this.consumption = consumption;
    }
}

var motorcycleInfo = [];

// ["IMAGEM", "MARCA", "MODELO", "RESUMO", "CC", "POTÊNCIA", "TORQUE", "COMBUSTÍVEL", "L de COMBUSTÍVEL", "L de ÓLEO", "VELOCIDADES", "ALTURA ASSENTO", "ALTURA SOLO", "TOP SPEED", "REFRIGERAÇÃO"]

motorcycleInfo.push(new Motorcycle("./img/honda-xre-300-rally_0.png", "Honda", "XRE 300", "Moto trail de 300cc, monocilindro.", 291.6, 25.6, 2.8, "Gasolina e/ou Etanol", 13.8, 2, 5, 860, 259, 136, "Líquida", 28));
motorcycleInfo.push(new Motorcycle("./img/honda-sahara-300.png", "Honda", "Sahara 300", "Moto trail de 300cc, monocilindro.", 293.5, 25.2, 2.74, "Gasolina e/ou Etanol", 13.8, 2, 6, 859, 269, 160, "Líquida", 28));
motorcycleInfo.push(new Motorcycle("./img/honda-nx-400-falcon-carburada.png", "Honda", "NX 400 Falcon", "Moto trail de 400cc, monocilindro.", 397, 30.6, 3.51, "Gasolina e/ou Etanol", 15, 2, 5, 850, 242, 160, "A ar", 25.8));
motorcycleInfo.push(new Motorcycle("./img/honda-nx-400-falcon-2.png", "Honda", "NX 400i Falcon", "Moto trail de 400cc, monocilindro.", 397, 28.7, 3.27, "Gasolina e/ou Etanol", 15.3, 2, 5, 850, 242, 145, "A ar"));
motorcycleInfo.push(new Motorcycle("./img/yamaha-fazer-250-fz-25.png", "Yamaha", "FZ 25", "Moto naked de 250cc, monocilindro.", 249, 21.5, 2.1, "Gasolina e/ou Etanol", 14, "", 5, 790, "", 150, "A ar", 31));
motorcycleInfo.push(new Motorcycle("./img/yamaha-tenere-250.png", "Yamaha", "Tenere 250", "Moto trail de 250cc, monocilindro.", 249, 21.5, 2.1, "Gasolina e/ou Etanol", 16, 1.55, 5, 865, "", 135, "A ar", 27.36));
motorcycleInfo.push(new Motorcycle("./img/honda-xre-190.png", "Honda", "XRE 190", "Moto trail de 190cc, monocilindro.", 184.4, 16.4, 1.66, "Gasolina e/ou Etanol", 13.5, 1.2, 5, 836, "", 135, "A ar", 30));
motorcycleInfo.push(new Motorcycle("./img/honda-bros-160.png", "Honda", "Bros 160", "Moto trail de 160cc, monocilindro.", 162.7, 14.7, 1.60, "Gasolina e/ou Etanol", 12, 1, 5, 842, "", 120, "A ar", 46));
motorcycleInfo.push(new Motorcycle("./img/yamaha-crosser-150.png", "Yamaha", "Crosser 150", "Moto trail de 150cc, monocilindro.", 149.3, 12.4, 1.29, "Gasolina e/ou Etanol", 12, 1, 5, 835, "", 120, "A ar", 40));
motorcycleInfo.push(new Motorcycle("./img/yamaha-tracer-900-gt.png", "Yamaha", "Tracer 900 GT", "Moto sport touring de 850cc, Três cilindros.", 850, 115, 8.92, "Gasolina e/ou Etanol", 18, 3.4, 6, 845, "", 240, "Líquida", 25));
motorcycleInfo.push(new Motorcycle("./img/kawasaki-versys-x-300.png", "kawasaki", "Versys X 300", "Moto trail de 296cc, Dois cilindros.", 296, 40, 2.6, "Gasolina e/ou Etanol", 17, 2.4, 6, 845, "", 160, "Líquida", 26));
motorcycleInfo.push(new Motorcycle("./img/yamaha-lander-250.png", "Yamaha", "lander 250", "Moto trail de 249cc, Dois cilindros.", 249.45, 20.9, 2.1, "Gasolina e/ou Etanol", 11, 1.55, 5, 875, "", 149, "A ar"));
motorcycleInfo.push(new Motorcycle("./img/ktm-duke-390.png", "KTM", "Duke 390", "Moto naked de 373cc, monocilindro.", 373.2, 44, 3.57, "Gasolina e/ou Etanol", 9.5, "", 6, "", "", 160, "Líquida", 22));
motorcycleInfo.push(new Motorcycle("./img/yamaha-xt-660.png", "Yamaha", "XT 660", "Moto trail de 660cc, monocilindro.", 660, 48, 5.95, "Gasolina e/ou Etanol", 15, 2.9, 5, 865, "", 180, "Líquida"));
motorcycleInfo.push(new Motorcycle("./img/yamaha-mt-03.png", "Yamaha", "MT 03", "Moto naked de 321cc, Dois cilindros.", 321, 42, 2.96, "Gasolina e/ou Etanol", 14, 2.4, 6, 780, "", 180, "Líquida", 22));
motorcycleInfo.push(new Motorcycle("./img/kawasaki-z-300.png", "Kawasaki", "Z 300", "Moto naked de 296cc, Dois cilindros.", 296, 39, 2.8, "Gasolina e/ou Etanol", 17, 2.4, 6, 785, "", 170, "Líquida", 21.5));
motorcycleInfo.push(new Motorcycle("./img/kawasaki-ninja-300.png", "Kawasaki", "Ninja 300", "Moto sport de 296cc, Dois cilindros.", 296, 39, 2.8, "Gasolina e/ou Etanol", 17, 2.4, 6, 785, "", 170, "Líquida", 22));
motorcycleInfo.push(new Motorcycle("./img/kawasaki-z-400.png", "Kawasaki", "Z 400", "Moto naked de 296cc, Dois cilindros.", 399, 48, 3.9, "Gasolina e/ou Etanol", 14, 2.3, 6, 785, "", 180, "Líquida", 27));
motorcycleInfo.push(new Motorcycle("./img/honda-cb-twister.png", "Honda", "Cb Twister", "Moto naked de 250cc, monocilindro.", 249.5, 22.6, 2.28, "Gasolina e/ou Etanol", 16.5, 1.8, 6, 784, "", 139, "A ar", 25));
motorcycleInfo.push(new Motorcycle("./img/kawasaki-versys-650.png", "Kawasaki", "Versys 650", "Moto Sport Touring de 649cc, Dois cilindros.", 649, 59.4, 6.5, "Gasolina e/ou Etanol", 19, 2.4, 6, 840, "", 205, "Líquida", 25));
motorcycleInfo.push(new Motorcycle("./img/honda-adv-150.png", "Honda", "ADV 150", "Moto Scooter de 149cc, monocilindro.", 149.3, 13.2, 1.38, "Gasolina e/ou Etanol", 8, 0.9, "CVT", 795, "", 115, "A ar", 50.9));

motorcycleInfo.forEach(Motorcycle => {
    fillCard(Motorcycle);
})