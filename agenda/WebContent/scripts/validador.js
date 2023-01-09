/**
 * Validação de formulário
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Preencha o Nome')
		frmContato.nome.focus()
		return false
	} else if (fone == "") {
		alert('Preencha o Telefone')
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}

}