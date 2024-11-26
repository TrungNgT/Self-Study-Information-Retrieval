const La = [1, 2, 3, 5, 6, 12, 80, 98, 106];
const Lb = [3, 5, 7, 9, 12, 15, 17, 90, 94, 96, 98, 100, 102, 104, 105, 110];
var res = [];

const AND_2_list = () => {
    const la = La.length;
    const lb = Lb.length;
    console.log(la + ' ' + lb);
    var i = 0;
    var j = 0;
    
    while (i != la && j != lb) {
        if (La[i] == Lb[j]) {
            res.push(La[i]);
            i++;
            j++;
        }
        else if (La[i] < Lb[j])
            i++;
        else 
            j++;
    }

    for (var c = 0; c < res.length; c++)
        console.log(res[c]);
}

const OR_2_list = () => {
    const la = La.length;
    const lb = Lb.length;
    console.log(la + ' ' + lb);
    var i = 0;
    var j = 0;
    
    while (i != la || j != lb) {
        if (La[i] != Lb[j]) {
            if (La[i] < Lb[j]) {
                res.push(La[i]);
                i++;
            }
            else {
                res.push(Lb[j]);
                j++;
            }
        }
        else {
            i++;
        }
    }

    for (var c = 0; c < res.length; c++)
        console.log(res[c]);
}

// OR_2_list();

AND_2_list();
