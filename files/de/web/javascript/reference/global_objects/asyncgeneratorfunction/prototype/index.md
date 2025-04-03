---
title: AsyncGeneratorFunction.prototype.prototype
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/prototype
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die **`prototype`**-Eigenschaft von `AsyncGeneratorFunction.prototype` wird von allen asynchronen Generatorfunktionen gemeinsam genutzt. Ihr Wert ist [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). Jede asynchrone Generatorfunktion, die mit der `async function*`-Syntax oder dem `AsyncGeneratorFunction()`-Konstruktor erstellt wurde, hat ebenfalls ihre eigene `prototype`-Eigenschaft, deren Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Wenn die asynchrone Generatorfunktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen asynchronen Generatorobjekts.

## Wert

Dasselbe Objekt wie [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). `AsyncGeneratorFunction.prototype.prototype` ist der technisch exaktere Name, aber `AsyncGenerator.prototype` spricht die Intuition an, dass es sich um den Prototyp von asynchronen Generatorobjekten handelt.

{{js_property_attributes(0, 0, 1)}}

Die `prototype`-Eigenschaft jeder `AsyncGeneratorFunction`-Instanz ist ein leeres Objekt ohne Eigenschaften, dessen Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Sie hat die folgenden Eigenschaften Attribute:

{{js_property_attributes(1, 0, 0)}}

## Beschreibung

Eine Instanz einer asynchronen Generatorfunktion hat zwei `prototype`-Eigenschaften. Die erste ist ihre eigene `prototype`-Eigenschaft. Die zweite ist die `prototype`-Eigenschaft in ihrem Prototyp, was `AsyncGeneratorFunction.prototype` ist. (Denken Sie daran, dass jede asynchrone Generatorfunktion eine Instanz von `AsyncGeneratorFunction` ist, sodass sie `AsyncGeneratorFunction.prototype` als ihren Prototyp hat.)

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

Das folgende Diagramm veranschaulicht die Prototypkette einer asynchronen Generatorfunktion und ihrer Instanzen. Jeder hohle Pfeil zeigt eine Vererbungsbeziehung (d.h. einen Prototyp-Link) an, und jeder solide Pfeil zeigt eine Eigenschaften-Beziehung an. Beachten Sie, dass es keine Möglichkeit gibt, von `gen` auf `genFunc` zuzugreifen – sie haben nur eine `instanceof`-Beziehung.

![Das Vererbungsdiagramm von asynchronen Generatoren und asynchronen Generatorfunktionen](https://mdn.github.io/shared-assets/images/diagrams/javascript/asyncgeneratorfunction/prototype-chain.svg)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
