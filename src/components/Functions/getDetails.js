

export const getDetails = (values)=>{
    return new Promise((resolve,reject)=>{
       const contribution =  values.map(value=>{
            return value
        })
        resolve(contribution)
        if(!values) throw new Error()
        reject(Error)
    })
}