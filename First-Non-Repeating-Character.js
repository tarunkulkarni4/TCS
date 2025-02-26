{/*
Question: Given a string s, find the first non-repeating character and return its index (0-based). If all characters repeat, return -1.

Input: "loveleetcode"
Output: 2

Explanation: The first non-repeating character is 'v' at index 2.


    Using Map:

    import java.util.*;

public class Solution {
    
    public static int firstUniqChar(String s) {
        Map<Character, Integer> freq = new HashMap<>();

        // Step 1: Count frequency of each character
        for (char c : s.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        // Step 2: Find the first non-repeating character
        for (int i = 0; i < s.length(); i++) {
            if (freq.get(s.charAt(i)) == 1) {
                return i; // Return first unique character's index
            }
        }
        return -1; // No unique character found
    }

    public static void main(String[] args) {
        String s = "loveleetcode";
        System.out.println(firstUniqChar(s)); // Output: 2
    }
}

*/}