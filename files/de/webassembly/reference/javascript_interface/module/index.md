---
title: WebAssembly.Module
slug: WebAssembly/Reference/JavaScript_interface/Module
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Ein **`WebAssembly.Module`**-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde — dieser kann effizient [mit Arbeitern geteilt werden](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

> [!NOTE]
> Das `WebAssembly.Module`-Objekt ist nicht mit dem [`Module`](https://emscripten.org/docs/api_reference/module.html)-Objekt von Emscripten verwandt.

## Konstruktor

- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)
  - : Erstellt ein neues `Module`-Objekt.

## Statische Methoden

- [`WebAssembly.Module.customSections()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
  - : Gibt bei einem `Module` und einem String eine Kopie des Inhalts aller benutzerdefinierten Sektionen im Modul mit dem angegebenen String-Namen zurück.
- [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
  - : Gibt bei einem `Module` ein Array zurück, das Beschreibungen aller deklarierten Exporte enthält.
- [`WebAssembly.Module.imports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static)
  - : Gibt bei einem `Module` ein Array zurück, das Beschreibungen aller deklarierten Importe enthält.

## Beispiele

### Versand eines kompilierten Moduls an einen Worker

Das folgende Beispiel kompiliert den geladenen `simple.wasm`-Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet die resultierende `Module`-Instanz an einen [Worker](/de/docs/Web/API/Web_Workers_API) mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage).

Siehe den `index-compile.html` [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) oder [sehen Sie sich das live an](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Die Worker-Funktion [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) definiert ein Importobjekt für das Modul zur Verwendung. Die Funktion richtet dann einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) und rufen eine exportierte Funktion von innen auf.

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
