# Usa nginx como base
FROM nginx:alpine

# Elimina los archivos por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia tu sitio al contenedor
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Mantiene el contenedor corriendo
CMD ["nginx", "-g", "daemon off;"]
