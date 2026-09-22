---
title: WebAssembly.compileStreaming()
slug: WebAssembly/Reference/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 1e333526315c95488d86013289a114f0f75f9f5f
---

Die statische Methode **`WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten Datenquelle.
Diese Funktion ist nützlich, wenn ein Modul kompiliert werden muss, bevor es instanziiert werden kann. Andernfalls sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwendet werden.

> [!NOTE]
> Webseiten mit einer strikten [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) können das Kompilieren und Ausführen von WebAssembly-Modulen blockieren.
> Weitere Informationen dazu, wie Sie die Kompilierung und Ausführung von WebAssembly zulassen, finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem solchen Objekt erfüllt wird. Es stellt die Datenquelle eines Wasm-Moduls dar, das Sie streamen und kompilieren möchten.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt mit Kompilierungsoptionen. Es kann folgende Eigenschaften enthalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript-Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings legen fest, welche Builtins aktiviert werden sollen. Derzeit ist nur der Wert `"js-string"` verfügbar, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namespace für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt aufgelöst wird, welches das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` weder eine [`Response`](/de/docs/Web/API/Response) noch ein `Promise` ist, das zu einer `Response` aufgelöst wird, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) abgelehnt.
- Wenn `source` ein `Promise` ist, das abgelehnt wird, wird das Promise mit demselben Fehler abgelehnt.
- Wenn die Antwort einen falschen MIME-Typ hat (anstelle von `application/wasm`), wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn das Verarbeiten des Antwort-Bodys fehlschlägt, wird das Promise mit dem entsprechenden Fehler abgelehnt.

## Beispiele

### Streaming-Kompilierung

Das folgende Beispiel (siehe auch unsere Demo [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) auf GitHub und die [Live-Demo](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt ein Wasm-Modul direkt aus einer Datenquelle und kompiliert es anschließend zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt. Da die Funktion `compileStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt das von [`fetch()`](/de/docs/Web/API/Window/fetch) zurückgegebene `Promise` übergeben, ohne auf dessen Erfüllung zu warten.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Das resultierende Modul wird anschließend mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert und die exportierte Funktion aufgerufen.

### JavaScript-Builtins und globale String-Importe aktivieren

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten, während das Wasm-Modul mit `compileStreaming()` kompiliert wird. Anschließend wird es mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert und die exportierte Funktion `main()` ausgeführt, die `"hello world!"` in der Konsole ausgibt. [Sehen Sie sich die Live-Demo an](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/).

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

- [WebAssembly](/de/docs/WebAssembly) – Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
