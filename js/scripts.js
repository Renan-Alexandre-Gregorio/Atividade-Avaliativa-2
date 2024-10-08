// REGISTRAR IMAGEM, NOME, CARGO, DEPTO E QR CODE //

function validarDados() {

    let nome = frmRegistro.inNome.value;
    let tel = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let cargo = frmRegistro.inCargo.value;
    let depto = frmRegistro.inDepto.value;
    let img = frmRegistro.inImg.value;

    if (nome == ''){
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo "Nome" não pode estar vazio';
        return false;
    }

    if (tel == ''){
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo "Telefone" não pode estar vazio';
        return false;
    }

    if (mail == ''){
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo "E-mail" não pode estar vazio';
        return false;
    }

    if (cargo == ''){
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo "Cargo do Funcionário" não pode estar vazio';
        return false;
    }

    if (depto == ''){
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo "Departamento do Funcionário" não pode estar vazio';
        return false;
    }

    if (img == ''){
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro: O campo "Escolher Arquivo" não pode estar vazio';
        return false;
    }

    else {
        mensagemerro.style.display = 'none';
    }

    spNome.innerText = nome;
    spCargo.innerText = cargo;
    spDepto.innerText = depto;

   
        const imagemInput = document.getElementById("inImg");
        const file = imagemInput.files[0];
        if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const areaFoto = document.getElementById("area-foto");
        areaFoto.innerHTML = `<img src="${e.target.result}" alt="Foto do Funcionário" width="100">`;
    };
    reader.readAsDataURL(file);
}
}