
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          
          <div>
            <h1>Vírus</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="Vírus">
          <h2>O que é um vírus de computador?</h2>
          <ul>
            <li>Os vírus de computador são programas maliciosos criados para se replicar e espalhar por sistemas. 
        Seu objetivo é causar danos ao computador ou roubar informações pessoais. É fundamental ter um 
        antivírus instalado e manter o sistema atualizado para se proteger.

Como os vírus entram no seu celular?
Ao baixar apps de fontes não confiáveis

Clicando em links suspeitos enviados por e-mail ou mensagem

Visitando sites perigosos ou falsos

Abrindo anexos desconhecidos</li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'> Dicas para se proteger:</h2>
          <ul>
        <li>Instale e mantenha um bom antivírus sempre atualizado.</li>
        <li>Evite clicar em links suspeitos ou baixar arquivos de fontes desconhecidas.</li>
        <li>Não abra anexos de e-mails de remetentes desconhecidos.</li>
        <li>Atualize regularmente o sistema operacional e todos os softwares.</li>
        <li>Utilize senhas fortes e ative autenticação em dois fatores sempre que possível.</li>
        <li>Faça backup dos seus dados com frequência.</li>
        <li>Evite usar pendrives ou dispositivos de terceiros sem escaneá-los antes.</li>
      </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Gabriel Campos / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
