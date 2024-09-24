---
title: "HTMLTableSectionElement: Methode insertRow()"
short-title: insertRow()
slug: Web/API/HTMLTableSectionElement/insertRow
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{APIRef("HTML DOM")}}

Die **`insertRow()`** Methode des {{domxref("HTMLTableSectionElement")}}-Interfaces fügt eine neue Zeile
({{HtmlElement("tr")}}) in das angegebene Tabellenabschnittelement ein ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, oder
{{HTMLElement("tbody")}}) und gibt dann eine Referenz auf diese neue Zeile zurück.

> **Note:** `insertRow()` fügt die Zeile direkt in den
> Abschnitt ein. Die Zeile muss nicht separat hinzugefügt werden, wie es der Fall wäre, wenn
> {{domxref("Document.createElement()")}} verwendet worden wäre, um das neue
> `<tr>`-Element zu erstellen.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

### Parameter

- `index` {{optional_inline}}
  - : Der Zeilenindex der neuen Zeile. Wenn `index` `-1` oder gleich der Anzahl der Zeilen ist, wird die Zeile als letzte Zeile hinzugefügt.
    Wenn `index` weggelassen wird, ist der Standardwert `-1`.

### Rückgabewert

Ein {{domxref("HTMLTableRowElement")}}, das die neue Zeile referenziert.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `index` größer als die Anzahl der Zeilen oder kleiner als `-1` ist.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen das Hinzufügen und Entfernen von Zeilen im Tabellenkörperabschnitt; es aktualisiert auch ein {{HTMLElement("output")}}-Element mit der aktuellen Anzahl der Zeilen in der Tabelle.

### HTML

```html
<table>
  <thead>
    <th>Spalte 1</th>
    <th>Spalte 2</th>
    <th>Spalte 3</th>
  </thead>
  <tbody>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>Z</td>
    </tr>
  </tbody>
</table>
<button id="add">Eine Zeile hinzufügen</button>
<button id="remove">Letzte Zeile entfernen</button>
<div>Dieser Tabellenteil hat <output>1</output> Zeile(n).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
// Relevante Interface-Elemente abrufen
const bodySection = document.querySelectorAll("tbody")[0];
const rows = bodySection.rows; // Die Sammlung ist live und daher immer aktuell
const rowNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateRowNumber() {
  rowNumberDisplay.textContent = rows.length;
}

addButton.addEventListener("click", () => {
  // Eine neue Zeile am Ende des Körpers hinzufügen
  const newRow = bodySection.insertRow();

  // Zellen innerhalb der neuen Zeile hinzufügen
  ["A", "B", "C"].forEach(
    (elt) => (newRow.insertCell().textContent = `${elt}${rows.length}`),
  );

  // Den Zeilenzähler aktualisieren
  updateRowNumber();
});

removeButton.addEventListener("click", () => {
  // Die Zeile aus dem Körper löschen
  bodySection.deleteRow(-1);

  // Den Zeilenzähler aktualisieren
  updateRowNumber();
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTableRowElement.insertCell()")}}
- {{domxref("HTMLTableElement.insertRow()")}}
