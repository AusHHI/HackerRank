// Complete the electionWinner function below.
function electionWinner(votes) {
    var model={};
    var temp=[];
     for(var i=0; i<votes.length-1; i++){
         var count = 0;
         for(var j=i+1; j<votes.length; j++){
              if(votes[i]===votes[j]){
                  model.name = votes[i];
                  model.count = count++;
              }
         }
         temp.push(model);
     }
     
     var byName = temp.sort(model.name);
     var byCount = temp.sort(model.count);
     var max = 0;
     for(var i=0; i<temp.length; i++){
         if(max < temp[i].model.count){
             max = temp[i].model;
         }else{
             max= byName[byName.length-1].model;
         }
     }
     return max.name;

}

