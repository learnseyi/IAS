// import React from 'react'
import xlsx from 'xlsx';


export const Processed = (newsch)=>{
    const fileName = 'test.xlsx';
    const ws = xlsx.utils.json_to_sheet(newsch)
    console.log(ws)
    const wb = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb, ws, 'test');
	const newBook = xlsx.writeFile(wb, fileName);
    console.log(newBook)
}