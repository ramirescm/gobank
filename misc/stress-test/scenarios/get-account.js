import http from 'k6/http';
import { Trend, Rate, Counter } from 'k6/metrics';
import { sleep, check, fail } from 'k6';

export let GetAccountDuration = new Trend('get_account_duration');
export let GetAccountFailRate = new Trend('get_account_failt_rate');
export let GetAccountSuccessRate = new Trend('get_account_success_rate');
export let GetAccountReqs = new Trend('get_account_succes_rate');


export default function () {
    let response = http.get('http://localhost:3000/account?id=1')

    GetAccountDuration.add(response.timings.duration)
    GetAccountReqs.add(1);
    GetAccountFailRate.add(response.status == 0 || response.status > 399);
    GetAccountSuccessRate.add(response.status < 399);

    let durationMsg = 'Max duration by request ${5000/1000}s';
    if (!check(response, {
        'Max duration' : (r) => r.timings.duration < 5000,
    })) {
        fail(durationMsg)
    }

    sleep(1);
}