(()=> {
    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Heroe: Volcan negro`;

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No esta presente');
})()