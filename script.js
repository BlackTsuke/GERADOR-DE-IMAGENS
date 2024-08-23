const button = document.querySelector('button')
const img = document.querySelector('img')

button.addEventListener('click', gerarFoto)


async function gerarFoto() {
  try {
    img.disabled = true
    button.innerText = 'Loading...'
    img.src = 'loading.svg'
    const imagemAPI = await fetch('https://random.imagecdn.app/300/300')
    img.src = await imagemAPI.url
    img.style.display = 'block'
    button.innerText = 'Gerar Novamente'
    img.disabled = false
  } catch (e) {
    alert('Ocorreu um erro, tente novamente')
  }
}