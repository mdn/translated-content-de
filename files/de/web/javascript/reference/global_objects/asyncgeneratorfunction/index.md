---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Das **`AsyncGeneratorFunction`**-Objekt stellt Methoden für [asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) bereit. In JavaScript ist jede asynchrone Generatorfunktion tatsächlich ein `AsyncGeneratorFunction`-Objekt.

Beachten Sie, dass `AsyncGeneratorFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction` ist eine Unterklasse von {{jsxref("Function")}}.

{{InteractiveExample("JavaScript Demo: AsyncGeneratorFunction", "taller")}}

```js interactive-example
const AsyncGeneratorFunction = async function* () {}.constructor;

const foo = new AsyncGeneratorFunction(`
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
`);

let str = "";

async function generate() {
  for await (const val of foo()) {
    str = str + val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## Konstruktor

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : Erstellt ein neues `AsyncGeneratorFunction`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Function")}}_.

Diese Eigenschaften sind auf `AsyncGeneratorFunction.prototype` definiert und werden von allen `AsyncGeneratorFunction`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGeneratorFunction`-Instanzen ist der Anfangswert der {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}}-Konstruktor.
- `AsyncGeneratorFunction.prototype.prototype`
  - : Alle asynchronen Generatorfunktionen teilen die gleiche [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) ist. Jede asynchrone Generatorfunktion, die mit der `async function*`-Syntax oder dem `AsyncGeneratorFunction()`-Konstruktor erstellt wurde, hat auch ihre eigene `prototype`-Eigenschaft, deren Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Wenn die asynchrone Generatorfunktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen asynchronen Generatorobjekts.
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncGeneratorFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind eigene Eigenschaften jeder `AsyncGeneratorFunction`-Instanz.

- {{jsxref("AsyncGeneratorFunction/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Es wird zum Prototyp des neuen Objekts.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Function")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
