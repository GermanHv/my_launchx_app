const Ajolonauta = require('../app/Ajolonauta')


describe("Prueba de unidad de Ajolonauta", () => {
    test('Caso de prueba 1; Creación de objeto', () => {

        //Aqui tu puedes usar el código como lo deseas utilizar
      const woppy = new Ajolonauta("woppy")

      // validas el resultado esperado.
      expect(woppy.name).toBe("WWwoppy");
    });
  })
  