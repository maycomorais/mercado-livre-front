*) useEffect é tipo uma auto função. Como se fosse um if que envolve todo o ambiente, se ele acontecer essa função é executada.
*) const [characters, setCharacters] = useState([]);
    useEffect(() => {
        getCharacters();
      }, [ ]); // esse [] significa início componente, rodando a função somente uma vez no início, colocando uma variável dentro ele detecta qualquer mudança a variável e roda a função sempre que a variável for alterada.

*)O useState serve somente para dar um valor inicial para para uma Variável e uma setVariável para poder servir de proxy para atualizar ela, mesmo sendo uma declaração const.
    const [characters, setCharacters] = useState([]);
    Ponto 1) toda vez que o valor de setCharacters mudar, o valor de characters muda e o componente em que ele está incluso é atualizado pelo react(um componente pode ser atualizado sem atualizar o app ou outros componentes, mesmo estes estando inclusos no app).
    Ponto 2) o parâmetro do useEffect só pode ser vazio ou um State do setState.
    Ex:
        useEffect(() => {
            getCharacters();
          }, [characters]);

*) Vantagem de usar useEffect sem um setState,  se fosse uma outra função, a cada atualização de qualquer outro setState, essa função rodaria novamente, o useEffect com state vazio, somente roda uma vez, independente de outras states atualizadas.