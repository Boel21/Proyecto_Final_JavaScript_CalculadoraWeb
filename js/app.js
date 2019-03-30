var keyPress;
var sendKeyValue;
var transformar;
var num1 = new Array();
var num2 = new Array();
var num3 = new Array();
var num4 = new Array();
var num33 = new Array();
var num44 = new Array();
var operando = new Array();
var write = new Array();
var write2 = new Array();
var write3 = new Array();
var controladorA = 0;
var controladorB = 0;
var controladorC = 0;
var controladorD = 0;
var controladorE = 0;
var num5,num6,contador,i;
var operadores = ['on','-','+','√','/','*','=']
var opcion;
var result = 0;
var repetir = 0;

keyPress = document.querySelectorAll('.tecla');
function keyPressed(keyPress, mostrarValor){
for (var i = 0; i < keyPress.length; i++) {
keyPress[i].addEventListener('mousedown', function() {
this.style.transform="scale(0.9)"
sendKeyValue = this.alt
mostrarValor(sendKeyValue, checkOperadores(sendKeyValue));
    });
  };
};

function releaseKey(keyPress){
for (var i = 0; i < keyPress.length; i++) {
keyPress[i].addEventListener('mouseup', function() {
this.style.transform="scale(1)"
    });
  };
};

releaseKey(keyPress);
keyPressed(keyPress,function mostrarValor(){
  switch (opcion) {
    case 0:
         if(((num3.length) <= 8) && (checkOperadores(sendKeyValue) > -1)){
            if ((num1.length == 0)&&(sendKeyValue =='.')) {
                num1.push('0');
                num = num1[controladorA];
                show_numbers(num);
                controladorA++;
            }
          if ((num1.length == 1)&&(sendKeyValue =='.')&&(num1[0]=='-')) {
                num = '0';
                show_numbers(num);
                controladorA++;
            }
            if ((num1.length == 0) && (sendKeyValue === '0')) {
                num1.splice(0,1);
                var salto = 1;
            }
            if (salto != 1) {
              num1.push(sendKeyValue);
              }
          }
          contador = 1;
            if (sendKeyValue == '.'){
              eliminar_Puntos(num1);
          }
          if ((sendKeyValue == '.')&&(controladorB <= 1) || (sendKeyValue !='.')) {
            if ((num1[0]==='-')&& (num1.length >= 2)){
              num = sendKeyValue;
              show_numbers(num);
              var salto = 1;
            }
            if (salto !=1) {
              num = num1[controladorA];
              show_numbers(num);
              controladorA++;
            }
          }
      break;
    case -1:
          if ((sendKeyValue != 'sign')&&(sendKeyValue !='on')&&(sendKeyValue != '=')) {
          if(((num3.length + num4.length + operando.length) < 9)){
          var a = write.length-1;
          var b = operando.length-1;
          operando.push(sendKeyValue);
          var operandoA = operando[controladorC]
          if (operadores.includes(write[a])){
            if (sendKeyValue == write[a]) {
              eliminar_operandos(operando,operandoA);
            }
            if (sendKeyValue != write[a]) {
              operando.splice(b,2,sendKeyValue);
              write2.splice(write.length-1,1);
              num = operando[b];
              show_numbers(num);
              write3=[];
            }
          }
          if (operadores.includes(write[a]) ==  false) {
              show_numbers(operandoA);
              write3=[];
              controladorC++;
          }
          controladorA = 0;
          controladorB = 0;
        }
      }
      break;
    case 1:
          if (((num4.length) <= 8 ) && (checkOperadores(sendKeyValue) > -1)) {
            if ((num2.length == 0)&&(sendKeyValue =='.')) {
                num2.push('0');
                num = num2[controladorA];
                show_numbers(num);
                controladorA++;
            }
            if ((num2.length == 1)&&(sendKeyValue =='.')&&(num2[0]=='-')) {
                num = '0';
                show_numbers(num);
                controladorA++;
            }
            num2.push(sendKeyValue);
          }
          contador = 2;
          if (sendKeyValue == '.') {
            eliminar_Puntos(num2);
          }
          if ((sendKeyValue == '.')&&(controladorB <= 1) || (sendKeyValue !='.')) {
            num =num2[controladorA];
            show_numbers(num);
            controladorA++;
          }
          checkOperadores(sendKeyValue);
       break;
       case 2:
        var a = write3.length-1;
        var b = operando.length-1;
         if ((num1.length == 0)&&(controladorE == 0)&&(operando.length == 0)) {
           num1.push('-');
           write3=[];
           write2=[];
           write=[];
           num ='-';
           show_numbers(num);
           controladorE ++;
         }
         else if ((num1.length == 1)&&(controladorE == 1)&&(operando.length == 0)) {
           num1=[];
           write3=[];
           write2=[];
           write=[];
           num = [];
           show_numbers(num);
           controladorE = 0;
         }
         else if ((num1.length >=0 )&&(controladorE == 0)&&(operando.length == 0)) {
           num1.splice(0,0,'-');
           num ='-';
           show_numbers(num);
           controladorE++;
         }
         else if ((num1.length >= 0) &&(controladorE == 1)&&(operando.length == 0)) {
           num1.splice(0,1);
           num = [];
           show_numbers(num);
           controladorE = 0;
         }
         else if ((operando.length > 0)&&(controladorE == 0)&&(operando[b] !='-')){
           operando.splice(b,1,'-');
           num = operando[b];
           show_numbers(num);
           controladorE++;
         }
        else if ((operando.length >=1)&&(write[a] =='-')&&(controladorE == 1)){
            operando.splice(b,1,'+');
            num = operando[b];
            show_numbers(num);
            controladorE=0;
          }
          else if ((operando.length >=1)&&(operando[b] =='-')&&(controladorE == 0)){
              operando.splice(b,1,'+');
              num = operando[b];
              show_numbers(num);
              controladorE=0;
            }
         else {
           operando.push('-');
         };
        break;
        case 3:
        document.getElementById('display2').style.fontSize ='2vw';
        document.getElementById('display2').innerHTML = 'square root not available Press ON/C';
        break;
        case 4:
        document.getElementById('display2').style.fontSize ='2vw';
        document.getElementById('display2').innerHTML = 'Syntax Error Press ON/C, Pres +/- for signs';
        break;
    default:
        alert("Systems_Error please reload");
  };
});

