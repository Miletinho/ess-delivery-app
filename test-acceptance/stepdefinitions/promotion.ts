import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
import request = require("request-promise");
import { visitFunctionBody } from 'typescript';
var base_url = "http://localhost:3000/";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

defineSupportCode(function ({ Given, When, Then }) {
    // Testes de aceitação de service:
    // é a página que tem todos os cupons dele
    Given(/^o restaurante "(\d*)" está na página de cadastro de promoção$/, async (restName) => {
        await request.get(base_url + "/restaurants" + restName )
                 .then(body => expect(body == undefined))
     });
})

/*Given(/^the system has no student with CPF "(\d*)"$/, async (cpf) => {
       await request.get(base_url + "alunos")
                .then(body => 
                   expect(body.includes(`"cpf":"${cpf}"`)).to.equal(false));
    });

    When(/^I register the student "([^\"]*)" with CPF "(\d*)"$/, async (name, cpf) => {
        let aluno = {"nome": name, "cpf" : cpf, "email":""};
        var options:any = {method: 'POST', uri: (base_url + "alunos"), body:aluno, json: true};
        await request(options)
              .then(body => 
                   expect(JSON.stringify(body)).to.equal(
                       '{"success":"O aluno foi cadastrado com sucesso"}'));
    });

    Then(/^the system now stores "([^\"]*)" with CPF "(\d*)"$/, async (name, cpf) => {
        let resposta = `{"nome":"${name}","cpf":"${cpf}","email":"","metas":{}`;
        await request.get(base_url + "alunos")
                     .then(body => expect(body.includes(resposta)).to.equal(true));
    }); */