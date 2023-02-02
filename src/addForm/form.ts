/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import { petsStructure } from '../models/pets';
import { PetMaker } from '../models/pets';
import './form.scss';

export class FormCreator extends Component {
  constructor(public selector: string, public pets: petsStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <form id="pet-form">
    <div>
      <label for="name">Nombre:</label>
      <input type="text" id="name" required />
    </div>
    <div>
      <label for="breed">Raza:</label>
      <input type="text" id="breed" required />
    </div>
    <div>
      <label for="isAdopted">Adoptado:</label>
      <input type="checkbox" id="isAdopted" />
    </div>
    <div>
      <label for="owner">Dueño:</label>
      <input type="text" id="owner" required />
    </div>
    <button type="submit">Enviar</button>
  </form>
    `;
  }
}
