{/*

    Example
Example 1:
Number: 378
Sum of digits: 3 + 7 + 8 = 18
Since 18 is divisible by 9, 378 is also divisible by 9.




    // Java program to find if a number is 
// divisible by 9 or not 
import java.io.*; 
class IsDivisible 
{ 
	// Function to find that number 
	// is divisible by 9 or not 
	static boolean check(String str) 
	{ 
		// Compute sum of digits 
		int n = str.length(); 
		int digitSum = 0; 
		for (int i=0; i<n; i++) 
			digitSum += (str.charAt(i)-'0'); 
	
		// Check if sum of digits is divisible by 9. 
		return (digitSum % 9 == 0); 
	} 

	// main function 
	public static void main (String[] args) 
	{ 
		String str = "99333"; 
		if(check(str)) 
			System.out.println("Yes"); 
		else
			System.out.println("No"); 
	} 
} 


*/}