//DATA BASE DE LOS 100 NUMEROS random

export function BoxplotnumberGenerator(count:number) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      const random = Math.floor(Math.random() * 2001) - 1000;
      numbers.push(random);
    }
    return numbers;
  }
  
//module exports   