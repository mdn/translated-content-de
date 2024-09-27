---
title: WebAssembly.Table.prototype.get()
slug: WebAssembly/JavaScript_interface/Table/get
l10n:
  sourceCommit: d23f8c5c52bdfb6151476a2574e72d323d0d30f4
---

{{WebAssemblySidebar}}

Die **`get()`** Prototypmethode des [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table)-Objekts ruft das Element ab, das an einem gegebenen Index gespeichert ist.

## Syntax

```js-nolint
get(index)
```

### Parameter

- `index`
  - : Der Index des Elements, das Sie abrufen möchten.

### Rückgabewert

Abhängig vom Elementtyp der Tabelle kann es sich um eine Funktionsreferenz handeln — dies ist eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Exported_functions), eine JavaScript-Wrapperfunktion für eine zugrunde liegende Wasm-Funktion, oder es kann sich um eine Host-Referenz handeln.

### Ausnahmen

Wenn der _Index_ größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.

## Beispiele

### Verwendung von get

Das folgende Beispiel (siehe [table.html](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) auf GitHub und [live ansehen](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)) kompiliert und instanziiert den geladenen table.wasm-Bytecode mithilfe der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static). Es ruft dann die Referenzen ab, die in der exportierten Tabelle gespeichert sind.

```js
WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
});
```

Beachten Sie, dass Sie einen zweiten Funktionsaufrufsoperator am Ende des Accessors einfügen müssen, um tatsächlich den im Verweis gespeicherten Wert abzurufen (z.B. `get(0)()` anstelle von `get(0)`) — es handelt sich um eine Funktion und nicht um einen einfachen Wert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Using_the_JavaScript_API)
