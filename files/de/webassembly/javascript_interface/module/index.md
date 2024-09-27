---
title: WebAssembly.Module
slug: WebAssembly/JavaScript_interface/Module
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Module`**-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde — dieser kann effizient [mit Workers geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

> [!NOTE]
> Das `WebAssembly.Module`-Objekt ist nicht mit dem [`Module`](https://emscripten.org/docs/api_reference/module.html)-Objekt aus Emscripten verwandt.

## Konstruktor

- [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module/Module)
  - : Erstellt ein neues `Module`-Objekt.

## Statische Methoden

- [`WebAssembly.Module.customSections()`](/de/docs/WebAssembly/JavaScript_interface/Module/customSections_static)
  - : Nimmt ein `Module` und einen String entgegen und gibt eine Kopie des Inhalts aller benutzerdefinierten Abschnitte im Modul mit dem angegebenen Namen zurück.
- [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/JavaScript_interface/Module/exports_static)
  - : Nimmt ein `Module` entgegen und gibt ein Array mit Beschreibungen aller deklarierten Exporte zurück.
- [`WebAssembly.Module.imports()`](/de/docs/WebAssembly/JavaScript_interface/Module/imports_static)
  - : Nimmt ein `Module` entgegen und gibt ein Array mit Beschreibungen aller deklarierten Importe zurück.

## Beispiele

### Senden eines kompilierten Moduls an einen Worker

Das folgende Beispiel kompiliert den geladenen `simple.wasm`-Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und sendet die resultierende `Module`-Instanz an einen [Worker](/de/docs/Web/API/Web_Workers_API) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage).

Siehe den `index-compile.html` [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) oder [sehen Sie ihn live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Die Worker-Funktion [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) definiert ein Import-Objekt, das vom Modul verwendet werden soll. Die Funktion richtet dann einen Ereignishandler ein, um das Modul vom Haupt-Thread zu empfangen. Bei Empfang des Moduls erstellen wir eine Instanz daraus mittels der Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) und rufen eine darin enthaltene exportierte Funktion auf.

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

- Übersichtsseite [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
