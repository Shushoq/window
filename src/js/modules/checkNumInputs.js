const checkNumInputs = (select) => {
  const numImputs = document.querySelectorAll(select)

  numImputs.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '')
    })
  })

}

export default checkNumInputs