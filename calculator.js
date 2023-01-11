function btnClick(val){
    document.getElementById("screen").value+=val
  }
  
  
  function clearOut(){
   document.getElementById("screen").value="" 
  }
  
  function resultDisplay(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById('screen').value=result
  }