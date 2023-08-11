
function rot13(message) {
  return message.replace(/[a-zA-Z]/g, match => {
    const base = match <= 'Z' ? 'A' : 'a';
    return String.fromCharCode(base.charCodeAt() + ((match.charCodeAt() - base.charCodeAt() + 13) % 26));
  });
}

function deRot13(message) {
  return message.replace(/[a-zA-Z]/g, match => {
    const base = match <= 'Z' ? 'A' : 'a';
    return String.fromCharCode(base.charCodeAt() + ((match.charCodeAt() - base.charCodeAt() + 13 + 26) % 26));
  });
}

let text = "test";
console.log("ilk kelime -> " + text);

let encText = rot13(text);
console.log("şifrelenmiş kelime -> " + encText);

let deText = deRot13(encText);
console.log("deşifrelenmiş kelime -> " + deText);
