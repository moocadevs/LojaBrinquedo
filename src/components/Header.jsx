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
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 p-4 bg-black text-white">

            <h1 className="logo font-bold p-2 text-2xl cursor-pointer">
                Gerenciador de Tarefas
            </h1>

            <div className="relative">

                <input
                    type="text"
                    placeholder="Pesquisar tarefa..."
                    value={termo}
                    onChange={(e) => setTermo(e.target.value)}
                    className="w-full md:w-80 px-4 py-2 bg-white text-black border-2 border-gray-300 rounded-lg shadow-md outline-none focus:border-blue-500 placeholder-gray-500"
                    />

                {termo && (
                    <div className="absolute top-12 left-0 w-full bg-white text-black rounded shadow-lg">

                        {tarefasFiltradas.length > 0 ? (
                            tarefasFiltradas.map((tarefa, index) => (
                                <div
                                    key={index}
                                    className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    {tarefa}
                                </div>
                            ))
                        ) : (
                            <div className="px-3 py-2">
                                Nenhuma tarefa encontrada
                            </div>
                        )}

                    </div>
                )}

            </div>

            <nav className="flex flex-wrap justify-center gap-4 md:gap-7 text-sm md:text-lg">
                <Link to="/" className="hover:text-gray-400 hover:uppercase">
                    Início
                </Link>

                <Link to="/" className="hover:text-gray-400 hover:uppercase">
                    Brinquedos
                </Link>

                <Link to="/" className="hover:text-gray-400 hover:uppercase">
                    Contato
                </Link>

                <Link to="/" className="hover:text-gray-400 hover:uppercase" >
                    Login
                </Link>

            </nav>

        </header>
    );
};

export default Header;