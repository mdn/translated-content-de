---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: ac338a2e458dba2162743b4e69c2ab2addad8b7c
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle. Diese Funktion ist nützlich, wenn es notwendig ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (andernfalls sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten WebAssembly daran hindern, Module zu kompilieren und auszuführen. Für weitere Informationen darüber, wie Sie die WebAssembly-Kompilierung und -Ausführung erlauben, siehe die [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Versprechen, das mit einem erfüllt wird, das die zugrunde liegende Quelle eines Wasm-Moduls, das Sie streamen und kompilieren möchten, darstellt.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können enthalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, das die Verwendung von [JavaScript builtins](/de/docs/WebAssembly/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Zeichenfolgen definieren die builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der builtins für JavaScript-Zeichenfolgen aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Eine Zeichenfolge, die einen Namensraum für [importierte globale Zeichenfolgenkonstanten](/de/docs/WebAssembly/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale Zeichenfolgenkonstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das auf ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt aufgelöst wird, das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response) oder `Promise` ist, das zu einem `Response` aufgelöst wird, lehnt das Versprechen mit einem {{jsxref("TypeError")}} ab.
- Wenn die Kompilierung fehlschlägt, lehnt das Versprechen mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) ab.
- Wenn das `source`-Versprechen abgelehnt wird, lehnt das Versprechen mit dem Fehler ab.
- Wenn das `Result` der `source`-Anfrage einen Fehler hat (z. B. falscher MIME-Typ), lehnt das Versprechen mit einem Fehler ab.

## Beispiele

### Kompilieren während des Streamings

Das folgende Beispiel (siehe unser [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html)-Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt direkt ein Wasm-Modul aus einer zugrunde liegenden Quelle und kompiliert es zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt. Da die Funktion `compileStreaming()` ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt ein Versprechen, das sich aus dem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) ergibt, ohne auf die Erfüllung des Versprechens zu warten, übergeben.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Die resultierende Modulinstanz wird dann mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert und die exportierte Funktion aufgerufen.

### Aktivierung von JavaScript-builtins und globalen Zeichenfolgenimporten

Dieses Beispiel aktiviert JavaScript-Zeichenfolgen-builtins und importierte globale Zeichenfolgenkonstanten, wenn das Wasm-Modul mit `compileStreaming()` kompiliert wird, bevor es mit [`instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert wird, und führt dann die exportierte `main()`-Funktion aus (die `"hello world!"` in die Konsole protokolliert). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/).

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

- Übersicht über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
