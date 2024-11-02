// JavaScript for beaver
const frames = [
    `                   .---.\n                  @ @   )\n                  ^     |\n                 [|]    | ##\n                 /      |####\n                (       |####\n                 \| /   |#BP#\n                / |.'   |###\n               _\ \`\\   )##\n              /,,_/,,____#  `,
    `                   .---.\n                  - -   )\n                  ^     |\n                 [|]    | ##\n                 /      |####\n                (       |####\n                 \| /   |#BP#\n                / |.'   |###\n               _\ \`\\   )##\n              /,,_/,,____#  `
];

let currentFrame = 0;

setInterval(() => {
    document.getElementById("asciiBeaver").innerText = frames[currentFrame];
    currentFrame = (currentFrame + 1) % frames.length;
}, 500); // Change frame every 500ms for blinking effect           