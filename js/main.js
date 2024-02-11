function darBienvenida() {
    let nombre = prompt("Bienvenido a Delivertido! ¿Cómo es tu nombre?");
    if (nombre !== null && nombre !== "") {
        alert("¡Hola, " + nombre + "! Bienvenido.");
    } else {
        alert("¡Debes introducir un nombre para ser bienvenido!");
        return;
    }
}

darBienvenida();

function darDireccion() {
    let direccion = prompt("¿Cuál es tu dirección?");
    if (direccion !== null && direccion !== "") {
        alert("Encontramos tu dirección " + direccion);
    } else {
        alert("¡Debes introducir una dirección para que mandemos tu pedido!");
    }
}

darDireccion();

const pedido = {
    comida: "",
    bebida: "",
    precioTotal: 0,
}

mostrarMenu();

function mostrarMenu() {
    let menu = true;
    while (menu) {
        let mensaje = "¿Qué te gustaría comer?";
        mensaje += "\n1) Pastas";
        mensaje += "\n2) Pizza";
        mensaje += "\n3) Hamburguesa";
        mensaje += "\n4) Carne a la parrilla";
        mensaje += "\n5) Hacer pedido (Seleccionar cuando termines de ordenar)";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                pedido.comida = comerPastas();
                break;
            case "2":
                pedido.comida = comerPizza();
                break;
            case "3":
                pedido.comida = comerHamburguesa();
                break;
            case "4":
                pedido.comida = comerCarne();
                break;
            case "5":
                alert("Su comida es: " + pedido.comida +
                    "\nY su bebida es: " + pedido.bebida +
                    "\nY el costo es de: " + pedido.precioTotal);
                alert("¡Tu pedido será enviado en breve!");
                menu = false; 
                break;
            default:
                alert("Ingrese una opción válida");
        }
    }
}

function comerPastas() {
    let menuPastas = true;
    while (menuPastas) {
        let mensaje = "¿Qué pastas quieres?";
        mensaje += "\n1) Penne Rigate";
        mensaje += "\n2) Tagliatonne";
        mensaje += "\n3) Ravioles";
        mensaje += "\n4) Canelones";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                bebida();
                pedido.precioTotal += 1200;
                return "Penne Rigate";
            case "2":
                bebida();
                pedido.precioTotal += 1600;
                return "Tagliatonne";
            case "3":
                bebida();
                pedido.precioTotal += 2000;
                return "Ravioles";
            case "4":
                bebida();
                pedido.precioTotal += 2500;
                return "Canelones";
            default:
                alert("Elige una opción válida");
                menuPastas = true;
        }
    }
}



function comerPizza() {
    let menuPizza = true;
    while (menuPizza) {
        let mensaje = "¿Qué pizza quieres?";
        mensaje += "\n1) Muzzarela";
        mensaje += "\n2) Napolitana";
        mensaje += "\n3) Parmesano";
        mensaje += "\n4) Rucula";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                bebida();
                pedido.precioTotal += 3000;
                return "Muzzarela";
            case "2":
                bebida();
                pedido.precioTotal += 3100;
                return "Napolitana";
            case "3":
                bebida();
                pedido.precioTotal += 3600;
                return "Parmesano";
            case "4":
                bebida();
                pedido.precioTotal += 3100;
                return "Rucula";
            default:
                alert("Elige una opción válida");
                menuPizza = true;
        }
    }
}



function comerHamburguesa() {
    let menuHamburguesa = true;
    while (menuHamburguesa) {
        let mensaje = "¿Qué hamburguesa quieres?";
        mensaje += "\n1) Onion Cheese";
        mensaje += "\n2) Monstruosa";
        mensaje += "\n3) Triple Cheese";
        mensaje += "\n4) Paro cardiaco";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                bebida();
                pedido.precioTotal += 4200;
                return "Onion Cheese";
            case "2":
                bebida();
                pedido.precioTotal += 7200;
                return "Monstruosa";
            case "3":
                bebida();
                pedido.precioTotal += 4600;
                return "Triple Cheese";
            case "4":
                bebida();
                pedido.precioTotal += 5500;
                return "Paro cardiaco";
            default:
                alert("Elige una opción válida");
                menuHamburguesa = true;
        }
    }
}

function comerCarne() {
    let menuCarne = true;
    while (menuCarne) {
        let mensaje = "¿Qué carne a la parrilla quieres?";
        mensaje += "\n1) Asado";
        mensaje += "\n2) Chinchulines";
        mensaje += "\n3) Choripan";
        mensaje += "\n4) Matambre a la pizza";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                bebida();
                pedido.precioTotal += 4000;
                return "Asado";
            case "2":
                bebida();
                pedido.precioTotal += 1500;
                return "Chinchulines";
            case "3":
                bebida();
                pedido.precioTotal += 2300;
                return "Choripan";
            case "4":
                bebida();
                pedido.precioTotal += 5000;
                return "Matambre a la pizza";
            default:
                alert("Elige una opción válida");
                menuCarne = true;
        }
    }
}




function bebida() {
    let menuBebida = true;
    while (menuBebida) {
        let mensaje = "¿Qué bebida quieres?";
        mensaje += "\n1) Coca-Cola";
        mensaje += "\n2) Pepsi";
        mensaje += "\n3) 7-Up";
        mensaje += "\n4) Sprite";

        let respuesta = prompt(mensaje);
        switch (respuesta) {
            case "1":
                pedido.bebida = "Coca-Cola";
                pedido.precioTotal += 1100;
                menuBebida = false;
                break;
            case "2":
                pedido.bebida = "Pepsi";
                pedido.precioTotal += 100;
                menuBebida = false;
                break;
            case "3":
                pedido.bebida = "7-Up";
                pedido.precioTotal += 1100;
                menuBebida = false;
                break;
            case "4":
                pedido.bebida = "Sprite";
                pedido.precioTotal += 1000;
                menuBebida = false;
                break;
            default:
                alert("Elige una opción válida");
        }
    }
}