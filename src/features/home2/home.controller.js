export default class HomeController {
  constructor() {
    this.name = 'World';
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  changeName() {
    this.name = 'Hello World!';
  }

  randomName() {
    const totalNames = this.names.length;
    const rand = Math.floor(Math.random() * totalNames);
    this.name = this.names[rand];
  }

}
