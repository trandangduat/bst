import {Tree} from "./tree.js"

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let T = Tree(arr);

const prettyPrint = (node, prefix = "", isLeft = true) => {
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
};

T.insert(10);
T.insert(11);
T.remove(11);
T.remove(23);
T.remove(8);
T.remove(67);
T.remove(10);
T.remove(324);
T.remove(9);
console.log("lv_order", T.levelOrder());
console.log("in_order", T.inOrder());
console.log("pre_order", T.preOrder());
console.log("post_order", T.postOrder());
prettyPrint(T.root);
