export function getVotos() {
  return JSON.parse(localStorage.getItem("votos") || "[]")
}

export function addVoto(voto) {
  const votos = getVotos()
  votos.push(voto)
  localStorage.setItem("votos", JSON.stringify(votos))
}

export function clearVotos() {
  localStorage.removeItem("votos")
}
