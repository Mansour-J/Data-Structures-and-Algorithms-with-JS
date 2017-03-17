function repeatCount (array){
    
    for (var i = 0; i < array.length; i++) {
         
            if ( array[i]!=null ){
    
              console.log(array[i]+":"+count(array[i],array));
                         
            }
      
    }
    
}

function count (ele, array){
    var counter =0 ; 
    for (var i = 0; i < array.length; i++) {
         if (ele== array[i]){
              array[i] = null ;    // array passed by ref
             ++counter;
         }
    }
    
    return counter ;
    
}