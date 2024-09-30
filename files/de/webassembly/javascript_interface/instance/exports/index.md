---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`exports`**-Eigenschaft des schreibgeschützten Prototyps des [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekts gibt ein Objekt zurück, das alle Funktionen enthält, die aus der WebAssembly-Modulinstanz exportiert wurden, um deren Zugriff und Nutzung durch JavaScript zu ermöglichen.

## Beispiele

### Verwendung von exports

Nach dem Abrufen einiger WebAssembly-Bytecode mittels fetch kompiliert und instanziiert man das Modul mithilfe der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), wobei eine JavaScript-Funktion in das WebAssembly-Modul importiert wird. Anschließend wird eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions) aufgerufen, die von der `Instance` exportiert wird.

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
> Sie können dieses Beispiel auch als [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
