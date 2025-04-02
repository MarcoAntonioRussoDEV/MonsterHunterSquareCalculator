import { Component } from '@angular/core';
import { InputComponent } from '../shared/input/input.component';
import { CommonModule } from '@angular/common';
import { SelectComponent } from '../shared/select/select.component';
import { ApiService } from '../services/api.service';
import { Weapon } from '../models/weapon.model';
import { Sharpness } from '../models/sharpness.model';
import { Subscription } from 'rxjs';
import calculateDamage, {
  calculateElementalDamage,
} from '../utils/damageCalculation';

@Component({
  selector: 'app-home',
  imports: [InputComponent, SelectComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  result: any = 0;
  elementalResult: any = 0;
  weapons: Weapon[] = [];
  weapon!: Weapon;
  damage: number = 0;
  elementalDamage: number = 0;
  sharpness!: Sharpness;
  sharpnesses: Sharpness[] = [];
  affinity: number = 0;

  private weaponsSub!: Subscription;
  private sharpnessSub!: Subscription;

  onWeaponChange(value: number): void {
    this.weapon =
      this.weapons.find((weapon) => weapon.id === value) || ({} as Weapon);
  }
  onDamageChange(value: string): void {
    this.damage = parseFloat(value);
  }
  onElementalDamageChange(value: string): void {
    this.elementalDamage = parseFloat(value);
  }
  onSharpnessChange(value: number): void {
    this.sharpness =
      this.sharpnesses.find((sharpness) => sharpness.id === value) ||
      ({} as Sharpness);
  }
  onAffinityChange(value: string): void {
    this.affinity = parseFloat(value);
  }
  calculate(): void {
    this.result = calculateDamage(
      this.weapon,
      this.damage,
      this.sharpness,
      this.affinity
    );
    this.elementalResult = calculateElementalDamage(
      this.elementalDamage,
      this.sharpness
    );
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getWeapons().subscribe((data) => {
      this.weapons = data;
    });

    this.apiService.getSharpness().subscribe((data) => {
      this.sharpnesses = data;
    });
  }

  ngOnDestroy(): void {
    if (this.weaponsSub) {
      this.weaponsSub.unsubscribe();
    }
    if (this.sharpnessSub) {
      this.sharpnessSub.unsubscribe();
    }
  }
}
