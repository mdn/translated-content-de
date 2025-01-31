---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/Reference/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die schreibgeschützte Eigenschaft **`exports`** des [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance) Objektprototyps gibt ein Objekt zurück, das als seine Mitglieder alle Funktionen enthält, die aus der WebAssembly-Modulinstanz exportiert wurden, damit diese von JavaScript aus aufgerufen und verwendet werden können.

## Beispiele

### Verwendung von Exports

Nachdem einige WebAssembly-Bytecode mit `fetch` abgerufen wurden, kompilieren und instanziieren wir das Modul mithilfe der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir im Prozess eine JavaScript-Funktion in das WebAssembly-Modul importieren. Anschließend rufen wir eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf, die von der `Instance` exportiert wird.

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

> [!NOTE]
> Dieses Beispiel finden Sie auch als [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
> auf GitHub (auch [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
