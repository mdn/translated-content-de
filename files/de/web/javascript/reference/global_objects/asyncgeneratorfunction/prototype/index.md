---
title: AsyncGeneratorFunction.prototype.prototype
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/prototype
l10n:
  sourceCommit: 85af51e61dd95fa85feb7c43e08f284992ba69e5
---

{{JSRef}}

Die **`prototype`**-Eigenschaft von `AsyncGeneratorFunction.prototype` wird von allen asynchronen Generatorfunktionen geteilt. Ihr Wert ist [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). Jede mit der Syntax `async function*` oder dem `AsyncGeneratorFunction()`-Konstruktor erstellte asynchrone Generatorfunktion besitzt ebenfalls ihre eigene `prototype`-Eigenschaft, deren Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Wenn die asynchrone Generatorfunktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen asynchronen Generatorobjekts.

## Wert

Das gleiche Objekt wie [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). `AsyncGeneratorFunction.prototype.prototype` ist der technisch genauere Name, aber `AsyncGenerator.prototype` spricht die Intuition an, dass es sich um den Prototyp von asynchronen Generatorobjekten handelt.

{{js_property_attributes(0, 0, 1)}}

Die `prototype`-Eigenschaft jeder `AsyncGeneratorFunction`-Instanz ist ein leeres Objekt ohne Eigenschaften, dessen Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Es hat die folgenden Eigenschaftsattribute:

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Eine Instanz einer asynchronen Generatorfunktion hat zwei `prototype`-Eigenschaften. Die erste ist ihre eigene `prototype`-Eigenschaft. Die zweite ist die `prototype`-Eigenschaft ihres Prototyps, die `AsyncGeneratorFunction.prototype` ist. (Denken Sie daran, dass jede asynchrone Generatorfunktion eine Instanz von `AsyncGeneratorFunction` ist und daher `AsyncGeneratorFunction.prototype` als ihren Prototyp hat.)

```js
async function* genFunc() {}
const AsyncGeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(AsyncGeneratorFunctionPrototype, "prototype")); // true
```

Wenn eine asynchrone Generatorfunktion aufgerufen wird, wird die `prototype`-Eigenschaft der asynchronen Generatorfunktion zum Prototyp des zurückgegebenen asynchronen Generatorobjekts.

```js
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === AsyncGeneratorFunctionPrototype.prototype); // true
```

Das folgende Diagramm veranschaulicht die Prototyp-Kette einer asynchronen Generatorfunktion und ihrer Instanzen. Jeder hohle Pfeil zeigt eine Vererbungsbeziehung (d. h. eine Prototyplink), und jeder durchgezogene Pfeil zeigt eine Eigenschaftsbeziehung. Beachten Sie, dass es keine Möglichkeit gibt, über `gen` auf `genFunc` zuzugreifen – sie haben nur eine `instanceof`-Beziehung.

![Das Vererbungsdiagramm von asynchronen Generatoren und asynchronen Generatorfunktionen](https://mdn.github.io/shared-assets/images/diagrams/javascript/asyncgeneratorfunction/prototype-chain.svg)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
