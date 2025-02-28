{/*


Perfect Number
Last Updated : 14 Feb, 2025
A number is a perfect number if is equal to sum of its proper divisors, that is, sum of its positive divisors excluding the number itself. Write a function to check if a given number is perfect or not. 
Examples: 

Input: n = 15
Output: false
Divisors of 15 are 1, 3 and 5. Sum of divisors is 9 which is not equal to 15.

Input: n = 6
Output: true
Divisors of 6 are 1, 2 and 3. Sum of divisors is 6.

    // Function to check if the number is perfect
public class PerfectNumber {
    static boolean isPerfect(int n) {
        int sum = 0;
        for (int i = 1; i < n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }
        return sum == n;
    }

    public static void main(String[] args) {
        int n = 28;
        if (isPerfect(n))
            System.out.println(n + " is a perfect number.");
        else
            System.out.println(n + " is not a perfect number.");
    }
}

    
*/}