!function(){function e(e){return function(r){r=r||{};var n=new a;try{r.success=n.resolve,r.fail=n.reject,wx[e](r)}catch(e){n.reject(e)}return n}}var a=require("future.js"),r=["invoke","showNavigationBarLoading","hideNavigationBarLoading","navigateBack","drawCanvas","canvasToTempFilePath","hideKeyboard","getPublicLibVersion"];module.exports={};for(var n in wx)"function"==typeof wx[n]&&r.indexOf(n)<0&&n.search(/(^(on|create|stop|pause))|((Sync)$)/)<0?module.exports[n]=e(n):module.exports[n]=wx[n]}();