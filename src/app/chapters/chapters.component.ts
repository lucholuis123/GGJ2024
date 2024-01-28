import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelsService } from '../providers/levels.service';
import { faChevronDown, faCircle, faCirclePlay, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.less']
})
export class ChaptersComponent implements OnInit {
  currentChapterId = 0
  levelInfo: any = {}
  currentCursor = 0
  currentDialog: any = {}
  isDisplayingDialog = false
  currentDialogString = ''
  faChevronDown = faChevronDown
  shouldShowNextButon = false;
  showGameStart = true;
  gameBackground = 'set-3.png'
  loaded = 0;
  showCharacter = false;
  faCirclePlay = faCirclePlay
  shouldShowPlayButton = true;
  audioPlaying: any;
  isDisplayingTitle = false;
  charactersList: any = [];
  currentCharPointer = 0;
  isPlaying = false;

  images = ['caro-1.png', 'caro-2.png', 'chapter-1.png', 'chris-1.png', 'dioselina-1.png', 'dioselina-1.png', 'fernando-1.png', 'fernando-2.png', 'fernando-3.png', 'kike-1.png', 'kike-2.png', 'set-1.png', 'set-2.png', 'set-3.png', 'set-3.png']

  constructor(private activeRoute: ActivatedRoute, private router: Router, private levelsService: LevelsService) { }

  startDialog() {
    let currentCharIndex = 0
    console.log("here")
    let currentInterval = setInterval((): any => {
      this.currentDialogString = this.currentDialogString + this.currentDialog.text[currentCharIndex]
      currentCharIndex += 1;
      if (currentCharIndex >= this.currentDialog.text.length) {
        clearInterval(currentInterval)
        this.shouldShowNextButon = true;
      }
    }, 20)
  }

  async loadImages() {
    for (let i = 0; i < this.images.length; i++) {
      let img = new Image();
      img.onload = () => {
        console.log("loaded")
        this.onLoaded();
      }
      img.src = this.images[i];
    }
  }
  onLoaded() {
    this.loaded++;
    if (this.images.length == this.loaded) {
      //all images loaded
    }
  }
  onNextButtonClick() {
    if (this.currentDialog.next === 'continue') {
      this.currentCursor += 1;
      this.currentDialog = this.levelInfo.dialogs[this.currentCursor]
      this.shouldShowNextButon = false;
      this.currentDialogString = ''
      this.startDialog()
    } else if (this.currentDialog.next === 'game') {
      this.currentCursor += 1;
      this.isDisplayingDialog = false
      this.showCharacter = false
      this.isDisplayingTitle = true;
    }
  }

  startGame() {
    this.isDisplayingDialog = true
    this.startDialog()
    this.showCharacter = false;
    this.playAudio();
    this.shouldShowPlayButton = false;
    this.showCharacter = true;
  }

  playGame(){
    this.isDisplayingTitle = false
    this.isPlaying = true
  }
  playAudio(): void {
    const audio = new Audio();
    audio.src = '../../../assets/sound/main-theme.mp3';
    audio.load();
    audio.play();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(paramsId => {
      let currentChapterId = paramsId['chapterId']
      try {
        this.currentChapterId = Number(currentChapterId)
        console.log(currentChapterId)
        if (this.currentChapterId !== 1) {
          if (currentChapterId < 1) {
            this.router.navigateByUrl('home')
          }
          console.log("here")
          let chapterList = localStorage.getItem('chapterList')
          let chapterListObject = JSON.parse(chapterList ? chapterList : '[]')
          console.log(chapterListObject[currentChapterId])
          if (!chapterListObject[currentChapterId]) {
            this.router.navigateByUrl('home')
          } else if (!chapterListObject[currentChapterId].canPlay) {
            this.router.navigateByUrl('home')
          }
        }
      } catch (e) {
        this.router.navigateByUrl('home')
      } finally{
        this.loadImages().then(() => {
          this.levelInfo = this.levelsService.getLevelInfo(currentChapterId - 1)
          this.currentDialog = this.levelInfo.dialogs[this.currentCursor]
          console.log(this.currentDialog)
          this.charactersList = this.levelsService.getCharactersByLevel(currentChapterId - 1)
          console.log(this.charactersList, "characters")
        })
      }
    });
  }

}
