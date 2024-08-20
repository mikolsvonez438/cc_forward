const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/check', async (req, res) => {
    const { cc } = req.query;
    try {
        const response = await axios.get(`https://xchecker.cc/api.php?cc=${cc}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server error');
    }
});

app.get('/checkcc', async (req, res) => {
    const { binValue } = req.query;
    try {
        const response = await axios.get(`https://binlist.io/lookup/${binValue}`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server error');
    }
});

app.get('/generatecalm', (req, res) => {

    // function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomEmailresult = '';
    let randomUsernamerandomEmailresult = '';
    for (let i = 0; i < 8; i++) {
        randomEmailresult += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for (let i = 0; i < 10; i++) {
        randomUsernamerandomEmailresult += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    // }
    const randomEmail = `${randomEmailresult}@gmail.com`;
    const randomUsername = randomUsernamerandomEmailresult;

    const payload = {
        is_college: false,
        email: randomEmail,
        password: randomEmail,
        name: randomUsername,
        marketing_opt_in: true,
        skip_free_access: true,
        slug: "/novotel"
    };

    const headers = {
        'accept': 'application/json',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
        'cookie': '_pxhd=hwjOjLZd-8hd4Xa8tIBYjqJPtrU4qhuZATrIvKvtYHsrNa2lX5Rxj6WqaGvpp0eqJjzaJoDTr5p-rjzg0Bl0/Q==:w7JRMDoU-0CcQb19BQA1-zQNzLfMcdGAWoR60okjYWwUGwYAl7uSUZ0FhVVi03MwNsmNm4AMrmRsvu-rSgYFVpomxdpBiFLe9GDuE8mXKs8=; _pxhd=hwjOjLZd-8hd4Xa8tIBYjqJPtrU4qhuZATrIvKvtYHsrNa2lX5Rxj6WqaGvpp0eqJjzaJoDTr5p-rjzg0Bl0/Q==:w7JRMDoU-0CcQb19BQA1-zQNzLfMcdGAWoR60okjYWwUGwYAl7uSUZ0FhVVi03MwNsmNm4AMrmRsvu-rSgYFVpomxdpBiFLe9GDuE8mXKs8=; x-device-id=c7da10a3-87cd-4e43-8f67-06961955dbc3; AMP_MKTG_81f8d26289=JTdCJTIycmVmZXJyZXIlMjIlM0ElMjJodHRwcyUzQSUyRiUyRmR1Y2tkdWNrZ28uY29tJTJGJTIyJTJDJTIycmVmZXJyaW5nX2RvbWFpbiUyMiUzQSUyMmR1Y2tkdWNrZ28uY29tJTIyJTdE; _gcl_au=1.1.476985561.1724130239; IR_gbd=calm.com; _fbp=fb.1.1724130239963.37328862744731986; ajs_anonymous_id=b72af8d4-2e32-4a04-a99a-c0046cae8f66; afUserId=13a4886d-38a2-418c-826b-8cc24838fb75-p; pxcts=9cd4a65e-5eb1-11ef-8474-d5b8351b2535; _pxvid=9ab099dd-5eb1-11ef-9e32-38ba7f4d7bf3; AF_SYNC=1724130240845; __stripe_mid=3a3f8ee0-58a7-4041-a21a-53a61647a82a7b3ebb; __stripe_sid=d169711c-fe4d-49b9-a466-f58887fd96c5216281; G_ENABLED_IDPS=google; calm-auth-method=email; ajs_user_id=TJKskAUbXv; CloudFront-Key-Pair-Id=K18PRD65QPGTDX; CloudFront-Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9jb250ZW50LmNhbG0uY29tLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MjQyMTY3ODF9fX1dfQ__; CloudFront-Signature=hUSTA1m4qAvTKT4zAhxUzqDWCwZonSlJshpAILV3JQFf7RKasvPdGqgmNR-tOyyVk9A1yXE6qs-XhzjJNUQqzJfYllz~5JsA1mZYcKiPimzuPCGrzx-Q9e~6vIp74ntyf174TSOC~TEqnPF-P2CxpqdbYWFCkdht6mrvjcS0flQIwqj5ueClZP8MRj~GGjLpdpZSIvXbkzARRyawCVrg8YBwh3POLCXhaFxfAAg4W-so33EJJOYCyN1e4rCeRSrseb32FXUxJeVcFfKQUcMW4Rn6BIVZN~Z4cTjqpWO0rFoqSRWcFW5WORnzJ-lofmzIxoSGHizH53ugCkF--Z1f7Q__; IR_PI=b0339ed7-5eb1-11ef-a432-796d948f5fb4%7C1724130386301; IR_18593=1724130392081%7C0%7C1724130392081%7C%7C; _uetsid=9c79df605eb111efa87459d6ac07f123; _uetvid=9c7a02c05eb111ef877ddb057e70022f; _px3=44720c109d39582d204ff1345d11768348f44ca2ad8639c2c22a5dff8bf50b28:qOI9irBpTgbYRZwzSJVOElX3/G0bnHRSzS5jUCJ04b5E1hD/NMu04mdg+peBHFAhwqFKIKGb1qBd2jUqrfwnKA==:1000:GTqMzHbUYh/CyK/KZ5G8cTg9FxjqXM43CpZ/bk7ycARoE4MVVRczg+lFOjspKEWwjkBkhsYT5GlFSe1hJT1qkVkU8VB16YwEobPw10F3puqux8h3u1raEmX2EzcpnNvU8F7y80ZslbEkoluiBtNe8+0U722/5Knr92dqhE7lkuKUFqYcVDJKs/ghfAXqBXMrAlkQLX/UV4kuSDgFxpJSUVmoz1yw7yeeoviaJjGR6M4=; AMP_81f8d26289=JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjJjN2RhMTBhMy04N2NkLTRlNDMtOGY2Ny0wNjk2MTk1NWRiYzMlMjIlMkMlMjJ1c2VySWQlMjIlM0ElMjJUSktza0FVYlh2JTIyJTJDJTIyc2Vzc2lvbklkJTIyJTNBMTcyNDEzMDIzOTIzOCUyQyUyMm9wdE91dCUyMiUzQWZhbHNlJTJDJTIybGFzdEV2ZW50VGltZSUyMiUzQTE3MjQxMzA0NDk2MTglMkMlMjJsYXN0RXZlbnRJZCUyMiUzQTQ4JTdE; _dd_s=rum=2&id=8fcc6c11-9539-4afa-86b9-17735fabd378&created=1724130239584&expire=1724131360195&logs=1',
        'origin': 'https://www.calm.com',
        'referer': 'https://www.calm.com/novotel',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        'x-client-timezone': 'Asia/Shanghai',
        'x-device-id': 'c7da10a3-87cd-4e43-8f67-06961955dbc3',
        'x-device-platform': 'www',
        'x-device-version': '1.3',
        'x-www-req-from': 'https://www.calm.com/novotel'
    };
   axios.post(`https://www.calm.com/webapi/authproxy/signup`, payload, { headers })
        .then(response => {
            const token = response.data.token;
            const identifiyer = response.data.calm_identifier
            const applyHeaders = {
                'accept': 'application/json, text/plain, */*',
                'content-type': 'application/json',
                'referer': 'https://www.calm.com/novotel',
                'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
                'x-calm-identifier': identifiyer,
                'x-client-timezone': 'Asia/Shanghai',
                'x-device-id': 'a8f1dd79-5eb8-4a59-8463-61914446211d',
                'x-device-platform': 'www',
                'x-device-version': '1.3',
                'x-session-token': token, // Use the token from the response
                'x-www-req-from': 'https://www.calm.com/novotel'
            };

            axios.post(`https://www.calm.com/webapi/authproxy/gift/apply`, {"partner":"Novotel","duration":1000000}, { headers: applyHeaders })
                .then(applyResponse => {
                  if(applyResponse.data){
                        res.send(randomEmail)
                    }else{
                        res.send[{}]
                    }
                })
                .catch(applyError => {
                    console.error(applyError);
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
