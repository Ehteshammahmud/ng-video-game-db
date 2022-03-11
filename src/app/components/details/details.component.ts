import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  gameRating = 0;
  gameId: string;
  game: Game;
  routeSub: Subscription;
  gameSub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {}
  game!: Game;

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }
}

getColor(value: number): string {
  if (value > 75) {
    return '#5ee432';
  } else if (value > 50) {
    return '#fffa50';
  } else if (value > 30) {
    return '#f7aa38';
  } else {
    return '#ef4655';
  }
}

