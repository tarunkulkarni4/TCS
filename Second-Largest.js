{/*

    class Solution {
    int getSecondLargest(int[] arr) {
        int n = arr.length;

        // If there are fewer than two elements, return -1 (as there is no second largest)
        if (n < 2) {
            return -1;
        }

        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        // Traverse the array to find the largest and second largest elements
        for (int i = 0; i < n; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;  // Update second largest
                largest = arr[i];  // Update largest
            } else if (arr[i] > secondLargest && arr[i] != largest) {
                secondLargest = arr[i];  // Update second largest if it's smaller than largest
            }
        }

        // If no second largest element exists (all elements are the same), return -1
        return (secondLargest == Integer.MIN_VALUE) ? -1 : secondLargest;
    }
}




    
*/}