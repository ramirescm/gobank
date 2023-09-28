# Use an official Go runtime as a parent image
FROM golang:1.21 AS build

# Set the working directory inside the container
WORKDIR /app

COPY ./** .

RUN go mod download

RUN go build -o /gobank

EXPOSE 8080

ENTRYPOiNT ["/gobank"]