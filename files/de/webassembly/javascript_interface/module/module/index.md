---
title: WebAssembly.Module() Konstruktor
slug: WebAssembly/JavaScript_interface/Module/Module
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Module()`**-Konstruktor erstellt ein neues Modulobjekt, das zustandslosen WebAssembly-Code enthält, der bereits vom Browser kompiliert wurde. Dieser kann effizient [mit Arbeitern geteilt werden](/de/docs/Web/API/Worker/postMessage) und mehrfach instanziiert werden.

Die `WebAssembly.Module()`-Konstruktorfunktion kann aufgerufen werden, um synchronen WebAssembly-Binärcode zu kompilieren. Der primäre Weg, um ein `Modul` zu erhalten, ist jedoch über eine asynchrone Kompilierungsfunktion wie [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static).

> [!NOTE]
> Webseiten, die eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) haben, könnten WebAssembly daran hindern, Module zu kompilieren und auszuführen. Für weitere Informationen darüber, wie Sie die Kompilierung und Ausführung von WebAssembly erlauben können, lesen Sie die [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

> [!WARNING]
> Da die Kompilierung großer Module teuer sein kann, sollten Entwickler den `Module()`-Konstruktor nur verwenden, wenn eine synchrone Kompilierung absolut erforderlich ist; die asynchrone Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) sollte in allen anderen Fällen verwendet werden.

```js-nolint
new WebAssembly.Module(bufferSource)
```

### Parameter

- `bufferSource`
  - : Ein [typisiertes Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des zu kompilierenden Wasm-Moduls enthält.

#### Ausnahmen

- Ist der Parameter nicht vom korrekten Typ oder Struktur, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Falls die Kompilierung fehlschlägt, lehnt der Konstruktor mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) ab.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Puffergrößen im UI-Thread untersagen.

## Beispiele

### Synchrone Kompilierung eines WebAssembly-Moduls

```js
const importObject = {
  my_namespace: {
    imported_func(arg) {
      console.log(arg);
    },
  },
};

function createWasmModule(bytes) {
  return new WebAssembly.Module(bytes);
}

fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => {
    const mod = createWasmModule(bytes);
    WebAssembly.instantiate(mod, importObject).then((result) =>
      result.exports.exported_func(),
    );
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
