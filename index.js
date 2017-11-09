function shout(string) {  return string.toUpperCase()}
function whisper(X) {return X.toLowerCase()}
function logShout(hello) {console.log(`${hello}`.toUpperCase())}
function logWhisper(HELLO) {console.log(`${HELLO}`.toLowerCase())}
function sayHiToGrandma(x5) {
    if(x5===x5.toLowerCase()){return `I can't hear you!`}
    else if(x5===x5.toUpperCase()){return `YES INDEED!`}
    else if(x5==='I love you, Grandma.'){return `I love you, too.`}
  }
