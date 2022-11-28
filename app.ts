const n1E = document.getElementById('n1') as HTMLInputElement // this is the typecasting
const n2E = document.getElementById('n2') as HTMLInputElement
const btn = document.querySelector('button')! // typescript automatically knows that this is a button because we 
// used the query selector here.

const numRes: number[] = []
const txtRes: string[] = []

type NumOrString = number | string
type Result = {val: number; timestamp: Date}

interface ResultObj {
  val: number;
  timestamp: Date
}


const add = (n1:NumOrString, n2:NumOrString) => {
  if(typeof n1 === 'number' && typeof n2 === 'number')
    return n1 + n2
  else if(typeof n1 === 'string' && typeof n2 === 'string')
    return n1 + n2
  return +n1 + +n2
}

const printResult = (resObj: ResultObj) => {
  console.log(resObj.val)
}

if(btn) {
  btn.addEventListener('click', () => {
    const num1 = n1E.value
    const num2 = n2E.value
    const result = add(+num1, +num2)
    numRes.push(result as number)
    const stringResult = add('1', '2')
    txtRes.push(stringResult as string)
    printResult({val: result as number, timestamp: new Date()})
    console.log(numRes, txtRes)
  })
}

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('It worked')
  }, 1000)
})
myPromise.then(res => {
  console.log(res.split('w'))
})