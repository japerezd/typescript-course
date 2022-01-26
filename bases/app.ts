// const msg: string = 'Hello world';

// const hero = {
//     name: 'Ironman',
//     age: 45,
// }

// hero.age = 50

// console.log(hero.age + 1);
// tsc nombrearchivo para transpilar archivo
// tsc -w para transpilar automaticamente

// Funcion Anonima Auto Invocada (IIFE)
// (() => {
//     const a: number = 10;
//     console.log(a)
// })()

(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    // enum {acuaman = 0}
    enum Heroes {
        fuerzaFlash = 5,
        fuerzaSuperman = 100,
        fuerzaBatman = 1,
        fuerzaAcuaman = 0
    }
    const fuerzaFlash: Heroes = Heroes.fuerzaFlash;
    const fuerzaSuperman: Heroes = Heroes.fuerzaSuperman;
    const fuerzaBatman: Heroes = Heroes.fuerzaBatman;
    const fuerzaAcuaman: Heroes = Heroes.fuerzaAcuaman;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (<string>poder).length;
    console.log( largoDelPoder );
  
  
  })()
  
  
