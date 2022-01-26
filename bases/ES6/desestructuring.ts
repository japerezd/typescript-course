(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const {poder, vision} = avengers;
    // console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ironman, ...resto}: Avengers) => {
        console.log(ironman, resto)
    }

    // printAvenger(avengers);

    const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];

    const [capitan, ironman,] = avengersArr;
    console.log({ironman, capitan})
})()