function gerarTabuada() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<h2>Tabuada do ${numero}</h2>`; 
  for (let i = 1; i <= 10; i++) {
    resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`;
  }
}