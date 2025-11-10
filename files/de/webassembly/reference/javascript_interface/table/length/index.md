---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/Reference/JavaScript_interface/Table/length
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die schreibgeschützte **`length`** Prototype-Eigenschaft des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)-Objekts gibt die Länge der Tabelle zurück, d.h. die Anzahl der Elemente in der Tabelle.

## Beispiele

### Verwendung von length

Das folgende Beispiel erstellt eine neue WebAssembly-Tabelleninstanz mit einer anfänglichen Größe von 2 und einer maximalen Größe von 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Vergrößern Sie die Tabelle um 1 mit `WebAssembly.grow()`:

```js
console.log(table.length); // 2
table.grow(1);
console.log(table.length); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Überblick über WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
