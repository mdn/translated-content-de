---
title: WebAssembly.Module
slug: WebAssembly/Reference/JavaScript_interface/Module
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Ein **`WebAssembly.Module`** Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde — dieser kann effizient [mit Web-Workern geteilt werden](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

> [!NOTE]
> Das `WebAssembly.Module` Objekt ist nicht verwandt mit dem [`Module`](https://emscripten.org/docs/api_reference/module.html) Objekt, das in Emscripten genutzt wird.

## Konstruktor

- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)
  - : Erstellt ein neues `Module` Objekt.

## Statische Methoden

- [`WebAssembly.Module.customSections()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
  - : Bei Übergabe eines `Module` und eines Strings wird eine Kopie aller benutzerdefinierten Abschnitte im Modul mit dem gegebenen Stringnamen zurückgegeben.
- [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
  - : Bei Übergabe eines `Module` wird ein Array mit Beschreibungen aller deklarierten Exporte zurückgegeben.
- [`WebAssembly.Module.imports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static)
  - : Bei Übergabe eines `Module` wird ein Array mit Beschreibungen aller deklarierten Importe zurückgegeben.

## Beispiele

### Senden eines kompilierten Moduls an einen Worker

Im folgenden Beispiel wird der geladene `simple.wasm` Byte-Code mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) kompiliert und das resultierende `Module`-Objekt an einen [Worker](/de/docs/Web/API/Web_Workers_API) unter Verwendung von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) gesendet.

Siehe den `index-compile.html` [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) oder [sehen Sie es live an](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Die Worker-Funktion [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) definiert ein Importobjekt für die Nutzung durch das Modul. Die Funktion richtet dann einen Ereignishandler ein, um das Modul vom Haupt-Thread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) und rufen eine exportierte Funktion daraus auf.

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
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
