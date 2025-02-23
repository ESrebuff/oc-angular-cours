import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapService } from '../services/facesnaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink,
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute,

  ) { }

  isSnapped!: boolean;

  ngOnInit(): void {
    this.isSnapped = false;
    this.getFaceSnap();
  }

  onAddSnap(): void {
    this.isSnapped = !this.isSnapped;
    if (this.isSnapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

}
