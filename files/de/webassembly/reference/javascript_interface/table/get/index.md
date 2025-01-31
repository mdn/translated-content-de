---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/Reference/JavaScript_interface/Table/get
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Die **`get()`** Prototyp-Methode des [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)-Objekts ruft das Element ab, das an einem gegebenen Index gespeichert ist.

## Syntax

```js-nolint
get(index)
```

### Parameter

- `index`
  - : Der Index des Elements, das Sie abrufen möchten.

### Rückgabewert

Abhängig vom Elementtyp der Tabelle kann dies eine Funktionsreferenz sein — das ist eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions), ein JavaScript-Wrapper für eine zugrunde liegende Wasm-Funktion oder es kann eine Host-Referenz sein.

### Ausnahmen

Wenn _index_ größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.

## Beispiele

### Verwendung von get

Das folgende Beispiel (siehe [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) auf GitHub, und [sehen Sie es live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html) ebenfalls) kompiliert und instanziiert den geladenen table.wasm-Bytecode mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Anschließend ruft es die in der exportierten Tabelle gespeicherten Referenzen ab.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Beachten Sie, dass Sie einen zweiten Funktionsaufrufsoperator am Ende des Zugriffsoperators hinzufügen müssen, um tatsächlich den Wert abzurufen, der in der Referenz gespeichert ist (z. B. `get(0)()` anstelle von `get(0)`), da es sich um eine Funktion und nicht um einen einfachen Wert handelt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
