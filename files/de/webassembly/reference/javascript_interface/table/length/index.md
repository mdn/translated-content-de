---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/Reference/JavaScript_interface/Table/length
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die schreibgeschützte **`length`** Prototyp-Eigenschaft des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) Objekts gibt die Länge der Tabelle zurück, d.h. die Anzahl der Elemente in der Tabelle.

## Beispiele

### Verwendung von length

Das folgende Beispiel erstellt eine neue WebAssembly-Tabelle mit einer Anfangsgröße von 2 und einer maximalen Größe von 10:

```js
const table = new WebAssembly.Table({
  element: "anyfunc",
  initial: 2,
  maximum: 10,
});
```

Erhöhen Sie die Tabelle um 1 mit `WebAssembly.grow()`:

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

- [Übersichtsseite zu WebAssembly](/de/docs/WebAssembly)
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
