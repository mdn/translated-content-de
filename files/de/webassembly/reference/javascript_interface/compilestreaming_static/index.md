---
title: WebAssembly.compileStreaming()
slug: WebAssembly/Reference/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die statische Methode **`WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) direkt aus einer gestreamten zugrundeliegenden Quelle. Diese Funktion ist nützlich, wenn es erforderlich ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (ansonsten sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren. Weitere Informationen zur Erlaubnis von WebAssembly-Kompilierung und -Ausführung finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
WebAssembly.compileStreaming(source, compileOptions)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem solchen erfüllt wird und die zugrundeliegende Quelle eines Wasm-Moduls darstellt, das Sie streamen und kompilieren möchten.
- `compileOptions` {{optional_inline}}
  - : Ein Objekt, das Kompilierungsoptionen enthält. Eigenschaften können beinhalten:
    - `builtins` {{optional_inline}}
      - : Ein Array von Strings, das die Verwendung von [JavaScript-Builtins](/de/docs/WebAssembly/Guides/JavaScript_builtins) im kompilierten Wasm-Modul ermöglicht. Die Strings definieren die Builtins, die Sie aktivieren möchten. Derzeit ist der einzige verfügbare Wert `"js-string"`, der JavaScript-String-Builtins aktiviert.
    - `importedStringConstants` {{optional_inline}}
      - : Ein String, der einen Namensraum für [importierte globale String-Konstanten](/de/docs/WebAssembly/Guides/Imported_string_constants) angibt. Diese Eigenschaft muss angegeben werden, wenn Sie importierte globale String-Konstanten im Wasm-Modul verwenden möchten.

### Rückgabewert

Ein `Promise`, das zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt aufgelöst wird, das das kompilierte Modul repräsentiert.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response) oder `Promise` ist, das sich zu einem `Response` auflöst, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/Reference/JavaScript_interface/CompileError) abgelehnt.
- Wenn das `source`-Promise abgelehnt wird, wird das Promise mit dem Fehler abgelehnt.
- Wenn das `source`-Ergebnis einen Fehler hat (z.B. falscher MIME-Typ), wird das Promise mit einem Fehler abgelehnt.

## Beispiele

### Streaming kompilieren

Das folgende Beispiel (siehe unser [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html)-Demo auf GitHub und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt direkt ein Wasm-Modul aus einer zugrundeliegenden Quelle und kompiliert es zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt. Da die Funktion `compileStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie direkt ein `Promise` aus dem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, ohne auf die Erfüllung des Promises zu warten.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Die resultierende Modulinstanz wird dann mit [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert, und die exportierte Funktion wird aufgerufen.

### JavaScript-Builtins und globale String-Importe aktivieren

Dieses Beispiel aktiviert JavaScript-String-Builtins und importierte globale String-Konstanten, wenn das Wasm-Modul mit `compileStreaming()` kompiliert wird, bevor es mit [`instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) instanziiert und dann die exportierte `main()`-Funktion ausgeführt wird (die `"hello world!"` in die Konsole protokolliert). [Sehen Sie es live](https://mdn.github.io/webassembly-examples/js-builtin-examples/compile-streaming/).

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
