---
title: WebAssembly.RuntimeError() Konstruktor
slug: WebAssembly/JavaScript_interface/RuntimeError/RuntimeError
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Der **`WebAssembly.RuntimeError()`**-Konstruktor erstellt ein neues WebAssembly-`RuntimeError`-Objekt – der Typ, der immer dann ausgelöst wird, wenn WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) angibt.

## Syntax

```js-nolint
new WebAssembly.RuntimeError()
new WebAssembly.RuntimeError(message)
new WebAssembly.RuntimeError(message, options)
new WebAssembly.RuntimeError(message, fileName)
new WebAssembly.RuntimeError(message, fileName, lineNumber)
```

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt mit folgenden Eigenschaften:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt. Wenn ein Fehler abgefangen und mit einer spezifischeren oder nützlicheren Fehlermeldung erneut ausgelöst wird, kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat.

## Beispiele

### Erstellen einer neuen RuntimeError-Instanz

Der folgende Codeausschnitt erstellt eine neue `RuntimeError`-Instanz und protokolliert deren Details in der Konsole:

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
  console.log(e.stack); // gibt den Ort zurück, an dem der Code ausgeführt wurde
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)