function start(lolik) {
    let i = 0;
    
    for (let cell of lolik) {
     cell.addEventListener('click', function step() {
      this.textContent = ['X', 'O'][i % 2];
      this.removeEventListener('click', step);
      
      if (isVictory(lolik)) {
        alert(this.textContent);
    }
        else if (i == 8) {
        alert('ничья');
    }

    function isVictory(lolik) {
        let varik = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for (let romb of varik) {
            if (
                lolik[romb[0]].textContent == lolik[romb[1]].textContent &&
                lolik[romb[1]].textContent == lolik[romb[2]].textContent &&
                lolik[romb[0]].textContent != ''
            ) {
                return true;
            }
        }
        
        return false;
    }

      i++;
     });
    }
   }
  
  let lolik = document.querySelectorAll('#field td');
  start(lolik);