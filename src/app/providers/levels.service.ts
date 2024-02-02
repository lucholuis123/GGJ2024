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
    ]},{
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
          text: '¡El talento de la semana pasada nos llevo a las estrellas!',
          next: 'continue',
          characterImg: 'caro-1.png',
          backgroundImg: 'set-2.png',
          where: 'right'
        },
        {
          who: 'Caro',
          text: 'Y pues estoy emocionada por el talento que veremos hoy, hoy vine preparada',
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
          text: 'Este concurso realmente se llama el hazmereir',
          next: 'continue',
          characterImg: 'kike-1.png',
          backgroundImg: 'set-2.png',
          where: 'right'
        },
        {
          who: 'Kike',
          text: 'No es que esté desepcionado, simplemente no quisiera estár acá. jajaja, es broma, no le digan a recursos humanos 😉',
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
          text: 'Hoy tenemos en el escenario de El Hazmereir una diseñadora talentosa',
          next: 'continue',
          characterImg: 'fernando-1.png',
          backgroundImg: 'set-1.png',
          where: 'left'
        },
        {
          who: 'Fernando Fernandez',
          text: 'Trabajó en la última película de Estudios Chirri ¡GANANDO UN CUBO DE ORO! 😮',
          next: 'continue',
          characterImg: 'fernando-2.png',
          backgroundImg: 'set-1.png',
          where: 'left'
        },
        {
          who: 'Fernando Fernandez',
          text: '¡Es todo un orgullo colombiano! Veamos',
          next: 'continue',
          characterImg: 'fernando-3.png',
          backgroundImg: 'set-1.png',
          where: 'left'
        },
        {
          who: 'Katherine Hernández',
          text: 'Y cuendo realizo mi maestría, a mi me dicen: "tu estilo de animación se parece micho al de Hideo Yamashita"',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-1.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'En ningún momento imaginé que fuera a pasar',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-2.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Fui responsable de 25.000 fotogramas de la película El Pelao y La Tingua',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-1.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Y despues de eso la mano te queda así.... ',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-1.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Animar realmente es muy sencillo: dibujas un circulo, así (o) y luego lo animás así (o...,.o..,..o.,...o)',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-2.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Lo que más me gusta de trabajar en Vidrioglass es que puedo potenciar mi talento',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-1.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Y de ninguna forma lo que les estoy diciendo es mentira, ni los papeles que envié falsos, ni el articulo de El Desinformante tendencioso',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-2.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Y no estoy promocionando mi curso de COP$7.500.000 en la Camilo Bosqueda',
          next: 'continue',
          backgroundImg: 'set-katherine.png',
          characterImg: 'katherine-2.png',
          where: 'right',
        },
        {
          who: 'Fernando Fernandez',
          text: 'Un pequeño saludo a nuestros patrocinadores: Vidrioglass, Medios Digitales El Desinformante y la Universidad Camilo Bosqueda',
          next: 'continue',
          characterImg: 'fernando-3.png',
          backgroundImg: 'set-1.png',
          where: 'left'
        },
        {
          who: 'Fernando Fernandez',
          text: 'Ahora sí, una calurosa bienvenida a la diseñadora más talentosa de Colombia: KATHERINE HERNÁNDEZ',
          next: 'continue',
          characterImg: 'fernando-2.png',
          backgroundImg: 'set-1.png',
          where: 'left'
        },
        {
          who: 'Katherine Hernández',
          text: 'Voy a mostrarles unos dibijos que hice, este es un tatuaje que me pidió una amiga: hice algo así como rapidíto',
          next: 'continue',
          backgroundImg: 'set-1.png',
          characterImg: 'katherine-1.png',
          where: 'right',
        },
        {
          who: 'Katherine Hernández',
          text: 'Y hoy voy a dibujar frente a ustedes 60 fotogramas por segundo, pero eso sí, no me vayan a ver dibujando porque pierdo la inspiración',
          next: 'continue',
          backgroundImg: 'set-1.png',
          characterImg: 'katherine-2.png',
          where: 'right',
        },
        {
          who: 'Fernando Fernandez',
          text: 'Katherine, por favor, el escenario es tuyo. VAMOS A JUGAR ESTO QUE SE LLAMA....',
          next: 'game',
          characterImg: 'fernando-1.png',
          backgroundImg: 'set-1.png',
          where: 'left'
        },
      ]}]
  allChaptersDescriptions: any = [{
    url: 'chapters/1',
    imgUrl: 'chapter-1-thumb.png',
    title: 'La Medium',
    description: 'Dioselina es una medium que asegura predecir el futuro gracias a extraterrestres del planeta Xenon. Ella habla lengua extraterrestre ¿Será capaz de predecir eventos frente a los jueces?'
  },
  {
    url: 'chapters/2',
    imgUrl: 'chapter-2-thumb.png',
    title: 'Excelencia Cinematográfica',
    description: 'Katherine es una ilustre diseñadora colombiana. Su talento la llevó a trabajar en la más reciente película de Estudios Chirri donde dibujó a mano más de 25.000 fotogramas.'
  },
  {
    url: 'chapters/3',
    imgUrl: 'chapter-1-thumb.png',
    title: '¡Es un Papucho!',
    description: '¡Tal vez te han seducido los encantos de Javier sin haberte dado cuenta! Este abogado tiene el talento de derretir a incautos con su talento para picar el ojo 😉.'
  },
  {
    url: 'chapters/4',
    imgUrl: 'chapter-1-thumb.png',
    title: 'Una Noche Mágica',
    description: 'Ahora me ves ¡Ahora no me ves! La magia se toma el escenario de EL Hazmereir. Disfruta de este talento tan universal como como el crimen.'
  },
  {
    url: 'chapters/5',
    imgUrl: 'chapter-1-thumb.png',
    title: 'Bueno Para Nada',
    description: 'Hay quienes dicen que todos tenemos un talento para algo, pero ¿No es acaso el mayor de los talentos no tener talento alguno? Andrés intentará convencer a los jueces que su talento es no tener talento.'
  },
  {
    url: 'chapters/6',
    imgUrl: 'chapter-1-thumb.png',
    title: 'Canción Para el Alma',
    description: 'Belén, Concepción, Rosario, Misericordia, Asunción y Dolores conforman el grupo Flos Chiquinquiré. Pop para el espíritu, el alma y el ministerio.'
  },
  {
    url: 'chapters/7',
    imgUrl: 'chapter-1-thumb.png',
    title: 'Pasteles y felicidad',
    description: 'Luis es un pastelero que honea pasteles que te harán reir. El escenario se transforma, las luces se intensifican. ¡Un giro final que te dejará sin aliento! (de tanto reir, por supuesto).'
  },]

  charactersByLevel = [
    [{
      name: 'Caro',
      type: 'red',
      bgColor: '#C8102E',
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
              indicator: 'Ganas'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
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
              indicator: 'Defensa'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
          }]
        },
        {
          title: 'Animar a compañeros',
          description: 'Animas a tus compañeros, elevando su energía',
          effectTo: 'aliado',
          effects: [
            {
              to: 2,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
          }]
        }
      ]
    },
    {
      name: 'Kike',
      type: 'yellow',
      bgColor: '#FFCD00',
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
              indicator: 'Ganas'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
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
              indicator: 'Ganas'
            }
          ],
          cost: [{
            to: -3,
            indicator: 'Energía'
          }]
        },
      ]
    },
    {
      name: 'Chris',
      type: 'blue',
      bgColor: '#003087',
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
          effectTo: 'aliado',
          effects: [
            {
              to: 2,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: 1,
            indicator: 'Ganas'
          }]
        },
        {
          title: 'Dar recomendaciones',
          description: 'Da recomendaciones a tus compañeros',
          strong: ['yellow'],
          noEffect: ['red'],
          superStrong: ['blue'],
          effectTo: 'aliado',
          effects: [
            {
              to: 1,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
          }]
        },
      ]
    },
    {
      name: 'Dioselina',
      type: 'blue',
      bgColor: '#003087',
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
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Ganas'
          }]
        },
      ]
    }
    ],
    [{
      name: 'Caro',
      type: 'red',
      bgColor: '#C8102E',
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
              indicator: 'Ganas'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
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
              indicator: 'Defensa'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
          }]
        },
        {
          title: 'Animar a compañeros',
          description: 'Animas a tus compañeros, elevando su energía',
          effectTo: 'aliado',
          effects: [
            {
              to: 2,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
          }]
        }
      ]
    },
    {
      name: 'Kike',
      type: 'yellow',
      bgColor: '#FFCD00',
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
              indicator: 'Ganas'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
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
              indicator: 'Ganas'
            }
          ],
          cost: [{
            to: -3,
            indicator: 'Energía'
          }]
        },
      ]
    },
    {
      name: 'Chris',
      type: 'blue',
      bgColor: '#003087',
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
          effectTo: 'aliado',
          effects: [
            {
              to: 2,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: 1,
            indicator: 'Ganas'
          }]
        },
        {
          title: 'Dar recomendaciones',
          description: 'Da recomendaciones a tus compañeros',
          strong: ['yellow'],
          noEffect: ['red'],
          superStrong: ['blue'],
          effectTo: 'aliado',
          effects: [
            {
              to: 1,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: -1,
            indicator: 'Energía'
          }]
        },
      ]
    },
    {
      name: 'Katherine',
      type: 'red',
      bgColor: '#C8102E',
      characterImg: 'katherine-3.png',
      backgroundImg: 'set-3.png',
      group: 'participante',
      ganas: 40,
      defense: 4,
      attacks: [
        {
          title: 'Dibujar 60 fotogramas en un segundo',
          description: '¡Es impresionante! Si bien no hay evidencia de que esté dibujando 60 fotogramas, tampoco hay duda',
          strong: ['red'],
          weak: ['blue', , 'yellow'],
          efectTo: 'aliado',
          effects: [
            {
              to: -2,
              indicator: 'Energía'
            }
          ],
          cost: [{
            to: -2,
            indicator: 'Ganas'
          }]
        },
      ]
    }
    ],
  ]

  getLevelInfo(id: number) {
    return this.levels[id]
  }

  getCharactersByLevel(id: number) {
    return this.charactersByLevel[id]
  }

  getLevelDescriptions(){
    return this.allChaptersDescriptions;
  }
}
