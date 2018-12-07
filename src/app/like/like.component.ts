import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
@Input() isLiked = false;

cambioLike(ev: MouseEvent, numero) {
  console.log("like cliccato", this.isLiked);

  this.isLiked = !this.isLiked;
  console.log("dopo il click", this.isLiked);
  ev.preventDefault();

}
  constructor() { }

  ngOnInit() {
  }

}
