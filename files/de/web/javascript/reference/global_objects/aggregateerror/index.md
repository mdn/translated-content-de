---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

Das **`AggregateError`**-Objekt repräsentiert einen Fehler, wenn mehrere Fehler in einem einzigen Fehler zusammengefasst werden müssen. Es wird ausgelöst, wenn mehrere Fehler von einer Operation gemeldet werden müssen, zum Beispiel durch {{jsxref("Promise.any()")}}, wenn alle an sie übergebenen Promises abgelehnt werden.

`AggregateError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : Erzeugt ein neues `AggregateError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `AggregateError.prototype` definiert und werden von allen `AggregateError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AggregateError`-Instanzen ist der Anfangswert der {{jsxref("AggregateError/AggregateError", "AggregateError")}}-Konstruktor.
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : Repräsentiert den Namen für den Fehlertyp. Für `AggregateError.prototype.name` ist der Anfangswert `"AggregateError"`.

Diese Eigenschaften sind eigene Eigenschaften jeder `AggregateError`-Instanz.

- {{jsxref("AggregateError/errors", "errors")}}
  - : Ein Array, das die aggregierten Fehler darstellt.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem übergeordneten {{jsxref("Error")}}_.

## Beispiele

### Abfangen eines AggregateError

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### Erstellen eines AggregateError

```js
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `AggregateError` in `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- {{jsxref("Error")}}
- {{jsxref("Promise.any")}}
