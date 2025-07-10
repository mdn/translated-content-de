---
title: Error.isError()
short-title: isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

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

`Error.isError()` überprüft, ob der übergebene Wert ein {{jsxref("Error")}} ist. Dies erfolgt durch einen _gebrandeten Check_ für ein privates Feld, das durch den {{jsxref("Error/Error", "Error()")}}-Konstruktor initialisiert wurde. Dies ist derselbe Mechanismus, der von {{jsxref("Array.isArray()")}} verwendet wird, welcher wiederum dem Mechanismus ähnlich ist, der vom [`in`](/de/docs/Web/JavaScript/Reference/Operators/in)-Operator verwendet wird.

Es ist eine robustere Alternative zu [`instanceof Error`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da es falsche Positiv- und Negativmeldungen vermeidet:

- `Error.isError()` lehnt Werte ab, die keine tatsächlichen `Error`-Instanzen sind, selbst wenn sie `Error.prototype` in ihrer Prototypenkette haben — `instanceof Error` würde diese akzeptieren, da es die Prototypenkette überprüft.
- `Error.isError()` akzeptiert `Error`-Objekte, die in einem anderen Realm konstruiert wurden — `instanceof Error` gibt `false` aus, da die Identität des `Error`-Konstruktors zwischen Realms unterschiedlich ist.

`Error.isError()` gibt `true` für [`DOMException`](/de/docs/Web/API/DOMException)-Instanzen zurück. Dies liegt daran, dass `DOMException`, obwohl es nicht als echte Unterklasse von `Error` spezifiziert ist (der `Error`-Konstruktor ist nicht der Prototyp des `DOMException`-Konstruktors), für alle gebrandeten Prüfzwecke immer noch wie `Error` funktioniert.

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
// This is not an error, because the object does not have the private field
// initialized by the Error constructor
Error.isError({ __proto__: Error.prototype });
```

### instanceof vs. Error.isError()

Wenn eine `Error`-Instanz überprüft wird, ist `Error.isError()` gegenüber `instanceof` vorzuziehen, da es über Realms hinweg funktioniert.

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

Sie können `Error.isError()` verwenden, um zu erkennen, ob der gefangene Wert ein Fehler ist und ihn zu einem Fehlerobjekt zu normalisieren.

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
