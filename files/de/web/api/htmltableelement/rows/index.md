---
title: "HTMLTableElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)
Eigenschaft **`rows`** gibt eine Live-
[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller Zeilen in der Tabelle zurück, einschließlich der Zeilen,
die innerhalb von {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und
{{HTMLElement("tbody")}}-Elementen enthalten sind.

Obwohl die Eigenschaft selbst schreibgeschützt ist, ist das zurückgegebene Objekt live und erlaubt die
Änderung seines Inhalts.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine sich live aktualisierende Liste der
[`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Objekte bereitstellt, die alle {{HTMLElement("tr")}}
Elemente in der Tabelle repräsentieren. Dies bietet einen schnellen Zugriff auf alle Zeilen der Tabelle,
ohne sie manuell suchen zu müssen.

## Beispiele

```js
myrows = mytable.rows;
firstRow = mytable.rows[0];
lastRow = mytable.rows.item(mytable.rows.length - 1);
```

Dies zeigt, wie Sie sowohl den indizierten Zugriff als auch die
[`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)-Methode verwenden können, um einzelne Zeilen in der
Tabelle zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
