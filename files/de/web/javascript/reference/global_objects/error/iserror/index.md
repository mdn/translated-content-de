---
title: Error.isError()
short-title: isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
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

`Error.isError()` prüft, ob der übergebene Wert ein {{jsxref("Error")}} ist. Dazu führt die Methode eine _Branded-Prüfung_ für ein privates Feld durch, das vom {{jsxref("Error/Error", "Error()")}}-Konstruktor initialisiert wird.
Dies ist derselbe Mechanismus, den {{jsxref("Array.isArray()")}} verwendet. Er ähnelt wiederum dem Mechanismus des Operators [`in`](/de/docs/Web/JavaScript/Reference/Operators/in).

Die Methode ist eine zuverlässigere Alternative zu [`instanceof Error`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), da sie falsch positive und falsch negative Ergebnisse vermeidet:

- `Error.isError()` weist Werte zurück, die keine tatsächlichen `Error`-Instanzen sind, selbst wenn ihre Prototypkette `Error.prototype` enthält. `instanceof Error` würde diese Werte akzeptieren, da es die Prototypkette überprüft.
- `Error.isError()` akzeptiert `Error`-Objekte, die in einem anderen Realm erstellt wurden. `instanceof Error` gibt für diese `false` zurück, da der `Error`-Konstruktor in verschiedenen Realms jeweils eine andere Identität hat.

`Error.isError()` gibt für Instanzen von [`DOMException`](/de/docs/Web/API/DOMException) `true` zurück. Obwohl `DOMException` nicht als echte Unterklasse von `Error` spezifiziert ist (der `Error`-Konstruktor ist nicht der Prototyp des `DOMException`-Konstruktors), verhält sich `DOMException` bei allen Branded-Prüfungen wie `Error`.

## Beispiele

### Error.isError() verwenden

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

### instanceof im Vergleich zu Error.isError()

Bei der Prüfung, ob ein Wert eine `Error`-Instanz ist, ist `Error.isError()` gegenüber `instanceof` vorzuziehen, da es Realm-übergreifend funktioniert.

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

### Abgefangene Fehler normalisieren

Sie können mit `Error.isError()` feststellen, ob ein abgefangener Wert ein Fehler ist, und ihn in ein Fehlerobjekt umwandeln.

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

- [Polyfill für `Error.isError` in `core-js`](https://core-js.io/docs/features/ecmascript/error)
- [es-shims-Polyfill für `Error.isError`](https://www.npmjs.com/package/error.iserror)
- {{jsxref("Error")}}
