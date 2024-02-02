import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGear, faPlay } from '@fortawesome/free-solid-svg-icons';
import { LevelsService } from '../providers/levels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  faGear = faGear
  faPlay = faPlay
  latestChapter = 1
  allChaptersDescriptions: any

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
  constructor(private router: Router, private levelsService: LevelsService) {

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
      console.log(this.allChaptersList)
    }else{
      localStorage.setItem('chapterList', JSON.stringify(this.allChaptersList))
    }
    if (latestChapter) {
      this.latestChapter = Number(latestChapter)
    }
    this.allChaptersDescriptions = this.levelsService.getLevelDescriptions()
  }
}
