// October 6, 2017 -- Matrix Search (pg.91[version 1.1.1])
function matrixFind(bigM, smallM) {
    for(let br = 0; br < bigM.length-smallM.length+1; br++){
        for(let bc = 0; bc < bigM[br].length; bc++){
            let found = true;
            let location = [-1,-1];
            for(let sr = 0; sr < smallM.length; sr++){
                for(let sc = 0; sc < smallM[sr].length; sc++){
                    if(bigM[br+sr].length <= bc + sc || bigM[br+sr][bc+sc] != smallM[sr][sc]){
                        found = false;
                        break;
                    }
                    else if(sr == 0 && sc == 0){
                        location =[br,bc]
                    } 
                }
            if(!found){
                break
            }
            }
            if(found){
                return location;
            }
        }
    }
    let arr = [-1,-1]
    return arr
}
// Test Case
// let x = [ 
//     [12,34,45,56],
//     [98,87,76,65],
//     [56,67,78,89],
//     [54,43,32,21]
// ]
// let y = [ 
//     [67,78],
//     [43,32]
// ]

// console.log(matrixFind(x,y))

// October 10, 2017 -- SList: Reverse (pg. 96[version 1.1.1])

this.reverse = function(){
    if(!this.head) return this
    let runner = this.head
    let prev;
    while(runner){
        this.head = runner.next
        if(!prev){
            runner.next = null
            prev = runner
            runner = this.head
        }
        else {
            runner.next = prev
            prev = runner
            runner = this.head
        }
    }
    this.head = prev
    return this
}

// October 10, 2017 -- SList: Has Loop (pg. 98[version 1.1.1])

function hasloop(SList){
    let slowRunner = this.head
    let fastRunner = this.head
    while(fastRunner){
        if(!fastRunner.next || !fastRunner.next.next){
            return false
        }
        slowRunner = slowRunner.next
        fastRunner = fastRunner.next.next
        if(slowRunner === fastRunner){
            return true
        }
    }
    return false
}

// October 18, 2017 -- Flood Fill (pg.103[version1.1.1])

function floodFill (Canvas2D, StartXY, NewColor){
    let row = StartXY[0]
    let col = StartXY[1]
    function rfloodFill(c2d, row, col, old, New){
        if(c2d[row][col] !== old) return;
        c2d[row][col] = New;
        rfloodFill(c2d, row-1, col, old, New)
        rfloodFill(c2d, row+1, col, old, New)
        rfloodFill(c2d, row, col-1, old, New)
        rfloodFill(c2d, row, col+1, old, New)
        }
        
    rfloodFill(Canvas2D, row, col, Canvas2D[row][col], NewColor)
}