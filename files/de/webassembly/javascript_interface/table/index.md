---
title: WebAssembly.Table
slug: WebAssembly/JavaScript_interface/Table
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Table`**-Objekt ist ein JavaScript-Wrapper-Objekt — eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt und homogene Referenzen speichert. Eine Tabelle, die von JavaScript oder im WebAssembly-Code erstellt wurde, ist sowohl von JavaScript als auch von WebAssembly aus zugänglich und veränderbar.

> [!NOTE]
> Tabellen können aktuell nur Funktionsreferenzen oder Host-Referenzen speichern, aber dies wird wahrscheinlich in Zukunft erweitert.

## Konstruktor

- [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table/Table)
  - : Erstellt ein neues `Table`-Objekt.

## Instanz-Eigenschaften

- [`Table.prototype.length`](/de/docs/WebAssembly/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : Gibt die Länge der Tabelle zurück, d.h. die Anzahl der Elemente in der Tabelle.

## Instanz-Methoden

- [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get)
  - : Zugriffsfunktion — erhält das Element, das an einem gegebenen Index gespeichert ist.
- [`Table.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow)
  - : Erhöht die Größe der `Table`-Instanz um eine bestimmte Anzahl von Elementen.
- [`Table.prototype.set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set)
  - : Setzt ein Element, das an einem gegebenen Index gespeichert ist, auf einen gegebenen Wert.

## Beispiele

### Erstellen einer neuen WebAssembly-Table-Instanz

Das folgende Beispiel (siehe table2.html [Quelltext](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) und [Live-Version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) erstellt eine neue WebAssembly-Table-Instanz mit einer Anfangsgröße von 2 Elementen. Wir geben dann die Tabellenlänge und die Inhalte der beiden Indizes aus (abgerufen über [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get)), um zu zeigen, dass die Länge zwei ist und beide Elemente [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sind.

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

Anschließend erstellen wir ein Import-Objekt, das die Tabelle enthält:

```js
const importObj = {
  js: { tbl },
};
```

Zum Schluss laden und instanziieren wir ein Wasm-Modul (table2.wasm) mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static). Das table2.wasm Modul enthält zwei Funktionen (eine, die 42 und eine, die 83 zurückgibt) und speichert beide in den Elementen 0 und 1 der importierten Tabelle (siehe [Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)). Nach der Instanziierung hat die Tabelle immer noch die Länge 2, aber die Elemente enthalten nun aufrufbare [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions), die wir aus JS aufrufen können.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Beachten Sie, dass Sie am Ende des Accessors einen zweiten Funktionsaufrufs-Operator hinzufügen müssen, um die referenzierte Funktion tatsächlich aufzurufen und den darin gespeicherten Wert zu protokollieren (z.B. `get(0)()` statt `get(0)`).

Dieses Beispiel zeigt, dass wir die Tabelle aus JavaScript erstellen und darauf zugreifen, aber dieselbe Tabelle auch innerhalb der Wasm-Instanz sichtbar und aufrufbar ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Concepts)
- [Die WebAssembly JavaScript API verwenden](/de/docs/WebAssembly/Using_the_JavaScript_API)
