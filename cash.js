function checkCashRegister(price, cash, cid)

{
    console.log("working")
    let curr=[0.01,0.05,0.1,0.25,1,5,10,20,100]
    console.log(cid)
   // let filterCid=cid.filter(elam=>elam[1]!==0)
    let cidTotal=Math.round(cid.reduce((total,curr)=>curr[1]+total,0))
    console.log("cidTotal : "+cidTotal.toFixed(2))
    let change=((cash*100)-(price*100)).toFixed(2)/100
    console.log("change : "+change)

    let result=[
        ['PENNY',0],['NICKEL',0],['DIME',0],['QUARTER',0],['ONE',0],['FIVE',0],['TEN',0],['TWENTY',0],['ONE HUNDRED',0]
    ]

    //console.log(result[0])

    function getChange()
    {
        //console.log(cid[5][1] +"     "+curr[5])
        
       // console.log("getting change...")
        for(let i=7;i>=0;i--)
        {
            if(change>=curr[i] && cid[i][1]>=curr[i])
            {
               // console.log(change)
                change=(change-curr[i]).toFixed(2)
               // console.log("change reduced ... "+change)
                cid[i][1]=cid[i][1]-curr[i]
               // console.log('cid[i] reduced to '+cid[i][1])
                result[i][1]+=curr[i]
                //console.log("----------------")
                getChange(change)
            }
        }
        
    }
    
    let answer={status:"",
    change:[]}

    if(cidTotal<change)
    {
        console.log("INSUFFICIENT_FUNDS")
        answer.status="INSUFFICIENT_FUNDS"
        answer.change=[]
    }
    else if(cidTotal==change)
    {
        console.log("CLOSED")
        answer.status="CLOSED"
    }
    else if(cidTotal>change)
    {
        console.log("OPEN")
        answer.status="OPEN"
        getChange(change)
        let out=result.filter(elem => elem[1]>0)
        console.log(out)
        answer.change=out
        
    }

    console.log(answer)
    return answer
}



checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

