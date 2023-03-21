let offset = 0;
const interval = 500;
function textColor() {
    const typingElementp = document.getElementById("typingp");
    const chars = typingElementp.innerText.split(""); // Split the text into an array of characters
    if (offset >= text.length) {
        offset = 0;
      }
    let newText = "";
    for (let i = 0; i < chars.length; i++) {
    if (i >= offset && i < offset + 3) {
        newText += `<span style="color: red;">${chars[i]}</span>`;
    } else {
        newText += chars[i];
    }
    }
    typingElementp.innerHTML = newText;
    // Increment the offset
    offset++;
}
textColor();
setTimeout(textColor, 30)