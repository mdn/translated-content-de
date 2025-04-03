---
title: WebAssembly.Module.imports()
slug: WebAssembly/Reference/JavaScript_interface/Module/imports_static
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

Die statische Methode **`WebAssembly.Module.imports()`** gibt ein Array zurück,
das Beschreibungen aller deklarierten Importe des angegebenen `Module` enthält.

## Syntax

```js-nolint
WebAssembly.Module.imports(module)
```

### Parameter

- `module`
  - : Ein [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekt.

### Rückgabewert

Ein Array, das Objekte enthält, die die importierten Funktionen des angegebenen Moduls darstellen.

### Ausnahmen

Wenn das Modul keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)-Objekts ist, wird ein
{{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von Imports

Das folgende Beispiel kompiliert ein geladenes Wasm-Modul und fragt die Importe des Moduls ab.

Siehe imports.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/imports.html) und
[live Version](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html).

```js
WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) => {
  const imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

Der Konsolen-Log zeigt die folgende Beschreibung für das importierte Modul:

```json
{ "module": "my_namespace", "name": "imported_func", "kind": "function" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
