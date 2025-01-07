---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{WebAssemblySidebar}}

Die schreibgeschützte Eigenschaft **`exports`** des Prototyps des [`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objekts gibt ein Objekt zurück, das als seine Mitglieder alle Funktionen enthält, die aus der WebAssembly-Modulinstanz exportiert wurden, um sie von JavaScript aus ansprechen und verwenden zu können.

## Beispiele

### Verwendung von exports

Nach dem Abrufen einiger WebAssembly-Bytecodes mittels `fetch` kompilieren und instanziieren wir das Modul mit der Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static), wobei wir eine JavaScript-Funktion in das WebAssembly-Modul importieren. Anschließend rufen wir eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions) auf, die von der `Instance` exportiert wird.

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
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
