---
title: Exportierte WebAssembly-Funktionen
slug: WebAssembly/Guides/Exported_functions
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Exportierte WebAssembly-Funktionen sind die Form, in der WebAssembly-Funktionen in JavaScript dargestellt werden. Dieser Artikel beschreibt sie etwas ausführlicher.

## Exportierte… Was?

Exportierte WebAssembly-Funktionen sind im Grunde nur JavaScript-Wrapper, die WebAssembly-Funktionen in JavaScript repräsentieren. Wenn Sie sie aufrufen, erfolgt im Hintergrund eine Aktivität, um die Argumente in Typen zu konvertieren, mit denen Wasm arbeiten kann (zum Beispiel die Umwandlung von JavaScript-Zahlen in Int32), die Argumente werden an die Funktion innerhalb Ihres Wasm-Moduls übergeben, die Funktion wird aufgerufen, und das Ergebnis wird konvertiert und zurück an JavaScript übergeben.

Sie können exportierte WebAssembly-Funktionen auf zwei Arten abrufen:

- Durch Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) auf einer bestehenden Tabelle.
- Durch Zugriff auf eine Funktion, die aus einer Wasm-Modulinstanz exportiert wird, über [`Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).

Egal auf welche Weise, Sie erhalten die gleiche Art von Wrapper für die zugrunde liegende Funktion. Aus JavaScript-Sicht ist es, als ob jede Wasm-Funktion _auch_ eine JavaScript-Funktion ist — sie sind jedoch von der exportierten Wasm-Funktionsobjektinstanz umschlossen, und es gibt nur eingeschränkte Möglichkeiten, auf sie zuzugreifen.

## Ein Beispiel

Schauen wir uns ein Beispiel an, um die Dinge klarer zu machen (Sie können dies auf GitHub als [table-set.html](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html) finden; sehen Sie es sich auch [live laufend](https://mdn.github.io/webassembly-examples/other-examples/table-set.html) an und überprüfen Sie die Wasm-[Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat)):

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

Hier erstellen wir eine Tabelle (`otherTable`) aus JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)-Konstruktor, dann laden wir `table.wasm` in unsere Seite mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static).

Wir erhalten dann die aus dem Modul exportierte Funktion, rufen die Funktionen, auf die sie verweist, mit [`tbl.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) ab und protokollieren das Ergebnis jedes Aufrufs in der Konsole. Als nächstes verwenden wir `set()`, um die `otherTable`-Tabelle mit Verweisen auf dieselben Funktionen wie in der `tbl`-Tabelle zu versehen.

Um dies zu beweisen, rufen wir diese Verweise dann wieder aus `otherTable` ab und drucken ihre Ergebnisse ebenfalls in der Konsole aus, was die gleichen Ergebnisse liefert.

## Es sind echte Funktionen

Im vorherigen Beispiel ist der Rückgabewert jedes [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Aufrufs eine exportierte WebAssembly-Funktion — genau das, worüber wir gesprochen haben.

Es ist erwähnenswert, dass dies echte JavaScript-Funktionen sind, zusätzlich dazu, dass sie Wrapper für WebAssembly-Funktionen sind. Wenn Sie das obige Beispiel in einem [WebAssembly-kompatiblen Browser](/de/docs/WebAssembly#browser_compatibility) laden und die folgenden Zeilen in Ihrer Konsole ausführen:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

erhalten Sie das Ergebnis `function` zurück. Sie können dann im Prinzip alles mit dieser Funktion anstellen, was Sie auch mit anderen [Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript tun können — [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) usw. `testFunc.toString()` gibt ein interessantes Ergebnis zurück:

```plain
function 0() {
    [native code]
}
```

Dies gibt Ihnen eine bessere Vorstellung von ihrer Wrapper-Natur.

Einige weitere Besonderheiten, die bei exportierten WebAssembly-Funktionen zu beachten sind:

- Ihre [length](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft ist die Anzahl der deklarierten Argumente in der Wasm-Funktionssignatur.
- Ihre [name](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)-Eigenschaft ist das `toString()`-Ergebnis des Funktionsindex im Wasm-Modul.
- Wenn Sie versuchen, eine exportierte Wasm-Funktion aufzurufen, die einen i64-Typ- oder Rückgabewert verwendet, wird derzeit ein Fehler geworfen, da JavaScript momentan keine genaue Möglichkeit hat, eine i64 zu repräsentieren. Die Lösung besteht darin, BigInt-Werte zu verwenden, die Ganzzahlen beliebiger Größe darstellen, sodass sie 64-Bit-Ganzzahlen ordnungsgemäß darstellen können.
