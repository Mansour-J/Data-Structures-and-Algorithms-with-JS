function HashTable () {
    this.table = new Array (137) ; 
    this.HashCode  = HashCode ;
    this.insert = insert ;
    this.show= show ;
    this.deleteOne = deleteOne ;
}



function HashCode (key){
    
    return key+1 ;
    
}

function deleteOne(dele) {
    var codeIndex =     this.HashCode (dele);
  
          this.table[codeIndex] = undefined ; 
    
    
}

function insert (item){
  var codeIndex =     this.HashCode (item);
      if ( this.table[codeIndex] != item ){
          this.table[codeIndex] = item ; 
      }
    
}

function show (){
    for (var i=0 ; i < 137 ; i++){
        if (this.table[i]!=undefined)
        console.log(this.table[i]+",  key:"+ i)
    }
    
}

var ht = new HashTable ();
ht.insert(11) ;
ht.insert(12) ;
ht.insert(13) ;
ht.show ();
console.log("egggegwe")
ht.deleteOne(12);
ht.show ();