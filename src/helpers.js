export const checkBudget = (budget, remaining) => {
  let cssClass

  if ((budget / 4) > remaining) {
    cssClass = 'alert alert-danger'
  } else if ((budget / 2) > remaining) {
    cssClass = 'alert alert-warning'
  } else {
    cssClass = 'alert alert-success'
  }

  return cssClass
}
