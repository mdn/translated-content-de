---
title: "HTMLTableCellElement: abbr-Eigenschaft"
short-title: abbr
slug: Web/API/HTMLTableCellElement/abbr
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("HTML DOM") }}

Die **`abbr`**-Eigenschaft des {{domxref("HTMLTableCellElement")}}-Interfaces
zeigt eine Abkürzung an, die mit der Zelle verbunden ist. Wenn die Zelle keine Kopfzelle {{HTMLElement("th")}} darstellt, wird sie ignoriert.

Sie spiegelt das `abbr`-Attribut des {{HTMLElement("th")}}-Elements wider.

> [!NOTE]
> Diese Eigenschaft hat keinen visuellen Effekt in Browsern. Sie fügt Informationen hinzu, die unterstützende Technologien wie Bildschirmleser nutzen können, um diese Abkürzung zu verwenden.

## Wert

Ein String.

## Beispiele

Dieses Beispiel fügt Präfixe mit der Abkürzung hinzu, die mit der Kopfzelle in der ersten Zelle jeder Zeile verbunden ist.

### HTML

```html
<table>
  <thead>
    <tr>
      <th abbr="Maker">Hersteller</th>
      <th abbr="Model">Automodell</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tesla</td>
      <td>3</td>
    </tr>
    <tr>
      <td>BYD</td>
      <td>Dolphin</td>
    </tr>
    <tr>
      <td>VW</td>
      <td>ID.3</td>
    </tr>
  </tbody>
</table>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
const rows = document.querySelectorAll("thead tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (${cell.abbr})`;
}
```

### Ergebnisse

{{EmbedLiveSample("Examples", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}