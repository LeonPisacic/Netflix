import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerResult: any = [];
  trendingMovieResult: any = [];

  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];


  constructor(private service: MovieApiServiceService) { }

  ngOnInit() {
    this.bannerData();
    this.trendingMovieData();

    this.actionMovie();
    this.adventureMovie();
    this.animationMovie();
    this.comedyMovie();
    this.documentaryMovie();
    this.scienceFictionMovie();
    this.thrillerMovie();

  }

  bannerData() {
    this.service.bannerApiData().subscribe((data) => {
      this.bannerResult = data.results; //dodjeljivanje object propertie u varijablu, odnosno da se pune objekti u lokalni array(bannerResult)
    })
  }

  trendingMovieData() {
    this.service.trendingMovieApiData().subscribe((data) => {
      this.trendingMovieResult = data.results;
    })
  }

  /* */
  actionMovie() {
    this.service.fetchActionMovies().subscribe((data) => {
      this.actionMovieResult = data.results
    });
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((data) => {
      this.adventureMovieResult = data.results
    });
  }


  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((data) => {
      this.animationMovieResult = data.results
    });
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((data) => {
      this.comedyMovieResult = data.results
    });
  }

  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((data) => {
      this.documentaryMovieResult = data.results
    });
  }

  scienceFictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((data) => {
      this.scienceFictionMovieResult = data.results
    });
  }

  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((data) => {
      this.thrillerMovieResult = data.results
    });
  }
}
