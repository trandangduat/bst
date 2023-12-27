function genRandomArray (N) {
  let arr = new Array;
  for (let i = 0; i < N; i++) {
    arr[i] = parseInt(Math.random() * 100);
  }
  return arr;
}

function prettyPrint (node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

export {genRandomArray, prettyPrint};
