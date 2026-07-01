ventaMayor = 0
let ventas = [120000, 95000, 150000, 80000, 200000]

for (i = 0; i < ventas.length ; i++){
    if (ventas[i] > ventaMayor){
        ventaMayor = ventas[i]
    }
}

console.log(`La venta mayor de la semana es; ${ventaMayor}`)