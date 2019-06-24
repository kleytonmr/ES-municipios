function init(){
  $(document).ready(function(){
    $.ajax({
      url: "https://raw.githubusercontent.com/kleytonmr/ES-municipios/master/banco.min.json?token=AHNGKJ5T6LQIYYFOZVB3GRK5C5YMM",
      dataType: "json",
      success: function(data){
        $(data.municipios).each(function(index,value){
          var $select = $('#list-munic');  
          $select.append('<option value=' + value.key + '>' + value.munic + '</option>');
        });
        selected(data.municipios)
      }
    });
  });
}

function selected(data){
  // $('#geojs-32-mun').on('click', function() {
  //   console.log($(this).find('g').attr("id"));
  // });

  $('#list-munic').on('change', function() {
    var munic_current = $( "#list-munic option:selected" ).val()
    for (var i in data){
      $("#" + data[i].key).css("fill", "#e7e8ea");
      $("#teste").find('li').remove()
    }
    
    for (var i in data){
      if (data[i].key == munic_current) {
        cluster = data[i].cluster
        for (var i in data){
          if (data[i].cluster == cluster) {
            $("#" + data[i].key).css("fill", "#a1a1a1");
            $("#" + munic_current).css("fill", "#ffba5a");
            $("#teste").append("<li>" + data[i].munic +": "+ data[i].cluster+ "</li>");
          }
        }
      }
    }
  });
}
selected();
init();





