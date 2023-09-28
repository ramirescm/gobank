#!/bin/bash

@echo "Remove Docker containers"
docker-compose down --volumes

@echo "Remove Docker image by name"
docker image rm misc-api01
