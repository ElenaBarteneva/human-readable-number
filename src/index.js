module.exports = function toReadable (number) {

    if (number === 0) return 'zero';

    const numberStr = String(number);

  const ones = (num) => {
    switch (num) {
      case '1': return 'one';
      case '2': return 'two'; 
      case '3': return 'three';
      case '4': return 'four';
      case '5': return 'five';
      case '6': return 'six';
      case '7': return 'seven';
      case '8': return 'eight';
      case '9': return 'nine';
      default: return '';
    }
  }

  const tens = (num) => {
    switch (num) {
      case '11': return 'eleven';
      case '12': return 'twelve';
      case '13': return 'thirteen';
      case '14': return 'fourteen';
      case '15': return 'fifteen';
      case '16': return 'sixteen';
      case '17': return 'seventeen';
      case '18': return 'eighteen';
      case '19': return 'nineteen';
    }
  }

  const twentiesAndMore = (num) => {
    switch (num) {
      case '2': return 'twenty';
      case '3': return 'thirty';
      case '4': return 'forty';
      case '5': return 'fifty';
      case '6': return 'sixty';
      case '7': return 'seventy';
      case '8': return 'eighty';
      case '9': return 'ninety';
    }
  }



if (numberStr.length === 1) {
    return numberStr !== '0' ? ones(numberStr) : 'zero';
}

else if (numberStr.length === 2) {
    if (numberStr[0] === '1' && numberStr[1] !== '0') {
        return tens(numberStr);
    }
    else if (numberStr[0] === '1' && numberStr[1] === '0') {
        return 'ten';
    }
    else if (numberStr[0] !== 1 && numberStr[1] === '0') {
        return twentiesAndMore(numberStr[0]);
    }
    return twentiesAndMore(numberStr[0]) + ' ' + ones(numberStr[1]);
}

else if (numberStr.length === 3) {

    let result = ones(numberStr[0]) + ' hundred';
    
    if (numberStr[1] === '0' && numberStr[2] !== '0') {
      result += ' ' + ones(numberStr[2]);
    } 
    else if (numberStr[1] === '1' && numberStr[2] !== '0') {
      result += ' ' + tens(numberStr.slice(1));
    } 
    else if (numberStr[1] === '1' && numberStr[2] === '0') {
        result += ' ten';
    }
    else if (numberStr[1] !== '0' && numberStr[1] !== '1') {
        if (numberStr[2] === '0') {
            result += ' ' + twentiesAndMore(numberStr[1]);
        }
        else {
            result += ' ' + twentiesAndMore(numberStr[1]) + ' ' + ones(numberStr[2]);
        }
      }
      else {
        result +='';
      }
      return result;
    }
    
  }




