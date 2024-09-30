---
title: WebAssembly.LinkError() Konstruktor
slug: WebAssembly/JavaScript_interface/LinkError/LinkError
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

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
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt. Wenn ein Fehler mit einer spezifischeren oder nützlicheren Fehlermeldung abgefangen und erneut ausgelöst wird, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat.

## Beispiele

### Erstellen einer neuen LinkError Instanz

Das folgende Snippet erstellt eine neue `LinkError` Instanz und protokolliert deren Details in der Konsole:

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
