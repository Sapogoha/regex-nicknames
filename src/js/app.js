export default class Validator {
  static validateUsername(username) {
    const initialCheck = /^[\w-]*$/.test(username); // только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)
    const furtherCheck = !/(\d{4,})+/g.test(username); // не должно содержать подряд более трёх цифр
    const finalCheck = /^[^\d-_].*[^\d-_]$/.test(username); // не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире

    return initialCheck && furtherCheck && finalCheck;
  }
}
