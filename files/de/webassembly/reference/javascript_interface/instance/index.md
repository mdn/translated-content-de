---
title: WebAssembly.Instance
slug: WebAssembly/Reference/JavaScript_interface/Instance
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Ein **`WebAssembly.Instance`** Objekt ist eine zustandsbehaftete, ausführbare Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module). `Instance`-Objekte enthalten alle [exportierten WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die es ermöglichen, aus JavaScript auf WebAssembly-Code zuzugreifen.

## Konstruktor

- [`WebAssembly.Instance()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/Instance)
  - : Erstellt ein neues `Instance`-Objekt.

## Instanzeigenschaften

- [`exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)
  - : Gibt ein Objekt zurück, das alle aus der WebAssembly-Modulinstanz exportierten Funktionen als seine Mitglieder enthält, sodass sie von JavaScript aus zugänglich und nutzbar sind. Nur lesbar.

## Beispiele

### Synchrones Instanziieren eines WebAssembly-Moduls

Die `WebAssembly.Instance()` Konstruktorfunktion kann aufgerufen werden, um synchron ein gegebenes [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module) Objekt zu instanziieren, zum Beispiel:

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

Der bevorzugte Weg, um eine `Instance` zu erhalten, ist asynchron, zum Beispiel durch die Verwendung der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Funktion wie folgt:

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

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
