import "jasmine";
import request = require("request-promise");

const baseUrl = "http://localhost:3000";

const adminUrl = `${baseUrl}/promotion/admin`;
const restUrl = `${baseUrl}/promotion`;
const badRequests = (403 || 404 || 400);

describe("O servidor", () => {
	var server: any;

	beforeAll(() => {
		server = require("../server");
	});

	afterAll(() => {
		server.closeServer();
	});

	it("Cadastra uma promoção válida no admin", () => {

		const body = {
			name: "CUPOMTESTE",
			status: "Ativo",
      minValue: 15,
      discount: 0.5,
      adm: true
		};

		const options: any = {
			method: "POST",
			uri: adminUrl,
			body,
			json: true,
		};

		return request(options).catch(({ res }) => {
			expect(res.status).toBe(201);
		});
	});

	it("Cadastra uma promoção inválida no admin", () => {
		const body = {
			name: "100OFF",
			status: "Ativo",
      minValue: 15,
      discount: 1
		};

		const options: any = {
			method: "POST",
			uri: adminUrl,
			body,
			json: true,
		};

		return request(options).catch(({ res }) => {
			expect(res.status).toBe(badRequests);
		});
	});

});