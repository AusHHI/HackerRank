/*
 * Complete the 'countSentences' function below.
 *
 * The function is expected to return a LONG_INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY wordSet
 *  2. STRING_ARRAY sentences
 */

function countSentences(wordSet, sentences) {
    // Write your code here
    var count =0;
    for(var i=0; i<sentences.length; i++){
         var temp = [];
        var res = sentences[i].split(" ");
        for(var i in res){
            for(var j in wordSet){
                if(res[i]===wordSet[j]){
                    count++;
                }
            }
         }
        temp.push(count);
    }
    var res = [];
    for(var i=0; i<temp.length; i++){
        res[i]= 2* temp[i];
    }
    return res[i];
}

