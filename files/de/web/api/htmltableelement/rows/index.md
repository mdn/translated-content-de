---
title: "HTMLTableElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Eigenschaft **`rows`** gibt ein
dynamisches [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller Zeilen in der Tabelle zurück, einschließlich der Zeilen, die in den {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tbody")}}-Elementen enthalten sind.

Obwohl die Eigenschaft selbst schreibgeschützt ist, ist das zurückgegebene Objekt dynamisch und erlaubt die Änderung seines Inhalts.

## Wert

Eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection), die eine dynamisch aktualisierende Liste der [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Objekte bereitstellt, die alle {{HTMLElement("tr")}}-Elemente in der Tabelle repräsentieren. Dies ermöglicht einen schnellen Zugriff auf alle Tabellenzeilen, ohne manuell danach suchen zu müssen.

## Beispiele

```js
myRows = myTable.rows;
firstRow = myTable.rows[0];
lastRow = myTable.rows.item(myTable.rows.length - 1);
```

Dies demonstriert, wie Sie sowohl den indexierten Zugriff als auch die Methode [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item) verwenden können, um einzelne Zeilen in der Tabelle zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
