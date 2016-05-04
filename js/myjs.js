// JavaScript File



/*
<script type = "text/javascript" language = "javascript">
   
         $(document).ready(function() {

            $("#hide").click(function(){
               $(".target").hide( "explode", {pieces: 16 }, 2000 );


            $("#show").click(function(){
               $(".target").show( "explode", {pieces: 16}, 2000 );
            });
            		
         });</script>
       */
/*global $*/ $( document ).click(function() {
  $( "#toggle" ).toggle( "explode" );
});
         
         
 $(document).ready (function()  {
 $("#toggle").click (function() {
     $("#toggle").effect("explode", {pieces: 16, 2000);
         
     });
 }) ;