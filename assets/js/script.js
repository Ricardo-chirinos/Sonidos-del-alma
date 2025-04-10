document.addEventListener('DOMContentLoaded', () => {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarritoSpan = document.getElementById('total-carrito');
    const botonPagar = document.getElementById('boton-pagar');
    const formularioPago = document.getElementById('formulario-pago');
    const formularioDePago = document.getElementById('formulario-de-pago');
    const mensajePago = document.getElementById('mensaje-pago');
    const navCarrito = document.querySelector('.nav-link[href="#carrito"]');

    let carrito = [];

    function actualizarCarritoUI() {
        listaCarrito.innerHTML = '';
        let total = 0;
        carrito.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start');
            listItem.innerHTML = `
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.nombre}</div>
                    $<span class="math-inline">\{item\.precio\}
</div\>
<button class\="btn btn\-sm btn\-danger eliminar\-item" data\-id\="</span>{item.id}">Eliminar</button>
            `;
            listaCarrito.appendChild(listItem);
            total += item.precio;
        });
        totalCarritoSpan.textContent = total.toLocaleString('es-CL');
        navCarrito.textContent = `Carrito (${carrito.length})`;

        // Actualizar listeners de botones eliminar
        const botonesEliminar = document.querySelectorAll('.eliminar-item');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', eliminarDelCarrito);
        });
    }

    function agregarAlCarrito(evento) {
        const boton = evento.target;
        const id = parseInt(boton.dataset.id);
        const nombre = boton.dataset.nombre;
        const precio = parseInt(boton.dataset.precio);

        const itemExistente = carrito.find(item => item.id === id);
        if (itemExistente) {
            // Aquí podrías implementar lógica para aumentar la cantidad si lo deseas
            alert('Este producto ya está en el carrito.');
            return;
        }

        carrito.push({ id, nombre, precio });
        actualizarCarritoUI();
    }

    function eliminarDelCarrito(evento) {
        const boton = evento.target;
        const id = parseInt(boton.dataset.id);
        carrito = carrito.filter(item => item.id !== id);
        actualizarCarritoUI();
    }

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });

    botonPagar.addEventListener('click', () => {
        if (carrito.length > 0) {
            formularioPago.style.display = 'block';
        } else {
            alert('El carrito está vacío. Agrega productos para pagar.');
        }
    });

    formularioDePago.addEventListener('submit', (evento) => {
        evento.preventDefault();
        // Simulación de pago exitoso
        console.log('Simulando pago con los siguientes datos:');
        console.log('Nombre:', document.getElementById('nombre-pago').value);
        console.log('Tarjeta:', document.getElementById('tarjeta-pago').value);
        console.log('Vencimiento:', document.getElementById('vencimiento-pago').value);
        console.log('CVV:', document.getElementById('cvv-pago').value);

        mensajePago.style.display = 'block';
        carrito = []; // Vaciar el carrito después del pago simulado
        actualizarCarritoUI();
        formularioPago.style.display = 'none';
        formularioDePago.reset();

        // Ocultar el mensaje de éxito después de unos segundos (opcional)
        setTimeout(() => {
            mensajePago.style.display = 'none';
        }, 3000);
    });

    // Inicializar la UI del carrito al cargar la página
    actualizarCarritoUI();
});