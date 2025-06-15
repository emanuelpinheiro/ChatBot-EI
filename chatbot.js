// Importa o módulo para gerar QR Code no terminal
const qrcode = require('qrcode-terminal');

// Importa os principais componentes da biblioteca whatsapp-web.js
const { Client } = require('whatsapp-web.js');

// Cria uma nova instância do cliente WhatsApp
const client = new Client();

// Evento disparado quando o QR Code é gerado – necessário para conectar ao WhatsApp Web
client.on('qr', qr => {
    qrcode.generate(qr, { small: true }); // Mostra o QR Code no terminal
});

// Evento disparado quando a conexão com o WhatsApp foi estabelecida com sucesso
client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

// Inicializa a conexão com o WhatsApp
client.initialize();

// Função utilitária que cria um atraso (delay) em milissegundos
const delay = ms => new Promise(res => setTimeout(res, ms));

/* ================================
   TRATAMENTO DAS MENSAGENS RECEBIDAS
   ================================= */
client.on('message', async msg => {

    // Verifica se a mensagem é uma saudação ou palavra-chave e envia o MENU inicial
    if (msg.body.match(/(menu|oi|olá|ola|dia|tarde|noite)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();              // Obtém o chat onde a mensagem foi enviada
        const contact = await msg.getContact();        // Obtém o contato que enviou a mensagem
        const name = contact.pushname;                 // Nome do contato

        await delay(2000);                             // Espera 2 segundos
        await chat.sendStateTyping();                  // Simula que o bot está digitando
        await delay(3000);                             // Espera mais 3 segundos

        // Envia a mensagem de boas-vindas com o menu de opções
        await client.sendMessage(msg.from,
`🚛 Olá, ${name?.split(" ")[0] || ""}! Seja bem-vindo à *Oliveira Transporte*. 
Somos especialistas em transporte de cargas leves, pesadas e mudanças em todo o Brasil.

Como podemos te ajudar hoje?

Digite o número da opção desejada:
1️⃣ Solicitar orçamento
2️⃣ Acompanhar minha carga
3️⃣ Ver áreas atendidas
4️⃣ Falar com um atendente
5️⃣ Outras informações`);
    }

    // OPÇÃO 1: Solicitar orçamento
    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(2000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
`🔎 Para gerar seu orçamento, por favor, envie as seguintes informações:

- Cidade de origem:
- Cidade de destino:
- Tipo de carga (leve/pesada/mudança):
- Peso aproximado (em kg ou m³):
- Data prevista para o transporte:

Assim que recebermos esses dados, nossa equipe entrará em contato com o valor estimado.`);
    }

    // OPÇÃO 2: Acompanhar carga
    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(2000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
`📦 Para acompanhar sua carga, envie um dos dados abaixo:

- Número do pedido
- CPF ou CNPJ usado na solicitação

Vamos verificar o status e te responder em instantes.`);
    }

    // OPÇÃO 3: Ver áreas atendidas
    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(2000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
`🌍 Atendemos transporte de cargas e mudanças em todo o território nacional 🇧🇷
Com saídas frequentes de:

- São Paulo (Capital e interior)
- Rio de Janeiro
- Minas Gerais
- Paraná
- Região Sul e Sudeste em geral

Para confirmar disponibilidade para sua cidade, envie a origem e o destino desejado.`);
    }

    // OPÇÃO 4: Falar com atendente humano
    if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(2000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
`👩‍💼 Um de nossos atendentes estará com você em instantes.
Por favor, aguarde...
(Se for urgente, envie *URGENTE* e priorizaremos seu atendimento.)`);
    }

    // OPÇÃO 5: Outras informações (mensagem livre)
    if (msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(2000);
        await chat.sendStateTyping();
        await delay(3000);

        await client.sendMessage(msg.from,
`📌 Pode digitar sua dúvida ou mensagem abaixo.
Estamos prontos para ajudar!`);
    }
});
