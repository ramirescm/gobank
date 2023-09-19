package main

import (
	"math/rand"
	"time"
)

type TransferRequest struct {
	ToAccount  int `json:"toAccount"`
	ForAccount int `json:"forAccount"`
	Amount     int `json:"amount"`
}

type CreateAccountRequest struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

type Account struct {
	ID        int       `json:"id"`
	FirstName string    `json:"firstName"`
	LastName  string    `json:"lastName"`
	Number    int64     `json:"number"`
	Balance   int64     `json:"balance"`
	CreatedAt time.Time `json:"createdAt"`
}

func NewAccount(firstName, lastName string) *Account {
	return &Account{
		// ID:        int(rand.Intn(100000)),
		FirstName: firstName,
		LastName:  lastName,
		Number:    int64(rand.Intn(20000)),
		Balance:   int64(rand.Intn(20000)),
		CreatedAt: time.Now().UTC(),
	}
}
