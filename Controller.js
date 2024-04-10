export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.render();
  }

  render() {
    const { numbers } = this.model;
    this.view.showList(numbers);
  }
}
