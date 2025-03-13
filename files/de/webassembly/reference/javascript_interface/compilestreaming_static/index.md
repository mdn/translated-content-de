---
title: WebAssembly.compileStreaming()
slug: WebAssembly/Reference/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

Die statische Methode **`WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle. Diese Funktion ist nützlich, wenn ein Modul kompiliert werden muss, bevor es instanziiert werden kann (andernfalls sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Weitere Informationen darüber, wie Sie die Kompilierung und Ausführung von WebAssembly erlauben können, finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem erfüllt wird, das die zugrunde liegende Quelle eines gestreamten und zu kompilierenden Wasm-Moduls darstellt.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Die Eigenschaften können enthalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namespace für [importierte globale Stringkonstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) spezifiziert. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Stringkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das sich zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt auflöst, das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise ist, das sich zu einem `Response` auflöst, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) abgelehnt.
- Wenn das `source` ein Promise ist, das abgelehnt wird, wird das Promise mit dem Fehler abgelehnt.
- Wenn das `Result` der `source` einen Fehler hat (z.B. schlechter MIME-Typ), wird das Promise mit einem Fehler abgelehnt.

## Beispiele

### Kompilierung im Stream

Das folgende Beispiel (siehe unser [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html)-Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) auch) streamt ein Wasm-Modul direkt aus einer zugrunde liegenden Quelle und kompiliert es dann zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt. Da die `compileStreaming()`-Funktion ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt ein `Promise` aus dem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, ohne darauf zu warten, dass das Promise erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Das resultierende Modul wird dann mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert, und die exportierte Funktion wird aufgerufen.

### JavaScript Builtins und globale String-Importe aktivieren

Dieses Beispiel aktiviert JavaScript-String-builtins und importierte globale Stringkonstanten, wenn das Wasm-Modul mit `compileStreaming()` kompiliert wird, bevor es mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert und dann die exportierte Funktion `main()` ausgeführt wird (die `"hello world!"` in die Konsole schreibt). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
