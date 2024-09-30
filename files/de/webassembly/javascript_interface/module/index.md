---
title: WebAssembly.Module
slug: WebAssembly/JavaScript_interface/Module
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Module`**-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde — dieser kann effizient [mit Arbeitern geteilt werden](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

> [!NOTE]
> Das `WebAssembly.Module`-Objekt ist nicht mit dem [`Module`](https://emscripten.org/docs/api_reference/module.html)-Objekt in Emscripten verwandt.

## Konstruktor

- [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module/Module)
  - : Erstellt ein neues `Module`-Objekt.

## Statische Methoden

- [`WebAssembly.Module.customSections()`](/de/docs/WebAssembly/JavaScript_interface/Module/customSections_static)
  - : Gibt, basierend auf einem `Module` und einem String, eine Kopie der Inhalte aller benutzerdefinierten Abschnitte im Modul mit dem angegebenen Stringnamen zurück.
- [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/JavaScript_interface/Module/exports_static)
  - : Gibt, basierend auf einem `Module`, ein Array mit Beschreibungen aller deklarierten Exporte zurück.
- [`WebAssembly.Module.imports()`](/de/docs/WebAssembly/JavaScript_interface/Module/imports_static)
  - : Gibt, basierend auf einem `Module`, ein Array mit Beschreibungen aller deklarierten Importe zurück.

## Beispiele

### Senden eines kompilierten Moduls an einen Worker

Das folgende Beispiel kompiliert den geladenen `simple.wasm`-Bytecode mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) und sendet die resultierende `Module`-Instanz mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API).

Siehe den `index-compile.html` [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) oder [sehen Sie ihn live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Die Worker-Funktion [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) definiert ein Importobjekt, das das Modul verwenden soll. Die Funktion richtet dann einen Ereignishandler ein, um das Modul aus dem Haupt-Thread zu erhalten. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) und rufen eine exportierte Funktion darin auf.

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
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
