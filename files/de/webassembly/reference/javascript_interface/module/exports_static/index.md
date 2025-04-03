---
title: WebAssembly.Module.exports()
slug: WebAssembly/Reference/JavaScript_interface/Module/exports_static
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

Die **`WebAssembly.Module.exports()`** statische Methode gibt ein
Array zurück, das Beschreibungen aller deklarierten Exporte des angegebenen
`Module` enthält.

## Syntax

```js-nolint
WebAssembly.Module.exports(module)
```

### Parameter

- `module`
  - : Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt.

### Rückgabewert

Ein Array, das Objekte enthält, die die exportierten Funktionen des angegebenen Moduls repräsentieren.

### Ausnahmen

Wenn `module` keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von exports

Das folgende Beispiel (sehen Sie sich unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)
Demo auf GitHub an, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) ebenfalls)
kompiliert den geladenen simple.wasm Bytecode mit der
Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet ihn dann mit [postMessage()](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
definieren wir ein Import-Objekt für das Modul, richten dann einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der Methode [`WebAssembly.Instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static), rufen eine davon exportierte Funktion auf und zeigen dann, wie wir Informationen über die verfügbaren Exporte eines Moduls mit `WebAssembly.Module.exports` zurückgeben können.

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

onmessage = (e) => {
  console.log("module received from main thread");
  const mod = e.data;

  WebAssembly.instantiate(mod, importObject).then((instance) => {
    instance.exports.exported_func();
  });

  const exports = WebAssembly.Module.exports(mod);
  console.log(exports[0]);
};
```

Die Ausgabe von `exports[0]` sieht so aus:

```json
{ "name": "exported_func", "kind": "function" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
