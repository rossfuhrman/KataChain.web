window.addEvent('domready', function(){
  $$('table.calendar td').each(function(day){
      if(day.className.indexOf('progressed') > -1) {
            var x = new Element('div', {'class': 'chainlink' });
                  day.appendChild(x);
      }
  })
});
