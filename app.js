app.get('/teststripe', async (req, res) => {
    const stripe = await loadStripe("pi_3PwGU9F6KbQh44q10EuDUs92_secret_gNSviAhCchmkSgVLmtWInwWOV", "pm_1PwGU7F6KbQh44q1QVkZaVMy", "https://suschegg.com/dashboard?msg=Payment Successful&status=success");
    res.send(stripe);
})
