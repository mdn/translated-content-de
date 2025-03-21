---
title: Error.isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: f1d2c389f5f7b98857a303838500a7cfbc748ff9
---

{{JSRef}}

Die **`Error.isError()`** statische Methode bestimmt, ob der übergebene Wert ein {{jsxref("Error")}} ist.

## Syntax

```js-nolint
Error.isError(value)
```

### Parameter

- `value`
  - : Der Wert, der überprüft werden soll.

### Rückgabewert

`true` wenn `value` ein {{jsxref("Error")}} ist; andernfalls `false`.

## Beschreibung

`Error.isError()` überprüft, ob der übergebene Wert ein {{jsxref("Error")}} ist. Dies geschieht durch eine _markierte Überprüfung_ eines privaten Attributs, das vom {{jsxref("Error/Error", "Error()")}} Konstruktor initialisiert wird.
Dies ist derselbe Mechanismus, der von {{jsxref("Array.isArray()")}} verwendet wird, was wiederum dem Mechanismus ähnelt, der vom [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator verwendet wird.

Es ist eine robustere Alternative zu [`instanceof Error`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da es Fehlalarme und Fehlansichten vermeidet:

- `Error.isError()` lehnt Werte ab, die keine tatsächlichen `Error` Instanzen sind, selbst wenn sie `Error.prototype` in ihrer Prototypkette haben — `instanceof Error` würde diese akzeptieren, da es die Prototypkette überprüft.
- `Error.isError()` akzeptiert `Error` Objekte, die in einem anderen Bereich konstruiert wurden — `instanceof Error` gibt `false` zurück für diese, da die Identität des `Error` Konstruktors in verschiedenen Bereichen unterschiedlich ist.

`Error.isError()` gibt `true` für [`DOMException`](/de/docs/Web/API/DOMException) Instanzen zurück. Dies liegt daran, dass, obwohl `DOMException` nicht als echte Unterklasse von `Error` spezifiziert ist (der `Error` Konstruktor nicht der Prototyp des `DOMException` Konstruktors ist), `DOMException` sich trotzdem für alle markierten Überprüfungszwecke wie `Error` verhält.

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

Beim Überprüfen auf `Error` Instanzen ist `Error.isError()` gegenüber `instanceof` vorzuziehen, da es über Bereiche hinweg funktioniert.

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

Sie können `Error.isError()` verwenden, um zu erkennen, ob der gefangene Wert ein Fehler ist und ihn zu einem Error-Objekt zu normalisieren.

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
