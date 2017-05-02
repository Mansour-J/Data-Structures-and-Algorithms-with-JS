function BubbleSort (array){
    for (var j=0 ;  j< array.length-1 ; j ++) {  
        var switched = false ;  //debugger ; 
        
        
            for (var i=0 ; i < array.length-1 ; i ++) {
                    if (array[i]>array[i+1]){
                        var temp =  array[i] ;
                        array[i] = array[i+1] ;
                        array[i+1] = temp ;
                        switched  = true ; 
                    }
                     
           };
           
           if (switched == false) { break;}
           
           
    }

 return array;
    
    
};


//console.log(BubbleSort([11,4,56,2,8,9054,3]));

function InsertionSort (array){
  var holeIndex ,  inserted ;
  for (var i = 0 ; i< array.length ; i++) {
              inserted =  array[i] ; 
               holeIndex   = i ; 
        while  ( holeIndex >0 &&  array[holeIndex-1]>inserted){
             array [holeIndex] =   array [holeIndex-1]  ;
              holeIndex =   holeIndex-1  ;
        }
         array [holeIndex]  = inserted ; 
               
  }
     return array ;  
    
}


//console.log(InsertionSort([11,4,56,2,8,7,8,9054,3]));


function SelectionSort (array){
  var minIndex ;
  for (var i = 0 ; i< array.length-1 ; i++) {
         minIndex = i ;  
         for (var j = i+1; j< array.length ; j++) {
                if (array[j] < array [minIndex] )
                { minIndex = j}
            
         };
         if (minIndex!=i) {
             var temp = array[i] ;
               array[i] = array [minIndex] ;
                 array [minIndex] =    temp;
         }
  }
  return array ;  
    
}


console.log(SelectionSort([11,4,56,2,8,7,8,9054,3,7,78,4]));


//This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.