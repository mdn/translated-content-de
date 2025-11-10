---
title: GeneratorFunction.prototype.prototype
short-title: prototype
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`prototype`**-Eigenschaft von `GeneratorFunction.prototype` wird von allen Generatorfunktionen geteilt. Ihr Wert ist [`Generator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator). Jede Generatorfunktion, die mit der `function*`-Syntax oder dem `GeneratorFunction()`-Konstruktor erstellt wird, hat auch ihre eigene `prototype`-Eigenschaft, deren Prototyp `GeneratorFunction.prototype.prototype` ist. Wenn die Generatorfunktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen Generatorobjekts.

## Wert

Dasselbe Objekt wie [`Generator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator). `GeneratorFunction.prototype.prototype` ist der technisch genauere Name, aber `Generator.prototype` entspricht mehr der Intuition, dass es sich um den Prototyp von Generatorobjekten handelt.

{{js_property_attributes(1, 0, 0)}}

Die `prototype`-Eigenschaft jeder `GeneratorFunction`-Instanz ist ein leeres Objekt ohne Eigenschaften, dessen Prototyp `GeneratorFunction.prototype.prototype` ist. Sie hat die folgenden Eigenschaftsattribute:

{{js_property_attributes(0, 0, 1)}}

## Beschreibung

Eine Generatorfunktion-Instanz hat zwei `prototype`-Eigenschaften. Die erste ist ihre eigene `prototype`-Eigenschaft. Die zweite ist die `prototype`-Eigenschaft auf ihrem Prototyp, welcher `GeneratorFunction.prototype` ist. (Denken Sie daran, dass jede Generatorfunktion eine Instanz von `GeneratorFunction` ist und daher `GeneratorFunction.prototype` als Prototyp hat.)

```js
function* genFunc() {}
const GeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(GeneratorFunctionPrototype, "prototype")); // true
```

Wenn eine Generatorfunktion aufgerufen wird, wird die `prototype`-Eigenschaft der Generatorfunktion zum Prototyp des zurückgegebenen Generatorobjekts.

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === GeneratorFunctionPrototype.prototype); // true
```

Das folgende Diagramm veranschaulicht die Prototyp-Kette einer Generatorfunktion und ihrer Instanzen. Jeder hohle Pfeil zeigt eine Vererbungsbeziehung (d.h. eine Prototyp-Verbindung) an, und jeder volle Pfeil zeigt eine Eigenschaftsbeziehung an. Beachten Sie, dass es keine Möglichkeit gibt, von `gen` auf `genFunc` zuzugreifen — sie haben nur eine `instanceof`-Beziehung.

![Das Vererbungsdiagramm von Generatoren und Generatorfunktionen](https://mdn.github.io/shared-assets/images/diagrams/javascript/generatorfunction/prototype-chain.svg)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`function*`](/de/docs/Web/JavaScript/Reference/Statements/function*)
- [`function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/function*)
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
