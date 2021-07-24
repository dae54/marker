const exec = require("util").promisify(require("child_process").exec);

module.exports = {
    /**
     * 
     * @param {String} message message to log on console
     * @param {String} color text or highlight paint color [red]
     * @augments {color} [black,red,green,yellow,blue,purple,lightblue,white]
     * @example const marker = require('@dae54/marker')
     * marker.mark('test text','red')
     */
  color: (message, color) => {
    let clr = "\x1b[37m%s\x1b[0m";

    switch (color) {
      case "black":
        clr = "\x1b[30m%s\x1b[0m";
        break;
      case "red":
        clr = "\x1b[31m%s\x1b[0m";
        break;
      case "green":
        clr = "\x1b[32m%s\x1b[0m";
        break;
      case "yellow":
        clr = "\x1b[33m%s\x1b[0m";
        break;
      case "blue":
        clr = "\x1b[34m%s\x1b[0m";
        break;
      case "purple":
        clr = "\x1b[35m%s\x1b[0m";
        break;
      case "lightblue":
        clr = "\x1b[36m%s\x1b[0m";
        break;
      default:
        clr = "\x1b[37m%s\x1b[0m";
    }
    return console.log(clr, message);
  },
  highlight: (message, color) => {
    let clr = "\x1b[37m%s\x1b[0m";

    switch (color) {
      case "black":
        clr = "\x1b[40m%s\x1b[0m";
        break;
      case "red":
        clr = "\x1b[41m%s\x1b[0m";
        break;
      case "green":
        clr = "\x1b[42m%s\x1b[0m";
        break;
      case "yellow":
        clr = "\x1b[43m%s\x1b[0m";
        break;
      case "blue":
        clr = "\x1b[44m%s\x1b[0m";
        break;
      case "purple":
        clr = "\x1b[45m%s\x1b[0m";
        break;
      case "lightblue":
        clr = "\x1b[46m%s\x1b[0m";
        break;
      case "white":
        clr = "\x1b[47m%s\x1b[0m";
        break;
      default:
        clr = "\x1b[37m%s\x1b[0m";
    }
    return console.log(clr, message);
  },
};
