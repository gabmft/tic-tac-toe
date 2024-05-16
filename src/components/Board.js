import React, { useEffect } from 'react'
import { useState } from 'react'
import './Board.css'



const Board = () => {
    const winnerArray = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const [boardArray, setBoardArray] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const [moves, setMoves] = useState(1)
    const [currentIndex, setCurrentIndex] = useState(0)

    function handleClick(index) {
        if (boardArray[index] === null && isX) {
            boardArray[index] = 'X'
            setMoves(prev => prev + 1)
            setIsX(false)
            setCurrentIndex(index)
            console.log(boardArray[currentIndex])
        }
        if (boardArray[index] === null && !isX) {
            boardArray[index] = '0'
            setMoves(prev => prev + 1)
            setIsX(true)
            setCurrentIndex(index)
        }

    }


    const isWinner = () => {
        for (let i = 0; i < winnerArray.length; i++) {
            const [a, b, c] = winnerArray[i]
            if (boardArray[a] !== null && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
                return true
            }
            console.log(boardArray[currentIndex])
        }
        return false
    }

    function handleReset() {
        setBoardArray(Array(9).fill(null))
        setMoves(1)
        setCurrentIndex(0)
        setIsX(true)

    }
    return (
        <>

            <h1 className="header">TIC TAC TOE</h1>
            <h1 className={(isX || boardArray[currentIndex] === null) ? 'header_x' : 'header_0'}>Player's {isX ? 'X' : '0'} TURN</h1>
            <div className="container">
                <div className="board">

                    {boardArray.map((element, index) => {
                        return (<div className={(element === 'X') ? 'square_x' : 'square_0'} key={index} onClick={isWinner() === true ? null : () => handleClick(index)}><div className='cell'><p>{element}</p></div></div>)
                    })}
                </div>
                <div className="winner">{isWinner() === true ? <h1 className={boardArray[currentIndex] === 'X' ? 'winner_x' : 'winner_0'}>Winner is {boardArray[currentIndex]}</h1> : moves === 10 ? <h1>Draw</h1> : null}</div>
                <div className="reset-container">
                    <button type="reset" className='reset' onClick={() => handleReset()}>Reset</button>
                </div>
            </div>
        </>)
}

export default Board
