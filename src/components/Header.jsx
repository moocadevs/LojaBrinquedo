import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [termo, setTermo] = useState('');

    const tarefas = [
        'Naruto',
        'Kung Fu Panda',
        'Rocket',
        'Stitch',
        'Ben 10',
        'Luffy',
        'Gon',
    ];

    const tarefasFiltradas = tarefas.filter((tarefa) =>
        tarefa.toLowerCase().includes(termo.toLowerCase())
    );

    return (
        <header>

            <h1>
                Gerenciador de Tarefas
            </h1>

            <div>

                <input
                    type="text"
                    placeholder="Pesquisar tarefa..."
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    />

                {termo && (
                    <div>

                        {tarefasFiltradas.length > 0 ? (
                            tarefasFiltradas.map((tarefa, index) => (
                                <div
                                    key={index}
                                    
                                >
                                    {tarefa}
                                </div>
                            ))
                        ) : (
                            <div>
                                Nenhuma tarefa encontrada
                            </div>
                        )}

                    </div>
                )}

            </div>

            <nav >
                <Link to="/" >
                    Início
                </Link>

                <Link to="/tasks" >
                    Brinquedos
                </Link>

                <Link to="/calendar" >
                    Contato
                </Link>

                <Link to="/calendar" >
                    Login
                </Link>

            </nav>

        </header>
    );
};

export default Header;