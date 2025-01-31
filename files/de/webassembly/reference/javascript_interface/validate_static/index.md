---
title: WebAssembly.validate()
slug: WebAssembly/Reference/JavaScript_interface/validate_static
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die statische Methode **`WebAssembly.validate()`** validiert ein gegebenes [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) von WebAssembly-Binärcode und gibt zurück, ob die Bytes ein gültiges Wasm-Modul formen (`true`) oder nicht (`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
WebAssembly.validate(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder ein [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den WebAssembly-Binärcode enthält, der validiert werden soll.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das die Kompilierungsoptionen enthält. Dieser Parameter ist bei der `validate()`-Methode enthalten, damit Module auch mit vorhandenen Kompilierungsoptionen validiert werden können (zum Beispiel zur Implementierung der Feature-Erkennung). Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein Boolean, der angibt, ob `bufferSource` gültiger Wasm-Code ist (`true`) oder nicht (`false`).

### Ausnahmen

Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von validate

Das folgende Beispiel (siehe den validate.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html), und [sehen Sie es auch live](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)) lädt ein Wasm-Modul und konvertiert es in ein typisiertes Array. Die Methode `validate()` wird dann verwendet, um zu überprüfen, ob das Modul gültig ist.

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

### Validierung eines Moduls mit aktivierten JavaScript-Builtins und globalen Zeichenfolgenimporten

Dieses Beispiel validiert ein Wasm-Modul mit aktivierten JavaScript-String-Builtins und importierten globalen Zeichenfolgenkonstanten und protokolliert `"Wasm module valid: true"` in die Konsole, wenn es gültig ist, und `"Wasm module valid: false"`, wenn es nicht gültig ist. [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/validate/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
