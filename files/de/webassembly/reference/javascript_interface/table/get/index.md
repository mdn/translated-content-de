---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/Reference/JavaScript_interface/Table/get
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die **`get()`** Prototyp-Methode des [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) Objekts ruft das Element ab, das an einem bestimmten Index gespeichert ist.

## Syntax

```js-nolint
get(index)
```

### Parameter

- `index`
  - : Der Index des Elements, das Sie abrufen möchten.

### Rückgabewert

Abhängig vom Elementtyp der Tabelle kann es sich um eine Funktionsreferenz handeln — dies ist eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions), ein JavaScript-Wrapper für eine zugrunde liegende Wasm-Funktion, oder es kann sich um eine Hostreferenz handeln.

### Ausnahmen

Wenn der _index_ größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.

## Beispiele

### Verwendung von get

Das folgende Beispiel (siehe [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) auf GitHub und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) kompiliert und instanziiert den geladenen table.wasm Bytecode unter Verwendung der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) Methode. Anschließend werden die in der exportierten Tabelle gespeicherten Referenzen abgerufen.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Beachten Sie, wie Sie einen zweiten Funktionsaufrufoperator am Ende des Accessors einschließen müssen, um den tatsächlich im Inneren der Referenz gespeicherten Wert abzurufen (z.B. `get(0)()` statt `get(0)`) — es handelt sich um eine Funktion und nicht um einen einfachen Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Überblick
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
