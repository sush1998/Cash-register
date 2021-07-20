const curr=[0.01,0.05,0.1,0.25,1,5,10,20,100]

function check(price, cash, cid)
{
    let filterCid=[]
    let cidTotal=cid.reduce((total,elem)=>total+elem[1],0)
    cidTotal=cidTotal.toFixed(2)
    console.log("Total : "+cidTotal)
    let change=cash-price
    console.log('Change : '+change)

    for(let i=0;i<cid.length;i++)
    {
        if(cid[i][1]!==0)
        {
            filterCid.push([cid[i],curr[i]])
        }
    }
   // console.log(filterCid)
    function chan(change)
    {
        
        for(let i=filterCid.length-1;i>0;i--)
        {
            
            //console.log(filterCid[i][1]+"     "+filterCid[i][0][1])
            if(change>=filterCid[i][1] && filterCid[i][0][1]>=filterCid[i][1])
            {
                if(change<0.00)
                {
                console.log("change ZERO");
                return false;
                }
               change=change-filterCid[i][1]
               change=change.toFixed(2)
               console.log("Change reduced to ... "+change)
               filterCid[i][0][1]=(filterCid[i][0][1] - filterCid[i][1]).toFixed(2)
              // filterCid[i][0][1]=filterCid[i][0][1].toFixed(2)
               console.log(filterCid[i][0][0]+" reduced to  : "+filterCid[i][0][1])
               chan(0.14)
            }
        }
    }

    if(change>cidTotal)
    {
        console.log("INSUFFICIENT_FUNDS")
    }
    else if(change==cidTotal)
    {
        console.log("CLOSED")
    }
    else if(change<cidTotal)
    {
        console.log("OPEN")
        chan(change)
    }
}



check(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])