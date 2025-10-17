# Imagen base con Java 17 (Temurin es estable y compatible con Spring Boot 3.x)
FROM eclipse-temurin:17-jdk

# Crear directorio de trabajo
WORKDIR /app

# Copiar todo el código fuente al contenedor
COPY . .

# Dar permisos de ejecución al wrapper de Maven (por si falla en Linux)
RUN chmod +x mvnw

# Construir el proyecto sin ejecutar los tests
RUN ./mvnw clean package -DskipTests

# Exponer el puerto de la app
EXPOSE 8080

# Ejecutar el JAR generado
CMD ["java", "-jar", "target/*.jar"]
