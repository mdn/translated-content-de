---
title: "HTMLTableElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Eigenschaft **`rows`** gibt eine "Live"
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von allen Zeilen in der Tabelle zurück. Dies schließt die Zeilen ein, die sich in den {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tbody")}} Elementen befinden.

Obwohl die Eigenschaft selbst schreibgeschützt ist, ist das zurückgegebene Objekt live und ermöglicht die Modifikation seines Inhalts.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine live-aktualisierte Liste der
[`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Objekte bereitstellt, welche alle {{HTMLElement("tr")}}-Elemente der Tabelle repräsentieren. Dies bietet einen schnellen Zugriff auf alle Tabellenzeilen, ohne dass Sie manuell nach ihnen suchen müssen.

## Beispiele

```js
myrows = mytable.rows;
firstRow = mytable.rows[0];
lastRow = mytable.rows.item(mytable.rows.length - 1);
```

Dies demonstriert, wie Sie sowohl den indizierten Zugriff als auch die Methode [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item) verwenden können, um einzelne Zeilen in der Tabelle zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
