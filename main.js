const qr_code = new QRCode(document.querySelector('.qrCode'),{
    text:'https://badportfolio.netlify.app/',
    width: 180,
    height: 180,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel:QRCode.CorrectLevel.H
})