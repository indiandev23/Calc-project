
function clearField(v){
	let field=document.getElementById("input");
	field.value=' ';
}
function evalAndSetAnswer(){
	let field=document.getElementById("input");
	let value=field.value;
	if(value.indexOf('^')==-1)
	{}
	else{
		mathPower();
		return;
	}
	let answer=eval(value);
	field.value=answer;

}

function mathSqrt(){
	let field=document.getElementById("input");
	let value=field.value;
	let answer=Math.sqrt(value);
	field.value=answer;
}

	function mathPower(){
	let field=document.getElementById("input");
	let value=field.value;
	let base=parseFloat(value.substring(0,value.indexOf('^')));
	let power=parseFloat(value.substring(value.indexOf('^')+1));
	console.log(base,power);
	let answer=Math.pow(base,power);
	console.log(answer);
	field.value=answer;
}

	function setValue(v){
	let field=document.getElementById("input");
	field.value=field.value+v;
}


function backSpace(){
	let field=document.getElementById("input");
	size = field.value.length; 
    field.value = field.value.substring(0, size-1);
}

function per(){
	let field=document.getElementById("input");
	size = field.value.length; 
            n = Number(field.value.substring(0, size-1)); 
            field.value = n/100;
}

function fac(){
	let field=document.getElementById("input");
            
            size = field.value.length; 
            n = Number(field.value); 
            f = 1; 
            
            for(i = 2; i <= n; i++) 
               f = f*i; 
            field.value = f; 
}

function sin() {
	let field=document.getElementById("input");
	field.value = Math.sin(field.value);
}

function cos() {
	let field=document.getElementById("input");
	field.value = Math.cos(field.value);
}

function tan() {
	let field=document.getElementById("input");
	field.value = Math.tan(field.value);
}

function log() {
	let field=document.getElementById("input");
	field.value = Math.log(field.value);
}

function E() {
	let field=document.getElementById("input");
	field.value = Math.E;
}

function log10() {
	let field=document.getElementById("input");
	field.value = Math.log10(field.value);
}

function log2() {
	let field=document.getElementById("input");
	field.value = Math.log2(field.value);
}

function log2e() {
	let field=document.getElementById("input");
	field.value = Math.LOG2E;
}

function log10e() {
	let field=document.getElementById("input");
	field.value = Math.LOG10E;
}

function exp() {
	let field=document.getElementById("input");
	field.value = Math.exp(field.value);
}

function pie(){
	let field=document.getElementById("input");
	field.value = 3.14159265359;
}