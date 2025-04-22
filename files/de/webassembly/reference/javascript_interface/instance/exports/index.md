---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/Reference/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die **`exports`**-Eigenschaft des [`WebAssembly.Instance`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance)-Objektprototyps ist schreibgeschützt und gibt ein Objekt zurück, das alle Funktionen enthält, die aus der WebAssembly-Modulinstanz exportiert wurden. Dadurch können sie in JavaScript angesprochen und verwendet werden.

## Beispiele

### Verwendung von exports

Nachdem einige WebAssembly-Bytecodes mit `fetch` abgerufen wurden, kompilieren und instanziieren wir das Modul mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), wobei wir währenddessen eine JavaScript-Funktion in das WebAssembly-Modul importieren. Wir rufen dann eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions) auf, die von der `Instance` exportiert wird.

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
> Dieses Beispiel finden Sie auch als [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) auf GitHub ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
