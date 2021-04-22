import xlsx from 'xlsx';

export const processFile= (file,heading)=>{
    if(!file) return
     return new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file)
    fileReader.onload = (e)=>{
      const arrayBuffer = e.target.result
      const wb = xlsx.read(arrayBuffer,{type:'buffer'});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = xlsx.utils.sheet_to_json(ws,{ header: heading,blankrows: false,defval:null});
      resolve(data)
    }
     
     fileReader.onerror = (error)=>{
          reject(error)
        }

   
}) 


}