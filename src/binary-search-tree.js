const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(item) {

    function add (node, item) {
      if (!node) {
        return new Node(item);
      }
    
      if (node.data === item) {
        return node;
      }
    
      if (item < node.data) {
        node.left = add (node.left, item);
      }
      else
      {
        node.right = add (node.right, item);
      }
    
      return node;
    }


    this.head = add(this.head, item);
  }

  has(item) {
    
    function search(node, item) {
      if (!node) {
        return false;
      }
      if (node.data == item) {
        return true;
      }
      return item > node.data ? search(node.right, item) : search(node.left, item) ;
    }
    
    
    return search(this.head, item);

    
  }

  find(item) {
    
    function find (node, item) {
      if (!node) {
        return null;
      }

      if (node.data == item) {
        return node;
      }

      return item > node.data ? find(node.right, item) : find(node.left, item) ;
    }
    
    return find(this.head, item);

    
  }

  remove(item) {
    

    function remove(node, item) {
      if (!node) {
        return null;
      }
      if (item < node.data) {
        node.left = remove(node.left, item);
        return node;
      } else if (item > node.data) {
        node.right = remove(node.right, item);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }
        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = remove(node.left, maxLeft.data); 
        return node;
      }
    }
   this.head = remove(this.head, item);
  }

  min() {
    if (!this.head) {
      return;
    }

    let node = this.head;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.head) {
      return;
    }

    let node = this.head;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};