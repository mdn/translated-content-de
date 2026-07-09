---
title: WebAssembly.SuspendError() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/SuspendError/SuspendError
l10n:
  sourceCommit: 3934778cdfee0d5d2ae4c93b9f5568701008a628
---

Der **`WebAssembly.SuspendError()`** Konstruktor erstellt ein neues WebAssembly `SuspendError` Objekt, das auf einen Fehler während der WebAssembly-[Funktionsaussetzung](/de/docs/WebAssembly/Reference/JavaScript_interface/Suspending) hinweist.

## Syntax

```js-nolint
new WebAssembly.SuspendError()
new WebAssembly.SuspendError(message)
new WebAssembly.SuspendError(message, options)
new WebAssembly.SuspendError(message, fileName)
new WebAssembly.SuspendError(message, fileName, lineNumber)
```

### Parameter

- `message` {{optional_inline}}
  - : Menschlich lesbare Beschreibung des Fehlers.
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften hat:
    - `cause` {{optional_inline}}
      - : Eine Eigenschaft, die die spezifische Ursache des Fehlers angibt. Beim Abfangen und erneuten Auslösen eines Fehlers mit einer spezifischeren oder nützlicheren Fehlermeldung kann diese Eigenschaft verwendet werden, um den ursprünglichen Fehler weiterzugeben.
- `fileName` {{optional_inline}} {{non-standard_inline}}
  - : Der Name der Datei, die den Code enthält, der die Ausnahme verursacht hat.
- `lineNumber` {{optional_inline}} {{non-standard_inline}}
  - : Die Zeilennummer des Codes, der die Ausnahme verursacht hat.

## Beispiele

### Erstellen einer neuen SuspendError-Instanz

Der folgende Ausschnitt erstellt eine neue `SuspendError`-Instanz und protokolliert deren Details in der Konsole:

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
- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
