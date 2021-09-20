export default class Validator {
  constructor(userName) {
    this.userName = userName;
  }

  validateUsername() {
    if (/^[\d\-_]/.test(this.userName)) {
      throw new Error('Имя не должно начинаться цифрами, символами подчёркивания или тире.');
    }

    if (/[\d\-_]$/.test(this.userName)) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания или тире.');
    }

    if (/\d{4}/.test(this.userName)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр.');
    }

    return this.userName;
  }
}
