---
title: Exportierte WebAssembly-Funktionen
slug: WebAssembly/Exported_functions
l10n:
  sourceCommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{WebAssemblySidebar}}

Exportierte WebAssembly-Funktionen sind die Art und Weise, wie WebAssembly-Funktionen in JavaScript dargestellt werden. Dieser Artikel beschreibt sie etwas ausführlicher.

## Exportierte… Was?

Exportierte WebAssembly-Funktionen sind im Grunde genommen nur JavaScript-Wrapper, die WebAssembly-Funktionen in JavaScript darstellen. Wenn Sie sie aufrufen, erfolgt im Hintergrund eine Umwandlung der Argumente in Typen, mit denen Wasm arbeiten kann (zum Beispiel die Umwandlung von JavaScript-Zahlen in Int32). Die Argumente werden an die Funktion in Ihrem Wasm-Modul übergeben, die Funktion wird aufgerufen und das Ergebnis wird umgewandelt und an JavaScript zurückgegeben.

Sie können exportierte WebAssembly-Funktionen auf zwei Arten abrufen:

- Durch Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) auf einer bestehenden Tabelle.
- Durch Zugriff auf eine Funktion, die von einer Wasm-Modulinstanz über [`Instance.exports`](/de/docs/WebAssembly/JavaScript_interface/Instance/exports) exportiert wird.

In beiden Fällen erhalten Sie denselben Wrapper für die zugrunde liegende Funktion. Aus der Perspektive von JavaScript ist es so, als ob jede Wasm-Funktion _auch_ eine JavaScript-Funktion ist – jedoch sind sie durch das exportierte Wasm-Funktionsobjekt eingeschlossen und es gibt nur begrenzte Möglichkeiten, auf sie zuzugreifen.

## Ein Beispiel

Schauen wir uns ein Beispiel an, um das zu verdeutlichen (dieses finden Sie auf GitHub als [table-set.html](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html); es läuft auch [live](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), und werfen Sie einen Blick auf die Wasm-[Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat)):

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

Hier erstellen wir eine Tabelle (`otherTable`) aus JavaScript mithilfe des Konstruktors [`WebAssembly.Table`](/de/docs/WebAssembly/JavaScript_interface/Table), dann laden wir `table.wasm` auf unsere Seite mit der Methode [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/JavaScript_interface/instantiateStreaming_static).

Wir holen dann die aus dem Modul exportierte Funktion, rufen die Funktionen ab, auf die sie sich über [`tbl.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) bezieht, und protokollieren das Ergebnis jedes Aufrufs in die Konsole. Als Nächstes verwenden wir `set()`, um die `otherTable`-Tabelle so zu gestalten, dass sie auf dieselben Funktionen verweist wie die `tbl`-Tabelle.

Um dies zu beweisen, rufen wir diese Referenzen dann aus `otherTable` ab und drucken ihre Ergebnisse ebenfalls in die Konsole, was die gleichen Ergebnisse liefert.

## Es sind echte Funktionen

Im vorhergehenden Beispiel ist der Rückgabewert jedes Aufrufs von [`Table.prototype.get()`](/de/docs/WebAssembly/JavaScript_interface/Table/get) eine exportierte WebAssembly-Funktion – genau das, worüber wir gesprochen haben.

Es ist wichtig zu beachten, dass diese echte JavaScript-Funktionen sind, zusätzlich dazu, dass es sich um Wrapper für WebAssembly-Funktionen handelt. Wenn Sie das obige Beispiel in einem [WebAssembly-unterstützenden Browser](/de/docs/WebAssembly#browser_compatibility) laden und die folgenden Zeilen in der Konsole ausführen:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

erhalten Sie das Ergebnis `function` zurück. Sie können dann im Prinzip alles mit dieser Funktion machen, was Sie auch mit anderen [Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript tun können — [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) usw. `testFunc.toString()` gibt ein interessantes Ergebnis zurück:

```plain
function 0() {
    [native code]
}
```

Dies gibt Ihnen eine bessere Vorstellung von ihrem Wrapping-Charakter.

Einige weitere Besonderheiten, die bei exportierten WebAssembly-Funktionen zu beachten sind:

- Ihre [length](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft ist die Anzahl der deklarierten Argumente in der Wasm-Funktionssignatur.
- Ihre [name](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)-Eigenschaft ist das `toString()`-Ergebnis des Funktionsindexes im Wasm-Modul.
- Wenn Sie versuchen, eine exportierte Wasm-Funktion aufzurufen, die einen i64-Wert erwartet oder zurückgibt, tritt derzeit ein Fehler auf, da JavaScript momentan keine präzise Möglichkeit hat, einen i64 darzustellen. Die Lösung ist die Verwendung von BigInt-Werten, die ganze Zahlen beliebiger Größe darstellen und somit ordnungsgemäß 64-Bit-Ganzzahlen darstellen können.
