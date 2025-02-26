{/*
    
    Palindrome

You are given an integer n. Your task is to determine whether it is a palindrome.

A number is considered a palindrome if it reads the same backward as forward, like the string examples "MADAM" or "MOM".

Examples:

Input: n = 555
Output: true
Explanation: The number 555 reads the same backward as forward, so it is a palindrome.
Input: n = 123
Output: false
Explanation: The number 123 reads differently backward (321), so it is not a palindrome.
Input: n = 1221
Output: true

                            
public class Main {

    // Function to check if a
    // given integer is a palindrome
    static boolean palindrome(int n) {
        // Initialize a variable to
        // store the reverse of the number
        int revNum = 0;
        // Create a duplicate variable to
        // store the original number
        int dup = n;
        // Iterate through each digit of
        // the number until it becomes 0
        while (n > 0) {
            // Extract the last
            // digit of the number
            int ld = n % 10;
            // Build the reverse number
            // by appending the last digit
            revNum = (revNum * 10) + ld;
            // Remove the last digit
            // from the original number
            n = n / 10;
        }
        // Check if the original number
        // is equal to its reverse
        if (dup == revNum) {
            // If equal, return true
            // indicating it's a palindrome
            return true;
        } else {
            // If not equal, return false
            // indicating it's not a palindrome
            return false;
        }
    }

    public static void main(String[] args) {
        int number = 4554;

        if (palindrome(number)) {
            System.out.println(number + " is a palindrome.");
        } else {
            System.out.println(number + " is not a palindrome.");
        }
    }
}
                            
                        

*/}