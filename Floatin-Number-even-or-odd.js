{/*

    Floating point number even or odd

Given a floating point number in string format s, check whether it is even or odd.
 

Example 1:

Input: 
n = 4
s = 97.8
Output: EVEN
Explanation: 8 is even number.

Example 2:

Input:
n = 6
s = 100.70
Output: ODD
Explanation: Trailing 0s after dot do not matter.

Your Task:  
You don't need to read input or print anything. Your task is to complete the function isEven() which accepts a string s(floating point number) and the integer n(denotes the length of the string s) as input parameter and returns a boolean value.

 
Expected Time Complexity: O(n)
Expected Auxiliary Space: O(1)

// User function Template for Java
class Solution {
    boolean isEven(String s, int n) {
        // Remove trailing zeros after the decimal
        s = s.replaceAll("0+$", "");

        // Find the last non-zero digit
        int i = s.length() - 1;
        while (i >= 0 && s.charAt(i) == '.') {
            i--;  // Skip the decimal point
        }
        
        char lastDigit = s.charAt(i);
        
        // Check if the last digit is even
        return (lastDigit - '0') % 2 == 0;
    }
}

}

*/}