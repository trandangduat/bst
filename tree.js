import { Node } from "./treenode.js"

function Tree(arr) {
  // Sort the array and remove duplicates
  arr.sort((a, b) => { return a - b });
  arr = Array.from(new Set(arr));

  // Root is the node at level 0 
  let root = buildTree(0, 0, arr.length - 1);

  function buildTree(level, l, r) {
    if (l > r) {
      return null;
    }
    let mid = parseInt((l + r) / 2);
    let currentNode = Node(arr[mid]);
    currentNode.left = buildTree(level + 1, l, mid - 1);
    currentNode.right = buildTree(level + 1, mid + 1, r);
    return currentNode;
  }

  function insert(value) {
    if (find(value)) {
      console.log(value + " is already in the BST.");
      return;
    }
    let cur = root;
    let par = null;
    while (cur !== null) {
      if (cur.data == value) {
        return;
      }
      par = cur;
      cur = (value > cur.data ? cur.right : cur.left);
    }
    if (par.data < value) {
      par.right = Node(value);
    } else {
      par.left = Node(value);
    }
  }

  function successor(u) { // Find the smallest node that larger than u
    let cur = u;
    if (cur.right === null) { // If there isn't any element smaller than u then return null
      return null;
    }
    cur = cur.right; // move to the right side of u
    while (cur.left !== null) { // Keep going left until finding a node without left child, which mean the smallest
      cur = cur.left;
    }
    return cur;
  }

  function shift(u, v) { // Replace node u with node v
    if (v === null) {
      let parentOfU = find(u.data).par;
      if (parentOfU.left === u) {
        parentOfU.left = null;
      } else {
        parentOfU.right = null;
      }
      return;
    }
    Object.assign(u, v);
  }

  function remove(value) {
    let D = find(value).cur;
    if (!D) {
      console.log("Element not found.");
      return;
    }
    if (D.left === null) {
      shift(D, D.right);
    } else if (D.right == null) {
      shift(D, D.left);
    } else {
      let E = successor(D);
      let tmp = E.data;
      shift(E, E.right);
      D.data = tmp;
    }
  }

  function find(value) {
    let cur = root;
    let par = null;
    while (cur !== null) {
      if (cur.data == value) {
        return { cur, par };
      }
      par = cur;
      cur = (value > cur.data ? cur.right : cur.left);
    }
    return null;
  }

  return {
    root,
    insert,
    remove,
    find,
  }
}

export { Tree };
