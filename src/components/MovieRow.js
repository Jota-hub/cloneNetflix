import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        // Divide o valor da largura da tela por 2 e volta essa mesma quantidade para a esquerda.
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        // Recebe o valor da quantidade de filmes multiplicada pela largura de cada filme
        let listWidth = items.results.length * 150;
        // Basicamente x é o valor que será avançado na tela ao clicar o botão
        // Se o valor da largura da tela menos o valor da largura de todos os filmes for menor que o valor de X 
        if((window.innerWidth - listWidth) > x) {
            // X recebe o valor dessa subtração para que não avance mais que a mesma
            // E deve-se subtrair 60 também para respeitar o espaço da seta
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div>

            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>

            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                    }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>

                
            </div>
        </div>
    );
}