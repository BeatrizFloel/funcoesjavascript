
function mensagemBoasVindas(nome, cargo) {
    return `Seja bem-vindo(a) ${cargo} ${nome}`
  }
  let nome = prompt("Digite o nome do funcionário:")
  let cargo = prompt("Digite o cargo do funcionário:")
  alert(mensagemBoasVindas(nome, cargo))
  console.log(mensagemBoasVindas(nome, cargo))