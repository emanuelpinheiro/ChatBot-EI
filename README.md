
# 🤖 Chatbot WhatsApp – Oliveira Transporte

Este é um chatbot de atendimento automático via **WhatsApp Web**, desenvolvido com a biblioteca [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js), voltado para a empresa *Oliveira Transporte*. O bot realiza atendimentos como:

- Solicitação de orçamento
- Acompanhamento de carga
- Consulta de áreas atendidas
- Redirecionamento para atendente humano
- Respostas a perguntas diversas

## ✅ Requisitos

Certifique-se de que as seguintes ferramentas estejam instaladas no seu computador:

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Node.js (versão LTS)](https://nodejs.org/)

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/emanuelpinheiro/ChatBot-EI.git
```

### 2. Acesse a pasta do projeto

```bash
cd nome-da-pasta
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o chatbot

```bash
node chatbot.js
```

## 📲 Primeira execução

Na primeira execução, será gerado um QR Code no terminal.

1. Abra o WhatsApp no seu celular.
2. Vá em **Aparelhos conectados**.
3. Toque em **Conectar um aparelho**.
4. Escaneie o QR Code exibido no terminal.
5. Após o pareamento, o bot estará pronto para uso.

## 📁 Estrutura do Projeto

```
📦 chatbot-whatsapp/
├── chatbot.js         # Código principal do bot
├── package.json       # Arquivo de dependências
└── README.md          # Instruções de uso
```

## 💬 Funcionalidades

O chatbot responde automaticamente às mensagens de saudação ou comandos como `menu`, `oi`, `olá`, etc. Em seguida, ele apresenta o menu com as opções abaixo:

1. **Solicitar orçamento**
   - Coleta dados da carga (origem, destino, tipo, peso e data) e informa que a equipe retornará com o valor estimado.

2. **Acompanhar minha carga**
   - Solicita o número do pedido ou CPF/CNPJ para rastrear o status da entrega.

3. **Ver áreas atendidas**
   - Informa as regiões onde a Oliveira Transporte opera e pede a origem/destino desejado para confirmar disponibilidade.

4. **Falar com um atendente**
   - Redireciona para o atendimento humano, com prioridade caso o cliente envie a palavra "URGENTE".

5. **Outras informações**
   - Permite que o cliente envie sua dúvida livremente.

## 🧠 Baseado em

- [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js)
- Node.js
