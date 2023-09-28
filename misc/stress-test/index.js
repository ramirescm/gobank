import { sleep, group } from "k6";
import getAllAcount from "./scenarios/get-all-account.js";
import getAccount from "./scenarios/get-account.js";
import login from "./scenarios/login.js";

export default function () {
    group('GET ALL ACCOUNT - Controller Account', () => {
        getAllAcount();
    }); 

    group('GET ONE ACCOUNT - Controller Account', () => {
        getAccount();
    }); 

    group('LOGIN ACCOUNT - Controller Account', () => {
        login();
    }); 

    sleep(1)
}