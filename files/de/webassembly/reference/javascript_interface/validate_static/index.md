---
title: WebAssembly.validate()
slug: WebAssembly/Reference/JavaScript_interface/validate_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die **`WebAssembly.validate()`** statische Methode validiert ein gegebenes [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) von WebAssembly-Binärcode und gibt zurück, ob die Bytes ein gültiges Wasm-Modul bilden (`true`) oder nicht (`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
WebAssembly.validate(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) das den zu validierenden WebAssembly-Binärcode enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Dieser Parameter ist in der `validate()`-Methode enthalten, damit er verwendet werden kann, um Module zu validieren, wenn Kompilierungsoptionen vorhanden sind (zum Beispiel, um Funktionsdetektion zu implementieren). Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Nutzung von [JavaScript Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namespace für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein Boolean, der angibt, ob `bufferSource` gültiger Wasm-Code ist (`true`) oder nicht (`false`).

### Ausnahmen

Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von validate

Das folgende Beispiel (siehe den validate.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html) und [sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)) ruft ein Wasm-Modul ab und konvertiert es in ein typisiertes Array. Die `validate()`-Methode wird dann verwendet, um zu prüfen, ob das Modul gültig ist.

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

### Validierung eines Moduls mit aktivierten JavaScript Builtins und globalen String-Imports

Dieses Beispiel validiert ein Wasm-Modul mit aktivierten JavaScript-String-Builtins und importierten globalen String-Konstanten und loggt `"Wasm module valid: true"` in die Konsole, wenn es gültig ist, und `"Wasm module valid: false"`, wenn es nicht gültig ist. [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/validate/).

```js
const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.validate(bytes, compileOptions))
  .then((result) => console.log(`Wasm module valid: ${result}`));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [Konzepte von WebAssembly](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
