(() => {
    // poner ? significa que es opcional el parametro
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        } else {
            return `${firstName} ${lastName || '----'}`;
        }
    }

    const name = fullName('Tony','Start', true);

    console.log({name});
})()