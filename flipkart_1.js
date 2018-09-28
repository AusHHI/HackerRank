class Result {

    /*
     * Complete the 'maxShared' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts WEIGHTED_INTEGER_GRAPH friends as parameter.
     */

    /*
     * For the weighted graph, <name>:
     *
     * 1. The number of nodes is <name>Nodes.
     * 2. The number of edges is <name>Edges.
     * 3. An edge exists between <name>From[i] and <name>To[i]. The weight of the edge is <name>Weight[i].
     *
     */

    public static int maxShared(int friendsNodes, List<Integer> friendsFrom, List<Integer> friendsTo, List<Integer> friendsWeight) {
               int arr = new int[friendsNodes][friendsNodes];
               for(int i=0; i< friendsNodes; i++){
                   for(int j=0; j< friendsNodes; j++){
                       int row = friendsFrom.get(i);
                       int col = friendsTo.get(i);
                       arr[row][col]= friendsWeight.get(i);
                   }
               }
               HashMap<Integer,Integer,Integer> hmap = new HashMap<Integer, Integer, Integer>();
               for(int i=0; i<arr.length ;i++){
                   count = 0;
                   for(int j=0; j<arr.length; j++){
                        if(arr[i][j]>0){
                           count ++; 
                        }
                      hmap(count, arr[i][j], i*j); 
                   }  
               }
        hmap.sort();
        return hmap.get(0);
    }

}

