---
title: WebAssembly.Module() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Module/Module
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Ein **`WebAssembly.Module()`** Konstruktor erstellt ein neues Modulobjekt, das zustandslosen WebAssembly-Code enthält, der bereits vom Browser kompiliert wurde und effizient mit [Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.

Die `WebAssembly.Module()` Konstruktorfunktion kann aufgerufen werden, um synchron gegebenen WebAssembly-Binärcode zu kompilieren. Der primäre Weg, um ein `Module` zu erhalten, ist jedoch über eine asynchrone Kompilierungsfunktion wie [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static).

> [!NOTE]
> Webseiten mit strengen [Content Security Policies (CSP)](/de/docs/Web/HTTP/Guides/CSP) könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Für weitere Informationen zur Erlaubnis der Kompilierung und Ausführung von WebAssembly, siehe die [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

> [!WARNING]
> Da die Kompilierung großer Module teuer sein kann, sollten Entwickler den `Module()` Konstruktor nur verwenden, wenn eine synchrone Kompilierung absolut erforderlich ist; die asynchrone Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) sollte in allen anderen Fällen verwendet werden.

```js-nolint
new WebAssembly.Module(bufferSource)
new WebAssembly.Module(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt mit Kompilierungsoptionen. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Nutzung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die gewünschten builtins. Derzeit ist nur der Wert `"js-string"` verfügbar, der JavaScript-String-builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss spezifiziert werden, wenn importierte globale String-Konstanten im Wasm-Modul verwendet werden sollen.

### Ausnahmen

- Wenn der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Kompilierung fehlschlägt, lehnt der Konstruktor mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) ab.
- Einige Browser können eine {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Buffern im UI-Thread verbieten.

## Beispiele

### Synchrone Kompilierung eines WebAssembly-Moduls

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = createWasmModule(bytes);
    WebAssembly.instantiate(mod, importObject).then((result) =>
      result.exports.exported_func(),
    );
  });
```

### Aktivieren von JavaScript Builtins und globalem String-Import

Dieses Beispiel aktiviert beim Kompilieren eines Wasm-Moduls über den `Module()` Konstruktor JavaScript-String-builtins und importierte globale String-Konstanten, das dann mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert wird. Es wird dann die exportierte `main()` Funktion aufgerufen, die `"hello world!"` in die Konsole schreibt. [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/module-constructor/).

```js
const importObject = {
  // Regular import
  m: {
    log: console.log,
  },
};

const compileOptions = {
  builtins: ["js-string"], // Enable JavaScript string builtins
  importedStringConstants: "string_constants", // Enable imported global string constants
};

fetch("log-concat.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const module = new WebAssembly.Module(bytes, compileOptions);
    WebAssembly.instantiate(module, importObject).then((instance) =>
      instance.exports.main(),
    );
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
