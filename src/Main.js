import { Component } from "react";
import styled from "styled-components";
import Spotify from "./spotify";
import Sonhos from "./assets/Sonhos";
import Encontros from "./assets/Encontros";
import Cotidiano from "./assets/Cotidiano";
import EnsaioSobre from "./assets/EnsaioSobre";
import Indice from "./indice";

const MainStyle = styled.main`
  background: #85f4ff;
  width: 100%;
`;
const TextBox = styled.div`
  width: 90%;
  text-align: justify;
  border-radius: 15px;
  margin: 10px 18px;
  padding: 15px;
  background: #effffd;
  line-height: 1.8;
`;
export default class Main extends Component {
  render() {
    return (
      <MainStyle>
        <Spotify />
        <Indice />
        <Encontros />
        <Sonhos />
        <EnsaioSobre />
        <Cotidiano />
        <TextBox>
          <h2 className="Title2"> Ar </h2>
          <p>
            {" "}
            A fumaça seca do cigarro adentra os meus pulmões Quero respirar, não
            consigo respirar Minha respiração aperta, num passo apertado Quero
            respirar, minha garganta fecha, minhas pupilas se dilatam Mais um
            copo, mais um trago O amargo da cerveja se confunde com as dores nos
            meus rins Quero correr, quero gritar, fugir daqui, fugir de mim I do
            wanna go home, i wanna stay right here Ponho em palavras todas as
            lágrimas que eu não consigo expurgar Preciso de um lar, preciso
            descansar e me despejar em colos que me acolham Me desfaço em
            poesias incompletas, perdi minha fala Só pra encontrar de novo em
            surto que seja Tal como Cartola, preciso me encontrar{" "}
          </p>
        </TextBox>
        <TextBox>
          <h2 className="Title2"> Frank Ocean Tribute </h2>
          <p>
            {" "}
            Como Frank Ocean em seigfreid, i'm not brave O sentimentos da noite
            passada ainda os mesmos, Ser nada ou ninguém, deitar na cama e olhar
            pro teto até apagar Sem dor, rancor, saudade Não ser, não estar Como
            quando a gente acorda e por alguns segundos não se lembra de nada
            Escrevo "Solo" in my room Querendo estar em outros quartos, com o
            peso de outras cobertas Fumando um cigarro em uma janela que seja
            Deitado em colo qualquer Abro os olhos, estou no meu quarto Smoking
            big, rolling solo Inhale, inhale, inhale Be yourself, good guy be
            yourself A mãe já não entende, dias sem se falar Moro sob teu teto,
            mas um estranho no ninho Procuro um canto pra ir, quero voltar
            gritar, espernear Quero ser criança, quero colo Quero o calor de um
            abraço
          </p>
        </TextBox>
        <TextBox>
          <h2 className="Title2">Carta para um ser divino </h2>
          <p>
            É como se eu quisesse viver em uma realidade alternativa, sempre
            resgatando sonhos, no sentido literal da coisa, como sonhos que eu
            mesmo crio na minha cabeça em pleno estado de consciência. O
            presente não me agrada, minha realidade não me alcança. É como se eu
            quisesse sempre estar em fuga, seja de mim mesmo ou do mundo. Tal
            como João, troco algumas certezas por alguns sonhos, mágicos.
            Acredito que isso tudo tenha começado na minha infância, mesmo que
            na época eu não tenha percebido, mas todo o processo de construção
            do meu ser, reflete em quem eu sou e o que eu quero ser. Às vezes eu
            sinto vontade de não existir, choro, quero morrer, só para meia hora
            depois, querer renascer. Em algum outro endereço, em alguma outra
            vida. Mas eu volto, eu sempre volto. Construí amores e dores nesse
            processo. Machuquei, fui feliz, fiz feliz. Amei. Amei demais, de
            menos, mas amei. Amo ainda, por isso, continuo aqui. Talvez não ame
            tanto a mim mesmo, mas pretendo, de alguma forma, como? Eu não sei.
            Eu vivi um amor, o melhor que eu poderia ter tido. Por muito tempo
            esperei ser amado, me jogando de colo em colo, pulando em cada
            pessoa que aparecesse na minha vida e pudesse mudar de alguma forma
            minha realidade, um erro, talvez. Mas finalmente eu tive isso, não
            sinto que perdi, quando acabou, o amor continua ali, ele só se
            transformou. Espero que não, em dor. Acredito que não. Eu amei uma
            mulher que me deu o mundo dela, não cuidei bem desse mundo, talvez
            por egoísmo ou desespero, talvez os dois e me dei também,
            entreguei-me por completo e vivi essa vida compartilhada. As vezes
            eu ainda acordo procurando ela pela cama, sinto falta do seu calor,
            do seu sorriso e da forma em como ela tinha o poder de transformar
            toda minha dor, em cura. Não arrumo meu quarto desde quando ela se
            foi, porque o simples fato de pensar uma vida onde ela não exista,
            tira o meu ar. Talvez por isso, tenha me estragado um pouco, de
            propósito talvez. Agora, preciso me encontrar, preciso resgatar os
            meus sentidos. Viver sóbrio, seja de devaneios, paranóias ou de
            anseios. Antes de tudo, procurar ser feliz, mas sem procurar demais.
            Sinto falta de mim mesmo, de viver uma vida onde eu seja o
            protagonista. Ao mesmo tempo que queria não ser. Queria ser beijado
            e não quem provoca o beijo, queria ser o protagonista da vida de
            alguém e não o coadjuvante da minha mesma. Sinto que, aos meus 24
            anos, eu não criei tanto significado quanto poderia ter feito, não
            tenho um legado ou algo do qual vão se lembrar se um dia eu partir.
            Hoje, sinto que preciso correr atrás disso. Quero uma casa, preciso
            de um lar. Meu cachorro, um gato e a liberdade de poder estar
            sozinho, escolhendo estar sozinho e que nada mais seja solidão, que
            nada mais seja dor, por mais que não possamos fugir dela. Não quero
            mais me machucar, porque me machucando, eu machuco as pessoas que eu
            amo. Não quero mais me machucar, porque no final, eu sou o maior
            prejudicado. Quero estar bem e receber todo aquele amor dos
            parágrafos acima de forma saudável, quero viver junto e não viver
            para. Quero a cumplicidade, não a dependência. E não por ter
            expectativas de um amor romântico que eu sei que não volta mais, mas
            pela ideia de viver, sem temer, sem sentir que a cada mudança, meu
            mundo se perde. Preciso ser saudável, cuidar do meu corpo, para
            cuidar da minha alma. Preciso ser. Preciso aprender a só ser. Esse
            monólogo não precisa ser sobre dor. Mas preciso dizer que, quase
            nunca, me senti amado. Por isso, talvez, todo o amor que eu recebo,
            se transforma em necessidade, em ar, quando se esvai, eu não consigo
            mais respirar. Respirando por aparelhos, sempre. Não tive pai, não
            tenho uma mãe presente. Minha figura materna se foi, descansou,
            talvez. Não de quem mesmo ela escolheu ser, mas por precisar ter
            ido. Minha avó. Sinto falta. Mulher negra, filha de indígena, mato
            grossense. Perdeu a mãe no parto, trabalhou desde a infância, uma
            sobrevivente. Me conhecia como ninguém. Sabia quando eu estava
            triste, sabia quando eu precisava de colo e mesmo que eu não fosse a
            pessoa mais afetiva na época, e ela entendia bem isso, uma palavra
            já bastava. A presença dela já bastava. Sabia muito bem como trazer
            conforto. Ela era o conforto. "Faltou um abraço, cê sabe, da nossa
            história ninguém viu metade, não disse adeus, mas te vejo mais
            tarde." Tchau, Tereza. Ou Gabriela, seu nome original. Ainda sinto o
            meu luto, não me despedi. Trocaria parte da minha vida, por mais um
            minuto ao seu lado. Mas como eu já disse, ela precisava descansar.
            Depois que se foi, demorei um tempo pra me sentir amado de novo.
            Minha mãe? Sempre vivendo a vida dela, despejando as coisas em mim,
            todo o estresse, toda a dor, todos os medos. As vezes, de forma
            violenta. Como um pai, que chega cansado do trabalho e desconta nas
            suas crias. Talvez, a maior experiência parte que eu tive. Talvez,
            eu também não seja tão compreensivo. Preciso ser? Meu pai? Só me
            resta memórias, dor, saudade talvez. Saudades do que a gente não
            viveu, do que poderia ter vivido. Mas me incluindo nas estatísticas,
            não tive pai, só um nome no meu documento, que eu ainda preciso
            preencher em formulário que seja. Me dói, óbvio, não tive figura
            paterna, me apeguei em qualquer outra que pudesse preencher esse
            espaço, nunca preencheu. Mas eu sei que, vou ser um pai melhor que
            isso. Acho que é o senso comum, todo homem que nem eu, só quer ser o
            super herói da sua cria. Apesar disso, ainda não sei como fazer
            isso. Não sei o que dizer ao meu filho no primeiro enquadro, por eu
            não soube dizer a mim mesmo no meu. Preciso ser maior, pra que ser
            maior? Digo isso, pois, o abandono que eu sofri, reflete hoje nas
            minhas relações, em como eu vejo o mundo. Sempre que, me sinto
            abandonado, é como se eu fosse o único humano nesse mundo, sendo
            esmagado pelos traumas alheios, os meus e dos outros. Me sinto
            criança, quando se perde da mãe no supermercado. Todas as vezes. E
            me machuco, por medo ou por dor. Me machuco de formas cada vez mais
            inovadoras, seja pela quantidade de álcool que eu bebo, pelos
            cigarros que eu fumo, pelas cicatrizes no meu pulso ou seja lá o que
            eu ponho dentro do meu corpo. Me machuco por não saber lidar, me
            machuco por alucinar no meio das minhas paranóias. Agradeço as vozes
            na minha cabeça, que não silenciam. Sozinho eu sei que me curo, não
            quero estar sozinho. Preciso estar sozinho e quando essa necessidade
            vem à tona, eu me saboto, me afundo mais ainda dentro das minhas
            relações, porque qualquer ideia de autonomia, me sufoca. Me gera
            medos. Medos de ser suficiente ao ponto de não precisar, de não
            saber viver em conjunto. Toda a minha construção, é de um homem que
            nasceu pra ser cuidado. Não que eu me conforme com isso, não estou
            conformado. Tal como Sebastião, preciso aprender a ser só, porque
            sendo só, eu posso ser coletivo, eu posso viver em conjunto. Posso
            viver amores, posso buscar o meu horizonte infinito. Eu não tenho um
            barco, disse a árvore. Eu não preciso de um barco, digo à árvore.
            Quero me olhar no espelho e sentir orgulho, quero que olhem pra mim
            e sintam orgulho. Quero deixar legado, não por ego, mas pela
            satisfação de saber que eu importo. Quero ser maior. Ainda me sinto
            vazio, mas amanhã eu aprendo a caminhar.
          </p>
        </TextBox>
      </MainStyle>
    );
  }
}
