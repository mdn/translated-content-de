---
title: Exportierte WebAssembly-Funktionen
slug: WebAssembly/Guides/Exported_functions
l10n:
  sourceCommit: 453a2a29e3e7a3ef64e65acc6121914f54334bc7
---

Exportierte WebAssembly-Funktionen sind die Art und Weise, wie WebAssembly-Funktionen in JavaScript dargestellt werden. Dieser Artikel beschreibt, was sie sind, etwas genauer.

## Exportierte… Was?

Exportierte WebAssembly-Funktionen sind im Grunde nur JavaScript-Wrapper, die WebAssembly-Funktionen in JavaScript darstellen. Wenn Sie sie aufrufen, geschieht im Hintergrund Folgendes: Die Argumente werden in Typen umgewandelt, mit denen WebAssembly arbeiten kann (z. B. Umwandlung von JavaScript-Zahlen in Int32), die Argumente werden an die Funktion in Ihrem WebAssembly-Modul übergeben, die Funktion wird aufgerufen und das Ergebnis wird umgewandelt und an JavaScript zurückgegeben.

Sie können exportierte WebAssembly-Funktionen auf zwei Arten abrufen:

- Durch Aufruf von [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) auf einer bestehenden Tabelle.
- Durch Zugriff auf eine Funktion, die aus einer WebAssembly-Modulinstanz über [`Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) exportiert wurde.

In beiden Fällen erhalten Sie die gleiche Art von Wrapper für die zugrunde liegende Funktion. Aus JavaScript-Sicht ist es, als ob jede WebAssembly-Funktion _auch_ eine JavaScript-Funktion wäre — aber sie sind von der exportierten WebAssembly-Funktionsobjektinstanz kapsuliert und es gibt nur begrenzte Möglichkeiten, auf sie zuzugreifen.

## Ein Beispiel

Schauen wir uns ein Beispiel an, um die Dinge zu klären (Sie können es auf GitHub als [table-set.html](https://github.com/mdn/webassembly-examples/blob/main/other-examples/table-set.html) finden; sehen Sie es sich auch [live an](https://mdn.github.io/webassembly-examples/other-examples/table-set.html), und schauen Sie sich die WebAssembly-[Textdarstellung](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat) an):

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

Hier erstellen wir eine Tabelle (`otherTable`) aus JavaScript mit dem [`WebAssembly.Table`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table)-Konstruktor, dann laden wir `table.wasm` in unsere Seite mit der [`WebAssembly.instantiateStreaming()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static)-Methode.

Wir erhalten dann die Funktion, die aus dem Modul exportiert wird, rufen die Funktionen ab, auf die sie verweist, über [`tbl.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get) und protokollieren das Ergebnis des Aufrufs jeder einzelnen im Konsolenprotokoll. Als Nächstes verwenden wir `set()`, um sicherzustellen, dass die `otherTable`-Tabelle Referenzen auf die gleichen Funktionen enthält wie die `tbl`-Tabelle.

Um dies zu beweisen, rufen wir diese Referenzen anschließend aus `otherTable` ab und drucken deren Ergebnisse ebenfalls auf der Konsole aus, was die gleichen Ergebnisse liefert.

## Sie sind echte Funktionen

Im vorherigen Beispiel ist der Rückgabewert jedes [`Table.prototype.get()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Table/get)-Aufrufs eine exportierte WebAssembly-Funktion — genau das, worüber wir gesprochen haben.

Es ist erwähnenswert, dass dies echte JavaScript-Funktionen sind, zusätzlich zu ihren Wrappern für WebAssembly-Funktionen. Wenn Sie das obige Beispiel in einem Browser laden und die folgenden Zeilen in Ihrer Konsole ausführen:

```js
const testFunc = otherTable.get(0);
typeof testFunc;
```

erhalten Sie das Ergebnis `function` zurück. Sie können dann mit dieser Funktion so ziemlich alles machen, was Sie auch mit anderen [Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function) in JavaScript tun können — [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call), [`bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) usw. `testFunc.toString()` gibt ein interessantes Ergebnis zurück:

```plain
function 0() {
    [native code]
}
```

Dies gibt Ihnen mehr eine Vorstellung von ihrer Wrapper-Natur.

Einige weitere Besonderheiten, die Sie bei exportierten WebAssembly-Funktionen beachten sollten:

- Ihre [length](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)-Eigenschaft ist die Anzahl der deklarierten Argumente in der WebAssembly-Funktionssignatur.
- Ihre [name](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)-Eigenschaft ist das `toString()`-Ergebnis des Funktionsindex im WebAssembly-Modul.
- Wenn Sie versuchen, eine exportierte WebAssembly-Funktion aufzurufen, die einen i64-Wert annimmt oder zurückgibt, führt dies derzeit zu einem Fehler, da JavaScript derzeit keine präzise Möglichkeit hat, ein i64 darzustellen. Die Lösung besteht darin, BigInt-Werte zu verwenden, die ganze Zahlen beliebiger Größe darstellen und somit 64-Bit-Ganzzahlen korrekt darstellen können.
