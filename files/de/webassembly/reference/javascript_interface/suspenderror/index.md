---
title: WebAssembly.SuspendError
slug: WebAssembly/Reference/JavaScript_interface/SuspendError
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Das **`WebAssembly.SuspendError`**-Objekt weist auf einen Fehler beim WebAssembly [Funktionenaussetzen](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) hin.

## Konstruktor

- [`WebAssembly.SuspendError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/SuspendError/SuspendError)
  - : Erstellt ein neues `WebAssembly.SuspendError`-Objekt.

## Instanz-Eigenschaften

- {{jsxref("Error.prototype.message", "WebAssembly.SuspendError.prototype.message")}}
  - : Fehlermeldung. Von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.name", "WebAssembly.SuspendError.prototype.name")}}
  - : Fehlername. Von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.cause", "WebAssembly.SuspendError.prototype.cause")}}
  - : Fehlerursache. Von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.fileName", "WebAssembly.SuspendError.prototype.fileName")}} {{non-standard_inline}}
  - : Pfad zur Datei, die diesen Fehler ausgelöst hat. Von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.SuspendError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Zeilennummer in der Datei, die diesen Fehler ausgelöst hat. Von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.SuspendError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Spaltennummer in der Zeile, die diesen Fehler ausgelöst hat. Von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.stack", "WebAssembly.SuspendError.prototype.stack")}} {{non-standard_inline}}
  - : Stack-Trace. Von {{jsxref("Error")}} geerbt.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString", "WebAssembly.SuspendError.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene `Error`-Objekt darstellt. Von {{jsxref("Error")}} geerbt.

## Beispiele

### Erstellen einer neuen SuspendError-Instanz

Das folgende Snippet erstellt eine neue `SuspendError`-Instanz und protokolliert deren Details in der Konsole:

```js
try {
  throw new WebAssembly.SuspendError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.SuspendError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SuspendError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // The location where the code was run
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebAssembly.Suspending`](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending)
- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
