
function UPcalendario() {
 data = new Date();
 hora = data.getHours();
 minutos = data.getMinutes();
 tempo=horas+(minutos<10?"0"+minutos:minutos);
 i="<i>";
  ii = "</i>";
  br=`
  <br>
  <br>
  `;
  
  h=`<br> 
  <i class='hora'>`;
  h1=h+"7:30"+ii;
  h2=h+"8:15"+ii;
  h3=h+"9:00"+ii;
  h4=h+"10:05"+ii;
  h5=h+"10:50"+ii;
  h6=h+"11:35"+ii;
  h7=h+"13:40"+ii;
  h8=h+"14:25"+ii;
  h9=h+"15:20"+ii;
  hI=h+"9:45"+ii;
  hA=h+"12:20"+ii;
  hE=h+"16:05"+ii;
  
  
  segunda = [
  h1+horario[0].aula.N1.conteudo, 
  h2+horario[0].aula.N2.conteudo,
  h3+horario[0].aula.N3.conteudo,
  h4+horario[0].aula.N4.conteudo,
  h5+horario[0].aula.N5.conteudo,
  h6+horario[0].aula.N6.conteudo,
  h7+horario[0].aula.N7.conteudo,
  h8+horario[0].aula.N8.conteudo,
  h9+horario[0].aula.N9.conteudo
  ];
  terca = [
  h1+horario[1].aula.N1.conteudo, 
  h2+horario[1].aula.N2.conteudo, 
  h3+horario[1].aula.N3.conteudo,
  h4+horario[1].aula.N4.conteudo,
  h5+horario[1].aula.N5.conteudo,
  h6+horario[1].aula.N6.conteudo,
  h7+horario[1].aula.N7.conteudo,
  h8+horario[1].aula.N8.conteudo,
  h9+horario[1].aula.N9.conteudo
  ];
  quarta = [
  h1+horario[2].aula.N1.conteudo,
  h2+horario[2].aula.N2.conteudo,
  h3+horario[2].aula.N3.conteudo,
  h4+horario[2].aula.N4.conteudo,
  h5+horario[2].aula.N5.conteudo,
  h6+horario[2].aula.N6.conteudo,
  h7+horario[2].aula.N7.conteudo,
  h8+horario[2].aula.N8.conteudo,
  h9+horario[2].aula.N9.conteudo
  ];
  quinta = [
  h1+horario[3].aula.N1.conteudo, 
  h2+horario[3].aula.N2.conteudo, 
  h3+horario[3].aula.N3.conteudo,
  h4+horario[3].aula.N4.conteudo,
  h5+horario[3].aula.N5.conteudo,
  h6+horario[3].aula.N6.conteudo,
  h7+horario[3].aula.N7.conteudo,
  h8+horario[3].aula.N8.conteudo,
  h9+horario[3].aula.N9.conteudo
  ];
  sexta = [
  h1+horario[4].aula.N1.conteudo,
  h2+horario[4].aula.N2.conteudo,
  h3+horario[4].aula.N3.conteudo,
  h4+horario[4].aula.N4.conteudo,
  h5+horario[4].aula.N5.conteudo,
  h6+horario[4].aula.N6.conteudo,
  h7+horario[4].aula.N7.conteudo,
  h8+horario[4].aula.N8.conteudo,
  h9+horario[4].aula.N9.conteudo
  ];
  
  
  intervalo=br+hI+(tempo >945 && tempo <1005?"<i class='day'>":"<i>")+"Primeiro intervalo"+ii+br
  
  almoco=br+hA+(tempo > 1220&& tempo <1340?"<i class='day'>":"<i>")+"Almoço"+ii+br
  
  
  intervalo_f=br+hE+(tempo >945 && tempo <2305?"<i class='day'>":"<i>")+"Intervalo final"+ii+br
  
  titulo = ["<h2>Segunda-feira</h2>", "<h2>Terça-feira</h2>", "<h2>Quarta-feira</h2>", "<h2>Quinta-feira</h2>", "<h2>Sexta-feira</h2>"];
  segundaI = titulo[0] + i + segunda[0] + ii + i + segunda[1] + ii + i + segunda[2] + ii+intervalo+ i + segunda[3] + ii + i + segunda[4] + ii  + i + segunda[5] + ii +almoco+ i + segunda[6] + ii + i + segunda[7] + ii + i + segunda[8] + ii+intervalo_f;
  tercaI = titulo[1] + i + terca[0] + ii + i + terca[1] + ii + i + terca[2] + ii +intervalo+ i + terca[3] + ii + i + terca[4] + ii + i + terca[5] + ii+almoco + i + terca[6] + ii + i + terca[7] + ii + i + terca[8] + ii+intervalo_f;
  quartaI = titulo[2] + i + quarta[0] + ii + i + quarta[1] + ii + i + quarta[2] + ii+intervalo + i + quarta[3] + ii + i + quarta[4] + ii + i + quarta[5] + ii+almoco + i + quarta[6] + ii + i + quarta[7] + ii + i + quarta[8] + ii+intervalo_f;
  quintaI = titulo[3] + i + quinta[0] + ii + i + quinta[1] + ii + i + quinta[2] + ii+intervalo + i + quinta[3] + ii + i + quinta[4] + ii + i + quinta[5] + ii+almoco + i + quinta[6] + ii + i + quinta[7] + ii + i + quinta[8] + ii+intervalo_f;
  sextaI = titulo[4] + i + sexta[0] + ii + i + sexta[1] + ii + i + sexta[2] + ii +intervalo+ i + sexta[3] + ii + i + sexta[4] + ii + i + sexta[5] + ii +almoco+ i + sexta[6] + ii + i + sexta[7] + ii + i + sexta[8] + ii+intervalo_f;
  br = `
  <br><br>
  `;
  calendario = ""+br + segundaI + br + tercaI + br + quartaI + br + quintaI + br + sextaI + br+"";
};
