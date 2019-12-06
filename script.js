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
            },
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            },
            {
                "targets": [ 2 ],
                "visible": false,
                "searchable": false
            }
        ]
    } );
} );