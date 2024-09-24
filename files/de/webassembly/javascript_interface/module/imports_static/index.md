---
title: WebAssembly.Module.imports()
slug: WebAssembly/JavaScript_interface/Module/imports_static
l10n:
  sourceCommit: 4c19f449d8aa91f114658c2b661908fb7078219e
---

{{WebAssemblySidebar}}

Die **`WebAssembly.Module.imports()`** statische Methode gibt ein Array zurück, das Beschreibungen aller deklarierten Importe des angegebenen `Module` enthält.

## Syntax

```js-nolint
WebAssembly.Module.imports(module)
```

### Parameter

- `module`
  - : Ein [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekt.

### Rückgabewert

Ein Array, das Objekte enthält, die die importierten Funktionen des angegebenen Moduls repräsentieren.

### Ausnahmen

Wenn das Modul keine Instanz eines [`WebAssembly.Module`](/de/docs/WebAssembly/JavaScript_interface/Module) Objekts ist, wird ein
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

Das Konsolenprotokoll zeigt die folgende Beschreibung für das importierte Modul an:

```js
{ module: "my_namespace", name: "imported_func", kind: "function" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Überblick über [WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
