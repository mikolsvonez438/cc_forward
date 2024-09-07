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

app.get('/checkccs', async (req, res) => {
    const { bins } = req.query;
    try {
        if (!Array.isArray(bins)) {
            return res.status(400).send('Invalid input. Please provide an array of bins.');
        }

        const requests = bins.map(binValue => axios.get(`https://binlist.io/lookup/${binValue}`));
        const responses = await Promise.all(requests);
        const results = responses.map(response => response.data);

        res.json(results);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server error');
    }
});



app.get('/shortme', async (req, res) => {
    const { url } = req.query;
    const urlRegex = /^(?:http(s)?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]*\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?(?:\/?.*)$/;

    if (!urlRegex.test(url)) {
        return res.status(400).send('Invalid URL');
    }
    try {
        const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        res.json({ shortLink: response.data });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server error');
    }
});

// app.get('/verifyme', async (req, res) => {
//     const { email } = req.query;

//     try {
//         const response = await axios.get(`https://verifymail.io/api/${email}?key=388353020d35419692677341e3046106`);
//         res.json(response.data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Server error');
//     }
// });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
