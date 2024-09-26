---
title: WebAssembly.compile()
slug: WebAssembly/JavaScript_interface/compile_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die **`WebAssembly.compile()`** statische Methode kompiliert WebAssembly-Binärcode in ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt.
Diese Funktion ist nützlich, wenn es notwendig ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (andernfalls sollte die [`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static)-Funktion verwendet werden).

> [!NOTE]
> Webseiten, die eine strenge [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten das Kompilieren und Ausführen von WebAssembly-Modulen blockieren.
> Für weitere Informationen zum erlauben der WebAssembly-Kompilierung und -Ausführung, siehe [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compile(bufferSource)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}}
    das den Binärcode des zu kompilierenden Wasm-Moduls enthält.

### Rückgabewert

Ein `Promise`, das zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt aufgelöst wird,
das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `bufferSource` kein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder {{jsxref("ArrayBuffer")}} ist,
  wird das Promise mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Promise mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) abgelehnt.

## Beispiele

### Verwendung von compile

Das folgende Beispiel kompiliert den geladenen simple.wasm Bytecode mit der
`compile()`-Funktion und sendet ihn dann mittels [postMessage()](/de/docs/Web/API/Worker/postMessage) zu einem [Worker](/de/docs/Web/API/Web_Workers_API).

```js
const worker = new Worker("wasm_worker.js");

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.compile(bytes))
  .then((mod) => worker.postMessage(mod));
```

> [!NOTE]
> Sie werden wahrscheinlich in den meisten Fällen
> [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) verwenden wollen, da es effizienter ist
> als `compile()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly-JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)