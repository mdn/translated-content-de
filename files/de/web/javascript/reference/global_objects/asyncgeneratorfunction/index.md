---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{JSRef}}

Das **`AsyncGeneratorFunction`**-Objekt bietet Methoden für [asynchrone Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*). In JavaScript ist jede asynchrone Generator-Funktion tatsächlich ein `AsyncGeneratorFunction`-Objekt.

Beachten Sie, dass `AsyncGeneratorFunction` _kein_ globales Objekt ist. Es kann mit folgendem Code erhalten werden:

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
    str += val;
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

_Erbt auch Instanz-Eigenschaften von seinem Eltern {{jsxref("Function")}}_.

Diese Eigenschaften sind auf `AsyncGeneratorFunction.prototype` definiert und werden von allen `AsyncGeneratorFunction`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGeneratorFunction`-Instanzen ist der Anfangswert der {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}}-Konstruktor.
- `AsyncGeneratorFunction.prototype.prototype`
  - : Alle asynchronen Generator-Funktionen teilen die gleiche [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft, die [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) ist. Jede asynchrone Generator-Funktion, die mit der `async function*`-Syntax oder dem `AsyncGeneratorFunction()`-Konstruktor erstellt wird, hat auch ihre eigene `prototype`-Eigenschaft, deren Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Wenn die asynchrone Generator-Funktion aufgerufen wird, wird ihre `prototype`-Eigenschaft zum Prototyp des zurückgegebenen asynchronen Generator-Objekts.
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncGeneratorFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind eigene Eigenschaften jeder `AsyncGeneratorFunction`-Instanz.

- {{jsxref("AsyncGeneratorFunction/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator verwendet wird. Es wird zum Prototyp des neuen Objekts.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Eltern {{jsxref("Function")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function*`](/de/docs/Web/JavaScript/Reference/Statements/async_function*)
- [`async function*` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function*)
- {{jsxref("Function")}}
- {{jsxref("AsyncFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
