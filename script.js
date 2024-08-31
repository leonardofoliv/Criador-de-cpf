const cpfCreat = document.getElementById("createCpf");
const cpfCopy = document.getElementById("copyCpf");
const res = document.getElementById("res");

function createNum() {
  let n = Math.floor(Math.random() * 999999999) + 1;
  let nStr = n.toString().padStart(9, "0");
  let dv1 = calcularDV(nStr, 10);
  let dv2 = calcularDV(nStr + dv1, 11);

  res.innerText = formatarCpf(nStr + dv1 + dv2);
}

function calcularDV(numero, peso) {
  let total = 0;
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--;
  }
  let resto = total % 11;
  return resto < 2 ? 0 : 11 - resto;
}

function formatarCpf(cpf) {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(regex, "$1.$2.$3-$4");
}

function copyNum() {
  const cpf = res.innerText;
  navigator.clipboard.writeText(cpf).then(
    () => {
      alert(`CPF ${cpf} copiado para a área de transferência.`);
    },
    (err) => {
      console.log("Erro ao copiar CPF.");
    }
  );
}
