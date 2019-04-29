      function validasoma(){
          var resultado = formsoma.result.value;
          var nome = formsoma.nome.value;
          var email = formsoma.email.value;
          var tel = formsoma.tel.value;
          if(nome | email |tel ==""){
            alert ('Dados obrigatórios não preenchidos');
          }
          else{
          if(resultado ==""){
            alert('Preencha o valor da soma!');
          }
          else
           if(resultado == "8"){
             alert('Formulário Enviado!');
           return false;
         }
         else
          alert('Soma incorreta!');
          return false;
        }
      }
      