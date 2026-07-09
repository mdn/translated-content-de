---
title: WebAssembly.CompileError
slug: WebAssembly/Reference/JavaScript_interface/CompileError
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Das **`WebAssembly.CompileError`**-Objekt zeigt einen Fehler während der WebAssembly-Decodierung oder -Validierung an.

## Konstruktor

- [`WebAssembly.CompileError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError/CompileError)
  - : Erstellt ein neues `WebAssembly.CompileError`-Objekt.

## Instanzeigenschaften

- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : Fehlermeldung. Wird von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : Fehlername. Wird von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.cause", "WebAssembly.CompileError.prototype.cause")}}
  - : Fehlerursache. Wird von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}} {{non-standard_inline}}
  - : Pfad zur Datei, die diesen Fehler verursacht hat. Wird von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Zeilennummer in der Datei, die diesen Fehler verursacht hat. Wird von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Spaltennummer in der Zeile, die diesen Fehler verursacht hat. Wird von {{jsxref("Error")}} geerbt.
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}} {{non-standard_inline}}
  - : Stack-Trace. Wird von {{jsxref("Error")}} geerbt.

## Instanzmethoden

- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das spezifizierte `Error`-Objekt darstellt. Wird von {{jsxref("Error")}} geerbt.

## Beispiele

### Erstellung einer neuen CompileError-Instanz

Der folgende Codeausschnitt erstellt eine neue `CompileError`-Instanz und gibt deren Details in der Konsole aus:

```js
try {
  throw new WebAssembly.CompileError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.CompileError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "CompileError"
  console.log(e.fileName); // "someFile"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // returns the location where the code was run
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Übersicht über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
