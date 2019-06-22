function init(){
  $(document).ready(function(){
    $.ajax({
      url: "banco.json",
      dataType: "json",
      success: function(data){
        $(data.municipios).each(function(index,value){
          console.log(index)
          console.log(value.key)
        });
      }
    });
  });





  var objMunicipios = {"municipios":[{"nome":"Vitória","chave":"vitoria"},{"nome":"Aracruz","chave":"aracruz"},{"nome":"Colatina","chave":"colatina"},{"nome":"Anchieta","chave":"anchieta"},{"nome":"Vila Velha","chave":"vila-velha"},{"nome":"Venda Nova do Imigrante","chave":"venda-nova-do-imigrante"},{"nome":"Cachoeiro de Itapemirim","chave":"cachoeiro-de-itapemirim"},{"nome":"Itaguaçu","chave":"itaguacu"},{"nome":"Marilândia","chave":"marilandia"},{"nome":"Linhares","chave":"linhares"},{"nome":"Viana","chave":"viana"},{"nome":"Nova Venécia","chave":"nova-venecia"},{"nome":"Itapemirim","chave":"itapemirim"},{"nome":"Águia Branca","chave":"aguia-branca"},{"nome":"Iconha","chave":"iconha"},{"nome":"Alfredo Chaves","chave":"alfredo-chaves"},{"nome":"João Neiva","chave":"joao-neiva"},{"nome":"Domingos Martins","chave":"domingos-martins"},{"nome":"Serra","chave":"serra"},{"nome":"Santa Teresa","chave":"santa-teresa"},{"nome":"São Domingos do Norte","chave":"sao-domingos-do-norte"},{"nome":"Cariacica","chave":"cariacica"},{"nome":"Santa Maria de Jetibá","chave":"santa-maria-de-jetiba"},{"nome":"Marataízes","chave":"marataizes"},{"nome":"Vila Valério","chave":"vila-valerio"},{"nome":"Piúma","chave":"piuma"},{"nome":"Conceição do Castelo","chave":"conceicao-do-castelo"},{"nome":"Muqui","chave":"muqui"},{"nome":"Presidente Kennedy","chave":"presidente-kennedy"},{"nome":"Alegre","chave":"alegre"},{"nome":"Baixo Guandu","chave":"baixo-guandu"},{"nome":"Montanha","chave":"montanha"},{"nome":"São José do Calçado","chave":"sao-jose-do-calcado"},{"nome":"Itarana","chave":"itarana"},{"nome":"Governador Lindenberg","chave":"governador-lindenberg"},{"nome":"São Mateus","chave":"sao-mateus"},{"nome":"Guarapari","chave":"guarapari"},{"nome":"Castelo","chave":"castelo"},{"nome":"Marechal Floriano","chave":"marechal-floriano"},{"nome":"Rio Novo do Sul","chave":"rio-novo-do-sul"},{"nome":"Pedro Canário","chave":"pedro-canario"},{"nome":"São Roque do Canaã","chave":"sao-roque-do-canaa"},{"nome":"Vargem Alta","chave":"vargem-alta"},{"nome":"Afonso Cláudio","chave":"afonso-claudio"},{"nome":"Rio Bananal","chave":"rio-bananal"},{"nome":"Ibiraçu","chave":"ibiracu"},{"nome":"Boa Esperança","chave":"boa-esperanca"},{"nome":"Jerônimo Monteiro","chave":"jeronimo-monteiro"},{"nome":"Ibatiba","chave":"ibatiba"},{"nome":"Brejetuba","chave":"brejetuba"},{"nome":"Laranja da Terra","chave":"laranja-da-terra"},{"nome":"Vila Pavão","chave":"vila-pavao"},{"nome":"Dores do Rio Preto","chave":"dores-do-rio-preto"},{"nome":"Pancas","chave":"pancas"},{"nome":"Ibitirama","chave":"ibitirama"},{"nome":"Muniz Freire","chave":"muniz-freire"},{"nome":"Mucurici","chave":"mucurici"},{"nome":"Mantenópolis","chave":"mantenopolis"},{"nome":"Atilio Vivacqua","chave":"atilio-vivacqua"},{"nome":"Ponto Belo","chave":"ponto-belo"},{"nome":"Iúna","chave":"iuna"},{"nome":"São Gabriel da Palha","chave":"sao-gabriel-da-palha"},{"nome":"Conceição da Barra","chave":"conceicao-da-barra"},{"nome":"Ecoporanga","chave":"ecoporanga"},{"nome":"Sooretama","chave":"sooretama"},{"nome":"Bom Jesus do Norte","chave":"bom-jesus-do-norte"},{"nome":"Divino de São Lourenço","chave":"divino-de-sao-lourenco"},{"nome":"Alto Rio Novo","chave":"alto-rio-novo"},{"nome":"Jaguaré","chave":"jaguare"},{"nome":"Guaçuí","chave":"guacui"},{"nome":"Barra de São Francisco","chave":"barra-de-sao-francisco"},{"nome":"Pinheiros","chave":"pinheiros"},{"nome":"Mimoso do Sul","chave":"mimoso-do-sul"},{"nome":"Santa Leopoldina","chave":"santa-leopoldina"},{"nome":"Apiacá","chave":"apiaca"},{"nome":"Irupi","chave":"irupi"},{"nome":"Fundão","chave":"fundao"},{"nome":"Água Doce do Norte","chave":"agua-doce-do-norte"}]}

  $.each(objMunicipios.municipios, function(key, value){
    var $select = $('#list-munic');  
    $select.append('<option value=' + value.chave + '>' + value.nome + '</option>');
  });

  $('#list-munic').on('change', function() {
    var last = $( "#list-munic option:selected" ).prevAll().val()
    var current = $( "#list-munic option:selected" ).val()
    $("#" + last).css("fill", "#e7e8ea");
    $("#" + current).css("fill", "#c9a471");
    
    
    console.log("last: "+last)
    console.log("current: "+current)
  });
}


init();





