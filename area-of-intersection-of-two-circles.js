{/*
    

    class Solution {
    long intersectionArea(double X1, double Y1, double R1, double X2, double Y2, double R2) {
        // Calculate the Euclidean distance between the centers
        double d = Math.sqrt((X2 - X1) * (X2 - X1) + (Y2 - Y1) * (Y2 - Y1));
        
        // Case 1: No overlap
        if (d >= R1 + R2) return 0;
        
        // Case 2: One circle is inside the other
        if (d <= Math.abs(R1 - R2)) {
            double minRadius = Math.min(R1, R2);
            return (long) Math.floor(3.14 * minRadius * minRadius);
        }
        
        // Case 3: Partial Overlap - Use the Lens Formula
        double a1 = R1 * R1 * Math.acos((d * d + R1 * R1 - R2 * R2) / (2 * d * R1));
        double a2 = R2 * R2 * Math.acos((d * d + R2 * R2 - R1 * R1) / (2 * d * R2));
        double a3 = 0.5 * Math.sqrt((-d + R1 + R2) * (d + R1 - R2) * (d - R1 + R2) * (d + R1 + R2));
        
        double area = a1 + a2 - a3;
        
        return (long) Math.floor(area); // Return the floored value
    }
}



*/}