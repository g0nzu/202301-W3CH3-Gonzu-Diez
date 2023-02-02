import { PetMaker } from '../models/pets';
import { petsStructure } from '../models/pets';

export const PETLIST: petsStructure[] = [
  new PetMaker('Jacobo', 'Labrador', true, 'Paco'),
  new PetMaker('Larin', 'Labrador', false, 'Manolo'),
  new PetMaker('Ryan', 'Labrador', true, 'Lucia'),
  new PetMaker('Fernando', 'Labrador', false, 'Iker'),
  new PetMaker('Bacon', 'Labrador', true, 'Guillermo'),
  new PetMaker('Lana', 'Labrador', true, 'Miguel'),
  new PetMaker('Peep', 'Labrador', false, 'Vicente'),
];
