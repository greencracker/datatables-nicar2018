$(document).ready(function() {
    $('#sample_table').DataTable( {
        "columnDefs": [
            {
                "targets": [ 3 ],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [ 5 ],
                "visible": false,
                "searchable": false
            }
        ]
    } );
} );
