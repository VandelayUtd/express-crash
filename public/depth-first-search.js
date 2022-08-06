const recursiveDepthFirstValues = (root) => {
    if(root === null) return [];
    
    
    const rightVals = depthFirstValues(root.right)
    const leftVals = depthFirstValues(root.left)
    return [ root.val, ...leftVals, ...rightVals ]
}

const iterativeDepthFirstValues = (root) => {
    if (root === null) return [];
    // todo
    const stack = [ root ];
    const result = []
    while(stack.length > 0) {
      const current = stack.pop();
      result.push(current.val)
      
      if(current.right !== null) stack.push(current.right); 
      if(current.left !== null) stack.push(current.left); 
      
    }
    return result
};