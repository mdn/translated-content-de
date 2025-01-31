---
title: WebAssembly.Module.exports()
slug: WebAssembly/Reference/JavaScript_interface/Module/exports_static
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`WebAssembly.Module.exports()`** statische Methode gibt ein Array zurück, das Beschreibungen aller deklarierten Exporte des angegebenen `Module` enthält.

## Syntax

```js-nolint
WebAssembly.Module.exports(module)
```

### Parameter

- `module`
  - : Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt.

### Rückgabewert

Ein Array, das Objekte enthält, die die exportierten Funktionen des angegebenen Moduls darstellen.

### Ausnahmen

Wenn das Modul nicht eine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von exports

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html)
Demo auf GitHub, und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) auch)
kompiliert den geladenen simple.wasm Bytecode mit der
[`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) Methode und sendet ihn dann an einen [worker](/de/docs/Web/API/Web_Workers_API) mit [postMessage()](/de/docs/Web/API/Worker/postMessage).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe
[`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js))
definieren wir ein Importobjekt für das Modul, dann richten wir einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Sobald das Modul empfangen wird, erstellen wir mit der [`WebAssembly.Instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) Methode eine Instanz davon, rufen eine exportierte Funktion daraus auf und zeigen dann, wie wir Informationen über die verfügbaren Exporte eines Moduls mit `WebAssembly.Module.exports` zurückgeben können.

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

Die `exports[0]` Ausgabe sieht so aus:

```js
{ name: "exported_func", kind: "function" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtseite
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
