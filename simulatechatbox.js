// Conjuntos de nomes, mensagens e badges específicas
const messageSets = [
    { username: "Marykkjk", message: "Oláaaaaaa", badges: "1" },
    { username: "huntermotion", message: "eu sou o millior", badges: "1, 1" },
    { username: "MrPoladoful", message: "da like", badges: "1" },
    { username: "GordaoAVG", message: "spamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspam", badges: "1" },
    { username: "Carlinhos", message: "eu bati o recorde mundial em dar", badges: "1" }
];

// Função para gerar uma mensagem aleatória
function generateRandomMessage() {
    return messageSets[Math.floor(Math.random() * messageSets.length)];
}

// Função para simular o envio de mensagens em looping
function simulateChat() {
    setInterval(() => {
        const { username, message, badges } = generateRandomMessage();
        const isAction = false;
        const uid = "IDDoUsuario";
        const msgId = "IDDaMensagem";
        const subscriptionMonths = 0;

        // Chamar a função addMessage com os parâmetros simulados
        addMessage(username, message, badges, isAction, uid, msgId, subscriptionMonths);
    }, 2000); // A cada 2 segundos
}

// Iniciar a simulação do chat
simulateChat();
