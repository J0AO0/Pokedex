import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: [ './poke-list.component.scss' ]
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;


  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons
      .subscribe({
        next: res => {
          this.setAllPokemons = res.results;
          this.getAllPokemons = this.setAllPokemons;
          this.updatePokemonList();
        }
      });
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res : any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
    this.currentPage = 1;
    this.updatePokemonList();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePokemonList();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePokemonList();
    }
  }

  updatePokemonList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.getAllPokemons = this.setAllPokemons.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.setAllPokemons.length / this.itemsPerPage);
  }
}
