{/*

Question: Find a Subarray with a Given Sum
Problem Statement:
Given an array of non-negative integers and a target sum, find the smallest contiguous subarray that sums up to the target. Return the 1-based start and end indices of the subarray. If no such subarray exists, return [-1].

Example 1
Input:


arr = [1, 2, 3, 4, 5]  
target = 7  
Output:
[3, 4]  
Explanation:
The subarray [3, 4] (1-based index [3, 4]) sums to 7.


    Brute Force:

    import java.util.*;

public class Solution {
    
    public static int[] findSubArray(int[] arr, int target) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += arr[j];
                if (sum == target) {
                    return new int[]{i + 1, j + 1}; // Returning 1-based indices
                }
            }
        }
        return new int[]{-1};
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 0, 3, 4, 5};
        int target = 7;
        System.out.println(Arrays.toString(findSubArray(arr1, target)));
    }
}



                               OR

    Sliding window:

    import java.util.*;

public class Solution {

    public static int[] findSubArray(int[] arr, int target) {
        int left = 0, sum = 0;
        
        for (int right = 0; right < arr.length; right++) {
            sum += arr[right];

            // Shrink the window if the sum exceeds the target
            while (sum > target && left <= right) {
                sum -= arr[left];
                left++;
            }

            // If the sum matches the target, return 1-based indices
            if (sum == target) {
                return new int[]{left + 1, right + 1};
            }
        }
        return new int[]{-1}; // No valid subarray found
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 0, 3, 4, 5};
        int target = 7;
        System.out.println(Arrays.toString(findSubArray(arr1, target)));
    }
}


    */}