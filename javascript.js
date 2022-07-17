const seleccionarColor = document.querySelector('#seleccionar-color')
const colorEsquema = document.querySelector('#color-esquema')
const mainColors = document.querySelector('#main-colors')
const footerHex = document.querySelector('#footer-hex')
const btn = document.querySelector('#btn')


function generarColores() {
  fetch(`https://www.thecolorapi.com/scheme?hex=${seleccionarColor.value.slice(1)}&mode=${colorEsquema.value}`)
    .then(res => res.json())
    // .then(data => console.log(data.colors[0].hex.value))
    .then(data => {
      let colorsHtml = ''
      let footerHtml = ''
      data.colors.forEach( color => {
        colorsHtml += `
          <div style="background-color: ${color.hex.value};" class="color"></div>
        `
        footerHtml += `
        <p class="color-code">${color.hex.value}</p>
        `
      });
      mainColors.innerHTML = colorsHtml
      footerHex.innerHTML = footerHtml
    })
}

generarColores()

btn.addEventListener('click', generarColores)