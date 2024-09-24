---
title: "HTMLTableElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte {{domxref("HTMLTableElement")}}
Eigenschaft **`rows`** gibt eine dynamische
{{domxref("HTMLCollection")}} aller Zeilen in der Tabelle zurück, einschließlich der Zeilen
in den {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und
{{HTMLElement("tbody")}}-Elementen enthaltenen Zeilen.

Obwohl die Eigenschaft selbst schreibgeschützt ist, ist das zurückgegebene Objekt dynamisch und ermöglicht die
Änderung seines Inhalts.

## Wert

Eine {{domxref("HTMLCollection")}}, die eine dynamische Liste der
{{domxref("HTMLTableRowElement")}}-Objekte bietet, die alle in der Tabelle enthaltenen {{HTMLElement("tr")}}
Elemente repräsentieren. Dies ermöglicht einen schnellen Zugriff auf alle Tabellenzeilen,
ohne diese manuell suchen zu müssen.

## Beispiele

```js
myrows = mytable.rows;
firstRow = mytable.rows[0];
lastRow = mytable.rows.item(mytable.rows.length - 1);
```

Dies zeigt, wie sowohl der Indexzugriff als auch die
{{domxref("HTMLCollection.item()")}}-Methode verwendet werden können, um einzelne Zeilen in der
Tabelle zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
