---
title: WebAssembly.Instance
slug: WebAssembly/JavaScript_interface/Instance
l10n:
  sourceCommit: 4c19f449d8aa91f114658c2b661908fb7078219e
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Instance`**-Objekt ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module). `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions), die es ermöglichen, aus JavaScript auf WebAssembly-Code zuzugreifen.

## Konstruktor

- [`WebAssembly.Instance()`](/de/docs/WebAssembly/JavaScript_interface/Instance/Instance)
  - : Erstellt ein neues `Instance`-Objekt.

## Instanzeigenschaften

- [`exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports)
  - : Gibt ein Objekt zurück, das alle aus der WebAssembly-Modulinstanz exportierten Funktionen als Mitglieder enthält, damit sie von JavaScript aus aufgerufen und genutzt werden können. Schreibgeschützt.

## Beispiele

### Synchrones Instanziieren eines WebAssembly-Moduls

Die Konstruktorfunktion `WebAssembly.Instance()` kann aufgerufen werden, um ein gegebenes [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt synchron zu instanziieren, zum Beispiel:

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(mod, importObject);
    instance.exports.exported_func();
  });
```

Die bevorzugte Methode, um eine `Instance` zu erhalten, ist asynchron, beispielsweise unter Verwendung der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static):

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Dies zeigt auch, wie die `exports`-Eigenschaft verwendet wird, um auf exportierte Funktionen zuzugreifen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
