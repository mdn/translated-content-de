---
title: WebAssembly.Instance.prototype.exports
slug: WebAssembly/JavaScript_interface/Instance/exports
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`exports`** schreibgeschützte Eigenschaft des
[`WebAssembly.Instance`](/de/docs/WebAssembly/JavaScript_interface/Instance)-Objektprototyps gibt ein Objekt zurück, das alle aus der WebAssembly-Modulinstanz exportierten Funktionen als seine Mitglieder enthält, sodass sie von JavaScript aus zugegriffen und verwendet werden können.

## Beispiele

### Verwendung von exports

Nachdem einige WebAssembly-Bytecodes mittels `fetch` abgerufen wurden, kompilieren und instanziieren wir das Modul mithilfe der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static)-Funktion, wobei eine JavaScript-Funktion in das WebAssembly-Modul importiert wird. Wir rufen dann eine [Exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions) auf, die von der `Instance` exportiert wird.

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
> Sie finden dieses Beispiel auch als [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html)
> auf GitHub ([Sie können es auch live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
