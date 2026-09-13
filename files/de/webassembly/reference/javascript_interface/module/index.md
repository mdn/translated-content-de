---
title: WebAssembly.Module
slug: WebAssembly/Reference/JavaScript_interface/Module
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Ein **`WebAssembly.Module`**-Objekt enthält zustandslosen WebAssembly-Code, der bereits vom Browser kompiliert wurde — dieser kann effizient [mit Workern geteilt](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

`WebAssembly.Module` ist in Umgebungen, die `AbstractModuleSource` unterstützen, eine Unterklasse der versteckten Klasse {{jsxref("AbstractModuleSource")}}.

> [!NOTE]
> Das `WebAssembly.Module`-Objekt steht in keinem Zusammenhang mit dem [`Module`](https://emscripten.org/docs/api_reference/module.html)-Objekt, das in Emscripten verwendet wird.

## Konstruktor

- [`WebAssembly.Module()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/Module)
  - : Erstellt ein neues `Module`-Objekt.

## Statische Methoden

- [`WebAssembly.Module.customSections()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/customSections_static)
  - : Gibt bei Angabe eines `Module` und einer Zeichenkette eine Kopie der Inhalte aller benutzerdefinierten Abschnitte im Modul mit dem angegebenen Zeichenkettennamen zurück.
- [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static)
  - : Gibt bei Angabe eines `Module` ein Array zurück, das Beschreibungen aller deklarierten Exporte enthält.
- [`WebAssembly.Module.imports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/imports_static)
  - : Gibt bei Angabe eines `Module` ein Array zurück, das Beschreibungen aller deklarierten Importe enthält.

## Beispiele

### Ein kompiliertes Modul an einen Worker senden

Das folgende Beispiel kompiliert den geladenen Bytecode `simple.wasm` mit der Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) und sendet die resultierende `Module`-Instanz mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) an einen [Worker](/de/docs/Web/API/Web_Workers_API).

Lesen Sie den `index-compile.html`-[Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/index-compile.html) oder [sehen Sie ihn live an](https://mdn.github.io/webassembly-examples/js-api-examples/index-compile.html).

```js
const worker = new Worker("wasm_worker.js");

WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) =>
  worker.postMessage(mod),
);
```

Die Worker-Funktion [`wasm_worker.js`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/wasm_worker.js) definiert ein Importobjekt, das das Modul verwenden kann. Anschließend richtet die Funktion einen Event-Handler ein, um das Modul vom Hauptthread zu empfangen. Wenn das Modul empfangen wird, erstellen wir mithilfe der Methode [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) eine Instanz daraus und rufen eine darin exportierte Funktion auf.

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

### Das Modul mit `import source` abrufen

In Umgebungen, die Quellphasenimporte unterstützen, können Sie mit der Anweisung [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) oder dem Operator [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source) ein `WebAssembly.Module`-Objekt abrufen. Beide vermeiden die Notwendigkeit, `fetch()` oder `WebAssembly.compileStreaming()` aufzurufen, und verwenden stattdessen die standardmäßige Modullader-Infrastruktur.

```js
import source modSource from "./simple.wasm";

const worker = new Worker("wasm_worker.js");
worker.postMessage(modSource);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly)-Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwenden der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
