---
title: WebAssembly.RuntimeError() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/RuntimeError/RuntimeError
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Der **`WebAssembly.RuntimeError()`** Konstruktor erstellt ein neues WebAssembly `RuntimeError` Objekt – der Typ, der immer dann ausgelöst wird, wenn WebAssembly eine [Trap](https://webassembly.github.io/simd/core/intro/overview.html#trap) spezifiziert.

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
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt. Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler zu übergeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat.

## Beispiele

### Erstellen einer neuen RuntimeError-Instanz

Das folgende Snippet erzeugt eine neue `RuntimeError`-Instanz und protokolliert deren Details in der Konsole:

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

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
