//https://drive.google.com/drive/folders/0BwSzaCn1G7ifREVSUk5ETUxaOUE


function Node (data ) {   // node constructor
    this.data = data ;
    this.next =null ;   //   predecessor and successor 
}

function LinkedList (){
    this.head = new Node ("head") ;
   
    this.insert = insert  ;   // C 
    this.find = find ;      //  R 
    this.update = update ; // U 
    this.deleteNode = deleteNode ;  //D
    this.traverse = traverse ; 
    this.findPredecessor = findPredecessor ; 
    this.findSuccessor  = findSuccessor ; 
    this.reverse = reverse ;
    this.getTailNode = getTailNode ;
};

function CircularLinkedList (){
    this.head = new Node ("head") ;
    this.head.next = this.head ; 
    this.insert = insert  ;   // C 
    this.find = find ;      //  R 
    this.update = update ; // U 
    this.deleteNode = deleteNode ;  //D
    this.traverse = traverse ; 
    this.findPredecessor = findPredecessor ; 
    this.findSuccessor  = findSuccessor ; 
    this.reverse = reverse ;
    this.getTailNode = getTailNode ;
};




function find (item){
    var current = this.head ;
    while (current.data!=item ){
          if (current.next==null )    {console.log("not such node in the linked list") ; return};
         current= current.next ;
    }
    return current ;
    
}



function insert (newD , preD){
        var newN = new Node (newD);
      var preN = this.find (preD) ;
        newN.next = preN.next;
        preN.next = newN;
 
    
}

function update  (newnodeD, targetD){
       var targetNode =   this.find (targetD) ;
         targetNode.data = newnodeD ;
}


function traverse (isCircular){
    
    if  (isCircular!=true){
                    var current = this.head ;    //   console.log(this.head.data) ; 
              if( current!=null) console.log(current.data) ;
        
             while (current.next != null){
                  current = current.next ;
                  console.log(current.data) ; 
            }
        
    } else {
        
            var currNode = this.head;
            
            while (!(currNode.next == null) &&!(currNode.next.data == "head")) {
            
            console.log(currNode.next.data);
            
            currNode = currNode.next;
            
            }
    }

    
    
    
          
    
    
    
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

//var ll = new LinkedList (); 

var ll = new CircularLinkedList ();
ll.insert("a", "head");
ll.insert("b", "a");
ll.insert("c", "b");
ll.insert("d", "c");
ll.insert("e", "d");
console.log("original linked list:")
ll.traverse(true) ; 
console.log("pre of c : "+ll.findPredecessor("c").data);
console.log("suc of c : "+ll.findSuccessor("c").data) ;
//ll.deleteNode("a") ; ll.traverse() ; 
//console.log(ll.getTailNode()); 
//ll.reverse();
console.log(ll.head.next);
ll.insert("e0", "d");
ll.update ("a1", "a") ; 
ll.traverse(false) ; 

