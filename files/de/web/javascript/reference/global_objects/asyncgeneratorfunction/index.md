---
title: AsyncGeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das Objekt **`AsyncGeneratorFunction`** bietet Methoden für [asynchrone Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*). In JavaScript ist jede asynchrone Generatorfunktion tatsächlich ein `AsyncGeneratorFunction` Objekt.

Beachten Sie, dass `AsyncGeneratorFunction` _kein_ globales Objekt ist. Es kann mit folgendem Code erhalten werden:

```js
const AsyncGeneratorFunction = async function* () {}.constructor;
```

`AsyncGeneratorFunction` ist eine Unterklasse von {{jsxref("Function")}}.

{{EmbedInteractiveExample("pages/js/async-functionasterisk-function.html", "taller")}}

## Konstruktor

- {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction()")}}
  - : Erstellt ein neues `AsyncGeneratorFunction` Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Function")}}_.

Diese Eigenschaften sind auf `AsyncGeneratorFunction.prototype` definiert und werden von allen `AsyncGeneratorFunction` Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncGeneratorFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncGeneratorFunction` Instanzen ist der Anfangswert der {{jsxref("AsyncGeneratorFunction/AsyncGeneratorFunction", "AsyncGeneratorFunction")}} Konstruktor.
- `AsyncGeneratorFunction.prototype.prototype`
  - : Alle asynchronen Generatorfunktionen teilen die gleiche [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft, welche [`AsyncGenerator.prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) ist. Jede asynchrone Generatorfunktion, die mit der `async function*` Syntax oder dem `AsyncGeneratorFunction()` Konstruktor erstellt wird, hat auch ihre eigene `prototype` Eigenschaft, deren Prototyp `AsyncGeneratorFunction.prototype.prototype` ist. Wenn die asynchrone Generatorfunktion aufgerufen wird, wird ihre `prototype` Eigenschaft der Prototyp des zurückgegebenen asynchronen Generatorobjekts.
- `AsyncGeneratorFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) Eigenschaft ist der String `"AsyncGeneratorFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

Diese Eigenschaften sind eigene Eigenschaften jeder `AsyncGeneratorFunction` Instanz.

- {{jsxref("AsyncGeneratorFunction/prototype", "prototype")}}
  - : Wird verwendet, wenn die Funktion als Konstruktor mit dem [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator genutzt wird. Sie wird zum Prototyp des neuen Objekts.

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
