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

function partitionLayout (array , n){
    var tDarray = [];
    for (var i = 0 ;  i < array.length ; i ++) {
          var tempArray = [] ; 
         if (i<array.length){
				tempArray.push(array[i]); tempArray.push(array[i+1])	;
				 tDarray.push(tempArray);
		}
		 
		 else  console.log('exeeeced');
	}
		var layout ="";
	for (var i = 0 ; i <n ; i++ ){
		 for (var j = 0 ; j <tDarray[0][j] ; j++)
         {layout += tDarray[0][j] + "  | " ; }
		console.log (layout);
	}

}

/*
A, B, C, D, E, F
N=2 : AB,      BC,      CD,       DE,       EF,       FA,
N=3 : ABC,     BCD ,    CDE,      DEF,      EFA,      FAB 
N=4 : ABCD,    BCDE,    CEDF,     DEFA,     EFAB,     FABC
N=5 : ABCDE,   BCDEF,   CDEFA ,   DEFAB ,   EFABC,    FABCD
N=6 : ABCDEF,  BCDEFA,  CDEFAB,   DEFABC,   EFABCD,   FABCDE

N=7 : ABCDEFA, BCDEFAB, CDEFABC,  DEFABCD,  EFABCDE,  FABCDEF 
N=8 : ABCDEFAB,BCDEFABC,CDEFABCD, DEFABCDE, EFABCDEF, FABCDEFA   

*/