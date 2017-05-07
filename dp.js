//https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e

function fibonacci(num, memo) {
  memo = memo || {};
   console.log(memo) ;
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}      ; 

fibonacci(9);



//http://algorithms.tutorialhorizon.com/introduction-to-dynamic-programming-fibonacci-series/  
//Top-Down Approach: 
function  fibTopDown( n) {
		if(n==0) return 1;
		if(n==1) return 1;
		if(fib[n]!=0){
			return fib[n];
		}else{
			fib[n] = fibTopDown(n-1) + fibTopDown(n-2);
			return fib[n];
		}
	}


//Bottom-Up solution for Fibonacci Series:

function fibDP( x) {
		var fib=[] ;
		fib[0] = 0;
		fib[1] = 1;
		for (var i = 2; i <x+1; i++) {
			fib[i] = fib[i - 1] + fib[i - 2];
		}
		return fib[x];
	}