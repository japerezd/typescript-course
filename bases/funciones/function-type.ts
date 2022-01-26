(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;

    let myFunction: () => string;

    // myFunction = 10;

    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));

    // myFunction = greet;
    // console.log(myFunction('Jorge'));

    myFunction = saveTheWorld;
    console.log(myFunction());
})()