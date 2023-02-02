/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import { PetMaker } from '../models/pets';
import { petsStructure } from '../models/pets';
import { PETLIST } from '../../src/mocks/petMock';

export class PetModel extends Component {
  constructor(public selector: string, public pets: petsStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    const items = this.pets.map(
      (item) => `
      <ul>
          <li>${item.id}</li>
           <li>${item.breed}</li>
           <li>${item.isAdopted}</li>
          <li>${item.name}</li>
      </ul>
    `
    );
    return items.join('');
  }
}
