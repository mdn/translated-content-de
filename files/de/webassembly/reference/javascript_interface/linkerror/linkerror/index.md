---
title: WebAssembly.LinkError() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/LinkError/LinkError
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Der **`WebAssembly.LinkError()`** Konstruktor erstellt ein neues WebAssembly `LinkError` Objekt, das auf einen Fehler während der Modulinstanziierung hinweist (außer [Traps](https://webassembly.github.io/simd/core/intro/overview.html#trap) von der Startfunktion).

## Syntax

```js-nolint
new WebAssembly.LinkError()
new WebAssembly.LinkError(message)
new WebAssembly.LinkError(message, options)
new WebAssembly.LinkError(message, fileName)
new WebAssembly.LinkError(message, fileName, lineNumber)
```

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt. Wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut geworfen wird, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Ausnahme verursachenden Code enthält.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, die die Ausnahme verursacht hat.

## Beispiele

### Erstellen einer neuen LinkError Instanz

Das folgende Snippet erstellt eine neue `LinkError` Instanz und protokolliert deren Details in die Konsole:

```js
try {
  throw new WebAssembly.LinkError("Hello", "someFile", 10);
} catch (e) {
  console.log(e instanceof WebAssembly.LinkError); // true
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
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwenden der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
