---
title: WebAssembly.Table.prototype.set()
slug: WebAssembly/Reference/JavaScript_interface/Table/set
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Die **`set()`** Prototyp-Methode des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table) Objekts ändert eine Referenz, die an einem bestimmten Index gespeichert ist, zu einem anderen Wert.

## Syntax

```js-nolint
set(index, value)
```

### Parameter

- `index`
  - : Der Index der Funktionsreferenz, die Sie ändern möchten.
- `value`
  - : Der Wert, zu dem Sie die Referenz ändern möchten. Dies muss ein Wert des Elementtyps der Tabelle sein. Je nach Typ kann es sich um eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions), einen JavaScript-Wrapper für eine zugrunde liegende Wasm-Funktion oder eine Host-Referenz handeln.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `index` größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.
- Wenn `value` nicht vom Elementtyp der Tabelle ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von Table.set

Das folgende Beispiel (siehe table2.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) und [Live-Version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) erstellt eine neue WebAssembly-Tabelle mit einer Anfangsgröße von zwei Referenzen. Wir geben dann die Tabellenlänge und den Inhalt der beiden Indizes aus (abgerufen über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)), um zu zeigen, dass die Länge zwei ist und die Indizes derzeit keine Funktionsreferenzen enthalten (sie geben derzeit [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück).

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length);
console.log(tbl.get(0));
console.log(tbl.get(1));
```

Wir erstellen dann ein Importobjekt, das eine Referenz auf die Tabelle enthält:

```js
const importObj = {
  js: { tbl },
};
```

Schließlich laden und instanziieren wir ein Wasm-Modul (table2.wasm) mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), geben die Tabellenlänge aus und rufen die beiden gespeicherten Funktionen auf, die jetzt in der Tabelle gespeichert sind. Das `table2.wasm` Modul fügt der Tabelle zwei Funktionsreferenzen hinzu, die beide einen einfachen Wert ausgeben (siehe [Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)):

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Beachten Sie, dass Sie einen zweiten Funktionsaufrufsoperator am Ende des Accessors einfügen müssen, um die referenzierte Funktion tatsächlich auszuführen und den darin gespeicherten Wert zu protokollieren (z.B. `get(0)()` anstatt `get(0)`).

Dieses Beispiel zeigt, dass wir die Tabelle von JavaScript aus erstellen und darauf zugreifen, aber dieselbe Tabelle ist auch innerhalb der Wasm-Instanz sichtbar und aufrufbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
