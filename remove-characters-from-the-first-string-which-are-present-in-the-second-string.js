{/*

    Remove characters from the first string which are present in the second string
Last Updated : 13 Jul, 2023
Given two strings string1 and string2, remove those characters from the first string(string1) which are present in the second string(string2). Both strings are different and contain only lowercase characters.
NOTE: The size of the first string is always greater than the size of the second string( |string1| > |string2|).

Example:


Input:
string1 = “computer”
string2 = “cat”
Output: “ompuer”
Explanation: After removing characters(c, a, t)
from string1 we get “ompuer”.


Input:
string1 = “occurrence”
string2 = “car”
Output: “ouene”
Explanation: After removing characters
(c, a, r) from string1 we get “ouene”.


import java.util.HashSet;

class Solution {
    static String removeChars(String string1, String string2) {
        // Step 1: Store characters of string2 in a HashSet
        HashSet<Character> set = new HashSet<>();
        for (char ch : string2.toCharArray()) {
            set.add(ch);
        }

        // Step 2: Build the new string without characters from set
        StringBuilder result = new StringBuilder();
        for (char ch : string1.toCharArray()) {
            if (!set.contains(ch)) {
                result.append(ch);
            }
        }

        return result.toString();
    }

    public static void main(String[] args) {
        // Example Test Cases
        System.out.println(removeChars("computer", "cat"));    // Output: "ompuer"
        System.out.println(removeChars("occurrence", "car"));  // Output: "ouene"
    }
}

*/}