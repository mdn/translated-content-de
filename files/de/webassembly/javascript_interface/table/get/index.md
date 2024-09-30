---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/JavaScript_interface/Table/get
l10n:
  sourceCommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

{{WebAssemblySidebar}}

Die **`get()`** Prototyp-Methode des [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)-Objekts ruft das Element ab, das an einem bestimmten Index gespeichert ist.

## Syntax

```js-nolint
get(index)
```

### Parameter

- `index`
  - : Der Index des Elements, das Sie abrufen möchten.

### Rückgabewert

Je nach Elementtyp der Tabelle kann es sich um einen Funktionsverweis handeln — dies ist eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions), ein JavaScript-Wrapper für eine zugrunde liegende Wasm-Funktion oder ein Host-Verweis.

### Ausnahmen

Wenn der _index_ größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.

## Beispiele

### Verwendung von get

Das folgende Beispiel (siehe [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) kompiliert und instanziiert den geladenen table.wasm-Bytecode mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static). Anschließend werden die Referenzen abgerufen, die in der exportierten Tabelle gespeichert sind.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Beachten Sie, dass Sie am Ende des Accessors einen zweiten Funktionsaufrufsoperator einschließen müssen, um den tatsächlich im Verweis gespeicherten Wert abzurufen (z. B. `get(0)()` statt `get(0)`) — es handelt sich um eine Funktion und nicht um einen einfachen Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
