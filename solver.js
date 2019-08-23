var terms = process.argv[2].split(" = ")[0].split(" + ");
var leftTerm = terms[0]

function depth(term){
        var maxDepth = 0
        var currentDepth = 0
        for(var i = 0; i < term.length; i++){
                if(term[i]==="("){
                        currentDepth++;
                        if(currentDepth > maxDepth){
                                maxDepth = currentDepth;
                        }
                }
                else{currentDepth--}
        }
        return maxDepth
}


for(var i=1; i< terms.length; i++){
        var rightTerm = terms[i];
        var leftDepth = depth(leftTerm);
        var rightDepth = depth(rightTerm);
        if(leftDepth > rightDepth){
                leftTerm = leftTerm.substr(0,leftTerm.length-1) + rightTerm + ")";
                continue;
        } else if(rightDepth > leftDepth){
                leftTerm = "(" + leftTerm + rightTerm.substr(1);
                continue;
        } else if(leftDepth === rightDepth){
                leftTerm = leftTerm + rightTerm
        }
}

console.log("RESULT:", leftTerm);
