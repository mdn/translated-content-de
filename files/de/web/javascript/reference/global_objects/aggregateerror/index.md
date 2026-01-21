---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 1d2e1875bdfdd2fb8d0806535220bbd56d3a091d
---

Das **`AggregateError`**-Objekt stellt einen Fehler dar, wenn mehrere Fehler in einem einzigen Fehler zusammengefasst werden müssen. Es wird ausgelöst, wenn mehrere Fehler von einer Operation gemeldet werden müssen, zum Beispiel durch {{jsxref("Promise.any()")}}, wenn alle an sie übergebenen Versprechen abgelehnt werden.

Im Vergleich zu {{jsxref("SuppressedError")}} repräsentiert `AggregateError` eine Liste von nicht zusammenhängenden Fehlern, während `SuppressedError` einen Fehler darstellt, der während der Behandlung eines anderen Fehlers auftrat.

`AggregateError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : Erstellt ein neues `AggregateError`-Objekt.

## Instanz-Eigenschaften

_Erbt auch Instanz-Eigenschaften von seinem übergeordneten {{jsxref("Error")}}_.

Diese Eigenschaften sind auf `AggregateError.prototype` definiert und werden von allen `AggregateError`-Instanzen geteilt.

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AggregateError`-Instanzen ist der Anfangswert der {{jsxref("AggregateError/AggregateError", "AggregateError")}}-Konstruktor.
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : Repräsentiert den Namen des Fehlertyps. Für `AggregateError.prototype.name` ist der Anfangswert `"AggregateError"`.

Diese Eigenschaften sind eigenständige Eigenschaften jeder `AggregateError`-Instanz.

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
- [es-shims Polyfill von `AggregateError`](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Error")}}
- {{jsxref("Promise.any")}}
