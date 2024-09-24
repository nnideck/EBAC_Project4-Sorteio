document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("form-sorteador").addEventListener('submit', (e) => {
        e.preventDefault();
        let numMax = document.getElementById('numMax').value;
        numMax = parseInt(numMax);

        let aleatorioNum = (Math.random() * numMax) + 1;

        document.getElementById('resultadoNum').innerText = Math.floor(aleatorioNum);

        document.querySelector('.resultado').style.display = 'block';
    })
})