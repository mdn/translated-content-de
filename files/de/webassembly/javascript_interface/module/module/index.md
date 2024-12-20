---
title: WebAssembly.Module()-Konstruktor
slug: WebAssembly/JavaScript_interface/Module/Module
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Module()`**-Konstruktor erstellt ein neues Modulobjekt, das zustandslosen WebAssembly-Code enthält, der bereits vom Browser kompiliert wurde und effizient [mit Arbeitern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden kann.

Die `WebAssembly.Module()`-Konstruktorfunktion kann aufgerufen werden, um den gegebenen WebAssembly-Binärcode synchron zu kompilieren. Der primäre Weg, ein `Module` zu erhalten, ist jedoch durch eine asynchrone Kompilierungsfunktion wie [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static).

> [!NOTE]
> Webseiten, die eine strikte [Richtlinie zur Inhaltsicherheit (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Weitere Informationen zur Erlaubnis der Kompilierung und Ausführung von WebAssembly finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

> [!WARNING]
> Da die Kompilierung großer Module kostspielig sein kann,
> sollten Entwickler den `Module()`-Konstruktor nur verwenden, wenn eine synchrone Kompilierung absolut erforderlich ist; die asynchrone Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) sollte zu allen anderen Zeiten verwendet werden.

```js-nolint
new WebAssembly.Module(bufferSource)
new WebAssembly.Module(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript-Builtins](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Ausnahmen

- Wenn der Parameter nicht den korrekten Typ oder die Struktur hat, wird ein {{jsxref("TypeError")}} ausgelöst.
- Wenn die Kompilierung fehlschlägt, lehnt der Konstruktor mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) ab.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Buffern im UI-Thread verbieten.

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

### Aktivierung von JavaScript-Builtins und globalen String-Imports

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale Zeichenfolgenkonstanten beim Kompilieren eines Wasm-Moduls über den `Module()`-Konstruktor, das dann mit [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert wird. Es ruft dann die exportierte `main()`-Funktion auf, die `"hello world!"` in die Konsole protokolliert. [Sehen Sie es live im Einsatz](https://mdn.github.io/webassembly-examples/js-builtin-examples/module-constructor/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
