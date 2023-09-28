CREATE DATABASE gobank;

CREATE TABLE account (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    number SERIAL,
    balance DECIMAL(14,2),
    created_at TIMESTAMP
);
