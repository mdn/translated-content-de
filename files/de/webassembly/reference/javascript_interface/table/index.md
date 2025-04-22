---
title: WebAssembly.Table
slug: WebAssembly/Reference/JavaScript_interface/Table
l10n:
  sourceCommit: 006c05b688814b45a01ad965bbe4ebfc15513e74
---

Das **`WebAssembly.Table`** Objekt ist ein JavaScript-Wrapper-Objekt – eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt, welche homogene Referenzen speichert. Eine von JavaScript oder in WebAssembly-Code erstellte Tabelle ist sowohl von JavaScript als auch von WebAssembly zugänglich und veränderbar.

> [!NOTE]
> Tabellen können derzeit nur Funktionsreferenzen oder Host-Referenzen speichern, aber dies wird wahrscheinlich in Zukunft erweitert.

## Konstruktor

- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)
  - : Erstellt ein neues `Table` Objekt.

## Instanzeigenschaften

- [`Table.prototype.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : Gibt die Länge der Tabelle zurück, das heißt die Anzahl der Elemente in der Tabelle.

## Instanzmethoden

- [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)
  - : Zugriffsfunktion – holt das Element, das an einem bestimmten Index gespeichert ist.
- [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)
  - : Erhöht die Größe der `Table` Instanz um eine angegebene Anzahl von Elementen.
- [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set)
  - : Setzt ein Element, das an einem bestimmten Index gespeichert ist, auf einen angegebenen Wert.

## Beispiele

### Erstellen einer neuen WebAssembly Table Instanz

Das folgende Beispiel (siehe table2.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) und [Live-Version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) erstellt eine neue WebAssembly Table Instanz mit einer Anfangsgröße von 2 Elementen. Wir drucken dann die Tabellenlänge und den Inhalt der beiden Indizes aus (abgerufen über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)), um zu zeigen, dass die Länge zwei ist und beide Elemente [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sind.

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

Dann erstellen wir ein Import-Objekt, das die Tabelle enthält:

```js
const importObj = {
  js: { tbl },
};
```

Abschließend laden und instanziieren wir ein Wasm-Modul (table2.wasm) mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Das table2.wasm-Modul enthält zwei Funktionen (eine, die 42 zurückgibt, und eine andere, die 83 zurückgibt) und speichert beide in den Elementen 0 und 1 der importierten Tabelle (siehe [Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)). Nach der Instanziierung hat die Tabelle immer noch die Länge 2, aber die Elemente enthalten nun aufrufbare [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die wir aus JS aufrufen können.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Beachten Sie, dass Sie einen zweiten Funktionsaufrufsoperator am Ende des Zugriffs verwenden müssen, um die referenzierte Funktion tatsächlich aufzurufen und den darin gespeicherten Wert zu protokollieren (z. B. `get(0)()` anstelle von `get(0)`).

Dieses Beispiel zeigt, dass wir die Tabelle von JavaScript aus erstellen und darauf zugreifen, aber dieselbe Tabelle auch innerhalb der Wasm-Instanz sichtbar und aufrufbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersicht
- [WebAssembly Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
