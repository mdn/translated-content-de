---
title: Exportierte WebAssembly-Funktionen
slug: WebAssembly/Exported_functions
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{WebAssemblySidebar}}

Exportierte WebAssembly-Funktionen sind die Art und Weise, wie WebAssembly-Funktionen in JavaScript dargestellt werden. Dieser Artikel beschreibt sie etwas ausführlicher.

## Exportierte… Was?

Exportierte WebAssembly-Funktionen sind im Grunde nur JavaScript-Wrapper, die WebAssembly-Funktionen in JavaScript repräsentieren. Bei einem Aufruf wird im Hintergrund etwas ausgeführt, um die Argumente in Typen zu konvertieren, mit denen Wasm arbeiten kann (zum Beispiel die Umwandlung von JavaScript-Zahlen in Int32), die Argumente werden an die Funktion innerhalb Ihres Wasm-Moduls übergeben, die Funktion wird aufgerufen und das Ergebnis wird konvertiert und an JavaScript zurückgegeben.

Sie können exportierte WebAssembly-Funktionen auf zwei Arten abrufen:

- Durch Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) auf einer bestehenden Tabelle.
- Durch Zugriff auf eine Funktion, die aus einer Wasm-Modulinstanz über [`Instance.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports) exportiert wird.

In beiden Fällen erhalten Sie dieselbe Art von Wrapper für die zugrunde liegende Funktion. Aus der Sicht von JavaScript ist es so, als ob jede Wasm-Funktion _auch_ eine JavaScript-Funktion wäre — sie sind jedoch durch die exportierte Wasm-Funktionsobjektinstanz kapselt und es gibt nur begrenzte Zugriffsmöglichkeiten.

## Ein Beispiel

Schauen wir uns ein Beispiel an, um die Sache zu klären (Sie finden dies auf GitHub als [table-set.html](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html); sehen Sie es sich [auch live an](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), und schauen Sie sich die Wasm-[Textrepräsentation](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) an):

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

Hier erstellen wir eine Tabelle (`otherTable`) aus JavaScript mithilfe des [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table)-Konstruktors, dann laden wir `table.wasm` in unsere Seite mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static).

Wir rufen dann die aus dem Modul exportierte Funktion ab, holen die Funktionen ab, auf die sie über [`tbl.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) verweist, und protokollieren das Ergebnis jedes Aufrufs in die Konsole. Anschließend verwenden wir `set()`, um die Tabelle `otherTable` mit Referenzen zu denselben Funktionen wie die Tabelle `tbl` zu füllen.

Um dies zu beweisen, rufen wir diese Referenzen dann aus `otherTable` wieder ab und geben ihre Ergebnisse auch in die Konsole aus, was dieselben Ergebnisse liefert.

## Es sind echte Funktionen

Im vorherigen Beispiel ist der Rückgabewert jedes Aufrufs von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) eine exportierte WebAssembly-Funktion — genau das, worüber wir gesprochen haben.

Es ist erwähnenswert, dass dies echte JavaScript-Funktionen sind, zusätzlich zu ihren Funktionen als Wrapper für WebAssembly-Funktionen. Wenn Sie das obige Beispiel in einem [WebAssembly-kompatiblen Browser](/de/docs/WebAssembly#browser_compatibility) laden und die folgenden Zeilen in Ihrer Konsole ausführen:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

erhalten Sie das Ergebnis `function` zurück. Sie können dann so ziemlich alles mit dieser Funktion machen, was Sie auch mit anderen [Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript tun können — [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) usw. `testFunc.toString()` liefert ein interessantes Ergebnis:

```plain
function 0() {
    [native code]
}
```

Dies gibt Ihnen eine bessere Vorstellung von ihrer Wrapper-Natur.

Einige weitere Besonderheiten, die bei exportierten WebAssembly-Funktionen zu beachten sind:

- Ihre [length](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft ist die Anzahl der deklarierten Argumente in der Wasm-Funktionssignatur.
- Ihre [name](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)-Eigenschaft ist das `toString()`-Ergebnis des Funktionsindexes im Wasm-Modul.
- Wenn Sie versuchen, eine exportierte Wasm-Funktion aufzurufen, die einen i64-Typwert annimmt oder zurückgibt, wird derzeit ein Fehler ausgelöst, da JavaScript derzeit keine präzise Möglichkeit hat, einen i64 darzustellen. Die Lösung besteht darin, BigInt-Werte zu verwenden, die Ganzzahlen beliebiger Größe repräsentieren und daher 64-Bit-Ganzzahlen korrekt darstellen können.
