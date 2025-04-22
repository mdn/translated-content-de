---
title: WebAssembly.Table.prototype.set()
slug: WebAssembly/Reference/JavaScript_interface/Table/set
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Die **`set()`** Prototyp-Methode des [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)-Objekts ändert eine in einem bestimmten Index gespeicherte Referenz in einen anderen Wert.

## Syntax

```js-nolint
set(index, value)
```

### Parameter

- `index`
  - : Der Index der Funktionsreferenz, die Sie ändern möchten.
- `value`
  - : Der Wert, auf den Sie die Referenz ändern möchten. Dies muss ein Wert des Elementtyps der Tabelle sein. Abhängig vom Typ kann es eine [exportierte WebAssembly-Funktion](/de/docs/WebAssembly/Guides/Exported_functions), ein JavaScript-Wrapper für eine zugrunde liegende Wasm-Funktion oder eine Host-Referenz sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- Wenn `index` größer oder gleich [`Table.prototype.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) ist, wird ein {{jsxref("RangeError")}} ausgelöst.
- Wenn `value` nicht vom Elementtyp der Tabelle ist, wird ein {{jsxref("TypeError")}} ausgelöst.

## Beispiele

### Verwendung von Table.set

Das folgende Beispiel (siehe table2.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) und [Live-Version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) erstellt eine neue WebAssembly-Tabelle mit einer anfänglichen Größe von zwei Referenzen. Anschließend geben wir die Tabellenlänge und die Inhalte der beiden Indizes aus (abgerufen über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)), um zu zeigen, dass die Länge zwei beträgt und die Indizes derzeit keine Funktionsreferenzen enthalten (sie geben aktuell [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) zurück).

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

Abschließend laden und instanziieren wir ein Wasm-Modul (table2.wasm) mit [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), drucken die Tabellenlänge und rufen die zwei Funktionsreferenzen auf, die jetzt in der Tabelle gespeichert sind. Das `table2.wasm`-Modul fügt der Tabelle zwei Funktionsreferenzen hinzu, die beide einen einfachen Wert ausgeben (siehe [Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)):

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Beachten Sie, dass Sie am Ende des Zugriffsoperators einen zweiten Funktionsaufrufsoperator einfügen müssen, um die referenzierte Funktion tatsächlich aufzurufen und den darin gespeicherten Wert zu protokollieren (z. B. `get(0)()` anstelle von `get(0)`).

Dieses Beispiel zeigt, dass wir die Tabelle von JavaScript aus erstellen und darauf zugreifen, aber dieselbe Tabelle ist auch innerhalb der Wasm-Instanz sichtbar und aufrufbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript-API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
