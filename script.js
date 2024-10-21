 if (opcao === "1") {
        const nomes = prompt("Digite os nomes dos novos pacientes, separados por vírgula:")
        if (nomes) {
            const novosPacientes = nomes.split(",")
            fila = fila.concat(novosPacientes)
            alert("Pacientes adicionados à fila.")
        }
    } else if (opcao === "2") {
        if (fila[0] !== undefined) {
            const paciente = fila[0]
            fila.splice(0, 1)
            alert(`Consultando paciente: ${paciente}`)
        } else {
            alert("Não há pacientes na fila.")
        }
    }
} while (opcao !== "3")

alert("Saindo...")
