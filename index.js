import {Tree} from "./tree.js"
import { genRandomArray, prettyPrint } from "./gen.js";



const arr = genRandomArray(15);
// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

let T = Tree(arr);

// T.insert(10);
// T.insert(11);
// T.remove(11);
// T.remove(23);
// T.remove(8);
// T.remove(67);
// T.remove(10);
// T.remove(324);
// T.remove(9);
console.log("lv_order", T.levelOrder());
console.log("in_order", T.inOrder());
console.log("pre_order", T.preOrder());
console.log("post_order", T.postOrder());
// T.rebalance();
prettyPrint(T.root);
