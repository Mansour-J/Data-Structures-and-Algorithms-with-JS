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
		var timeInMsB =  new Date().getTime() / 1000000 ;  
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
  	var timeInMsE =  new Date().getTime() / 1000000 ;
  	console.log	 (timeInMsE-timeInMsB) ; 
  	
  return array ;  
    
}


//console.log(InsertionSort([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]));


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


//console.log(SelectionSort([11,4,56,2,8,7,8,9054,3,7,78,4]));


//This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.



function mergeSort( array)
// pre: array is full, all elements are valid integers (not null)
// post: array is sorted in ascending order (lowest to highest)
{
	// if the array has more than 1 element, we need to split it and merge the sorted halves
	if(array.length > 1)
	{
		// number of elements in sub-array 1
		// if odd, sub-array 1 has the smaller half of the elements
		// e.g. if 7 elements total, sub-array 1 will have 3, and sub-array 2 will have 4
		var elementsInA1 = array.length/2;
		// since we want an even split, we initialize the length of sub-array 2 to
		// equal the length of sub-array 1
		var elementsInA2 = elementsInA1;
		// if the array has an odd number of elements, let the second half take the extra one
		// see note (1)
		if((array.length % 2) == 1)
			elementsInA2 += 1;
		// declare and initialize the two arrays once we've determined their sizes
		 var arr1 =[] ;//new Array (elementsInA1);   //debugger ; 
		 var arr2= [];//new Array(elementsInA2);
		// copy the first part of 'array' into 'arr1', causing arr1 to become full
		for(var i = 0; i < elementsInA1; i++)
			arr1[i] = array[i];
		// copy the remaining elements of 'array' into 'arr2', causing arr2 to become full
		for(var i = elementsInA1; i < elementsInA1 + elementsInA2; i++)
			arr2[i - elementsInA1] = array[i];
		// recursively call mergeSort on each of the two sub-arrays that we've just created
		// note: when mergeSort returns, arr1 and arr2 will both be sorted!
		// it's not magic, the merging is done below, that's how mergesort works :)
		arr1 = mergeSort(arr1);
		arr2 = mergeSort(arr2);
		
		// the three variables below are indexes that we'll need for merging
		// [i] stores the index of the main array. it will be used to let us
		// know where to place the smallest element from the two sub-arrays.
		// [j] stores the index of which element from arr1 is currently being compared
		// [k] stores the index of which element from arr2 is currently being compared
		var i = 0, j = 0, k = 0;
		// the below loop will run until one of the sub-arrays becomes empty
		// in my implementation, it means until the index equals the length of the sub-array
		while(arr1.length != j && arr2.length != k)
		{
			// if the current element of arr1 is less than current element of arr2
			if(arr1[j] < arr2[k])
			{
				// copy the current element of arr1 into the final array
				array[i] = arr1[j];
				// increase the index of the final array to avoid replacing the element
				// which we've just added
				i++;
				// increase the index of arr1 to avoid comparing the element
				// which we've just added
				j++;
			}
			// if the current element of arr2 is less than current element of arr1
			else
			{
				// copy the current element of arr1 into the final array
				array[i] = arr2[k];
				// increase the index of the final array to avoid replacing the element
				// which we've just added
				i++;
				// increase the index of arr2 to avoid comparing the element
				// which we've just added
				k++;
			}
		}
		// at this point, one of the sub-arrays has been exhausted and there are no more
		// elements in it to compare. this means that all the elements in the remaining
		// array are the highest (and sorted), so it's safe to copy them all into the
		// final array.
		while(arr1.length != j)
		{
			array[i] = arr1[j];
			i++;
			j++;
		}
		while(arr2.length != k)
		{
			array[i] = arr2[k];
			i++;
			k++;
		}
	}
	// return the sorted array to the caller of the function
	return array;
}

//console.log(mergeSort([7,1,2,3,4,6]));

function shellSort( array) {
	var timeInMsB = Date.now();
	 var interval =1  ;    // debugger ; 
	 while (interval < array.length/3){   
	 	 interval = interval*3 +1 ;   //   Knuth's Formula   
	 	// console.log(interval);
	 } ;
	 
	 while (interval>0){
	 	for (var i = interval ; i < array.length ; i++){
	 	     var inserting = array[i]; 
	 	     var  j = i ; 
	 		 while (j > interval-1 && array[j-interval] >= inserting){
	 	                    array[j]= array[j-interval];
	 	                    j= j -interval ; 
	         } ;
	         array[j] = inserting ;  
	 	
	    };
	    
	    interval = (interval -1) /3 ;  
	 }
	
	var timeInMsE = Date.now();
	console.log(timeInMsE-timeInMsB) ;
	return array;
	
};

console.log(shellSort([100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]));

