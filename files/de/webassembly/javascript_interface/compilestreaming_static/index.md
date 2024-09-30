---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`WebAssembly.compileStreaming()`** statische Methode kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten zugrundeliegenden Quelle. Diese Funktion ist nützlich, wenn es notwendig ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (ansonsten sollte die [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) Funktion verwendet werden).

> [!NOTE]
> Webseiten mit einer strengen [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) könnten verhindern, dass WebAssembly-Module kompiliert und ausgeführt werden.
> Für weitere Informationen darüber, wie man die Kompilierung und Ausführung von WebAssembly erlaubt, siehe die [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response) Objekt oder ein Versprechen, das mit einem erfüllt wird, das die zugrundeliegende Quelle eines zu streamenden und zu kompilierenden Wasm-Moduls darstellt.

### Rückgabewert

Ein `Promise`, das zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt aufgelöst wird, das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein `Promise` ist, das in ein `Response`-Objekt aufgelöst wird, lehnt das Promise mit einem {{jsxref("TypeError")}} ab.
- Wenn die Kompilierung fehlschlägt, lehnt das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) ab.
- Wenn das `source`-Versprechen abgelehnt wird, lehnt das Promise mit dem Fehler ab.
- Wenn das Ergebnis von `source` einen Fehler aufweist (z. B. falscher MIME-Typ), lehnt das Promise mit einem Fehler ab.

## Beispiele

### Streaming kompilieren

Das folgende Beispiel (siehe unseren [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt direkt ein Wasm-Modul aus einer zugrundeliegenden Quelle und kompiliert es zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt. Da die `compileStreaming()`-Funktion ein Versprechen für ein [`Response`](/de/docs/Web/API/Response) Objekt akzeptiert, können Sie direkt ein `Promise` von einem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, ohne auf die Erfüllung des Versprechens zu warten.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Die resultierende Modulinstanz wird dann mittels
[`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert und die exportierte Funktion aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick-Seite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
