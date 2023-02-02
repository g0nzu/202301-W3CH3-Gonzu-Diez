/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import { InsertPosition } from '../components/mainComponent';
import './header.scss';

export class Header extends Component {
  constructor(
    public selector: string,
    public title: string = 'Cabezalis pets'
  ) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>${this.title}</h1>
      </header>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
