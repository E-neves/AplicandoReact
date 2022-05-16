import React, { useEffect } from "react";
import './SobreAutora.css';
import { Grid, Box } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

function SobreAutora() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
        );
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo' >
                <Grid alignItems='center' xs={6} >
                    <Box>
                        <h2 className="txt1SA , tst ">TITULO DO TEXTO</h2>

                        <p className="txtSA , tst " >
                            Por mais que você corra, irmão
                            Pra sua guerra vão nem se lixar
                            Esse é o xis da questão
                            Já viu eles chorar pela cor do orixá?
                            E os camburão o que são?
                            Negreiros a retraficar
                            Favela ainda é senzala, Jão!
                            Bomba relógio prestes a estourar

                            O tempero do mar foi lágrima de preto
                            Papo reto como esqueletos de outro dialeto
                            Só desafeto, vida de inseto, imundo
                            Indenização? Fama de vagabundo
                            Nação sem teto, Angola, Keto, Congo, Soweto
                            A cor de Eto'o, maioria nos gueto
                            Monstro sequestro, capta-tês, rapta
                            Violência se adapta, um dia ela volta pu cêis
                            Tipo campos de concentração, prantos em vão
                            Quis vida digna, estigma, indignação
                            O trabalho liberta (ou não)
                            Com essa frase quase que os nazi, varre os judeu – extinção

                            Depressão no convés
                            Há quanto tempo nóiz se fode e tem que rir depois
                            Pique Jack-ass, mistério tipo lago Ness
                            Sério és, tema da faculdade em que não pode por os pés
                            Vocês sabem, eu sei
                            Que até Bin Laden é made in USA
                            Tempo doido onde a KKK, veste Obey (é quente memo)
                            Pode olhar num falei?

                            Aê, nessa equação, chata, polícia mata – Plow!
                            Médico salva? Não!
                            Por quê? Cor de ladrão
                            Desacato, invenção, maldosa intenção
                            Cabulosa inversão, jornal distorção
                            Meu sangue na mão dos radical cristão
                            Transcendental questão, não choca opinião
                            Silêncio e cara no chão, conhece?
                            Perseguição se esquece? Tanta agressão enlouquece
                            Vence o Datena com luto e audiência
                            Cura, baixa escolaridade com auto de resistência
                            Pois na era Cyber, cêis vai ler
                            Os livro que roubou nosso passado igual alzheimer, e vai ver
                            Que eu faço igual burkina faso
                            Nóiz quer ser dono do circo
                            Cansamos da vida de palhaço
                            É tipo Moisés e os Hebreus, pés no breu
                            Onde o inimigo é quem decide quando ofendeu
                            (Cê é loco meu!)
                            No veneno igual água e sódio (vai, vai, vai)
                            Vai vendo sem custódio
                            Aguarde cenas no próximo episódio
                            Cês diz que nosso pau é grande
                            Espera até ver nosso ódio

                            Por mais que você corra, irmão
                            Pra sua guerra vão nem se lixar
                            Esse é o xis da questão
                            Já viu eles chorar pela cor do orixá?
                            E os camburão o que são?
                            Negreiros a retraficar
                            Favela ainda é senzala, Jão
                            Bomba relógio prestes a estourar
                        </p>

                    </Box>
                </Grid>
                <Grid xs={6} className="imgSA">
                </Grid>
            </Grid>
        </>
    )
}

export default SobreAutora;


// container direction='row' justifyContent='center' alignItems='center'  /// alignItems='center' xs={6} // paddingX={20}