/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    let queue = [this.root];
    let depth = 0;
    while(queue.length) {
      let current = queue.shift();
      if(current) {
        depth += 1;
        if(!current.left || !current.right) return depth;
        queue.push(current.left);
        queue.push(current.right);
      }
    }
    return depth;
  }

  /** minDepth with recursion
   * 
   * minDepth(queue=[this.root], depth=0) {
    if(queue.length === 0) return depth;
      let current = queue.shift();
      if(current) {
        if(!current.left || !current.right) return depth + 1;
        queue.push(current.left);
        queue.push(current.right);
        return this.minDepth(queue, depth + 1);
      }
      return depth;
  }
   */


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // depth first try
  maxDepth() {
    let depth = this.root ? 1 : 0;
    let stack = [this.root];

    while(stack.length) {
      let current = stack.pop();
      if(current) {
        depth += 1;
        if(!current.left && !current.right) return depth;
        if(current.left.left || current.left.right) stack.push(current.left)
        if(current.right.left || current.right.right) stack.push(current.right);
      }
    }
    return depth;
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  // maxSum() {
  //   let stack = [this.root];
  //   let sum = 0;
  //   while(stack.length) {
  //     console.log("stack", stack);
  //     let current = stack.pop();
  //     console.log("current", current);
  //     if(current) {
  //       sum += current.val;
  //       let left = this.maxSumHelper(current.left, 0);
  //       let right = this.maxSumHelper(current.right, 0);
  //       if(right > left) {
  //         return sum += right;
  //       }
  //       return sum += left;
  //     }
  //   }
  // }

  // maxSumHelper(stack, highSum = 0) {
  //   let sum = 0;
  //   while(stack.length) {
  //     let current = stack.pop();
  //     if(current) {
  //       sum += current.val;
  //       console.log("sum in helper", sum);
  //       stack.push(current.left);
  //       stack.push(current.right);
  //     }
  //     if(!current.left && !current.right) {
  //       if(sum > highSum) highSum = sum;
  //       return this.maxSum(stack, highSum);
  //     }
  //   }
  //   return highSum;
  // }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if(!this.root) return null;
    let next = null;
    let stack = [this.root];
    while(stack.length) {
      let current = stack.pop();
      if(current) {
        if(current.val > lowerBound) {
          if(next && current.val < next) {
            next = current.val;
          }
          next = current.val;
        }
        stack.push(current.right, current.left)
      }
    }
    return next;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    function areCousinsHelper(node, nodeToFind) {
  
    }
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
