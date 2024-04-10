export default class View {
  constructor() {
    const root = document.querySelector('#app');
    this.newEl = root.cloneNode(true);
    this.newEl.innerHTML = this.getList();
    root.replaceWith(this.newEl);
  }

  getList() {
    return `<ul></ul>`;
  }

  showList(numbers) {
    const ulEl = document.querySelector('ul');
    ulEl.innerHTML = numbers
      .map(
        (number) => `<li data-id=${number.id}>This number : ${number.id}</li>`
      )
      .join('');
  }
}
