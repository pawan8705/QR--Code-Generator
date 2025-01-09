let qrtext = document.getElementById("Qr-text");
let sizes = document.getElementById("sizes");
let generatbtn = document.getElementById("generatebtn");
let downloadbtn = document.getElementById("downloadbtn");
let qrcontainer = document.getElementById("qr-body");


let size = sizes.value;
generatbtn.addEventListener("click", (e) => {
  e.preventDefault();
  isEmptyInput();
});

sizes.addEventListener('change', (e) => {
  size = e.target.value;
  isEmptyInput();
});

downloadbtn.addEventListener("click", () => {
  let img = document.querySelector('.qr-body img');
  if (img !== null) {
    let imgatrr = img.getAttribute('src');
    downloadbtn.setAttribute('href', imgatrr);
  }
  else {
    downloadbtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);

  }
})

function isEmptyInput() {
  qrtext.value.length > 0 ? generateqrcode() : alert("Enter the text or URL to generate your QR code...");
}

function generateqrcode() {
  qrcontainer.innerHTML = "";
  new QRCode(qrcontainer, {
    text: qrtext.value,
    height: size,
    width: size,
    colorLigth: "#fff",
    colorDark: "#000",
  });
}