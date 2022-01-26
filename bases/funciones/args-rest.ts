(() => {
    const fullName = (firstName: string, ...restArgs: string[]): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const name = fullName('Clark', 'Joseph', 'Kent');

    console.log({name})
})()