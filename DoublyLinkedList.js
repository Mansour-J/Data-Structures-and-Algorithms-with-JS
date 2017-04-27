function Node (data){
    this.pre = null ;
    this.next = null ; 
    this.data = data  ; 
};


function DoublyLinkedList (){
    this.head = new Node ("head");
    this.find = find ;
    this.insert = insert ;
    this.deleteNode = deleteNode ; 
    this.findPredecessor = findPredecessor ; 
    this.findSuccessor = findSuccessor; 
    this.traverse = traverse ;
    this.getTailNode = getTailNode ;
    this.reverse = reverse;
    
};



function CircularDoublyLinkedList (){
    this.head = new Node ("head");
    this.head.next = this.nead ; 
    this.find = find ;
    this.insert = insert ;
    this.deleteNode = deleteNode ; 
    this.findPredecessor = findPredecessor ; 
    this.findSuccessor = findSuccessor; 
    this.traverse = traverse ;
    this.getTailNode = getTailNode ;
    this.reverse = reverse;
    
};




function find(data) {
      var current  =   this.head ;
       while (current.data!=data) {
              current = current.next ; 
       }
        return current ; 
};

function getTailNode (){
    var current = this.head ;   // console.log(current.next);
     while (current.next!= null){
         current = current.next;
     }
  return current ;
}

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


function insert (newD , preD){
     var newN = new Node (newD) ;
     var   preN  =  this.find (preD); //debugger ; 
     
         newN.next = preN.next ; 
          newN.pre  = preN ; 
         preN.next =  newN ;
    
};


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


function deleteNode (target){
      if  (this.find(target)== null) return;
      
    var targetNode = this.find(target) ;
     
    
    if (target=="head")  {console.log("this is the head node") ; return};
    
    var pre = this.findPredecessor(target) ; 
    var suc = this.findSuccessor(target) ; 
    if (suc==null) {  // the target node is the tail node ; 
         pre.next = null;
         target.pre = null ; 
         console.log("the target node is the tail node ; "); return;
    };
 

    pre.next = targetNode.next ; // debugger ; 
    targetNode.next = null  ; targetNode.pre = null ; 
    suc.pre = pre ; 

    
    
}

function traverse (){
    var current = this.head ;    //   console.log(this.head.data) ; 
      if( current!=null) console.log(current.data) ;

     while (current.next != null){
          current = current.next ;
          console.log(current.data) ; 
    }
    
}


var dll = new DoublyLinkedList ();

dll.insert("a", "head");
dll.insert("b", "a");
dll.insert("c", "b");
dll.insert("d", "c");
dll.insert("e", "d");
dll.traverse( ) ; 
console.log(dll.getTailNode()) ; 
//dll.reverse() ;
//dll.deleteNode("c") ;
dll.traverse( ) ; 
