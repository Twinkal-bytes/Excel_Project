import XLSX from 'sheetjs-style'
import FileSaver from 'file-saver';

const ExportExcelToJson  = ({excelData, fileName})=>
{
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx'

    const ExportExcelToJson = async()=>
    {
        const ws = XLSX.utils.json_to_sheet(excelData)
        const wb = {Sheets: {'data':ws},SheetNames: ['data']}
        const excelBuffer = XLSX.write(wb,{bookType:'xlsx',type:'array'})
        const data = new Blob ([excelBuffer],{type:fileType})
        FileSaver.saveAs(data,fileName + fileExtension)
    }

    return(
        <>
            <button variant='contained'
            onClick={(e)=>ExportExcelToJson(fileName)} color="primary"
            style={{cursor:"pointer", fontSize:14}}>
                Excel Export
            </button>
        </>
    )
}
export default ExportExcelToJson