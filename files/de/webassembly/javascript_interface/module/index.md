---
title: WebAssembly.Module
slug: WebAssembly/JavaScript_interface/Module
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Module`**-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde – dieser kann effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

> [!NOTE]
> Das `WebAssembly.Module`-Objekt ist nicht mit dem [`Module`](https://emscripten.org/docs/api_reference/module.html)-Objekt in Emscripten verwandt.

## Konstruktor

- [`WebAssembly.Module()`](/de/docs/WebAssembly/JavaScript_interface/Module/Module)
  - : Erstellt ein neues `Module`-Objekt.

## Statische Methoden

- [`WebAssembly.Module.customSections()`](/de/docs/WebAssembly/JavaScript_interface/Module/customSections_static)
  - : Übergibt man ein `Module` und einen String, gibt es eine Kopie des Inhalts aller benutzerdefinierten Abschnitte im Modul mit dem übergebenen Stringnamen zurück.
- [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/JavaScript_interface/Module/exports_static)
  - : Gibt bei Übergabe eines `Module` ein Array zurück, das Beschreibungen aller deklarierten Exporte enthält.
- [`WebAssembly.Module.imports()`](/de/docs/WebAssembly/JavaScript_interface/Module/imports_static)
  - : Gibt bei Übergabe eines `Module` ein Array zurück, das Beschreibungen aller deklarierten Importe enthält.

## Beispiele

### Einen kompilierten Modul an einen Worker senden

Im folgenden Beispiel wird der geladene `simple.wasm`-Bytecode mithilfe der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) kompiliert und die resultierende `Module`-Instanz mit einem [Worker](/de/docs/Web/API/Web_Workers_API) unter Verwendung von {{domxref("Worker/postMessage", "postMessage()")}} gesendet.

Sehen Sie sich den `index-compile.html` [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) an oder [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Die Worker-Funktion [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) definiert ein Importobjekt zur Nutzung durch das Modul. Die Funktion richtet dann einen Ereignishandler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir eine Instanz daraus mit der Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) und rufen eine exportierte Funktion von innen auf.

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

- [WebAssembly](/de/docs/WebAssembly) Übersichtseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
