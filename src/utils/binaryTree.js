class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    if (this.root === null) this.root = new Node(data);
    else this.add(this.root, data);
  }
  add(node, value) {
    if (node.value <= value) {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.add(node.right, value);
      }
    } else {
      if (node.left === null) {
        var newNode = new Node(value);
        node.left = newNode;
      } else {
        this.add(node.left, value);
      }
    }
  }

  inOrderSuccessor(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  deleteNode(root, key) {
    // step 1 is we need to find the key:
    var parent = null;
    var curr = root;
    while (curr && curr.value !== key) {
      parent = curr;
      if (curr.value > key) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    // the node to be deleted did not exist in the tree
    if (curr === null) {
      console.log("Node with key: ", key, "does not exist in the tree");
      return root;
    }

    // case 1. node to be deleted has two children
    if (curr.left && curr.right) {
      var succ = this.inOrderSuccessor(curr.right);
      var data = succ.value;
      this.deleteNode(root, succ.value);
      curr.value = data;
    }
    // case 2. node to be deleted has no children
    if (!curr.left && !curr.right) {
      if (curr === root) {
        return null;
      }
      if (parent.right === curr) {
        parent.right = null;
      } else {
        parent.left = null;
      }
    }
    // Case 3 node to be deleted has one child
    else {
      var child = null;
      if (curr.left) {
        child = curr.left;
      } else {
        child = curr.right;
      }
      if (curr == root) {
        root = child;
      } else {
        if (curr == parent.right) {
          parent.right = child;
        } else {
          parent.left = child;
        }
      }
    }
    return root;
  }
}
export function addNode(BST, node) {
  if (BST == null) {
    BST.root = new Node(node);
  } else {
    BST.insert(node);
  }
  return BST;
}

export function createTree() {
  return new binarySearchTree();
}
export function getRootNode(BST) {
  return BST.root;
}
export function inOrder(bst) {
  let root = getRootNode(bst);
  console.log(root.value);
}
export function getLevelOrder(bst) {
  var queue = [];
  if (bst == null) {
    console.log("root is null");
    return null;
  }

  var root = getRootNode(bst);
  queue.push([root, 0]);
  var levels = {
    0: [root.value],
  };

  while (queue.length != 0) {
    // The shift() method removes
    // the first element from an array
    // and returns that removed element.
    var data = queue.shift();
    var tempNode = data[0];
    var level = data[1];
    if (!(level + 1 in levels)) {
      levels[level + 1] = [];
    }
    if (tempNode.left != null) {
      queue.push([tempNode.left, level + 1]);
      levels[level + 1].push(tempNode.left.value);
    } else {
      levels[level + 1].push("Null");
    }
    if (tempNode.right != null) {
      queue.push([tempNode.right, level + 1]);
      levels[level + 1].push(tempNode.right.value);
    } else {
      levels[level + 1].push("Null");
    }
  }
  return levels;
}
