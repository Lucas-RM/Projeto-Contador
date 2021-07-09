function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')

    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar'
        window.alert('[ERRO] Faltam Dados!!!')
        setTimeout(function () {
            res.innerHTML = 'Preparando a contagem...'
        }, 3000);
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        res.innerHTML = 'Contando: <br>'
        res.style.fontSize = 'x-small'
        
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        
        if (i < f) {
            for(let v = i; v <= f; v += p){
                res.innerHTML += `${v}`
                if (v < f) {
                    res.innerHTML += ` \u{1F449} `
                }
            }
            res.innerHTML += ` \u{1F3C1}`
        } else {
            for(let v = i; v >= f; v -= p){
                res.innerHTML += `${v}`
                if (v > f) {
                    res.innerHTML += ` \u{1F449} `
                }
            }
            res.innerHTML += ` \u{1F3C1}`
        }
    }
}