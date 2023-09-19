build:
	@go build -o bin/gobank

run: build
	@./bin/gobank

seed:
	@./bin/gobank --seed	

test:
	@go test -v ./...