function checkOperadores(sendKeyValue){
  if (operadores.includes(sendKeyValue)) {
    if ((sendKeyValue != '√')&&(num1.length > 0)||(sendKeyValue === 'on')) {
      return opcion = -1
    }
    if (sendKeyValue === '√') {
      return opcion = 3;
    }
      if((num1.length == 0)&&(sendKeyValue != 'on')){
        return opcion = 4;
      }
    }
  else if ((operando.length >= 1)&&(num1.length >= 1)&&((operando.length)%2 !=0)&&(sendKeyValue != 'sign')) {
        return opcion = 1
    }
  else if (sendKeyValue == 'sign') {
        return opcion = 2;
  }
  else {
    return opcion = 0
    }
};

function eliminar_Puntos(num){
  if (num.includes(".") !=-1){
    var buscar_indices = [];
    var elemento = ".";
    var num3 = new Array();
    var borrar_elemento = num.indexOf(elemento);
        while (borrar_elemento != -1) {
            buscar_indices.push(borrar_elemento);
            borrar_elemento = num.indexOf(elemento, borrar_elemento + 1);
              for (var i = 1; i < buscar_indices.length; i++) {
                num3 = num.splice(buscar_indices[i], 1);
              };
          };
      };
      controladorB++;
};

function eliminar_operandos(operando,operandoA){
  if ((operandoA == '+') || (operandoA == '-') || (operandoA == '*') || (operandoA == '/')){
    var buscar_indices = controladorC;
    operando.splice(buscar_indices, 1);
    };
};

function show_numbers(num){
  if ((num != 'on')&&(num != '=' )&&(num !='sign')) {
    write.push(num);
    if (write3.length <= 8) {
      write3.push(num);
      write2.push(num);
      document.getElementById('display2').innerHTML = write3.join('');
      };
    if ((opcion == -1)&&(write2.length<=21)) {
      document.getElementById('display2').innerHTML = ('');
      document.getElementById('display1').innerHTML = write2.join('');
      };
    };
  };
transformar = ['divididos','por','menos','mas','igual'];
var activador
function captar_datos(){
for (var i = 0; i < transformar.length; i++) {
  activador = document.getElementById(transformar[i])
  activador.addEventListener('click', function(){
    transformar = this.id;
    guardar_valor(num1,num2,contador,controladorC);
    });
  };
};

