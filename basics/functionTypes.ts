function add(n1: number, n2: number): string {
  return String(n1 + n2);
}

function printResult(num: string): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (res: string) => void): void {
  const result: string = String(n1 + n2);
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => string;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, printResult);
