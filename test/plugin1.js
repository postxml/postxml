module.exports = function (elements) {
   return function ($) {
      $(elements[0]).each(function(){
         this.name = 'div';
      });
   };
};
