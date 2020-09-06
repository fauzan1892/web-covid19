import $ from 'jquery';

$.getJSON('https://indonesia-covid-19.mathdro.id/api/provinsi', function (response) {
    $('#provinsi').DataTable({
        processing: true,
        responsive: true,
        data: response.data,
        columns: [{
                "data": 'id',
                "sortable": false,
                render: function (data, type, row, meta) {
                    return meta.row + meta.settings._iDisplayStart + 1;
                }
            },
            {
                data: "provinsi"
            },
            {
                data: "kasusPosi"
            },
            {
                data: "kasusSemb"
            },
            {
                data: "kasusMeni"
            }
        ]
    });
    window.someGlobalOrWhatever = response.balance
});