// var1 Box icon
// var2 Box logo
//var3 could be hexcode 

$(function() {
  $.getJSON('package.json', function(data) {
    var $ajax = $("#ajax");

    function buildBox(var1, var2, var3, myNumber) {
      return "<div class='col-lg-3 col-md-6'>\
                <div class='panel " + var3 + "'>\
                  <div class='panel-heading'>\
                    <div class='row'>\
                      <div class='col-xs-3'>\
                       <i class='fa " + var1 + " fa-3x' aria-hidden='true'></i>\
                      </div>\
                      <div class='col-xs-9 text-right'>\
                        "+myNumber+"\
                        <div>"+var2+"</div>\
                      </div>\
                    </div>\
                  </div>\
                  <div class='panel-footer'>\
                    <span class='pull-left " + var3 + "'><a href='http://www.google.com'>View Details</a></span>\
                      <span class='pull-right " + var3 + "'>\
                        <a href='#'><i class='fa fa-arrow-circle-right'></a></i>\
                      </span>\
                  </div>\
                </div>\
              </div>"
            };

    function theNumber(x,y) {
      return x * y;
    };

    $.ajax({
      type: "GET",
      url: '/package.json',
      success: function(items) {
        for (var i=0;i < data.widgets.length; i++) {
          getNumber=theNumber(5,i);
          html = buildBox(data.widgets[i].config.dataConfig.infobox.icon,
            data.widgets[i].config.dataConfig.infobox.label,
            data.widgets[i].config.dataConfig.infobox.color,
            getNumber);
          $(".li").append(html);
        }
      }
    });
  });
});