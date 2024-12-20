---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate_static
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Die **`WebAssembly.validate()`** statische Methode validiert ein gegebenes [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) von WebAssembly-Binärcode und gibt zurück, ob die Bytes ein gültiges Wasm-Modul bilden (`true`) oder nicht (`false`).

## Syntax

```js-nolint
WebAssembly.validate(bufferSource)
WebAssembly.validate(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den zu validierenden WebAssembly-Binärcode enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Dieser Parameter ist in der `validate()`-Methode enthalten, damit er verwendet werden kann, um Module zu validieren, wenn die Kompilierungsoptionen vorhanden sind (zum Beispiel, um Feature-Erkennung zu implementieren). Die Eigenschaften können umfassen:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Nutzung von [JavaScript-Builtins](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein boolescher Wert, der angibt, ob `bufferSource` gültiger Wasm-Code ist (`true`) oder nicht (`false`).

### Ausnahmen

Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) ist, wird eine {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Nutzung von validate

Das folgende Beispiel (sehen Sie den validate.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/validate.html) und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)) lädt ein Wasm-Modul und konvertiert es in ein typisiertes Array. Die `validate()`-Methode wird dann verwendet, um zu überprüfen, ob das Modul gültig ist.

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

Dieses Beispiel validiert ein Wasm-Modul mit aktivierten JavaScript-String-Builtins und importierten globalen Zeichenfolgenkonstanten und protokolliert `"Wasm module valid: true"` in der Konsole, wenn es gültig ist, und `"Wasm module valid: false"`, wenn nicht. [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/validate/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
