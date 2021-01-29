class NegociacoesView {

    private _elemento: Element;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    update(model: Negociacoes) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered margem">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
            ${model.getNegociacoes().map(negociacao =>
                `
                    <tr>
                        <td>${ negociacao.data.getDate() } / ${ negociacao.data.getMonth() + 1 } / ${ negociacao.data.getFullYear() }</td>
                        <td>${ negociacao.quantidade }</td>
                        <td>${ negociacao.valor }</td>
                        <td>${ negociacao.volume }</td>
                    </tr>                        
                `).join('')}            
            </tbody>
            <tfoot>
            </tfoot>
        </table>               
        `
    }
}