captar_datos(num1,num2,contador);
function guardar_valor(num1,num2,contador,controladorC){
  if (sendKeyValue == 'igual') {
    controladorD = 0;
    }
  if ((controladorC != controladorD) && (contador === 1) && (num1.length > 0)){
    num1 = num1.join('');
    num5 = Number(num1);
    num3.push(num5);
    num33.push(num5);
    controladorD = controladorC;
    }
    if ((contador === 2)&&(num2.length > 0) || (controladorC != controladorD)){
      num2 = num2.join('');
      num6 = Number(num2);
      num4.push(num6);
      num44.push(num6);
      controladorD = controladorC ;
    }
    if ((num1.length > 0) && (num2.length > 0) &&(operando.length >= 2)) {
      num1.length = 0;
      num2.length = 0;
      controladorD =0;
    }
    return num1,num2,num3,num4;
};
var finalizar = document.getElementById('igual');
  finalizar.addEventListener('click', function() {
  if(repetir == 0){
  inicializar(operando,num3,num4,operacion_continua,ejecutar_Comando);
  };
  if (repetir >= 1 ){
    var t = operando.length-1;
    var y = num33.length - 1;
    var u = num44.length - 1;
    var f = write.length - 1;
    if(write[f] == num44[u]){
    ejecutar_Comando(operando[t],result,num44[u]);
    };
   if(write[f] == num33[y]){
   ejecutar_Comando(operando[t],result,num33[y]);
    };
  };
  repetir ++;
});

function inicializar() {
    for (var i = 0; i < (operando.length); i++) {
          operacion_continua(result,num3,num4,i);
          ejecutar_Comando(operando[i],num3[i],num4[i]);
        };
    };
function ejecutar_Comando(operando,num3,num4){

    switch (operando) {
      case '+':
            calculadora.sumar(Number(num3),Number(num4));
        break;
      case '-':
            calculadora.restar(Number(num3),Number(num4));
        break;
        case '*':
              calculadora.multiplicar(Number(num3),Number(num4));
          break;
        case '/':
              calculadora.dividir(Number(num3),Number(num4));
          break;
          case '=':
            operando=operando.slice(0, operando.length-1);
            return operando;
      default:
            alert('Systems_Error please reload');
  };
};

function guardar_resultado(resultado){
  result = resultado
  return result;
};

function operacion_continua(result,num3,num4,i){
  var copiar = new Array();
  if ( i%2 !== 0 ) {
    copiar = num3.slice();
    num4.splice(i,0,copiar[i]);
    num3.splice(i,0,result);
  };
  if (( i > 0 ) && (i%2 === 0)) {
    num3[i] = result;
  };
};
  var calculadora = (function(num3,num4){
    var resultado = 0
      var actualizarResultado = function(nuevoResultado){
      resultado = nuevoResultado;
      if ( isNaN(nuevoResultado)) {
        document.getElementById('display1').innerHTML ='Error Press ON/C key';
      }
      else {
        document.getElementById('display2').innerHTML = resultado;
        document.getElementById('display1').innerHTML = ('');
      }
      guardar_resultado(resultado);
    };
        var sumar = function(num3,num4){
        var resultado = num3 + num4
        actualizarResultado(resultado,guardar_resultado);
      };
        var restar = function(num3,num4){
        var resultado = num3 - num4
        actualizarResultado(resultado,guardar_resultado);
      };
        var multiplicar = function(num3,num4){
        var resultado = num3 * num4
        actualizarResultado(resultado,guardar_resultado);
      };
        var dividir = function(num3,num4){
        var resultado = num3 / num4
        actualizarResultado(resultado,guardar_resultado);
      };
        var resultado = function(num3,num4){
        return resultado
      };
      return{
        sumar:sumar,
        restar:restar,
        multiplicar:multiplicar,
        dividir:dividir,
        resultado:resultado
      };
  })();

  function reset(){
    num1 = [];
    num2 = [];
    num3 = [];
    num4 =[];
    result = 0;
    write = [];
    write2 = [];
    write3 = [];
    operando = [];
    num5 = 0;
    num6 = 0;
    controladorA = 0;
    controladorB = 0;
    controladorC = 0;
    controladorD = 0;
    controladorE = 0;
    repetir = 0;
  };
  var resetear = document.getElementById('on');
    resetear.addEventListener('click', function() {
    document.getElementById('display2').style.fontSize ='4.5vw';
    document.getElementById('display2').innerHTML = 0;
    document.getElementById('display1').innerHTML = ('');
    reset(num1,num2,num3,num4,result,write,write2,operando,num5,num6,controladorA,controladorB,controladorC);
  });
