---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die schreibgeschützte Eigenschaft **`exports`** des Objektprototyps [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance) gibt ein Objekt zurück, das alle Funktionen enthält, die aus der WebAssembly-Modulinstanz exportiert wurden, sodass sie von JavaScript aus darauf zugegriffen und verwendet werden können.

## Beispiele

### Verwendung von exports

Nachdem wir einige WebAssembly-Bytecode mit Fetch abgerufen haben, kompilieren und instanziieren wir das Modul mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) und importieren dabei eine JavaScript-Funktion in das WebAssembly-Modul. Anschließend rufen wir eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions) auf, die von der `Instance` exportiert wird.

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
> Sie können dieses Beispiel auch als [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
> auf GitHub finden ([sehen Sie es sich auch live an](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
