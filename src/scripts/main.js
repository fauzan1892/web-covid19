import $ from 'jquery';

function main() {

    const getDataGlobal = async () => {
        // tuliskan kode di sini!
        fetch(`https://covid19.mathdro.id/api`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    const confirmed = responseJson.confirmed;
                    const recovered = responseJson.recovered;
                    const deaths = responseJson.deaths;
                    document.getElementById("confirm_global").innerHTML += formatRibuan(confirmed.value);
                    document.getElementById('recovered_global').innerHTML += formatRibuan(recovered.value);
                    document.getElementById('death_global').innerHTML += formatRibuan(deaths.value);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const getDataIndonesia = async () => {
        // tuliskan kode di sini!
        fetch(`https://covid19.mathdro.id/api/countries/indonesia`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    const confirmed = responseJson.confirmed;
                    const recovered = responseJson.recovered;
                    const deaths = responseJson.deaths;

                    document.getElementById('indonesia_global').innerHTML += `<b>${formatRibuan(confirmed.value)}</b> 
                    Positif,  
                    <b>${formatRibuan(recovered.value)}</b> Sembuh, 
                    <b>${formatRibuan(deaths.value)}</b> Meninggal`;
                    document.getElementById('indo_positif').innerHTML += formatRibuan(confirmed.value);
                    document.getElementById('indo_sembuh').innerHTML += formatRibuan(recovered.value);
                    document.getElementById('indo_meninggal').innerHTML += formatRibuan(deaths.value);


                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };


    const formatRibuan = (nStr) => {
        if (nStr >= 1000) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + ',' + '$2');
            }
            return x1 + x2;
        } else {
            return nStr;
        }
    }


    document.addEventListener("DOMContentLoaded", () => {
        getDataGlobal();
        getDataIndonesia();
        var d = new Date();
        document.getElementById('update_date').innerHTML = `Data di akses dan di update pada : ${d}`;
    });
}

export default main;