const sendWhatsapp = () => {

    console.log("clicou peste")
  let userName = document.getElementById('nome').value;
  let userTel = document.getElementById('tel').value;

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://slack.com/api/chat.postMessage', true)
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(
    JSON.stringify({
      token: 'xoxb-763870141223-1422536163329-RvQmIx6eusK0zDkLtCcjXJka',
      channel: 'clube_de_corrida',
      text: 'Teste do botão meu pau na sua mão'
    })
  );
};
