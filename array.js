var getAllHashingLayout = function (nodes,n){
    var layout = [] ; 
    for (var i=2 ; i <= n; i++){
          layout.push(consistentHashing(nodes, i)) ; 
           console.log(consistentHashing(nodes, i));
    }
    
    return layout ;  
    
}



var consistentHashing =  function (nodes,n){
         
         var repeatSets = [] ; 
         for (var i=0 ; i<nodes.length; i++){
               repeatSets.push (getRepeatSet(nodes,i));
         };
       
        var partiTions = []; 
        for (var i=0 ; i<nodes.length; i++){
               partiTions.push(onePartition(repeatSets[i],n)) ;
         };
        
        return partiTions ;
    
    
};



var getRepeatSet = function (nodes,k){
    var reapeatSet = [] ;
          var j = 0 ; 
        for (var i =0 ; i<nodes.length ;i++){
            if (k<nodes.length)
            reapeatSet[i] = nodes[k++];
            else 
            reapeatSet[i] = nodes[j++];
            
        }
        
        
     return reapeatSet ; 
}


       
var onePartition = function (nodes,n){
      var p ="";
    if (nodes.length>n)  {  
    for (var i=0 ; i<n; i++){
               p+= nodes[i] ;
    };
    return p ; 
    }
    
     var repeats  =   Math.floor(n/nodes.length) ;
     var remainder = n%nodes.length; //debugger ;
        
    if (repeats<1)    {    
            for (var i=0 ; i<n-2; i++){     
               p+= nodes[i] ;
                 };
                for (var i=0 ; i<n-nodes.length; i++){
               p+= nodes[i] ;
                }
                return p ;
    };
    
    
    for (var i=0 ; i<repeats; i++){
               p+= nodes.toString().replace(/,/g,'') ;
    };
    for (var i=0 ; i<remainder; i++){
               p+= nodes[i] ;
    }
    
     return p ;
    
}
getAllHashingLayout(["A","B","C","D","E","F"], 8);
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



/*
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






var removeDuplicates = function(nums) {
    var newArray = [] ;    var  uni = [] ; 
    for (var i= 0;  i< nums.length ; i++){
                getUniq( nums[i], uni )
    }
    return uni ; 
};

var getUniq = function  (item, uni) {
    if (uni.indexOf(item)==-1)
       uni.push(item) ; 
}


var nums = [1,1,2];
 console.log(removeDuplicates(nums)) ; 

var remove = function (nums){
    
        if (nums.length == 0) return 0;
    var i = 0;
    for (var j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return nums ;
}



var nums = [1,1,2,2,3,4,5,6];
 console.log(remove(nums)) ; 
 
 */