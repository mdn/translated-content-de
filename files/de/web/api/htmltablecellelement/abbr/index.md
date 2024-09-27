---
title: "HTMLTableCellElement: Abkürzungseigenschaft"
short-title: abbr
slug: Web/API/HTMLTableCellElement/abbr
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ APIRef("HTML DOM") }}

Die **`abbr`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces zeigt eine mit der Zelle verbundene Abkürzung an. Wenn die Zelle keine Kopfzelle {{HTMLElement("th")}} darstellt, wird sie ignoriert.

Sie spiegelt das `abbr`-Attribut des {{HTMLElement("th")}}-Elements wider.

> [!NOTE]
> Diese Eigenschaft hat keine visuelle Wirkung in Browsern. Sie fügt Informationen hinzu, um assistive Technologien wie Bildschirmleser zu unterstützen, die diese Abkürzung verwenden können.

## Wert

Ein String.

## Beispiele

Dieses Beispiel fügt den Präfixen die mit dem Zeilenkopf der ersten Zelle verbundene Abkürzung hinzu.

### HTML

```html
<table>
  <thead>
    <tr>
      <th abbr="Maker">Manufacturer</th>
      <th abbr="Model">Car model</th>
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
