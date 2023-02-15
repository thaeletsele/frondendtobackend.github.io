function show_graph() {
	$('#idgraph01').show(); 
}
function load_graph(chart) {
	$('#GraphForm').submit();
	//chart = $('#chart-url').val();
	alert ("Using Chart = "+chart);
	$.ajax({
		type: 'GET',
		dataType: 'html',
		url: 'charts.php?S='+chart,
		//data: $('#UpdateForm').serialize(),
		success: function(msg){
		  //var PT = $('#pn').val();
			//$('#test_status-'+PT).html($('#update_status').val());
			$('#status-message').html("Load Message:"+msg.length);
			$('#svg1').html(msg);
			 //alert('Reply: '+msg);
			 //$("#idgraph01").modal('hide'); 
			$('#GraphForm').reset();
		},
		error: function(msg){
		 alert("failure to connect to backend: "+msg);
		}
	});
}
function changeinput1(CI) {
	$('#inputbox1').attr('value',CI);
}
