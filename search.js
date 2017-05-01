function  BinarySearch( array, element){ 
      var upper = array.length ;  
      var lower = 0;
      var found = false ; 
      while (!found ){
          var mid = lower + Math.floor((upper-lower)/2);
          if (upper < lower){
              return element + "does not exist"
          } else if ( array[mid] > element  ){
                upper =   mid -1 ;
              
          }else if ( array[mid] < element  ){
                    lower =    mid +1 ;
          }else if (array[mid] ==element){
                     found = true ; 
              return  element + "does  exist at " + mid ;
          }
          
          
      }
      
    
}

//var array = [10,20,30,40,50];


//console.log(BinarySearch(array, 50));



function  InterpolationSearch( array, element){ 
      var upper = array.length-1 ;  
      var lower = 0;
      var found = false ; 
      while (!found ){
          var mid = lower +  (upper-lower)/(array[upper]-array[lower])*(element-array[lower]) ;
          if (upper == lower || array[upper]==array[lower]){
              return element + "does not exist"
          } else if ( array[mid] > element  ){
                upper =   mid -1 ;
              
          }else if ( array[mid] < element  ){
                    lower =    mid +1 ;
          }else if (array[mid] ==element){
                     found = true ; 
              return  element + "does  exist at " + mid ;
          }
          
          
      }
      
    
}
            
var array2 = [10,20,30,40,50];


console.log(InterpolationSearch(array2, 40));