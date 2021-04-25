


export const ProcessNew =(pre,cur)=>{
    if(pre === 'undefined' || cur === 'undefined')  return // stop operation if either value is undefined
     return new Promise((resolve,reject)=>{
        const list = []
        const keys = pre?.length ? Object.keys(pre[2]) : null
          const hasNumber = (myString)=>{
            return /\d/.test(myString);
          } 
            cur?.forEach(cont =>{
                pre?.forEach(emp =>{
                    keys?.forEach(key =>{
                    if(emp.Name === cont.Name && key.includes('Account')){
                        cont[key] = emp[key]
                    }else if(!cont[key] && hasNumber(key)) {cont[key] = cont['Total']}
                        
                    })
                    
        })
        list.push(cont)
    })
       
        resolve(list)
    reject('error')
    })
}

   