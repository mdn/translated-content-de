---
title: WebAssembly.Module() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Module/Module
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Ein **`WebAssembly.Module()`** Konstruktor erstellt ein neues Modulobjekt, das zustandslosen WebAssembly-Code enthält, der bereits vom Browser kompiliert wurde und effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.

Die `WebAssembly.Module()` Konstruktorfunktion kann aufgerufen werden, um den gegebenen WebAssembly-Binärcode synchron zu kompilieren. Der primäre Weg, um ein `Module` zu erhalten, ist jedoch durch eine asynchrone Kompilierungsfunktion wie [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static).

> [!WARNING]
> Da die Kompilierung großer Module aufwendig sein kann, sollten Entwickler den `Module()` Konstruktor nur dann verwenden, wenn eine synchrone Kompilierung absolut notwendig ist; die asynchrone Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) sollte in allen anderen Fällen verwendet werden.

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren. Für weitere Informationen zum Zulassen der Kompilierung und Ausführung von WebAssembly siehe die [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
new WebAssembly.Module(bufferSource)
new WebAssembly.Module(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des Wasm-Moduls enthält, das Sie kompilieren möchten.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namespace für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Ausnahmen

- Wenn der Parameter nicht den richtigen Typ oder die richtige Struktur hat, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Kompilierung fehlschlägt, lehnt der Konstruktor mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) ab.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Puffern im UI-Thread verbieten.

## Beispiele

### Synchrones Kompilieren eines WebAssembly-Moduls

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

### Aktivierung von JavaScript-Builtins und globalen Zeichenfolgenimporten

Dieses Beispiel ermöglicht JavaScript-String-Builtins und importierte globale Zeichenfolgenkonstanten, wenn ein Wasm-Modul über den `Module()`-Konstruktor kompiliert wird, welches dann mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert wird. Anschließend wird die exportierte Funktion `main()` aufgerufen, die `"hello world!"` auf die Konsole schreibt. [Hier live ansehen](https://mdn.github.io/webassembly-examples/js-builtin-examples/module-constructor/).

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

- Überblick über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
