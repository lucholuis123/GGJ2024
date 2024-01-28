import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  faGear = faGear
  faPlay = faPlay
  latestChapter = 1
  allChaptersDescriptions: any = [{
    url: 'chapters/1',
    imgUrl: 'chapter-1-thumb.png',
    title: 'La Medium',
    description: 'Dioselina es una medium que asegura predecir el futuro gracias a extraterrestres del planeta Xenon. Ella habla lengua extraterrestre ¿Será capaz de predecir eventos frente a los jueces?'
  },
  {
    url: 'chapters/2',
    imgUrl: 'chapter-1-thumb.png',
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

  allChaptersList: any = [
    {
      canPlay: true,
    },
    {
      canPlay: false,
    },
    {
      canPlay: false,
    },
    {
      canPlay: false,
    },
    {
      canPlay: false,
    },
    {
      canPlay: false,
    },
    {
      canPlay: false,
    },
  ]
  constructor(private router: Router) {

  }

  gotoChapter(route: string, canPlay: boolean){
    if(canPlay){
      this.router.navigateByUrl(route)
    }
  }

  ngOnInit() {
    let chapterList = localStorage.getItem('chapterList')
    let latestChapter = localStorage.getItem('latestChapter')
    if (chapterList) {
      this.allChaptersList = JSON.parse(chapterList)
    }
    if (latestChapter) {
      this.latestChapter = Number(latestChapter)
    }
  }
}
