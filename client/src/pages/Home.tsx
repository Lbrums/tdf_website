import "./Home.css";
import Layout from "../components/Layout";


export default function Home() {
    return (
        <Layout>
            <div className="Top">
                <div className="Top-Content">
                    <h1>Aventure-se.<br />Conecte-se.<br />Transforme-se.</h1>
                    <h2>Cada trekking é uma nova história.<br />Venha escrever a sua com a gente.<br />Do iniciante ao experiente: temos o trekking certo para você.</h2>
                    <button className="btn">Saiba mais</button>
                </div>
                <div className="Top-Image">
                    <img src="/src/assets/Home-top.jpg" alt="Home" />
                </div>
            </div>
            <div className="Topmid-header">
                <h1>Viva a experiência</h1>
            </div>
            <div className="Topmid-image">
                <img src="/src/assets/Home-topmid.jpg" alt="Topmid" />
            </div>
            <div className="Topmid-content">
                <div className="Topmid-Text-Left">
                    <h2>Sua aventura começa com responsabilidade.</h2>
                    <p>Nossos roteiros são cuidadosamente planejados, com guias experientes, equipamentos de apoio e protocolos de segurança em cada etapa. Você curte a natureza, a gente cuida do resto.</p>
                </div>
                <div className="Topmid-Text-Center">
                    <h2>Caminhar é só o começo.</h2>
                    <p>Nossas trilhas promovem equilíbrio entre corpo e mente. Em meio à natureza, você respira melhor, desacelera e se reconecta com o que realmente importa: você mesmo.</p>
                </div>
                <div className="Topmid-Text-Right">
                    <h2>Mais de uma década guiando experiências inesquecíveis.</h2>
                    <p>Com 13 anos de estrada, acumulamos conhecimento, histórias e conexões. Cada trilha que oferecemos é fruto de anos de paixão, aprendizado e compromisso com a excelência.</p>
                </div>
            </div>
            <div className="Mid">
                <div className="mid-Image">
                    <img src="/src/assets/Home-mid.jpg" alt="Mid" />
                </div>
                <div className="mid-Content">
                    <h1>Diversas Atividades.</h1>
                    <h2>Trekkings</h2>
                    <p>Dos caminhos leves aos roteiros mais intensos, nossos trekkings são planejados para oferecer aventura com segurança, paisagens incríveis e conexão profunda com a natureza.</p>
                    <h2>Cachoeiras</h2>
                    <p>Nossos passeios para cachoeiras combinam trilhas leves, natureza exuberante e paradas para banho em águas cristalinas.</p>
                    <h2>Passeios Turisticos</h2>
                    <p>Caminhe pelas trilhas encantadoras da Ilha do Mel ou viva a magia de um voo de balão ao nascer do sol.</p>
                    <div className="mid-Buttons">
                        <button>Sobre nós</button>
                        <button>Fotos</button>
                    </div>
                </div>
            </div>
            <div className="Bottom-header">
                <h1>O Melhor do turismo de aventura</h1>
            </div>
            <div className="Bottom-content">
                <div className="Left-content">
                    <img src="/src/assets/Home-bottom-left.jpg" alt="" />
                    <h2>Mais de 10 anos guiando experiências inesqueciveis na Grande Florianópolis</h2>
                    <p>Do desafio imponente do Cambirela, com suas vistas panorâmicas, à imersão profunda na natureza preservada da Serra do Tabuleiro, passando pela travessia até a encantadora Lagoinha do Leste cada trilha é conduzida com conhecimento, segurança e paixão acumulados ao longo de uma década.</p>
                </div>
                <div className="Right-content">
                    <img src="/src/assets/Home-bottom-right.jpg" alt="" />
                    <h2>Explore o Brasil por ângulos únicos e inesquecíveis</h2>
                    <p>Das trilhas místicas do Monte Roraima, com seus platôs surreais e paisagens de outro mundo, ao visual icônico do Morro Dois Irmãos no Rio de Janeiro, cada aventura é uma imersão na natureza e na cultura brasileira. Caminhadas, cachoeiras e experiências que equilibram desafio, bem-estar e conexão com o extraordinário.</p>
                </div>
            </div>
            <div className="Ratings">
                <h2>Avaliações</h2>
                <div className="Rating">
                    <p>"Uma experiência incrível! Os guias são super atenciosos e conhecem cada detalhe da trilha."</p>
                    <span>- João Silva</span>
                </div>
                <div className="Rating">
                    <p>"As paisagens são de tirar o fôlego. Recomendo a todos que amam a natureza!"</p>
                    <span>- Maria Oliveira</span>
                </div>
                <div className="Rating">
                    <p>"A organização e o cuidado com a segurança fazem toda a diferença. Voltarei com certeza!"</p>
                    <span>- Carlos Pereira</span>
                </div>
            </div>
        </Layout>
    )
}
