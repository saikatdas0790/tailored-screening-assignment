const inputString = `AAggiLBJwIRIhAKgAYCiCoCAAAIIgAEICogCCJBIhEDABBCACbCQCAAAgogUIMQYgJCIoIghAJCChCCAmCCIgA==`;

const decodedBufferData = Buffer.from(inputString, "base64");

const unsigned32BitIntegerArray = [];

for (let index = 0; index < decodedBufferData.length - 4; index++) {
  unsigned32BitIntegerArray.push(decodedBufferData.readUInt32BE(index));
}

let largestInteger = 0;
let foundAtIndex = -1;

for (let index = 0; index < unsigned32BitIntegerArray.length; index++) {
  if (largestInteger < unsigned32BitIntegerArray[index]) {
    largestInteger = unsigned32BitIntegerArray[index];
    foundAtIndex = index;
  }
}

console.log(largestInteger);
console.log(foundAtIndex);
