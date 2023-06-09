import React, { useEffect, useState } from "react";
import Footer from "../../componentes/Footer";
import Padrao from "../../componentes/Padrao";
import "./ViewG.css";

function ViewG() {
  const [,setMangaNaruto] = useState([]);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/manga/?page[limit]=1&page[offset]=34")
      .then((response) => response.json())
      .then((response) => setMangaNaruto(response.data));
  });
  return (
    <div>
      <Padrao />
      <div className="mangaview">
        <div className="descrition">
          <h1>Naruto</h1>
          <ul>
            <li><h4>Tags:⠀⠀</h4></li>
            <li>shounen</li>
            <li id="invisible"></li>
            <li>⠀comédia</li>
          </ul>
          <img alt="capa do manga" src="https://media.kitsu.io/manga/poster_images/35/original.png"></img>
          <p>Before Naruto's birth, a great demon fox had attacked the Hidden Leaf Village. 
            A man known as the 4th Hokage sealed the demon inside the newly born Naruto, causing him to unknowingly grow up detested by his fellow villagers.
            Despite his lack of talent in many areas of ninjutsu, Naruto strives for only one goal: to gain the title of Hokage, the strongest ninja in his village.</p>
        </div>
        <div className="captitulo"> <h1> Capítulos</h1></div>
        <div className="cap">
          <ul>
            <li>Capítulo 1 - Uzumaki Naruto!!</li>
            <li>Capítulo 2 - Konohamaru!!</li>
            <li>Capítulo 3 - Uchiha Sasuke!!</li>
            <li>Capítulo 4 - Hatake Kakashi!!</li>
            <li>Capítulo 5 - O Descuido é Seu Maior Inimigo!!</li>
            <li>Capítulo 6 - Apenas o Sasuke-kun...!!</li>
            <li>Capítulo 7 - A Conclusão do Kakashi</li>
            <li>Capítulo 8 - Mesmo Assim Vocês Falharam!!</li>
            <li>Capítulo 9 - O Pior Cliente Possível</li>
            <li>Capítulo 10 - 2 Já Foram</li>
            <li>Capítulo 11 - Desembarque!!</li>
            <li>Capítulo 12 - Está Acabado!!</li>
            <li>Capítulo 13 - Eu Sou um Ninja!!</li>
            <li>Capítulo 14 - Plano Secreto...!!</li>
            <li>Capítulo 15 - Sharinga Ressuscitado!!</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewG;
