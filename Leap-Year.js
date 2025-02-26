{/*
    Leap Year

You are given an Integer n. Return true if It is a Leap Year otherwise return false.

Examples:

Input: n = 4
Output: true
Explanation: 4 is not divisible by 100 and is divisible by 4 so its a leap year
Input: n = 2021
Output: false
Explanation: 2021 is not divisible by 100 and is also not divisible by 4 so its not a leap year



    class Solution {
    static boolean isLeap(int n) {
        return (n % 400 == 0) || (n % 4 == 0 && n % 100 != 0);
    }

    public static void main(String[] args) {
        int year = 2000;  // Change this for different test cases
        System.out.println(isLeap(year));  // Expected Output: true
    }
}


*/}