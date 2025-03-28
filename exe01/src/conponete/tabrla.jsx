import React from "react";

function Tabela() {  // Nome corrigido

    return (
        <>
            <header id="header">
                <h3>Cabeçalho</h3>
                <nav id="nav">
                    <h3>Navegação</h3>
                </nav>
            </header>

            <main id="main">
                <h3>Conteúdo Principal</h3>
                <aside id="main-aside">
                    <h3>Aside do Conteúdo Principal</h3>
                </aside>
            </main>

            <aside id="secondary-aside">
                <h3>Aside Secundário</h3>
            </aside>

            <footer id="footer">
                <h3>Rodapé</h3>
            </footer>
        </>
    );
}

export default Tabela;
