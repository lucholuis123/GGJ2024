import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor() { }

  levels = [{
    dialogs: [
      {
        who: 'Fernando Fernandez',
        text: 'Bienvenidos a El Hazmereir ¡El concurso de talentos de la televisión colombiana!',
        next: 'continue',
        characterImg: 'fernando-2.png',
        backgroundImg: 'set-1.png',
        where: 'left',
        sound: ''
      },
      {
        who: 'Fernando Fernandez',
        text: 'Presentando a nuestros jueces',
        next: 'continue',
        characterImg: 'fernando-1.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Fernando Fernandez',
        text: '¡Caro!',
        next: 'continue',
        characterImg: 'fernando-3.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Caro',
        text: 'Muy feliz de estar aquí en esta nueva temporada de El Hazmereir, de reencontrarme con mis amigos Kike y Chris.',
        next: 'continue',
        characterImg: 'caro-1.png',
        backgroundImg: 'set-2.png',
        where: 'right'
      },
      {
        who: 'Caro',
        text: 'Y pues atenta, para ver los talentos que nos encontraremos esta temporada, y pues especificamente los talentos de este capítulo',
        next: 'continue',
        characterImg: 'caro-2.png',
        backgroundImg: 'set-2.png',
        where: 'right'
      },
      {
        who: 'Fernando Fernandez',
        text: '¡Kike!',
        next: 'continue',
        characterImg: 'fernando-3.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Kike',
        text: 'Sinceramente, debí haber actualizado mi perfil de WorkedIn....',
        next: 'continue',
        characterImg: 'kike-1.png',
        backgroundImg: 'set-2.png',
        where: 'right'
      },
      {
        who: 'Kike',
        text: '¡Es broma!, jajajaja, ya lo actualicé 😉',
        next: 'continue',
        characterImg: 'kike-2.png',
        backgroundImg: 'set-2.png',
        where: 'right'
      },
      {
        who: 'Fernando Fernandez',
        text: 'Y como podría olvidarme de ¡Chris!',
        next: 'continue',
        characterImg: 'fernando-2.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Chris',
        text: 'Holi...',
        next: 'continue',
        characterImg: 'chris-1.png',
        backgroundImg: 'set-2.png',
        where: 'right',
      },
      {
        who: 'Fernando Fernandez',
        text: 'Y quien les habla, su presentador ¡Fernando Fernandez!',
        next: 'continue',
        characterImg: 'fernando-2.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Fernando Fernandez',
        text: 'Hoy tenemos en el escenario de El Hazmereir una mujer que asegura predecir el futuro',
        next: 'continue',
        characterImg: 'fernando-1.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Fernando Fernandez',
        text: 'No solo eso, sino que además lo hace ¡POQUE EXTRATERRESTRES SE COMUNICAN CON ELLA!',
        next: 'continue',
        characterImg: 'fernando-2.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Fernando Fernandez',
        text: 'Veamos',
        next: 'continue',
        characterImg: 'fernando-3.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Dioselina',
        text: 'Comunicación solar, espectacular, futuro astral... siento... siento las energias cósmicas habláblandome',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-1.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: 'Mañwa ñawa ñaña ñawna mawa namña ñaña [Lenguaje Extraterrestre, Incomprensible]',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-2.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: 'Celestial, energia cósmica de Xenon, me hablan...',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-1.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: '...Predicen que... ¡¡MAÑANA LLOVERÁ O HARÁ SOL!!...',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-1.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: 'Mañwa ñawa ñaña ñawna mawa namña ñaña [Lenguaje Extraterrestre, Incomprensible]',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-2.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: 'Han dicho los seres intergalácticos, dimensión astral, espectacular, seres de Xenon, seres de amor astral... ¡Han hablado! ¡Los siento en cada celula de mi! ¡Los siento! ¡Los siento!',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-1.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: 'Mañwa ñawa ñaña ñawna mawa namña ñaña [Lenguaje Extraterrestre, Incomprensible]',
        next: 'continue',
        backgroundImg: 'set-dioselina.png',
        characterImg: 'dioselina-2.png',
        where: 'right',
      },
      {
        who: 'Fernando Fernandez',
        text: 'Un fuerte aplauso de bienvenida para ¡DIOSELINA!',
        next: 'continue',
        characterImg: 'fernando-1.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
      {
        who: 'Dioselina',
        text: 'Saludo espectacular, de energía interespacial, que la sabiduria de Xenon te lleve al amor eterno y astral',
        next: 'continue',
        backgroundImg: 'set-1.png',
        characterImg: 'dioselina-1.png',
        where: 'right',
      },
      {
        who: 'Dioselina',
        text: 'Mañwa ñawa ñaña ñawna mawa namña ñaña [Lenguaje Extraterrestre, Incomprensible]',
        next: 'continue',
        backgroundImg: 'set-1.png',
        characterImg: 'dioselina-2.png',
        where: 'right',
      },
      {
        who: 'Fernando Fernandez',
        text: 'Dioselina, por favor, el escenario es tuyo. VAMOS A JUGAR ESTO QUE SE LLAMA....',
        next: 'game',
        characterImg: 'fernando-1.png',
        backgroundImg: 'set-1.png',
        where: 'left'
      },
    ]
  }]

  charactersByLevel = [
    [{
      name: 'Caro',
      type: 'red',
      characterImg: 'caro-1.png',
      backgroundImg: 'set-2.png',
      group: 'aliado',
      energy: 10,
      defense: 5,
      attacks: [
        {
          title: 'Usar Sugar Coding',
          description: 'Usa palabras dulces para debilitar la voluntad del participante',
          superStrong: ['blue'],
          weak: ['yellow'],
          noEffect: ['red'],
          effects: [
            {
              to: -1,
              indicator: 'ganas'
            }
          ],
          cost: [{
            to: -1,
            idicator: 'energy'
          }]
        },
        {
          title: 'Aplausos falsos',
          description: 'El participante se siente alagado',
          strong: ['blue'],
          weak: ['yellow'],
          noEffect: ['red'],
          effects: [
            {
              to: -1,
              indicator: 'defense'
            }
          ],
          cost: [{
            to: -1,
            idicator: 'energy'
          }]
        },
        {
          title: 'Animar a compañeros',
          description: 'Animas a tus compañeros, elevando su energía',
          efectTo: 'aliado',
          effects: [
            {
              to: 2,
              indicator: 'energy'
            }
          ],
          cost: [{
            to: -1,
            idicator: 'energy'
          }]
        }
      ]
    },
    {
      name: 'Kike',
      type: 'yellow',
      characterImg: 'kike-1.png',
      backgroundImg: 'set-2.png',
      group: 'aliado',
      energy: 9,
      defense: 4,
      attacks: [
        {
          title: 'Critica Mordaz',
          description: 'Una crítica "constructiva"',
          strong: ['blue', 'red'],
          weak: ['yellow'],
          effects: [
            {
              to: -1,
              indicator: 'ganas'
            }
          ],
          cost: [{
            to: -1,
            idicator: 'energy'
          }]
        },
        {
          title: 'Amenazar con abandonar el show',
          description: '¡Me voy! usar tacticas de manipulación emocional',
          strong: ['yellow'],
          noEffect: ['red'],
          superStrong: ['blue'],
          effects: [
            {
              to: -2,
              indicator: 'defense'
            }
          ],
          cost: [{
            to: -3,
            idicator: 'energy'
          }]
        },
      ]
    },
    {
      name: 'Chris',
      type: 'blue',
      characterImg: 'chris-1.png',
      backgroundImg: 'set-2.png',
      group: 'aliado',
      energy: 11,
      defense: 2,
      attacks: [
        {
          title: 'Llamar a la calma',
          description: '¡Vamos a calmarnos!',
          strong: ['blue', 'yellow'],
          weak: ['red'],
          efectTo: 'aliado',
          effects: [
            {
              to: 1,
              indicator: 'ganas'
            }
          ],
          cost: [{
            to: 1,
            idicator: 'energy'
          }]
        },
        {
          title: 'Dar recomendaciones',
          description: 'tus compañeros ',
          strong: ['yellow'],
          noEffect: ['red'],
          superStrong: ['blue'],
          effects: [
            {
              to: -1,
              indicator: 'energy'
            }
          ],
          cost: [{
            to: 1,
            idicator: 'defense'
          }]
        },
      ]
    },
    {
      name: 'Dioselina',
      type: 'blue',
      characterImg: 'dioselina-3.png',
      backgroundImg: 'set-3.png',
      group: 'participante',
      ganas: 20,
      defense: 4,
      attacks: [
        {
          title: 'hablar lenguaje extraterreste',
          description: 'Mañwa ñawa ñaña ñawna mawa namña ñaña [Lenguaje Extraterrestre, Incomprensible]',
          strong: ['red', 'yellow'],
          weak: ['blue'],
          efectTo: 'aliado',
          effects: [
            {
              to: -1,
              indicator: 'ganas'
            }
          ],
          cost: [{
            to: -1,
            idicator: 'energy'
          }]
        },
      ]
    }
    ]
  ]

  getLevelInfo(id: number) {
    return this.levels[id]
  }

  getCharactersByLevel(id: number) {
    return this.charactersByLevel[id]
  }
}
