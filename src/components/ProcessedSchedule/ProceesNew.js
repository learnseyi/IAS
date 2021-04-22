

// const hasTotal = (label)=>{
//     return label.includes('Total')
// }

// const hasNumber = (myString)=>{
//     return /\d/.test(myString);
//   }
  
// const getContribution =(empList)=>{
// const contributionList = []
// empList?.slice(2).map(list =>{
//     if(hasNumber(Object.keys(list))){
//         contributionList.push({'name':list.Name,'contribution':[list.Total,list['Total-1']]})
//     }
    
// })
// return contributionList
// }


// const createnewWb = (pre,cur,contribution)=>{
//     const contrib = contribution(pre)
//     console.log('contrib is:',contrib)
//     pre?.forEach(emp =>{
//         contrib?.forEach(cont =>{
//             if(emp.Name === cont.name){
//                 console.log({"name":emp.Name,"contribution":cont.contribution})
//                 console.log(emp)
//             }
//         })
//     })
// }
// createnewWb(pre.value,getContribution)

export const ProcessNew =(pre,cur)=>{
    if(pre === 'undefined' || cur === 'undefined')  return
     return new Promise((resolve,reject)=>{
        const hasNumber = (myString)=>{
            return /\d/.test(myString);
          }
        const getContribution =(empList)=>{
            const contributionList = []
            empList?.slice(2).map(list =>{
                if(hasNumber(Object.keys(list))){
                    contributionList.push({'name':list.Name,'contribution':[list.Total,list['Total-1']]})
              }
              return contributionList
        })
        resolve(contributionList)
    }
    getContribution(pre,cur)
    reject('error')
    })
}
   