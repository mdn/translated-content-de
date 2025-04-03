---
title: WebAssembly.Module() Konstruktor
slug: WebAssembly/Reference/JavaScript_interface/Module/Module
l10n:
  sourceCommit: 36f90b7e285c1694e6cd1e549e37740ffb68f533
---

Ein **`WebAssembly.Module()`** Konstruktor erstellt ein neues Modulobjekt, das zustandslosen WebAssembly-Code enthält, der bereits vom Browser kompiliert wurde und effizient [mit Arbeitern geteilt werden kann](/de/docs/Web/API/Worker/postMessage) sowie mehrfach instanziiert werden kann.

Die `WebAssembly.Module()` Konstruktorfunktion kann aufgerufen werden, um den angegebenen WebAssembly-Binärcode synchron zu kompilieren. Der primäre Weg, ein `Module` zu erhalten, ist jedoch über eine asynchrone Kompilierungsfunktion wie [`WebAssembly.compile()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compile_static).

> [!WARNING]
> Da die Kompilierung großer Module kostspielig sein kann, sollten Entwickler den `Module()` Konstruktor nur verwenden, wenn synchrone Kompilierung unbedingt erforderlich ist; die asynchrone Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) sollte in allen anderen Fällen verwendet werden.

> [!NOTE]
> Webseiten mit einer strengen [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) könnten blockieren, dass WebAssembly Module kompiliert und ausgeführt werden. Für weitere Informationen zum Zulassen der WebAssembly-Kompilierung und -Ausführung siehe die [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
new WebAssembly.Module(bufferSource)
new WebAssembly.Module(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder ein [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können sein:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript-Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namespace für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Ausnahmen

- Wenn der Parameter nicht den korrekten Typ oder die korrekte Struktur hat, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Wenn die Kompilierung fehlschlägt, lehnt der Konstruktor mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) ab.
- Einige Browser könnten einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Puffern im UI-Thread verbieten.

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

### Aktivieren von JavaScript-Builtins und globalen Zeichenfolgenimporten

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale Zeichenfolgenkonstanten, wenn ein Wasm-Modul über den `Module()` Konstruktor kompiliert wird, das dann mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert wird. Es ruft dann die exportierte `main()` Funktion auf, die `"hello world!"` in die Konsole schreibt. [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/module-constructor/).

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

- Überblicksseite [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
