import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate, Counter } from 'k6/metrics';

export let GetAccountDuration = new Trend('get_account_duration');
export let GetAccountFailRate = new Trend('get_account_failt_rate');
export let GetAccountSuccessRate = new Trend('get_account_success_rate');
export let GetAccountReqs = new Trend('get_account_succes_rate');

export default function () {
    const response = http.post('http://localhost:3000/login', JSON.stringify({
        number: 10520,
        password: 'asd',
    }), { headers: { 'Content-Type': 'application/json' } });

    GetAccountDuration.add(response.timings.duration)
    GetAccountReqs.add(1);
    GetAccountFailRate.add(response.status == 0 || response.status > 399);
    GetAccountSuccessRate.add(response.status < 399);

    let durationMsg = 'Failed login';
    if (!check(response, {
        'Max duration': (r) => r.timings.duration < 5000,
        'Login sucessful' : (r) => r.status === 200,
    })) {
        fail(durationMsg)
    }

    sleep(1);
}