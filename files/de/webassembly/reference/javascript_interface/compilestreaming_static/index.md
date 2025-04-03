---
title: WebAssembly.compileStreaming()
slug: WebAssembly/Reference/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die statische Methode **`WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle. Diese Funktion ist nützlich, wenn es erforderlich ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (andernfalls sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, können verhindern, dass WebAssembly Module kompiliert und ausgeführt werden.
> Weitere Informationen zum Erlauben der Kompilierung und Ausführung von WebAssembly finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem solchen erfüllt wird und die zugrunde liegende Quelle eines Wasm-Moduls darstellt, das Sie streamen und kompilieren möchten.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können umfassen:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt aufgelöst wird, das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response)-Objekt oder `Promise` ist, das zu einem `Response` aufgelöst wird, schlägt das Promise mit einem {{jsxref("TypeError")}} fehl.
- Wenn die Kompilierung fehlschlägt, schlägt das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) fehl.
- Wenn das `source`-`Promise` fehlschlägt, schlägt das `Promise` mit dem Fehler fehl.
- Wenn das `Result` von `source` einen Fehler hat (z.B. schlechter MIME-Typ), schlägt das Promise mit einem Fehler fehl.

## Beispiele

### Stream-kompilierung

Das folgende Beispiel (siehe unser [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html)-Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt direkt ein Wasm-Modul von einer zugrunde liegenden Quelle und kompiliert es dann in ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt. Da die `compileStreaming()`-Funktion ein `Promise` für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt ein `Promise` vom Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, ohne darauf zu warten, dass das `Promise` erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Das resultierende Modul-Instanz wird dann verwendet, um [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) zu instanziieren, und die exportierte Funktion wird aufgerufen.

### Aktivieren von JavaScript builtins und globalen Zeichenfolgenimports

Dieses Beispiel aktiviert JavaScript-String-builtins und importierte globale Zeichenfolgenkonstanten beim Kompilieren des Wasm-Moduls mit `compileStreaming()`, bevor es mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert wird und dann die exportierte `main()`-Funktion ausgeführt wird (die `"hello world!"` auf die Konsole schreibt). [Sehen Sie es live laufen](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/).

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

WebAssembly.compileStreaming(fetch("log-concat.wasm"), compileOptions)
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.main());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
