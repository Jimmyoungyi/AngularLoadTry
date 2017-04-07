import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component({
	selector: "my-dashboard",
	templateUrl: "html/dashboard.html",
	styleUrls: ["css/dashboard.scss"]
})

export class DashboardComponent implements OnInit{
	heroes: Hero[] = [];
	constructor(private heroService: HeroService){ }
	ngOnInit(): void{
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(0, 5));
	}
}