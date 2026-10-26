---
title: AggregateError
slug: Web/JavaScript/Reference/Global_Objects/AggregateError
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Das **`AggregateError`**-Objekt stellt einen Fehler dar, wenn mehrere Fehler in einem einzigen Fehler zusammengefasst werden müssen. Es wird ausgelöst, wenn eine Operation mehrere Fehler melden muss, beispielsweise {{jsxref("Promise.any()")}}, wenn alle übergebenen Promises abgelehnt werden.

Im Gegensatz zu {{jsxref("SuppressedError")}} stellt `AggregateError` eine Liste voneinander unabhängiger Fehler dar. `SuppressedError` hingegen stellt einen Fehler dar, der bei der Behandlung eines anderen Fehlers aufgetreten ist.

`AggregateError` ist eine Unterklasse von {{jsxref("Error")}}.

## Konstruktor

- {{jsxref("AggregateError/AggregateError", "AggregateError()")}}
  - : Erstellt ein neues `AggregateError`-Objekt.

## Instanzeigenschaften

_Erbt außerdem Instanzeigenschaften von der übergeordneten Klasse {{jsxref("Error")}}._

Diese Eigenschaften sind auf `AggregateError.prototype` definiert und werden von allen `AggregateError`-Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "AggregateError.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `AggregateError`-Instanzen ist der Anfangswert der Konstruktor {{jsxref("AggregateError/AggregateError", "AggregateError")}}.
- {{jsxref("Error/name", "AggregateError.prototype.name")}}
  - : Gibt den Namen des Fehlertyps an. Für `AggregateError.prototype.name` ist der Anfangswert `"AggregateError"`.

Diese Eigenschaften sind eigene Eigenschaften jeder `AggregateError`-Instanz.

- {{jsxref("AggregateError/errors", "errors")}}
  - : Ein Array mit den zusammengefassten Fehlern.

## Instanzmethoden

_Erbt Instanzmethoden von der übergeordneten Klasse {{jsxref("Error")}}._

## Beispiele

### Einen AggregateError abfangen

```js
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### Einen AggregateError erstellen

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

- [Polyfill für `AggregateError` in `core-js`](https://core-js.io/docs/features/ecmascript/error)
- [Polyfill für `AggregateError` von es-shims](https://www.npmjs.com/package/es-aggregate-error)
- {{jsxref("Error")}}
- {{jsxref("Promise.any")}}
