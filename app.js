//Modules.
var tesseract = require("node-tesseract");
var execc = require('child_process').exec;
var fs = require('fs');
//Variables.
var ImgPathAndName = __dirname + '/images/ocr-test.tiff';
var TxtPathNameExtension = __dirname + '/images/ocr-test.txt';
console.log("Recebendo Imagem do Scanner");

//Salva imagem do Scanner na pasta.
execc("scanimage --format tiff > " + ImgPathAndName, function(error, stdout, stderr){
		console.log("Imagem Recebida. Realizando OCR ... ");
		//OCERIZA (termo by Marcelo de PE) a imagem.
		tesseract.process(ImgPathAndName, function(err,text){
			if(err){
			console.log(err);
			}else{
			fs.writeFile(TxtPathNameExtension, text, function(errFs){
				if(errFs){			
					console.log(errFs);
				}
	console.log("OCR Finalizado com sucesso!");

});
			
		
			}	
}); 

if(error != null){
	console.log(error);
}
});





