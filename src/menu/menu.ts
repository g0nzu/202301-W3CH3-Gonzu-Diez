/* eslint-disable no-unused-vars */
import { Component } from '../components/mainComponent';
import { MenuOption } from '..';
import './menu.scss';

export class Menu extends Component {
  constructor(public selector: string, public menuOption: MenuOption[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  private createTemplate() {
    const items = this.menuOption
      .map((item) => `<li><a href="${item.path}">${item.label}</a></li>`)
      .join('');
    return `
    <div class="container">
    <nav>
    <ul>${items}</ul>
    </nav>
    </div>
    `;
  }
}
