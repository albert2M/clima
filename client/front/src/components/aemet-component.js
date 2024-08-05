class Aemet extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
      <style>
        
        
      </style>
      <button class="send-button">Enviar</button>
      `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      let response = await fetch('https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnYW1tYWxiZXJ0QGdtYWlsLmNvbSIsImp0aSI6ImJlNDIwZThjLTU4MjktNGE4Ni1hMzdlLTA3MWYzZGJiMmJjOSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzIyODQyNjI2LCJ1c2VySWQiOiJiZTQyMGU4Yy01ODI5LTRhODYtYTM3ZS0wNzFmM2RiYjJiYzkiLCJyb2xlIjoiIn0.v1Yzyc-SiWyIPJLezgxVEAqTJRfGmfQ2O6n10fR2tC8')
      let data = await response.json()

      const url = data.datos
      response = await fetch(url)
      data = await response.json()

      data = data.map(element => {
        const newElement = {}

        Object.entries(element).forEach(([key, value]) => {
          newElement[key] = value.replace(',', '.')
        })

        return newElement
      })

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/weather`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
    })
  }
}

customElements.define('aemet-component', Aemet)
