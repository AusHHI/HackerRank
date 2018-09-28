import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
    static int count = 0;
    // Complete the minimumSwaps function below.
    static int minimumSwaps(int[] arr) {
            int min = arr[0];
            int pos =0;
            int count=0;
            int high = arr.length;
            for(int i=0;i<high-1;i++){
                pos=i;
                min=arr[i];
                for(int j=i+1;j<=high-1;j++){
                    if(min>arr[j]){
                        pos = j;
                        min = arr[j];
                    }
                }
                if(pos!=i){
                    int temp;
                    temp=arr[i];
                    arr[i]=arr[pos];
                    arr[pos]=temp;
                    count++;
                }
            }
             return count;
    }
     
    // static int quickSort(int[] arr, int low,int high){
    //     int j =0;
//         if(low<high){
//              j= partition(arr, low, high);
//              count = quickSort(arr, low, j-1);
//              count = quickSort(arr, j+1, high);
//         }
       
//         return count;
//     }
     
    // static int partition(int []arr, int low, int high){
    //     int p = arr[low];
    //     int i = low;
    //     int j = high;
    //     while(i<j){
    //         while((arr[i]<=p)&&(i<high)){
    //             ++i;
    //         }
    //         while(arr[j]>p){
    //             --j;
    //         }
    //         if(i<j){
    //             count = swap(arr,i,j);
    //         }
    //     }
    //         arr[i]=arr[j];
    //         arr[j]=p;
    //         return j;
    // }
    // static int swap(int []arr,int i,int j){
    //     int temp;
    //     temp =arr[i];
    //     arr[i]=arr[j];
    //     arr[j]=temp;
    //     return count++;
    // }
    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        int res = minimumSwaps(arr);

        bufferedWriter.write(String.valueOf(res));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
