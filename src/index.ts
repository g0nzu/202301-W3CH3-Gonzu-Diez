/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import { Component } from './components/mainComponent';
import { Header } from '../src/header/header';
import { Menu } from './menu/menu';
import { FormCreator } from './addForm/form';
import { PETLIST } from './mocks/petMock';
import { PetModel } from './petsListable/letsMakePets';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Añadir', path: '/Add' },
  { label: 'Acerca de', path: '/about' },
];

new Menu('.header', menuOptions);
new Header('#header');
new PetModel('#list', PETLIST);
let showForm: boolean;

document.querySelector('a[href="/Add"]')!.addEventListener('click', (event) => {
  event.preventDefault();
  showForm = true;
  renderForm();
});

function renderForm() {
  if (showForm) {
    new FormCreator('#pet-form-container', PETLIST);
  }
}

document
  .querySelector('a[href="/home"]')!
  .addEventListener('click', (event) => {
    event.preventDefault();
    showForm = false;
    renderForm();
  });
