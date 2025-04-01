const AnaliseDeDados = require("../src/analiseDeDados");

describe('Testes de AnaliseDeDados', () => {
  let analise;

  beforeEach(() => {
    analise = new AnaliseDeDados([40,20,60,80,100]);
  });

  test('Adicionar dados de forma correta', async () => {
    analise.adicionarDados([120,140,160]);
    expect(analise.dados).toEqual([40,20,60,80,100,120,140,160]);
  });

  test('Retornar erro caso a adição de dados não seja um array', async () => {
    expect(() => analise.adicionarDados(7)).toThrow('Os dados devem ser um array.');
  });

  test('Limpeza de dados', async () => {
    analise.limparDados();
    expect(analise.dados).toEqual([]);
  });

  test('Ordena corretamente o array de dados', async () => {
    expect(analise.ordenarDados()).toEqual([20, 40, 60, 80, 100]);
  });

  test('Calculando a média', async () => {
    expect(analise.calcularMedia()).toBe(60);
  });

  test('Se não houver dados calcular média deve retornar vazio', async () => {
    analise.limparDados();
    expect(analise.calcularMedia()).toBeNull();
  });

  test('Calculando a mediana', async () => {
    expect(analise.calcularMediana()).toBe(60);
  });

  test('Calculando a moda', async () => {
    analise.adicionarDados([75,85,75]);
    expect(analise.calcularModa()).toEqual([75]);
  });

  test('Calculando variancia', async () => {
    expect(analise.calcularVariancia()).toBe(800);
  });

  test('Calculando desvio padrão', async () => {
    expect(analise.calcularDesvioPadrao()).toBeCloseTo(28.284, 3);
  });

  test('Encontrar menor valor', async () => {
    expect(analise.encontrarMinimo()).toBe(20);
  });

  test('Encontrar maior valor', async () => {
    expect(analise.encontrarMaximo()).toBe(100);
  });

  test('Normalizando os dados', async () => {
    expect(analise.normalizarDados()).toEqual([0.25, 0, 0.5, 0.75, 1]);
  });

  test('Calculando percentil', async () => {
    expect(analise.calcularPercentil(25)).toBe(40);
    expect(analise.calcularPercentil(50)).toBe(60);
    expect(analise.calcularPercentil(75)).toBe(80);
  });

  test('Se o percentil for invalido deve retornar vazio', async () => {
    expect(analise.calcularPercentil(150)).toBeNull();
  });

  test('Calculando soma', async () => {
    expect(analise.calcularSoma()).toBe(300);
  });

  test('Calculando produto', async () => {
    expect(analise.calcularProduto()).toBe(384000000);
  });

  test('Calculando amplitude', async () => {
    expect(analise.calcularAmplitude()).toBe(80);
  });

  test('Calculando coeficiente de variação', async () => {
    expect(analise.calcularCoeficienteVariacao()).toBeCloseTo(47.14, 2);
  });

  test('Removendo outliers', async () => {
    analise.adicionarDados([100, 200]);
    analise.removerOutliers();
    expect(analise.dados).toEqual([40, 20, 60, 80, 100, 100]);
  });

  test('Se os conjuntos forem de tamanhos diferentes retornar null', async () => {
    const outroConjunto = [58,64,52];
    expect(analise.calcularCorrelacao(outroConjunto)).toBeNull();
  });

  test('Se o outro conjunto não for um array retornar null', async () => {
    expect(analise.calcularCorrelacao('not an array')).toBeNull();
  });

});






 
