---
title: Error.isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: 6607de0bd57056125e4ae227c4d54402286a423f
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

`true`, wenn `value` ein {{jsxref("Error")}} ist; andernfalls `false`.

## Beschreibung

`Error.isError()` überprüft, ob der übergebene Wert ein {{jsxref("Error")}} ist. Es erfolgt ein _branded check_ für eine private Eigenschaft, die durch den {{jsxref("Error/Error", "Error()")}}-Konstruktor initialisiert wird. Dies ist derselbe Mechanismus, der von {{jsxref("Array.isArray()")}} verwendet wird, was wiederum dem Mechanismus des [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operators ähnelt.

Es ist eine robustere Alternative zu [`instanceof Error`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da es falsche Positiv- und Negativmeldungen vermeidet:

- `Error.isError()` lehnt Werte ab, die keine echten `Error`-Instanzen sind, selbst wenn sie `Error.prototype` in ihrer Prototypkette haben — `instanceof Error` würde diese akzeptieren, da es die Prototypkette überprüft.
- `Error.isError()` akzeptiert `Error`-Objekte, die in einem anderen Realm konstruiert wurden — `instanceof Error` gibt für diese `false` aus, da die Identität des `Error`-Konstruktors über Realms hinweg unterschiedlich ist.

`Error.isError()` gibt `true` für [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen aus. Dies liegt daran, dass, obwohl `DOMException` nicht als echte Unterklasse von `Error` spezifiziert ist (der `Error`-Konstruktor ist nicht das Prototyp des `DOMException`-Konstruktors), `DOMException` für alle Zwecke der Branded-Überprüfung wie `Error` funktioniert.

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

Beim Überprüfen auf `Error`-Instanzen wird `Error.isError()` gegenüber `instanceof` bevorzugt, da es über Realms hinweg funktioniert.

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

### Normalisieren abgefangener Fehler

Sie können `Error.isError()` verwenden, um zu erkennen, ob der abgefangene Wert ein Fehler ist und ihn zu einem Error-Objekt zu normalisieren.

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
