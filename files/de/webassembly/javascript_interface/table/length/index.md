---
title: WebAssembly.Table.prototype.length
slug: WebAssembly/JavaScript_interface/Table/length
l10n:
  sourceCommit: 2c528c9e485b17846bb482534ac6b36dd666cc67
---

{{WebAssemblySidebar}}

Die schreibgeschützte **`length`** Prototyp-Eigenschaft des [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table) Objekts gibt die Länge der Tabelle zurück, d.h. die Anzahl der Elemente in der Tabelle.

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

Das Vergrößern der Tabelle um 1 mit `WebAssembly.grow()`:

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

- [WebAssembly](/de/docs/WebAssembly) Überblicksseite
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
