import { Sharpness } from '../models/sharpness.model';
import { Weapon } from '../models/weapon.model';

const FIXED_VALUE = 400;

export default function calculateDamage(
  weapon: Weapon,
  damage: number,
  sharpness: Sharpness,
  affinity: number
) {
  return (
    (calculateAffinityDamage(weapon, damage, sharpness) *
      (FIXED_VALUE + affinity)) /
    FIXED_VALUE
  );
}

export function calculateTrueDamage(weapon: Weapon, damage: number): number {
  return damage / weapon.classMultiplier;
}

export function calculateAffinityDamage(
  weapon: Weapon,
  damage: number,
  sharpness: Sharpness
): number {
  return calculateTrueDamage(weapon, damage) * sharpness.multiplier;
}
