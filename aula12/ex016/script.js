function RetornarIdadeGenero(anoNascimento, genero) {
    var data = new Date()
    var ano = data.getFullYear()

    var anoNascimentos = anoNascimento;
    var generos = genero;

    var select = document.getElementById('idgenero');
    var value = select.options[select.selectedIndex].value;

    if (anoNascimentos === '' || generos === '') {
        alert('Preencha os campos')
    }else {
        if(anoNascimentos > ano) {
            alert('O ano de nascimento é maior que o ano atual, por favor informar um ano válido!')
        }else{
            var idade = ano - anoNascimentos;
            alert('Sua é idade é: '+ idade +' do sexo: ' + value + '');
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if (idade >= 0 && idade <13){
                img.setAttribute('src', 'menino.jpg')
            }else if (idade < 21){
                img.setAttribute('src', 'homem jovem.jpg')
            }else if (idade < 50){
                img.setAttribute('src', 'homem.jpg')
            }else{
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)        
    }  
}