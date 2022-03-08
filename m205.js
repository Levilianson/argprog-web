function FBoton(){
    var uno = document.getElementById('botfunc');
    if (uno.innerHTML == 'off')
        uno.innerHTML = 'on';
    else uno.innerHTML = 'off'
};

function cambiar_parrafo(){
    document.getElementById("edit-acercade").style.display="block";
    let texto = document.getElementById("text-acercade").innerText;
    console.log(texto);
};
function myfunction2(valor){
    document.getElementById("text-acercade").innerText=valor;
};

function logMessage(message){
    console.log(message + "<br>");
}

//enter
let textarea=document.getElementById("edit-acercade")
textarea.addEventListener('keyup',(e)=>{
    logMessage('Key "${e.key}" released [event: keyup]');
    if (e.key=="Enter"){
        document.getElementById("edit-acercade").style.display="none"                
    }
});
//cambia el archivo del contenido de texto
function showFile(input){
    let file = input.files[0];
    alert('File name: $(file.name)');
    alert('Last modifield: $(file.lastmodified)');

    let reader = new fileReader();
    reader.readAsText(file);
    reader.onload = function(){
        console.log(reader.result);
        document.getElementById("text-acercade").innerText=reader.result;
    };
    reader.onerror = function(){
        console.log(reader.error);
    };
};