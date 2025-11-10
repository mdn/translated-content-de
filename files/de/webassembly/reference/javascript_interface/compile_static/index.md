---
title: WebAssembly.compile()
slug: WebAssembly/Reference/JavaScript_interface/compile_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die statische Methode **`WebAssembly.compile()`** kompiliert WebAssembly-Binärcode in ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt.
Diese Funktion ist nützlich, wenn ein Modul kompiliert werden muss, bevor es instanziiert werden kann (andernfalls sollte die Funktion [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, könnten das Kompilieren und Ausführen von WebAssembly-Modulen blockieren.
> Weitere Informationen zum Zulassen der WebAssembly-Kompilierung und -Ausführung finden Sie unter dem [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
WebAssembly.compile(bufferSource, compileOptions)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}}, das den Binärcode des zu kompilierenden Wasm-Moduls enthält.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können enthalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von einem oder mehreren Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das sich zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt auflöst und das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}} ist, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) abgelehnt.

## Beispiele

### Verwendung von compile

Im folgenden Beispiel wird der geladene einfache Wasm-Bytecode mit der Funktion `compile()` kompiliert und dann mit [postMessage()](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API) gesendet.

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> In den meisten Fällen werden Sie vermutlich
> [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) verwenden wollen, da es effizienter als `compile()` ist.

### Aktivieren von JavaScript-Builtins und globalen String-Importen

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten, wenn das Wasm-Modul mit `compile()` kompiliert wird, bevor es mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert und anschließend die exportierte `main()`-Funktion (die `"hello world!"` auf die Konsole schreibt) ausgeführt wird. [Siehe es live in Aktion](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
