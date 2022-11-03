import './App.css';
import ExportExcelToJson from './components/ExcelExportToJson';

function App() {
  const excelExportData =[
    
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
  
    },
  ]
  return (
   <div>
    <h1 style={{marginTop :'20%'}}>Export To Excel</h1>
    <ExportExcelToJson excelData={excelExportData} fileName={"Export Excel"}/>
   </div>
    
  );
}

export default App;
