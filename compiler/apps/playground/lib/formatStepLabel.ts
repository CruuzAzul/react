export const formatStepLabel = (label: string) => {
  return label
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Ajoute un espace avant chaque majuscule
    .replace(/^./, (label) => label.toUpperCase()) // Met en majuscule la première lettre
    .trim(); // Supprime les espaces en trop au début et à la fin
}
