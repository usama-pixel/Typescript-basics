const n1E = document.getElementById('n1') as HTMLInputElement // this is the typecasting
const n2E = document.getElementById('n2') as HTMLInputElement
const btn = document.querySelector('button') // typescript automatically knows that this is a button because we 
// used the query selector here.

const add = (n1:number, n2:number) => n1 + n2

btn?.addEventListener('click', () => {
  const num1 = n1E.value
  const num2 = n2E.value
  const result = add(+num1, +num2)
})
