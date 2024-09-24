---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/JavaScript_interface/Table/get
l10n:
  sourceCommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

{{WebAssemblySidebar}}

Die **`get()`** Prototypenmethode des [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table) Objekts ruft das Element ab, das an einem gegebenen Index gespeichert ist.

## Syntax

```js-nolint
get(index)
```

### Parameter

- `index`
  - : Der Index des Elements, das Sie abrufen möchten.

### Rückgabewert

Abhängig vom Elementtyp der Tabelle kann es sich um eine Funktionsreferenz handeln – dies ist eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions), ein JavaScript-Wrapper für eine zugrundeliegende Wasm-Funktion, oder es kann eine Host-Referenz sein.

### Ausnahmen

Wenn _index_ größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.

## Beispiele

### Nutzung von get

Im folgenden Beispiel (siehe [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) auf GitHub und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/table.html) ebenfalls) wird der geladene table.wasm-Bytecode mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) Methode kompiliert und instanziiert. Anschließend werden die in der exportierten Tabelle gespeicherten Referenzen abgerufen.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Beachten Sie, dass Sie am Ende des Zugriffsoperators einen zweiten Funktionsaufrufsoperator hinzufügen müssen, um tatsächlich den in der Referenz gespeicherten Wert abzurufen (z.B. `get(0)()` anstatt `get(0)`) — es handelt sich um eine Funktion und nicht um einen einfachen Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
