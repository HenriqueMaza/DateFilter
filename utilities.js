App.factory('$utilities', function () {

    return new function () {

        this.formataDataParaOrdenacao = function (data) {
            var dataParaFormatacao = data;
            var pattern = /(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})/;
            dataParaFormatacao = dataParaFormatacao.replace("/", "").replace("/", "").replace(" ", "").replace(" ", "").replace(":", "");
            return dataParaFormatacao.replace(pattern, '$3-$2-$1T$4:$5');
        };
    }
    
});
