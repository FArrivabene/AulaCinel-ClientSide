<script>
// Declaro as variaveis para serem acessadas globais
let numeros = [];
let tamanhoArray;

function abrirModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function abrirModal2() {
  let modal = document.getElementById("myModal-2");
  modal.style.display = "block";
}

function sairModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function sairModal2() {
  let modal = document.getElementById("myModal-2");
  modal.style.display = "none";
}

function qtdNumero() {
  tamanhoArray = parseInt(document.getElementById("numero-elementos").value);
  //numeros = [];
  sairModal2();
  document.getElementById("numero-elementos").value = "";
}

function adicionarNumero() {
  let numero = parseInt(document.getElementById("numero").value);
  // Valido a entrada
  if (numero === '') {
    alert("Por favor, digite um número.");
    return;
  }
  if (isNaN(numero)) {
    alert("Por favor, digite um valor numérico válido.");
    return;
  }

  numero = parseInt(numero);
  if (numeros.length >= tamanhoArray) {
    alert("Você atingiu o limite de números permitidos.");
    document.getElementById("limiteNum").innerHTML = "Limite máximo atingido!";
    return;
  }
  numeros.push(numero);
  document.getElementById("numero").value = "";

  document.getElementById("contador").innerHTML = "Total de números: " + numeros.length;
}

function ordenarNumeros() {
  if (numeros.length === 0) {
    document.getElementById("resultado").innerHTML = "É necessário inserir no mínimo 2 valores.";
    return;
  }
  numeros.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("resultado").innerHTML = "Números ordenados: " + numeros.join(", ");
}

function limpar() {
  // document.getElementById("resultado").innerHTML = "";
  // document.getElementById("contador").innerHTML = "";
  // document.getElementById("numero").value = "";
  // numeros = [];
  // document.getElementById("resultado").innerHTML = "O Array foi limpo!";
  window.location.reload();
}
</script>