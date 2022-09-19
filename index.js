function cadastroAll() {
  let valTec = document.getElementById("tecnologia").value;
  let valObs = document.getElementById("obsMain").value;
  let valAprendizado = document.querySelectorAll('input[name="nivel"]');
  let stAp = false;

  if (valTec == '') {
    alert("Escreva uma tecnologia!");
    return;
  }

  valAprendizado.forEach(function (radio) {
    if (radio.checked) {
      stAp = true;
    }
  });

  if (!stAp) {
    alert('Selecione seu Nível');
    return;
  }

  if (valObs == '') {
    alert('Escreva seu cometário');
    return;
  }

}

function bemVindo() {
  let valPreferencia = document.querySelectorAll('input[name="st_inicio"]');
  let stPref = false;

  valPreferencia.forEach(function (radio) {
    if (radio.checked) {
      stPref = true;
    }
  });

  if (!stPref) {
    alert('Selecione sua Preferência');
    return;
  }

}
