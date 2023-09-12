import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  getMovieDetailResult: any = [];
  getMovieVideoResult: any = [];
  getMovieCastResult: any = [];


  constructor(private service: MovieApiServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let getParamId = this.ActivatedRoute.snapshot.paramMap.get('id'); //spremanje ID filma kojeg smo kliknuli

    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getMovieCast(getParamId);
  }


  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe((data) => {
      this.getMovieDetailResult = data;
    })
  }

  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((data) => {

      data.results.forEach((element: any) => {

        if (element.type === 'Trailer') {
          this.getMovieVideoResult = element.key;
          console.log(this.getMovieVideoResult);
        }
      });
    })
  }

  getMovieCast(id: any) {

    this.service.getMovieCast(id).subscribe((data) => {


      this.getMovieCastResult = data.cast;
      console.log(this.getMovieCastResult);
    });

  }
}
