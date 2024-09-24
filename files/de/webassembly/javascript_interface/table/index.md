---
title: WebAssembly.Tabelle
slug: WebAssembly/JavaScript_interface/Table
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{WebAssemblySidebar}}

Das **`WebAssembly.Table`**-Objekt ist ein JavaScript-Wrapper-Objekt – eine array-ähnliche Struktur, die eine WebAssembly-Tabelle darstellt und homogene Referenzen speichert. Eine Tabelle, die durch JavaScript oder im WebAssembly-Code erstellt wird, ist sowohl von JavaScript als auch von WebAssembly aus zugänglich und veränderbar.

> [!NOTE]
> Tabellen können derzeit nur Funktionsreferenzen oder Host-Referenzen speichern, aber es ist wahrscheinlich, dass dies in Zukunft erweitert wird.

## Konstruktor

- [`WebAssembly.Table()`](/de/docs/WebAssembly/JavaScript_interface/Table/Table)
  - : Erstellt ein neues `Table`-Objekt.

## Instanz-Eigenschaften

- [`Table.prototype.length`](/de/docs/WebAssembly/JavaScript_interface/Table/length) {{ReadOnlyInline}}
  - : Gibt die Länge der Tabelle zurück, d.h. die Anzahl der Elemente in der Tabelle.

## Instanz-Methoden

- [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get)
  - : Zugriffsfunktion – ruft das an einem bestimmten Index gespeicherte Element ab.
- [`Table.prototype.grow()`](/de/docs/WebAssembly/JavaScript_interface/Table/grow)
  - : Erhöht die Größe der `Table`-Instanz um eine angegebene Anzahl von Elementen.
- [`Table.prototype.set()`](/de/docs/WebAssembly/JavaScript_interface/Table/set)
  - : Setzt ein an einem bestimmten Index gespeichertes Element auf einen bestimmten Wert.

## Beispiele

### Erstellen einer neuen WebAssembly-Tabelleninstanz

Das folgende Beispiel (siehe table2.html [Quellcode](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.html) und [Live-Version](https://mdn.github.io/webassembly-examples/js-api-examples/table2.html)) erstellt eine neue WebAssembly-Tabelleninstanz mit einer anfänglichen Größe von 2 Elementen. Wir drucken dann die Tabellenlänge und den Inhalt der beiden Indizes aus (abgerufen über [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get)), um zu zeigen, dass die Länge zwei ist und beide Elemente [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sind.

```js
const tbl = new WebAssembly.Table({ initial: 2, element: "anyfunc" });
console.log(tbl.length); // "2"
console.log(tbl.get(0)); // "null"
console.log(tbl.get(1)); // "null"
```

Wir erstellen dann ein Import-Objekt, das die Tabelle enthält:

```js
const importObj = {
  js: { tbl },
};
```

Zum Schluss laden und instanziieren wir ein Wasm-Modul (table2.wasm) mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static). Das Modul table2.wasm enthält zwei Funktionen (eine, die 42 zurückgibt, und eine andere, die 83 zurückgibt) und speichert beide in den Elementen 0 und 1 der importierten Tabelle (siehe [Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table2.wat)). So hat die Tabelle nach der Instanziierung immer noch die Länge 2, aber die Elemente enthalten nun aufrufbare [exportierte WebAssembly-Funktionen](/de/docs/WebAssembly/Exported_functions), die wir von JS aus aufrufen können.

```js
WebAssembly.instantiateStreaming(fetch("table2.wasm"), importObject).then(
  (obj) => {
    console.log(tbl.length);
    console.log(tbl.get(0)());
    console.log(tbl.get(1)());
  },
);
```

Beachten Sie, dass Sie einen zweiten Funktionsaufrufs-Operator am Ende des Zugriffs einfügen müssen, um die referenzierte Funktion tatsächlich aufzurufen und den darin gespeicherten Wert zu protokollieren (z. B. `get(0)()` statt `get(0)`).

Dieses Beispiel zeigt, dass wir die Tabelle von JavaScript aus erstellen und darauf zugreifen, aber dieselbe Tabelle ist auch innerhalb der Wasm-Instanz sichtbar und aufrufbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebAssembly](/de/docs/WebAssembly) Übersichtsseite
- [WebAssembly Konzepte](/de/docs/WebAssembly/Concepts)
- [Verwendung der WebAssembly JavaScript API](/de/docs/WebAssembly/Using_the_JavaScript_API)
