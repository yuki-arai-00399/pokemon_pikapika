import React, { useState } from 'react';
import pikachu from './pikachu.png';
import raichu from './raichu.png';
import evolveSound from './evolve.mp3';
import './App.css';

function App() {
  const [isEvolving, setIsEvolving] = useState(false);
  const [evolved, setEvolved] = useState(false);

  const handleEvolve = () => {
    if (evolved || isEvolving) return;

    setIsEvolving(true);
    new Audio(evolveSound).play();

    // 進化アニメーション後に状態を切り替える
    setTimeout(() => {
      setIsEvolving(false);
      setEvolved(true);
    }, 3000); // 3秒後に進化完了
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={evolved ? raichu : pikachu}
          alt="pokemon"
          className={`pokemon-img ${isEvolving ? 'evolving' : ''}`}
        />
        <h1>{evolved ? 'ライチュウ！⚡' : 'ピカチュウ！⚡'}</h1>
        {!evolved && (
          <button onClick={handleEvolve} disabled={isEvolving}>
            進化させる！
          </button>
        )}
      </header>
    </div>
  );
}

export default App;