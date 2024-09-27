---
title: WebAssembly.Module() Konstruktor
slug: WebAssembly/JavaScript_interface/Module/Module
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Ein **`WebAssembly.Module()`** Konstruktor erzeugt ein neues Modulobjekt, das zustandslos WebAssembly-Code enthält, der bereits vom Browser kompiliert wurde. Dieser Code kann effizient mit `Workers` geteilt und mehrfach instanziiert werden.

Die `WebAssembly.Module()` Konstruktionsfunktion kann aufgerufen werden, um gegebenen WebAssembly-Binärcode synchron zu kompilieren. Der primäre Weg, um ein `Modul` zu erhalten, ist jedoch eine asynchrone Kompilierungsfunktion wie [`WebAssembly.compile()`](/de/docs/WebAssembly/JavaScript_interface/compile_static).

> [!NOTE]
> Webseiten mit strenger [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) können die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Weitere Informationen zum Zulassen der Kompilierung und Ausführung von WebAssembly finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

> [!WARNING]
> Da die Kompilierung großer Module aufwendig sein kann, sollten Entwickler den `Module()` Konstruktor nur dann verwenden, wenn eine synchrone Kompilierung unbedingt erforderlich ist. In allen anderen Fällen sollte die asynchrone Methode [`WebAssembly.compileStreaming()`](/de/docs/WebAssembly/JavaScript_interface/compileStreaming_static) verwendet werden.

```js-nolint
new WebAssembly.Module(bufferSource)
```

### Parameter

- `bufferSource`
  - : Ein [Typed Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) oder [ArrayBuffer](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), das den Binärcode des zu kompilierenden Wasm-Moduls enthält.

#### Ausnahmen

- Wenn der Parameter nicht den richtigen Typ oder die richtige Struktur aufweist, wird ein
  {{jsxref("TypeError")}} ausgelöst.
- Bei einem Kompilierungsfehler lehnt der Konstruktor mit einem
  [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) ab.
- Einige Browser können einen {{jsxref("RangeError")}} auslösen, da sie die Kompilierung und Instanziierung von Wasm mit großen Buffern im UI-Thread verbieten.

## Beispiele

### Synchrones Kompilieren eines WebAssembly-Moduls

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

- [WebAssembly](/de/docs/WebAssembly) Überblicksseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
