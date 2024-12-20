---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile_static
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.compile()`** kompiliert WebAssembly-Binärcode in ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt.
Diese Funktion ist nützlich, wenn es notwendig ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (andernfalls sollte die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten verhindern, dass WebAssembly-Module kompiliert und ausgeführt werden.
> Für weitere Informationen darüber, wie Sie die Kompilierung und Ausführung von WebAssembly erlauben können, lesen Sie die [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
WebAssembly.compile(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}}, das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array mit einem oder mehreren Strings, das die Nutzung von [JavaScript-builtin-Funktionen](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die zu aktivierenden builtins. Derzeit ist der einzige verfügbare Wert `"js-string"`, welcher JavaScript-String-builtin-Funktionen aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Imported_string_constants) definiert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das auf ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt auflöst, das das kompilierte Modul repräsentiert.

### Ausnahmen

- Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}} ist, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Sollte die Kompilierung fehlschlagen, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) abgelehnt.

## Beispiele

### Verwendung von compile

Im folgenden Beispiel wird der geladene einfache Wasm-Bytecode mit der `compile()`-Funktion kompiliert und dann mit [postMessage()](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API) gesendet.

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> In den meisten Fällen möchten Sie wahrscheinlich [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) verwenden, da es effizienter ist als `compile()`.

### Aktivieren von JavaScript builtins und globalen String-Imports

In diesem Beispiel werden JavaScript-String-builtin-Funktionen und importierte globale String-Konstanten aktiviert, wenn das Wasm-Modul mit `compile()` kompiliert wird, bevor es mit [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert und dann die exportierte `main()`-Funktion (die `"hello world!"` in die Konsole loggt) ausgeführt wird. [Lassen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile/).

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
  .then((bytes) => WebAssembly.compile(bytes, compileOptions))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.main());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
