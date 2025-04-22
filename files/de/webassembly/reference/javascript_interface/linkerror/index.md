---
title: WebAssembly.LinkError
slug: WebAssembly/Reference/JavaScript_interface/LinkError
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Das **`WebAssembly.LinkError`**-Objekt zeigt einen Fehler während der Modulinstanziierung an (abgesehen von [Fallen](https://webassembly.github.io/simd/core/intro/overview.html#trap) der Startfunktion).

## Konstruktor

- [`WebAssembly.LinkError()`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError/LinkError)
  - : Erstellt ein neues `WebAssembly.LinkError`-Objekt.

## Instanz-Eigenschaften

- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : Fehlermeldung. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : Fehlername. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.cause", "WebAssembly.LinkError.prototype.cause")}}
  - : Fehlerursache. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}} {{non-standard_inline}}
  - : Pfad zur Datei, die diesen Fehler verursacht hat. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}} {{non-standard_inline}}
  - : Zeilennummer in der Datei, die diesen Fehler verursacht hat. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}} {{non-standard_inline}}
  - : Spaltennummer in der Zeile, die diesen Fehler verursacht hat. Geerbt von {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}} {{non-standard_inline}}
  - : Stack-Trace. Geerbt von {{jsxref("Error")}}.

## Instanz-Methoden

- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : Gibt eine Zeichenfolge zurück, die das angegebene `Error`-Objekt repräsentiert. Geerbt von {{jsxref("Error")}}.

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
