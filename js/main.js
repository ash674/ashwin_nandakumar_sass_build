(() =>
 {
  fetch ('./data/classData.json')
  .then(res => res.json())

  .then(data => {console.log(data)
handleDataSet(data)})
function handleDataSet(data){
    
       for(let user in data){
        let  panelText = document.querySelector(".profPanelText"),  
        panelTextInner = panelText.children;
        
        
        panelTextInner[0].textContent = classData.coursename + classData.coursecode;
        panelTextInner[1].textContent = classData.profname;
         //   panelTextInner[2].textContent = classData.coursecode;
             panelTextInner[2].innerHTML = classData.classtime;
       }
   }
   
})();