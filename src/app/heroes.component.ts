import { Component } from '@angular/core';
import { Router } from "@angular/router";


import { Hero } from "./hero";
import { HeroService } from "./hero.service";
import { OnInit } from "@angular/core";

@Component({
	selector: 'my-heroes',
	templateUrl: 'html/heroes.html',
	styleUrls: ['css/style.scss'],
})

export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router
	) {}

	getHeroes(): void {
		// this.heroes = this.heroService.getHeroes();
		this.heroService.getHeroes().then(heroes => this.heroes = heroes)
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	ngOnInit(): void {
		this.getHeroes()
	}

	gotoDetail(): void{
		this.router.navigate(["/detail",this.selectedHero.id])
	}
}