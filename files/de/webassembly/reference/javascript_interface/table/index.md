---
title: WebAssembly.Table
slug: WebAssembly/Reference/JavaScript_interface/Table
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Das **`WebAssembly.Table`**-Objekt ist ein JavaScript-Wrapper-Objekt – eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt und homogene Referenzen speichert. Eine Tabelle, die durch JavaScript oder in WebAssembly-Code erstellt wird, ist sowohl von JavaScript als auch von WebAssembly aus zugänglich und veränderbar.

> [!NOTE]
> Tabellen können derzeit nur Funktionsreferenzen oder Hostreferenzen speichern, aber dies wird wahrscheinlich in Zukunft erweitert.

## Konstruktor

- [`WebAssembly.Table()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/Table)
  - : Erstellt ein neues `Table`-Objekt.

## Instanzeigenschaften

- [`Table.prototype.length`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : Gibt die Länge der Tabelle zurück, d.h. die Anzahl der Elemente in der Tabelle.

## Instanzmethoden

- [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)
  - : Zugriffsfunktion — holt das Element, das an einem gegebenen Index gespeichert ist.
- [`Table.prototype.grow()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/grow)
  - : Erhöht die Größe der `Table`-Instanz um eine angegebene Anzahl von Elementen.
- [`Table.prototype.set()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/set)
  - : Setzt ein Element, das an einem gegebenen Index gespeichert ist, auf einen angegebenen Wert.

## Beispiele

### Erstellen einer neuen WebAssembly Table-Instanz

Das folgende Beispiel (siehe table2.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) und [Live-Version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) erstellt eine neue WebAssembly Table-Instanz mit einer Anfangsgröße von 2 Elementen. Wir geben dann die Tabellenlänge und den Inhalt der beiden Indizes aus (abgerufen über [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)), um zu zeigen, dass die Länge zwei ist und beide Elemente [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sind.

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

Wir erstellen dann ein Importobjekt, das die Tabelle enthält:

```js
const importObj = {
  js: { tbl },
};
```

Schließlich laden und instanziieren wir ein Wasm-Modul (table2.wasm) mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Das Modul table2.wasm enthält zwei Funktionen (eine, die 42 zurückgibt und eine andere, die 83 zurückgibt) und speichert beide in den Elementen 0 und 1 der importierten Tabelle (siehe [textuelle Darstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)). Nach der Instanzierung hat die Tabelle immer noch Länge 2, aber die Elemente enthalten jetzt aufrufbare [Exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Guides/Exported_functions), die wir aus JS aufrufen können.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Beachten Sie, dass Sie am Ende der Zugriffsoperation einen zweiten Funktionsaufrufsoperator hinzufügen müssen, um die referenzierte Funktion tatsächlich aufzurufen und den darin gespeicherten Wert zu protokollieren (z. B. `get(0)()` anstelle von `get(0)`).

Dieses Beispiel zeigt, dass wir die Tabelle von JavaScript aus erstellen und darauf zugreifen, aber dieselbe Tabelle ist auch innerhalb der Wasm-Instanz sichtbar und aufrufbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly-Konzepte](/de/docs/WebAssembly/Guides/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Guides/Using_the_JavaScript_API)
