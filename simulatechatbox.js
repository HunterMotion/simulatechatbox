// Conjuntos de nomes, mensagens e badges específicas
const messageSets = [
    { username: "Marykkjk", message: "Oláaaaaaa", badges: "" },
    { username: "huntermotion", message: "eu sou o millior", badges: "badge1, badge2" },
    { username: "MrPoladoful", message: "da like", badges: "badge3" },
    { username: "GordaoAVG", message: "spamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspamspam", badges: "" },
    { username: "Carlinhos", message: "eu bati o recorde mundial em dar", badges: "badge4" }
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
