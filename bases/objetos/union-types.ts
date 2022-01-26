(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: string | number | Hero = 'Jorge';

    myCustomVariable = 20;

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    }
})()