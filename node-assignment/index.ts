const inputString = `AAggiLBJwIRIhAKgAYCiCoCAAAIIgAEICogCCJBIhEDABBCACbCQCAAAgogUIMQYgJCIoIghAJCChCCAmCCIgA==`;

const decodedBufferData = Buffer.from(inputString, "base64");

let largestInteger = 0;
let foundAtIndex = -1;

for (let index = 0; index < decodedBufferData.length; index++) {
  if (largestInteger < decodedBufferData[index]) {
    largestInteger = decodedBufferData[index];
    foundAtIndex = index;
  }
}

console.log(largestInteger);
console.log(foundAtIndex);
