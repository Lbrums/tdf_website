import "./Trekkings.css";
import Layout from "../components/Layout";

// Suponha que esses dados viriam do banco de dados
const aventuras = [
    { id: 1, titulo: "Amanhecer no Cambirela", descricao: "Veja o sol nascer acima das nuvens e sinta a energia de um novo dia no topo de Florianópolis.", imagem: "cambirela.jpg", data: "2023-10-01" },
    { id: 2, titulo: "Travessia Serra do Tabuleiro", descricao: "Uma travessia selvagem por florestas intocadas, montanhas imponentes e paisagens que revelam a essência da Mata Atlântica.", imagem: "tabuleiro.jpg", data: "2023-10-05" },
    { id: 3, titulo: "Hiking Canion Espraiado", descricao: "Caminhe pelas bordas de um dos cânions mais impressionantes do Brasil e sinta a imensidão da natureza sob seus pés.", imagem: "espraiado.jpg", data: "2023-10-10" },
    // ... mais aventuras
];


export default function Trekkings() {
    return (
        <Layout>
            <div className="Trkg-header">
                <div className="Trkg-header-content">
                    <h1>Aventuras</h1>
                    <p>Abaixo está nossa agenda de Aventuras.</p>
                </div>
            </div>

            <div className="Trkg-aventuras">
                {aventuras.map((aventura, index) => (
                    <div
                        key={aventura.id}
                        className={index % 2 === 0 ? "aventura-esquerda" : "aventura-direita"}
                    >
                        <div className="aventura-imagem">
                            <img src={`/src/assets/${aventura.imagem}`} alt={aventura.titulo} />
                        </div>
                        <div className="aventura-info">
                            <h2>{aventura.titulo}</h2>
                            <p>{aventura.descricao}</p>
                            <div className="aventura-contato">
                                <button>Saiba mais</button>
                                <p>{aventura.data}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
