// Un decorador es basicamente una funcion (declaracion) que se ejecuta en la definicion de la clase, metodo, propiedades y parametros, en tiempo de compilacion.


function printToConsole(constructor: Function) {
    console.log(constructor)
}

// Factory constructor. Deben retornar una funcion
const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) {
        return printToConsole;
    } else {
        return () => {}
    }
}


const bloquearPrototipo = function(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

// Factory decorator 
function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = (id: number) => {

            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                // el id que espera el metodo savePokemonToDB
                return originalMethod(id);
            }
        }
    }
}


function readonly(isWritable: boolean = true): Function {
    return function(target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this)
                return 'Jorge'
            },

            set(this, val) {
                // console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false,
                })
            }
        }

        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional(true)
// @printToConsole
export class Pokemon {
    @readonly()
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}
    
    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon saved in BD ${id}`);
    }
}