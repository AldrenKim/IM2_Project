// Call the dataTables jQuery plugin


$(document).ready(function() {
  var table = $('#dataTable').DataTable({
    dom: 'lBfrtip',
    buttons: {
      dom: {
        button: {
          tag: 'button',
          className: ''
        }
      },
      buttons: [{
        extend: 'excel',
        className: 'btn btn-sm btn-success',
        titleAttr: 'Excel export.',
        text: 'Excel',
        filename: 'excel-export',
        extension: '.xlsx'
      }],
    }
  });

  $("#min").datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });
  $("#max").datepicker({ onSelect: function () { table.draw(); }, changeMonth: true, changeYear: true });

  $('#min, #max').change(function () {
      table.draw();
  });
} );

$(document).ready(function(){

  var btns = $('.buttons-excel');
  btns.css("margin-left","20px");
  btns.css("margin-top","-2px")

});


$(document).ready(function(){
  $.fn.dataTable.ext.search.push(
  function (settings, data, dataIndex) {
      var min = $('#min').datepicker("getDate");
      var max = $('#max').datepicker("getDate");
      var startDate = new Date(data[14]);
      if (min == null && max == null) { return true; }
      if (min == null && startDate <= max) { return true;}
      if(max == null && startDate >= min) {return true;}
      if (startDate <= max && startDate >= min) { return true; }
      return false;
  });
});


$.fn.dataTableExt.afnFiltering.push(
	function( oSettings, aData, iDataIndex ) {
		var iFini = document.getElementById('fini').value;
		var iFfin = document.getElementById('ffin').value;
		var iStartDateCol = 6;
		var iEndDateCol = 7;

		iFini=iFini.substring(6,10) + iFini.substring(3,5)+ iFini.substring(0,2);
		iFfin=iFfin.substring(6,10) + iFfin.substring(3,5)+ iFfin.substring(0,2);

		var datofini=aData[iStartDateCol].substring(6,10) + aData[iStartDateCol].substring(3,5)+ aData[iStartDateCol].substring(0,2);
		var datoffin=aData[iEndDateCol].substring(6,10) + aData[iEndDateCol].substring(3,5)+ aData[iEndDateCol].substring(0,2);

		if ( iFini === "" && iFfin === "" )
		{
			return true;
		}
		else if ( iFini <= datofini && iFfin === "")
		{
			return true;
		}
		else if ( iFfin >= datoffin && iFini === "")
		{
			return true;
		}
		else if (iFini <= datofini && iFfin >= datoffin)
		{
			return true;
		}
		return false;
	}
);


