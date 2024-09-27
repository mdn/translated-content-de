---
title: WebAssembly.LinkError
slug: WebAssembly/JavaScript_interface/LinkError
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Das **`WebAssembly.LinkError`**-Objekt zeigt einen Fehler bei der Modulinistanzierung an (abgesehen von [traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) aus der Startfunktion).

## Konstruktor

- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/JavaScript_interface/LinkError/LinkError)
  - : Erstellt ein neues `WebAssembly.LinkError`-Objekt.

## Instanzeigenschaften

- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : Fehlermeldung. Vererbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : Fehlername. Vererbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.LinkError.prototype.cause")}}
  - : Fehlerursache. Vererbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}} {{non-standard_inline}}
  - : Pfad zur Datei, die diesen Fehler verursacht hat. Vererbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Zeilennummer in der Datei, die diesen Fehler verursacht hat. Vererbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Spaltennummer in der Zeile, die diesen Fehler verursacht hat. Vererbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}} {{non-standard_inline}}
  - : Stack-Trace. Vererbt von {{jsxref("Error")}}.

## Instanzmethoden

- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : Gibt einen String zurück, der das angegebene `Error`-Objekt repräsentiert. Vererbt von {{jsxref("Error")}}.

## Beispiele

### Erstellen einer neuen LinkError-Instanz

Das folgende Beispiel erstellt eine neue `LinkError`-Instanz und protokolliert deren Details in der Konsole:

```js
try {
  throw new WebAssembly.LinkError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "LinkError"
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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
