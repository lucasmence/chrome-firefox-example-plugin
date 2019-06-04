document.addEventListener("click", function(e) {
    if (!e.target.classList.contains("button")) {
      return;
    }

    var resultado = document.createElement('textarea');

    resultado.value = null;

    function onExecuted(result) {
      alert("Finished!");
    }

    
    //exemplo colocando borda azul no body da pagina
    var javascriptCommandArrayList = [
      'document.body.style.border = "5px solid blue"'
    ];
  
    //executando o comando no chrome e dps no firefox (browser)
    if (chrome) {

      for (let index = 0; index < javascriptCommandArrayList.length; index++) {
        var code = javascriptCommandArrayList[index];

        var executing = chrome.tabs.executeScript({
          code
        },onExecuted);   
      }

    } else if (browser) {

      for (let index = 0; index < javascriptCommandArrayList.length; index++) {
        var code = javascriptCommandArrayList[index];

        var executing = browser.tabs.executeScript({
          code
        });
        executing.then(onExecuted, null);  
      }

    }
      
  });


  