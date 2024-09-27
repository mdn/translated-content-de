---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`AsyncFunction`**-Objekt bietet Methoden für [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function). In JavaScript ist jede asynchrone Funktion tatsächlich ein `AsyncFunction`-Objekt.

Beachten Sie, dass `AsyncFunction` _kein_ globales Objekt ist. Es kann mit dem folgenden Code erhalten werden:

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction` ist eine Unterklasse von {{jsxref("Function")}}.

## Konstruktor

- {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction()")}}
  - : Erstellt ein neues `AsyncFunction`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Function")}}_.

Diese Eigenschaften sind auf `AsyncFunction.prototype` definiert und werden von allen `AsyncFunction`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AsyncFunction.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AsyncFunction`-Instanzen ist der Anfangswert der {{jsxref("AsyncFunction/AsyncFunction", "AsyncFunction")}}-Konstruktor.
- `AsyncFunction.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"AsyncFunction"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

> **Note:** `AsyncFunction`-Instanzen haben nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Function")}}_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`async function`](/de/docs/Web/JavaScript/Reference/Statements/async_function)
- [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Function")}}
- {{jsxref("AsyncGeneratorFunction")}}
- {{jsxref("GeneratorFunction")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
