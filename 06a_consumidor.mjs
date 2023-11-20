//06a_consumidor.mjs
import { CarroComPlaca } from "./06a_CarroComPlaca.mjs";
import { Locadora } from "./06a_Senha.mjs";

var locadora = new Locadora()
locadora.adicionaCarro(new CarroComPlaca("AAA-5I93"))
locadora.adicionaCarro(new CarroComPlaca("JJJ-5O00"))
locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()

locadora.abasteceCarro(1, 30)
locadora.abasteceCarro(0, 30)
locadora.consultaCarros()
