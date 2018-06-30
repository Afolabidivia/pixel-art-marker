// This script should run after the docunment has finished loading
$(function(){
	// Trigger when the DOM is ready
	let gridWidth = $( "#gridWidth" ).val();
	let gridHeight = $( "#gridHeight" ).val();
	// Call to make grid function
	makeGrid(gridHeight,gridWidth);

	// Trigger this when the form is submitted
	$( "#gridSize" ).submit(function( event ) {
		gridWidth = $('#gridWidth').val();
		gridHeight = $('#gridHeight').val();
		// Call to make grid function
		makeGrid(gridHeight,gridWidth);
  		event.preventDefault();
	});
	// Make Grid function
	function makeGrid(row,column) {
		const gridCanvas = $('#gridTable');
		// Empty the grid element
		gridCanvas.empty();
		const tableData = '<td class="table-cell"></td>';
		let tableRow = "";
  		for (let i = 0; i < row; i++) {
  			tableRow += '<tr>';
  			for (let i = 0; i < column; i++) {
  				tableRow += tableData;
  			}
  			tableRow += '</tr>';
  		}
  		gridCanvas.append(tableRow);
	}

	$(document).on("click", ".table-cell", function() {
		const selectedColor = $( "#colorPicker" ).val();
		$( this ).css("background-color", selectedColor);
	});
});