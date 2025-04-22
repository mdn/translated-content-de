---
title: WebAssembly.RuntimeError
slug: WebAssembly/Reference/JavaScript_interface/RuntimeError
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Das **`WebAssembly.RuntimeError`**-Objekt ist der Fehlertyp, der ausgelöst wird, wann immer WebAssembly eine [Falle](https://webassembly.github.io/spec/core/intro/overview.html#trap) spezifiziert.

## Konstruktor

- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError/RuntimeError)
  - : Erstellt ein neues `WebAssembly.RuntimeError`-Objekt.

## Instanz-Eigenschaften

- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : Fehlermeldung. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : Fehlername. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.RuntimeError.prototype.cause")}}
  - : Fehlerursache. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}} {{non-standard_inline}}
  - : Pfad zur Datei, die diesen Fehler verursacht hat. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Zeilennummer in der Datei, die diesen Fehler verursacht hat. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Spaltennummer in der Zeile, die diesen Fehler verursacht hat. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}} {{non-standard_inline}}
  - : Stapelverfolgung. Geerbt von {{jsxref("Error")}}.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : Gibt einen String zurück, der das spezifizierte `Error`-Objekt repräsentiert. Geerbt von {{jsxref("Error")}}.

## Beispiele

### Erstellen einer neuen RuntimeError-Instanz

Der folgende Codeausschnitt erstellt eine neue `RuntimeError`-Instanz und protokolliert deren Details in die Konsole:

```js
try {
  throw new WebAssembly.RuntimeError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.RuntimeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "RuntimeError"
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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
