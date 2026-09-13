---
title: "HTMLTableElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableElement/rows
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`rows`**-Eigenschaft der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von allen {{HTMLElement("tr")}}-Elementen zurück, die entweder ein Kind des angegebenen {{HTMLElement("table")}}-Elements sind oder ein Kind eines der {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Kinder der Tabelle sind. Die Mitglieder des `<thead>`erscheinen zuerst, gefolgt von den Mitgliedern des`<tbody>`und der Tabelle selbst, und die Mitglieder des`<tfoot>` kommen zuletzt, sortiert nach Baumordnung innerhalb jeder Gruppe.

Obwohl die Eigenschaft schreibgeschützt ist, ist das zurückgegebene Objekt live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

## Wert

Eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Objekten.

## Beispiele

```js
const myRows = myTable.rows;
const firstRow = myTable.rows[0];
const lastRow = myTable.rows.item(myTable.rows.length - 1);
```

Dies demonstriert, wie Sie sowohl den indexierten Zugriff als auch die [`HTMLCollection.item()`](/de/docs/Web/API/HTMLCollection/item)-Methode verwenden können, um einzelne Zeilen in der Tabelle zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
- [`HTMLTableElement.deleteRow()`](/de/docs/Web/API/HTMLTableElement/deleteRow)
