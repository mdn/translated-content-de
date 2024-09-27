---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **statische Methode `WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle. Diese Funktion ist nützlich, wenn es notwendig ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (ansonsten sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwendet werden).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten verhindern, dass WebAssembly Module kompiliert und ausgeführt werden.
> Für weitere Informationen darüber, wie Sie die Kompilierung und Ausführung von WebAssembly erlauben können, siehe die [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Promise, das mit einem solchen erfüllt wird und die zugrunde liegende Quelle eines Wasm-Moduls darstellt, das Sie streamen und kompilieren möchten.

### Rückgabewert

Ein `Promise`, das mit einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt erfüllt wird, das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response) oder ein `Promise` ist, das zu einem `Response` aufgelöst wird, wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) abgelehnt.
- Wenn `source` ein `Promise` ist, das abgelehnt wird, wird das Promise mit dem Fehler abgelehnt.
- Wenn das `Result` der `source` einen Fehler aufweist (z.B. schlechter MIME-Typ), wird das Promise mit einem Fehler abgelehnt.

## Beispiele

### Kompilierung im Streaming

Das folgende Beispiel (siehe unser [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) Demo auf GitHub und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html)) streamt ein Wasm-Modul direkt aus einer zugrunde liegenden Quelle und kompiliert es dann zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt. Da die Funktion `compileStreaming()` ein Promise für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt ein `Promise` vom Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, ohne auf die Erfüllung des Promises zu warten.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Das resultierende Modul wird dann mit
[`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert und die exportierte Funktion aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
