# Biblioteca para ordenação de datas em uma tabela #

## Chamada via Bower ##

Para utilização desta biblioteca via bower basta utilizar o comando: 

> bower install https://github.com/HenriqueMaza/DateFilter

## formataDataParaOrdenacao ##

Responsável por transformar uma data passada para a função em uma data formatada para o filtro automatico do angular, sendo assim possível ordenar grids de forma transparente. Para a utilização é necessário:

> Registrar a biblioteca na index do projeto
> Injetar a dependência dentro do modulo
> 
```angularModule.controller('controller', function ($scope, $filter, $http, $serverError, $utilities) {...```
>
> Alterar a data antes de ser passada para o itém que será apresentado no grid.
>
```item.DataSolicitacao =  $utilities.formataDataParaOrdenacao(dataParaFormatacao);```
>
> Alterar a formatação de data na apresentação da TD
>
 ``` <td ng-bind="solicitacao.DataSolicitacao | date : 'dd/MM/yyyy HH:mm'"></td>```
