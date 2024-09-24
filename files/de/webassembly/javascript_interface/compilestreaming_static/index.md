---
title: WebAssembly.compileStreaming()
slug: WebAssembly/JavaScript_interface/compileStreaming_static
l10n:
  sourceCommit: 0865cb85617d68725d2e11d4ea8eb48c099c7fb3
---

{{WebAssemblySidebar}}

Die statische Methode **`WebAssembly.compileStreaming()`** kompiliert ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) direkt aus einer gestreamten zugrunde liegenden Quelle. Diese Funktion ist nützlich, wenn es notwendig ist, ein Modul zu kompilieren, bevor es instanziiert werden kann (ansonsten sollte die Funktion [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) verwendet werden).

> [!NOTE]
> Webseiten, die über eine strikte [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP) verfügen, könnten die Kompilierung und Ausführung von WebAssembly-Modulen blockieren.
> Weitere Informationen zur Erlaubnis von WebAssembly-Komponenten und -Ausführung finden Sie unter [script-src CSP](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src).

## Syntax

```js-nolint
WebAssembly.compileStreaming(source)
```

### Parameter

- `source`
  - : Ein [`Response`](/de/docs/Web/API/Response)-Objekt oder ein Versprechen, das mit einem solchen erfüllt wird, das die zugrunde liegende Quelle eines gestreamten und zu kompilierenden Wasm-Moduls darstellt.

### Rückgabewert

Ein `Promise`, das mit einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt erfüllt wird, das das kompilierte Modul darstellt.

### Ausnahmen

- Wenn `source` kein [`Response`](/de/docs/Web/API/Response) oder `Promise` ist, das mit einem `Response` erfüllt wird, wird das Versprechen mit einem {{jsxref("TypeError")}} abgelehnt.
- Wenn die Kompilierung fehlschlägt, wird das Versprechen mit einem [`WebAssembly.CompileError`](/de/docs/WebAssembly/JavaScript_interface/CompileError) abgelehnt.
- Wenn der `source`-Versprechung ein Fehler unterläuft, wird das Versprechen mit dem Fehler abgelehnt.
- Wenn das `Result` der `source` über einen Fehler verfügt (z.B. ungültiger MIME-Typ), wird das Versprechen mit einem Fehler abgelehnt.

## Beispiele

### Streaming kompilieren

Das folgende Beispiel (siehe unser [compile-streaming.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/compile-streaming.html) Demo auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/compile-streaming.html) ebenfalls) streamt direkt ein Wasm-Modul aus einer zugrunde liegenden Quelle und kompiliert es dann zu einem [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module)-Objekt. Da die `compileStreaming()`-Funktion ein Versprechen für ein [`Response`](/de/docs/Web/API/Response)-Objekt akzeptiert, können Sie ihr direkt ein `Promise` von einem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) übergeben, ohne darauf zu warten, dass das Versprechen erfüllt wird.

```js
const importObject = {
  my_namespace: { imported_func: (arg) => console.log(arg) },
};

WebAssembly.compileStreaming(fetch("simple.wasm"))
  .then((module) => WebAssembly.instantiate(module, importObject))
  .then((instance) => instance.exports.exported_func());
```

Das resultierende Modul-Instanz wird dann mit
[`WebAssembly.instantiate()`](/de/docs/WebAssembly/JavaScript_interface/instantiate_static) instanziiert, und die exportierte Funktion wird aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Die WebAssembly-JavaScript-API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
