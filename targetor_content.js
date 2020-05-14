var plugin_access_key = 401070563620;
var data_year = "2020";
var base_url = "https://vantaa.targetorpro.com";
var image_url = base_url;                /* modified */


function load_immediate_targetor_data() {

   load_required_targetor_helpers('script');
   load_required_targetor_helpers('css');

   $('.targetor_content').each(function () {
     if ($(this).attr('data-fetch') == 'immediate') {
       get_targetor_content($(this).attr('id'));
     }
   });
}

function load_required_targetor_helpers(helper){
   var targetor_url = base_url + "/executor/api/plugin/card_css/";

   if (helper==='script'){
       targetor_url = base_url + "/executor/api/plugin/card_script/";
   }

   var targetor_access_key = new Object();
   targetor_access_key.accesskey = plugin_access_key;

   $.ajax({
     url: targetor_url,
     type: "POST",
     crossDomain: true,
     contentType: "text/plain",
     async:false,
     xhrFields: {
       withCredentials: false
     },
     data: JSON.stringify(targetor_access_key),
     dataType: "plain",
     success: function (response) {
         if (response!=''){
             if (helper==='script'){
                 build_scipt(response);
             } else {
                 build_css(response);
             }
         }
     },
     error: function (xhr, status) {
         if (status == 'parsererror'){
             if (helper==='script'){
                 build_script(xhr.responseText);
             } else {
                 build_css(xhr.responseText);
             }
         }

     }
   });
}

function build_css(css_str){
     $("<style>" + css_str + " </style>").appendTo("head")
}
function build_script(script_str){
     $("<script>" + script_str + " </script>").appendTo("head");
}