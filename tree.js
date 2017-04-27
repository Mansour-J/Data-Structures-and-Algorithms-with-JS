/*
function Node (data,left, right){ // node constructor
    this.data = data ;
    this.left=left;
    this.right = right ;
    this.show = show ;
}

function show (){  // rock is here 
    return this.data;
}
function BST(){   // tree structure 
    this.root = null;
    this.insert = insert ;
    this.inOrder = inOrder;  // An inorder traversal visits all of the nodes of a BST in ascending order of the node key values.
    this.preOrder = preOrder ; //A preorder traversal visits the root node first, followed by the nodes in the subtrees under the left child of the root node, followed by the nodes in the subtrees under the right child of the root node.
    this.postOrder=postOrder ;  //A postorder traversal visits all of the child nodes of the left subtree up to the root node, and then visits all of the child nodes of the right subtree up to the root node.
    this.max = max ;
    this.min = min ; 
    this.find  = find ; 
    this.remove = remove; 

}

function insert(data){
    //debugger;
  var  node = new Node(data,null,null)
    if (this.root == null){
         this.root = node;
    }else{
        var current = this.root ,
            parent ;
        while(true){
            parent = current;
            if (data < current.data){
                current = current.left ;
                if (current == null) {
                      parent.left  =  node ;
                            break;
                }
            }else{
                current = current.right ;
                 if (current == null) {
                     parent.right = node ; 
                            break;
                }
            }
        }
    }
    
}

function inOrder (root){
    if(root != null){
        inOrder(root.left);
        console.log(root.show()+",");
        inOrder(root.right);
    }
    
}


function preOrder (root){
    if(root != null){
                console.log(root.show()+"/n");
        preOrder(root.left);

        preOrder(root.right);
    }
    
}

function postOrder (root){
    if(root != null){
               
        postOrder(root.left);

        postOrder(root.right);
         console.log(root.show()+"/n");
    }
    
}

function min (){
    var current = this.root ;
    while (current.left !=null){
        current = current.left ;
    }
    return current; 
}

function max (){
    var current = this.root ;
    while (current.right !=null){
        current = current.right ;
    }
    return current; 
}

function find (data)  {
   var current = this.root ;
   while (current.data!=data){
        if (data < current.data)
            current = current.left;
        else
            current = current.right;
        if (current == null)
            return null
       
   }
    
    return current 
}

function remove (data){
    root = removeNode (this.root,data);
    
}

function removeNode(node,data) {
    if (node ==null) 
        return node ; 
   if (node.data ==data ){
       if (node.left==null && node.right == null){
           return null ; 
       }
       if (node.left==null){
           return node.left ; 
       } 
       if (node.right==null){
           return node.right ; 
       }
       
       
        var current = node.right;
        while (current.left !=null){
            current = current.left ;
        }
       var temp = current;
       node.data = temp.data ;
       node.right = removeNode(node.right, temp.data)
       return node ; 
   } 
   else if (data < node.data){
       node.left =  removeNode(node.left, data)
       return node 
   }else
   {
          node.right =  removeNode(node.right, data)
          return node 
   }
}

var nums = new BST()








nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
inOrder(nums.root);

*/