const perguntas = [
    {
      pergunta: "O que significa DOM em JavaScript?",
      respostas: [
        "Documento Object Model",
        "Data Object Model",
        "Dynamic Object Model",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()'?",
      respostas: [
        "Selecionar um elemento pelo seu ID",
        "Selecionar um elemento pelo seu nome de classe",
        "Selecionar um elemento pelo seu tipo",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um 'closure' em JavaScript?",
      respostas: [
        "Um tipo de variável global",
        "Uma função que não tem acesso ao seu escopo externo",
        "Função interna que acessa variáveis de sua função externa mesmo após conclusão",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método utilizado para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseFloat()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é executada imediatamente após ser definida",
        "Função passada como argumento para outra função e executada posteriormente",
        "Uma função que é chamada recursivamente",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "append()",
        "addToEnd()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico para 'ou' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 5; i++)",
        "loop (let i = 0; i < 5; i++)",
        "for (i = 0; i < 5; i++)",
      ],
      correta: 0
    },
  ];
  
  // está pegando os valores do html
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      
      
      // serve para adicionar um filho
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // está removendo a frase de resposta A
    quizItem.querySelector('dl dt').remove()
  
  
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  
  }