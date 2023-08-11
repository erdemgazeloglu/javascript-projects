function rot13(message){
  return message.replace(/[a-zA-Z]/g, match => String.fromCharCode(match.charCodeAt() + (match.toLowerCase() < 'n' ? 13 : -13)));
}
