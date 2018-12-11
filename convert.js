window.onload=function(){

  let result = document.querySelector('#result').value;
  function binary_to_hex (element) {
    let binary = document.querySelector('#binary').value;
    binary = String(binary);
    // let binary = '01000110101000101011100100111101';
    let group = binary.match(/.{1,4}/g);
    let hex_a = [];
    for (let i = 0; i < group.length; i++) {
      var w = parseInt(group[i][0]) * 8;
      var x = parseInt(group[i][1]) * 4;
      var y = parseInt(group[i][2]) * 2;
      var z = parseInt(group[i][3]) * 1;
      var t = parseInt(w + x + y + z);
      hex_a.push(t);
    }
    for (let j = 0; j < hex_a.length; j++) {
      switch (hex_a[j]) {
        case 10:
          hex_a[j] = 'A';
          break;
        case 11:
          hex_a[j] = 'B';
          break;
        case 12:
          hex_a[j] = 'C';
          break;
        case 13:
          hex_a[j] = 'D';
          break;
        case 14:
          hex_a[j] = 'E';
        case 15:
          hex_a[j] = 'F';
          break;
      }
    };

  // hex_a.unshift('0x');
  result = hex_a.join("");
  return result;
  };

  document.querySelector("input").addEventListener("input", function () {
    binary_to_hex();
    console.log(result);
    document.querySelector("#result").innerHTML = result;
  })

}