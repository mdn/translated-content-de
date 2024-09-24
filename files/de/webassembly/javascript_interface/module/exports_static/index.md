---
title: WebAssembly.Module.exports()
slug: WebAssembly/JavaScript_interface/Module/exports_static
l10n:
  sourceCommit: 4c19f449d8aa91f114658c2b661908fb7078219e
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.Module.exports()`** gibt ein Array zurück, das Beschreibungen aller deklarierten Exporte des gegebenen `Module` enthält.

## Syntax

```js-nolint
WebAssembly.Module.exports(module)
```

### Parameter

- `module`
  - : Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt.

### Rückgabewert

Ein Array, das Objekte enthält, die die exportierten Funktionen des gegebenen Moduls repräsentieren.

### Ausnahmen

Wenn das Modul keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekts ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von exports

Das folgende Beispiel (siehe unser [index-compile.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html) auch) kompiliert den geladenen simple.wasm Bytecode mit der [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) Methode und sendet ihn dann mit [postMessage()](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Im Worker (siehe [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js)) definieren wir ein Importobjekt für das Modul, richten dann einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der [`WebAssembly.Instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) Methode, rufen eine exportierte Funktion aus dem Inneren auf und zeigen dann, wie wir Informationen über die verfügbaren Exporte eines Moduls mit `WebAssembly.Module.exports` zurückgeben können.

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

Die Ausgabe von `exports[0]` sieht folgendermaßen aus:

```js
{ name: "exported_func", kind: "function" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
