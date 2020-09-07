class StatistikItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    alert(responseJson.message);
                } else {
                    let index = 0;
                    let skin;
                    responseJson.data.forEach(prov => {
                        if (index < 4) {
                            if (index === 0) {
                                skin = "text-white bg-dark"
                            } else if (index === 1) {
                                skin = "text-white bg-danger"
                            } else if (index === 2) {
                                skin = "text-white bg-pink"
                            } else {
                                skin = "text-white bg-warning"
                            }

                            this.innerHTML += `<div class="card mt-2">
                                    <div class="card-body ${skin}">
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <h5><b>#${index+1}. ${prov.provinsi}</b></h5>
                                            </div>
                                            <div class="col-sm-9">
                                                <h5><b> Positif : ${prov.kasusPosi}, Sembuh : ${prov.kasusSemb}, Meninggal : ${prov.kasusMeni}</b></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                        }
                        index++;
                    });

                }
            })
            .catch(error => {
                alert(error);
            })
    }
}

customElements.define("statistik-item", StatistikItem);