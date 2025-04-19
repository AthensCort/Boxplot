import { BoxplotnumberGenerator } from "../db/random";

export function calculateBoxplotStats() {
const numbers = BoxplotnumberGenerator(100);
    //se tiene que poner corchetes por que es un array
  const sorted = [...numbers].sort((a, b) => a - b);
  //los 3 puntitosson un spread y esta exparsidos
  const min = sorted[0];
  const max = sorted[sorted.length - 1];

  const median = (arr:number[]) => {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 === 0
      ? (arr[mid - 1] + arr[mid]) / 2
      : arr[mid];
  };

  const q1 = median(sorted.slice(0, Math.floor(sorted.length / 2)));
  const q2 = median(sorted);
  const q3 = median(sorted.slice(Math.ceil(sorted.length / 2)));

  return { min, q1, q2, q3, max };
}
