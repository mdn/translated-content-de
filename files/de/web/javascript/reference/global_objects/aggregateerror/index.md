---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`AggregateError`**-Objekt stellt einen Fehler dar, wenn mehrere Fehler in einem einzelnen Fehler zusammengefasst werden müssen. Es wird ausgelöst, wenn mehrere Fehler bei einer Operation gemeldet werden müssen, zum Beispiel durch {{jsxref("Promise.any()")}}, wenn alle übergebenen `Promise`-Objekte abgelehnt werden.

`AggregateError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : Erstellt ein neues `AggregateError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem Elternteil {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `AggregateError.prototype` definiert und werden von allen `AggregateError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei `AggregateError`-Instanzen ist der Anfangswert der {{jsxref("AggregateError/AggregateError", "AggregateError")}}-Konstruktor.
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : Repräsentiert den Namen für die Art des Fehlers. Bei `AggregateError.prototype.name` ist der Anfangswert `"AggregateError"`.

Diese Eigenschaften sind die eigenen Eigenschaften jeder `AggregateError`-Instanz.

- {{jsxref("AggregateError/errors", "errors")}}
  - : Ein Array, das die aggregierten Fehler repräsentiert.

## Instanz-Methoden

_Erbt Instanz-Methoden von seinem Elternteil {{jsxref("Error")}}_.

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
- [es-shims Polyfill von `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Error")}}
- {{jsxref("Promise.any")}}
