FROM openjdk:11-jdk-slim as build
COPY . /app
WORKDIR /app
RUN ./gradlew build --no-daemon

FROM openjdk:11-jre-slim
COPY --from=build /app/build/libs/react-backend-api-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
