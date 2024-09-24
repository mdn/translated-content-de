---
title: Exportierte WebAssembly-Funktionen
slug: WebAssembly/Exported_functions
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{WebAssemblySidebar}}

Exportierte WebAssembly-Funktionen sind die Repräsentation von WebAssembly-Funktionen in JavaScript. Dieser Artikel beschreibt, was sie sind, ein wenig genauer.

## Exportierte… Was?

Exportierte WebAssembly-Funktionen sind im Grunde nur JavaScript-Wrapper, die WebAssembly-Funktionen in JavaScript darstellen. Wenn Sie diese aufrufen, gibt es im Hintergrund einige Aktivitäten, um die Argumente in Typen umzuwandeln, mit denen Wasm arbeiten kann (zum Beispiel die Umwandlung von JavaScript-Zahlen in Int32). Die Argumente werden an die Funktion innerhalb Ihres Wasm-Moduls übergeben, die Funktion wird aufgerufen und das Ergebnis wird umgewandelt und an JavaScript zurückgegeben.

Sie können exportierte WebAssembly-Funktionen auf zwei Arten abrufen:

- Durch Aufrufen von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) auf einer vorhandenen Tabelle.
- Durch Zugriff auf eine Funktion, die von einer Wasm-Modulinstanz über [`Instance.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports) exportiert wurde.

In beiden Fällen erhalten Sie die gleiche Art von Wrapper für die zugrunde liegende Funktion. Aus JavaScript-Sicht ist es, als ob jede Wasm-Funktion _auch_ eine JavaScript-Funktion ist - sie sind jedoch durch das exportierte Wasm-Funktionsobjekt gekapselt und es gibt nur begrenzte Möglichkeiten, auf sie zuzugreifen.

## Ein Beispiel

Lassen Sie uns ein Beispiel betrachten, um die Dinge zu klären (Sie können dies auf GitHub als [table-set.html](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html) finden; sehen Sie es auch [live in Aktion](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), und schauen Sie sich die Wasm-[Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) an):

```js
const otherTable = new WebAssembly.Table({ element: "anyfunc", initial: 2 });

WebAssembly.instantiateStreaming(fetch("table.wasm")).then((obj) => {
  const tbl = obj.instance.exports.tbl;
  console.log(tbl.get(0)()); // 13
  console.log(tbl.get(1)()); // 42
  otherTable.set(0, tbl.get(0));
  otherTable.set(1, tbl.get(1));
  console.log(otherTable.get(0)());
  console.log(otherTable.get(1)());
});
```

Hier erstellen wir eine Tabelle (`otherTable`) aus JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table) Konstruktor, dann laden wir `table.wasm` in unsere Seite mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static) Methode.

Wir rufen dann die Funktion ab, die aus dem Modul exportiert wird, beziehen die Funktionen, auf die es verweist, über [`tbl.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) und protokollieren das Ergebnis der Ausführung jeder einzelnen in die Konsole. Anschließend verwenden wir `set()`, um der Tabelle `otherTable` die gleichen Funktionsreferenzen wie der Tabelle `tbl` zu geben.

Um dies zu beweisen, rufen wir diese Referenzen dann aus `otherTable` zurück und drucken deren Ergebnisse ebenfalls in die Konsole, was die gleichen Ergebnisse liefert.

## Sie sind echte Funktionen

Im vorherigen Beispiel ist der Rückgabewert jedes [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) Aufrufs eine exportierte WebAssembly-Funktion — genau das, worüber wir gesprochen haben.

Es ist erwähnenswert, dass dies echte JavaScript-Funktionen sind, zusätzlich dazu, dass sie Wrapper für WebAssembly-Funktionen sind. Wenn Sie das obige Beispiel in einem [WebAssembly-kompatiblen Browser](/de/docs/WebAssembly#browser_compatibility) laden und die folgenden Zeilen in Ihrer Konsole ausführen:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

erhalten Sie das Ergebnis `function` zurückgegeben. Sie können dann so ziemlich alles mit dieser Funktion tun, was Sie auch mit anderen [Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript tun können — [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) usw. `testFunc.toString()` gibt ein interessantes Ergebnis zurück:

```plain
function 0() {
    [native code]
}
```

Dies gibt einen weiteren Einblick in ihre Wrapper-artige Natur.

Einige andere Besonderheiten, die bei exportierten WebAssembly-Funktionen zu beachten sind:

- Ihre [length](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length) Eigenschaft ist die Anzahl der deklarierten Argumente in der Wasm-Funktionssignatur.
- Ihre [name](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name) Eigenschaft ist das `toString()` Ergebnis des Funktionsindex im Wasm-Modul.
- Wenn Sie versuchen, eine exportierte Wasm-Funktion aufzurufen, die einen i64-Typ Wert entgegennimmt oder zurückgibt, wird derzeit ein Fehler angezeigt, da JavaScript derzeit keine präzise Möglichkeit hat, einen i64 darzustellen. Die Lösung besteht darin, BigInt-Werte zu verwenden, die ganze Zahlen beliebiger Größe darstellen, sodass sie 64-Bit-Zahlen korrekt darstellen können.
