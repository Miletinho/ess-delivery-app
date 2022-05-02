Scenario: cadastro de promoção bem-sucedido pelo restaurante
Given o restaurante "Mequi" está na página de cadastro de promoção
And o cupom de código "2BIGMEQUIPOR1" não está cadastrado
And o produto "Big Méqui" de valor "R$10,00" não possui promoções associadas a ele
When o restaurante "Méqui" tenta cadastrar o cupom "2BIGMEQUIPOR1" de valor "R$10,00" com valor mínimo "R$20,00", associado ao produto "Big Méqui", para ser ativo na hora "21:00" do dia "05/04/2022" até "23:59" do "06/04/2022"
Then o cupom "2BIGMEQUIPOR1" é cadastrado