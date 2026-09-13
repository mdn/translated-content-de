---
title: "HTMLTableElement: insertRow()-Methode"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`insertRow()`**-Methode des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces erstellt ein {{HTMLElement("tr")}}-Element, fügt es an der angegebenen Position in die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Sammlung ein und gibt es zurück. Wenn die `rows`-Sammlung leer ist und die Tabelle auch keine {{HTMLElement("tbody")}}-Elemente hat, wird zuerst ein `<tbody>`-Element erstellt und eingefügt.

Diese Methode erstellt und fügt das Element direkt ein, ohne separate Aufrufe von Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement), [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) zu erfordern.

Um eine Zeile explizit in einen bestimmten Abschnitt einzufügen, verwenden Sie [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow).

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

### Parameter

- `index` {{optional_inline}}
  - : Der Index der neuen Zeile in der [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Sammlung. Wenn `index` `-1` ist oder der Anzahl der Zeilen entspricht, wird die Zeile als letzte Zeile angefügt. Wenn `index` weggelassen wird, ist der Standardwert `-1`.

    Wenn `rows` leer ist, wird die neue Zeile an das letzte `<tbody>`-Element angehängt (es wird eines erstellt, wenn keines vorhanden ist). Andernfalls wird die neue Zeile unmittelbar vor der Zeile bei `index` eingefügt oder beim übergeordneten Element der letzten Zeile angehängt, wenn die neue Zeile die letzte werden soll. Die neue Zeile wird in dasselbe übergeordnete Element wie die Referenzzeile eingefügt, sodass sie direkt in die `<table>` oder in ein beliebiges Tabellenabschnittselement (`<thead>`, `<tbody>` oder `<tfoot>`) eingefügt werden kann.

### Rückgabewert

Ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement), das sich auf die neue Zeile bezieht.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer ist als die Anzahl der Zeilen oder kleiner als `-1`.

## Beispiele

Dieses Beispiel verwendet `insertRow(-1)`, um eine neue Zeile an eine Tabelle anzuhängen.

Wir verwenden dann [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell), um eine neue Zelle in der neuen Zeile einzufügen. Schließlich fügen wir der Zelle etwas Text hinzu, indem wir [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) verwenden.

### HTML

```html
<table id="my-table">
  <tbody>
    <tr>
      <td>Row 1</td>
    </tr>
    <tr>
      <td>Row 2</td>
    </tr>
    <tr>
      <td>Row 3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Get a reference to the table
  const tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  const newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  const newCell = newRow.insertCell(0);

  // Append a text node to the cell
  const newText = document.createTextNode("New bottom row");
  newCell.appendChild(newText);
}

// Call addRow() with the table's ID
addRow("my-table");
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
