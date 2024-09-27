---
title: WebAssembly.RuntimeError
slug: WebAssembly/JavaScript_interface/RuntimeError
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Das **`WebAssembly.RuntimeError`**-Objekt ist der Fehlertyp, der immer dann ausgelöst wird, wenn WebAssembly einen [Trap](https://webassembly.github.io/spec/core/intro/overview.html#trap) spezifiziert.

## Konstruktor

- [`WebAssembly.RuntimeError()`](/de/docs/WebAssembly/JavaScript_interface/RuntimeError/RuntimeError)
  - : Erstellt ein neues `WebAssembly.RuntimeError`-Objekt.

## Instanz-Eigenschaften

- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : Fehlermeldung. Übernommen von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : Fehlername. Übernommen von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.RuntimeError.prototype.cause")}}
  - : Fehlerursache. Übernommen von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}} {{non-standard_inline}}
  - : Pfad zur Datei, die diesen Fehler verursacht hat. Übernommen von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Zeilennummer in der Datei, die diesen Fehler verursacht hat. Übernommen von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Spaltennummer in der Zeile, die diesen Fehler verursacht hat. Übernommen von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}} {{non-standard_inline}}
  - : Stack-Trace. Übernommen von {{jsxref("Error")}}.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene `Error`-Objekt repräsentiert. Übernommen von {{jsxref("Error")}}.

## Beispiele

### Erstellen einer neuen RuntimeError-Instanz

Der folgende Codeausschnitt erstellt eine neue `RuntimeError`-Instanz und gibt deren Details in der Konsole aus:

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

- Überblicksseite [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
