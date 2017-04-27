function Node (data ) {   // node constructor
    this.data = data ;
    this.next =null ;   //   predecessor and successor 
}

function linkedList (){
    this.head = new Node ("head") ;
    this.find = find ;
    this.insert = insert  ;
    this.traverse = traverse ; 
    this.deleteNode = deleteNode ;
    this.findPredecessor = findPredecessor ; 
    this.findSuccessor  = findSuccessor ; 
    this.reverse = reverse ;
    this.getTailNode = getTailNode ;
};


function find (item){
    var current = this.head ;
    while (current.data != item){
            if (current.next==null )    {console.log("not such node in the linked list") ; return};
            current =   current.next ;  
    }
    
    return current ;
}


function insert (next, pre ){
    var newNode = new Node (next) ;
    var current = this.find(pre) ;
    newNode.next = current.next ;
    current.next =newNode ;
    
};

function traverse (head) {
    var currentNode = this.head ;
       if( currentNode!=null) console.log(currentNode.data) ;
    while (currentNode.next!=null)
    {
        console.log(currentNode.next.data);
        currentNode = currentNode.next ;
    }
};


function findPredecessor(item){
    var current = this.head ;  
    while (current.next.data != item){ 
            
              current =   current.next ;   
                if (current.next==null )    {console.log("no Predecessor node for this") ; return};
    }
    return current ;
}

function findSuccessor(item){
      var current = this.head ;
    while (current.data != item){
            current =   current.next ;
    }
    return current.next ;  
}


function deleteNode (target){
     if  (this.find(target)== null) return;
      
    var targetNode = this.find(target) ;
     
    
    if (target=="head")  {console.log("this is the head node") ; return};
    
    var pre = this.findPredecessor(target) ; 
    var suc = this.findSuccessor(target) ; 
    if (suc==null) {  // the target node is the tail node ; 
         pre.next = null;
         console.log("the target node is the tail node ; "); return;
    };
 

    pre.next = targetNode.next ; // debugger ; 
    targetNode.next = null  ; 
    

       
};

function getTailNode (){
    var current = this.head ;   // console.log(current.next);
     while (current.next!= null){
         current = current.next;
     }
  return current ;
     
            
     
     
}


function reverse (){
   
    
   
    var current = this.head ;   // console.log(current.next);
     
       var pre =null; 
    var next = null ; 
     while (current!=null){
                 next  = current.next ;  //debugger ;
                current.next = pre;
                pre = current ; 
                current = next 
     }
     
            
       this.head= pre;
     
}



var ll = new linkedList ();
ll.insert("a", "head");
ll.insert("b", "a");
ll.insert("c", "b");
ll.insert("d", "c");
ll.insert("e", "d");
console.log("original linked list:")
ll.traverse() ; 
console.log("pre of c : "+ll.findPredecessor("c").data);
console.log("suc of c : "+ll.findSuccessor("c").data) ;
//ll.deleteNode("d") ; 
//console.log(ll.getTailNode()); 
ll.reverse();

ll.traverse() ; 
