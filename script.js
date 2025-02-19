console.log("O script.js está funcionando!");

// Lista de frases
const frases = [
    "Acredite em você mesmo e tudo será possível!",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "A vida começa no fim da sua zona de conforto.",
    "Seja a mudança que você quer ver no mundo.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "A persistência realiza o impossível.",
    "O segredo da felicidade está na liberdade.",
    "Você é mais forte do que imagina.",
    "Não importa o quão devagar você vá, desde que não pare.",
    "Cada dia é uma nova oportunidade para ser melhor.",
    "O único limite para o seu sucesso é a sua própria mente.",
    "Tudo o que você pode imaginar é real.",
    "O primeiro passo para chegar a algum lugar é decidir que você não vai ficar onde está.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "A coragem é a resistência ao medo, o domínio do medo – não a ausência do medo.",
    "Os melhores sonhos acontecem quando estamos acordados.",
    "A ação é a chave fundamental para todo o sucesso.",
    "Não espere por oportunidades, crie-as.",
    "O fracasso é a oportunidade de começar de novo, só que de forma mais inteligente.",
    "Você nunca é velho demais para definir outra meta ou sonhar um novo sonho.",
    "O sucesso é uma jornada, não um destino.",
    "Acredite que você pode e você já está no meio do caminho.",
    "A motivação o impulsiona, mas o hábito é o que o mantém indo.",
    "A disciplina é a ponte entre metas e realizações.",
    "Se você quer algo que nunca teve, precisa fazer algo que nunca fez.",
    "O otimismo é a fé em ação.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "Faça mais do que simplesmente existir.",
    "O sucesso é a soma de pequenos esforços repetidos diariamente.",
    "Seja feliz com o que você tem enquanto trabalha pelo que você quer.",
    "O impossível é apenas uma opinião.",
    "O maior erro que você pode cometer é o de ficar o tempo todo com medo de cometer algum.",
    "Foque no progresso, não na perfeição.",
    "A sua única limitação é aquela que você impõe a si mesmo.",
    "Cada novo dia é uma nova chance de fazer tudo diferente.",
    "A paciência, a persistência e o suor fazem uma combinação imbatível para o sucesso.",
    "Nada é tão contagioso como o entusiasmo.",
    "Não importa o tamanho do desafio, sua vontade de vencê-lo deve ser maior.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "O caminho para o sucesso está sempre em construção.",
    "Se você não pode fazer grandes coisas, faça pequenas coisas de forma grandiosa.",
    "A diferença entre um sonho e um objetivo é uma data.",
    "Transforme seus sonhos em planos e seus planos em realidade.",
    "O único momento em que você falha é quando para de tentar.",
    "A jornada de mil milhas começa com um único passo.",
    "Se você acredita, faz acontecer.",
    "Não coloque limites em seus sonhos, coloque fé.",
    "Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde deseja.",
    "A vida não melhora por acaso, melhora por mudança.",
    "Dê o seu melhor e o universo cuidará do resto.",
    "Seja o tipo de pessoa que você gostaria de conhecer."
];

// Verifica se o botão de gerar frase existe antes de adicionar o evento
const botaoFrase = document.getElementById("botao");
if (botaoFrase) {
    botaoFrase.addEventListener("click", function () {
        let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        document.getElementById("frase").textContent = fraseAleatoria;
    });
} else {
    console.error("Botão de frase não encontrado!");
}

// Modo escuro
const botaoModoEscuro = document.getElementById("modoEscuro");
if (botaoModoEscuro) {
    botaoModoEscuro.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            this.textContent = "Modo Claro";
        } else {
            this.textContent = "Modo Escuro";
        }
    });
} else {
    console.error("Botão de modo escuro não encontrado!");
}

// Compartilhar no WhatsApp
const botaoCompartilhar = document.getElementById("compartilhar");
if (botaoCompartilhar) {
    botaoCompartilhar.addEventListener("click", function () {
        let fraseAtual = document.getElementById("frase").textContent;
        let url = `https://api.whatsapp.com/send?text=${encodeURIComponent(fraseAtual)}`;
        window.open(url, "_blank");
    });
} else {
    console.error("Botão de compartilhar não encontrado!");
}
