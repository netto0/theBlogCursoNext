async function teste() {
    console.log("Início do código")
    await new Promise(resolve => setTimeout(resolve, 5000))
    console.log("5 segundos se passaram...")
    console.log("Fim do código")
}

teste()