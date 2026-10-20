# Gwent Score (Gwent Físico)

Placar digital para partidas **físicas** de Gwent. Em vez de anotar os pontos em papel, cada jogador registra a força das cartas em cada linha do tabuleiro, e o total de cada lado é somado automaticamente.

O projeto é feito com HTML, CSS e JavaScript puros, sem frameworks, sem dependências e sem etapa de build.

## Funcionalidades

- **Dois jogadores**, com o placar total de cada um em destaque (Jogador 1 e Jogador 2).
- **Três linhas por jogador:** Corpo a Corpo, Longa Distância e Linha de Cerco.
- **Soma automática:** o total é recalculado a cada alteração, ignorando campos vazios ou valores negativos.
- **Animação no escudo** do total sempre que a pontuação muda.
- **Botão "Zerar partida"**, com confirmação antes de limpar todos os campos.
- **Campo prático:** ao tocar em um número, ele é selecionado por inteiro, sem precisar apagar o "0". Se o campo ficar vazio, volta para "0".
- **Tela cheia e sem rolagem**, com layout adaptado para celular, para usar sobre a mesa durante a partida.

## Como usar

1. Acesse o link: https://gwentscore.netlify.app
2. Digite a força total das cartas em cada linha do seu lado do tabuleiro.
3. Acompanhe o total de cada jogador nos escudos.
4. Ao fim da partida, toque em **Zerar partida** para começar outra.


## Estrutura de arquivos

```
/
├── index.html   # estrutura da página
├── style.css    # estilos (tema medieval, escudos e layout responsivo)
└── script.js    # soma dos pontos, animação, reset e eventos
```

## Como funciona

- Os campos de pontos têm as classes `.adv-input` (Jogador 1) e `.player-input` (Jogador 2).
- O `script.js` escuta o evento `input` de todos os campos `.score-input`. A cada mudança, `updateScores()` soma cada lado e atualiza o escudo correspondente.
- A animação do escudo é reiniciada removendo e recolocando a classe `pulse-anim`, o que só acontece quando o total realmente muda.
- `resetGame()` pede confirmação, zera todos os campos e recalcula o placar.

## Tecnologias

- HTML5
- CSS3 (variáveis CSS, Flexbox, `clip-path` para o formato dos escudos)
- JavaScript puro (ES6)
- [Font Awesome 6.4](https://fontawesome.com/) para os ícones
- [Google Fonts](https://fonts.google.com/): Cinzel, Cormorant Garamond e Montserrat

## Observações

- Os links do menu (**Regras**, **Atualizações**, **Suporte**) ainda estão como `#`. Ainda estão sendo produzidos, mas muito provavelmente nem vou fazer.
- No celular o menu do topo fica oculto, para deixar mais espaço para o tabuleiro.
- O zoom por gesto está desativado no `<meta viewport>`, para evitar ampliações acidentais durante o jogo.

*Gwent é uma marca da CD PROJEKT RED. Este projeto é um utilitário feito por fã e não tem afiliação com a empresa.*