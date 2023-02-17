/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toSumQueue = [this.root];
    let sum = 0;
    while(toSumQueue.length) {
      let current = toSumQueue.shift()
      if (current) {
        sum += current.val;
        for(let child of current.children) {
          toSumQueue.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let toCountQueue = [this.root];
    let sumEvens = 0;
    while(toCountQueue.length) {
      let current = toCountQueue.shift();
      if(current) {
        if(current.val %2 === 0) {
          sumEvens += 1;
        }
        for(let child of current.children) {
          toCountQueue.push(child);
        }
      }
    }
    return sumEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let toCountQueue = [this.root];
    let sumGreater = 0;
    while(toCountQueue.length) {
      let current = toCountQueue.shift();
      if(current) {
        if(current.val > lowerBound) sumGreater += 1;
        for(let child of current.children) {
          toCountQueue.push(child);
        }
      }
    }
    return sumGreater;
  }
}

module.exports = { Tree, TreeNode };
