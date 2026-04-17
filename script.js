// Array de objetos contendo os projetos
const meusProjetos = [
    {
        titulo: "Conclusão de Curso",
        descricao: "Desenvolvimento de sistemas para internet focado em tecnologias web modernas.",
        tecnologia: "HTML, CSS, JS"
    },
    {
        titulo: "Portfólio Profissional",
        descricao: "Criação deste portfólio para apresentação de competências e histórico acadêmico.",
        tecnologia: "Web Design"
    },
    {
        titulo: "Qualificação Profissional",
        descricao: "Projeto focado no aprendizado contínuo e inserção no mercado de TI.",
        tecnologia: "Carreira"
    }
];

// Função para renderizar os projetos na tela
function renderizarProjetos() {
    const container = document.getElementById('lista-projetos');

    meusProjetos.forEach(projeto => {
        const card = document.createElement('div');
        card.classList.add('card-projeto');

        card.innerHTML = `
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <br>
            <small><strong>Tech:</strong> ${projeto.tecnologia}</small>
        `;

        container.appendChild(card);
    });
}

// Executa a função ao carregar a página
window.onload = renderizarProjetos;