---
title: Error.isError()
short-title: isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Error.isError()`** bestimmt, ob der übergebene Wert ein {{jsxref("Error")}} ist.

## Syntax

```js-nolint
Error.isError(value)
```

### Parameter

- `value`
  - : Der zu überprüfende Wert.

### Rückgabewert

`true` wenn `value` ein {{jsxref("Error")}} ist; andernfalls `false`.

## Beschreibung

`Error.isError()` prüft, ob der übergebene Wert ein {{jsxref("Error")}} ist. Dies wird durch eine _branded check_ für eine private Eigenschaft erreicht, die vom {{jsxref("Error/Error", "Error()")}} Konstruktor initialisiert wird. Dies ist derselbe Mechanismus, der von {{jsxref("Array.isArray()")}} verwendet wird, welcher wiederum dem Mechanismus ähnlich ist, der vom [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwendet wird.

Es ist eine robustere Alternative zu [`instanceof Error`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da es falsch-positive und falsch-negative Ergebnisse vermeidet:

- `Error.isError()` lehnt Werte ab, die keine echten `Error`-Instanzen sind, selbst wenn sie `Error.prototype` in ihrer Prototypenkette haben — `instanceof Error` würde diese akzeptieren, da es die Prototypenkette überprüft.
- `Error.isError()` akzeptiert `Error`-Objekte, die in einem anderen Bereich konstruiert wurden — `instanceof Error` gibt für diese `false` zurück, da die Identität des `Error`-Konstruktors in verschiedenen Bereichen unterschiedlich ist.

`Error.isError()` gibt `true` für [`DOMException`](/de/docs/Web/API/DOMException) Instanzen zurück. Dies liegt daran, dass `DOMException` zwar nicht als echte Unterklasse von `Error` spezifiziert ist (der `Error`-Konstruktor ist nicht das Prototyp des `DOMException`-Konstruktors), `DOMException` sich aber trotzdem für alle Zwecke des branded checking wie `Error` verhält.

## Beispiele

### Verwendung von Error.isError()

```js
// all following calls return true
Error.isError(new Error());
Error.isError(new TypeError());
Error.isError(new DOMException());
try {
  1 + 1n;
} catch (e) {
  console.log(Error.isError(e)); // The operation threw a TypeError, so this returns true
}

// all following calls return false
Error.isError();
Error.isError({});
Error.isError(null);
Error.isError(undefined);
Error.isError(17);
Error.isError("Error");
Error.isError(true);
Error.isError(false);
// This is not an error, because the object does not have the private property
// initialized by the Error constructor
Error.isError({ __proto__: Error.prototype });
```

### instanceof vs. Error.isError()

Beim Überprüfen von `Error`-Instanzen wird `Error.isError()` gegenüber `instanceof` bevorzugt, da es über Bereiche hinweg funktioniert.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xError = window.frames[window.frames.length - 1].Error;
const error = new xError();

// Correctly checking for Error
Error.isError(error); // true
// The prototype of error is xError.prototype, which is a
// different object from Error.prototype
error instanceof Error; // false
```

### Normalisierung gefangener Fehler

Sie können `Error.isError()` verwenden, um zu erkennen, ob der gefangene Wert ein Fehler ist, und ihn in ein Fehlerobjekt normalisieren.

```js
try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!Error.isError(e)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Error.isError` in `core-js`](https://github.com/zloirock/core-js#erroriserror)
- [es-shims Polyfill von `Error.isError`](https://www.npmjs.com/package/error.iserror)
- {{jsxref("Error")}}
