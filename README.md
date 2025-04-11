# Sonidos del Alma - Tienda de Instrumentos (Web App)

Proyecto de solemne para la asignatura **Aplicaciones y Tecnologías Web**, primer semestre 2025.

Este sitio simula una tienda virtual de instrumentos musicales, permitiendo:
- Visualización de productos categorizados
- Simulación de carrito de compras
- Simulación de formulario de pago

> **Nota:** Este proyecto no utiliza base de datos ni backend. Toda la lógica es frontend.

---

## Ver sitio en línea

Puedes ver la versión desplegada aquí:  
🔗 [https://ricardo-chirinos.github.io/Sonidos-del-alma/](https://ricardo-chirinos.github.io/Sonidos-del-alma/)

---

## Despliegue con Docker

Este proyecto incluye un `Dockerfile` que instala un servidor web y sirve los archivos HTML como sitio estático dentro de un contenedor.

---

### Construir la imagen

```bash
git clone https://github.com/Ricardo-chirinos/Sonidos-del-alma.git
cd Sonidos-del-alma

docker build -t sonidos-del-alma .
