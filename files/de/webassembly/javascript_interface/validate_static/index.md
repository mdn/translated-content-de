---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate_static
l10n:
  sourceCommit: 9685c54e1d67864ec7f95a4936a695d4d9c6e731
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.validate()`** validiert ein gegebenes [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) von WebAssembly-Binärcode und gibt zurück, ob die Bytes ein gültiges Wasm-Modul bilden (`true`) oder nicht (`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den zu validierenden WebAssembly-Binärcode enthält.

### Rückgabewert

Ein Boolean, der angibt, ob `bufferSource` gültiger Wasm-Code ist (`true`) oder nicht (`false`).

### Ausnahmen

Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von validate

Das folgende Beispiel (siehe den validate.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html) und [sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)) lädt ein Wasm-Modul und wandelt es in ein typisiertes Array um. Die `validate()`-Methode wird dann verwendet, um zu prüfen, ob das Modul gültig ist.

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const valid = WebAssembly.validate(bytes);
    console.log(
      `The given bytes are ${valid ? "" : "not "}a valid Wasm module`,
    );
  });
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
