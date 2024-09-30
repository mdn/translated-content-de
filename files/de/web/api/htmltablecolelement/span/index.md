---
title: "HTMLTableColElement: span-Eigenschaft"
short-title: span
slug: Web/API/HTMLTableColElement/span
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`span`** Leseeigenschaft des [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)-Interfaces stellt die Anzahl der Spalten dar, die dieses {{htmlelement("col")}} oder dieser {{htmlelement("colgroup")}} überspannen muss; dadurch kann die Spalte Platz über mehrere Spalten der Tabelle einnehmen. Sie spiegelt das [`span`](/de/docs/Web/HTML/Element/col#span)-Attribut wider.

## Wert

Eine positive Zahl, die die Anzahl der Spalten darstellt.

> [!NOTE]
> Beim Setzen eines neuen Wertes wird der Wert auf die nächste streng positive Zahl (bis zu 1000) _begrenzt_.

## Beispiele

Dieses Beispiel bietet zwei Schaltflächen, um die Spaltenanzahl der ersten Zelle des Körpers zu ändern.

### HTML

```html
<table>
  <colgroup>
    <col />
    <col span="2" class="multiColumn" />
  </colgroup>
  <thead>
    <th></th>
    <th scope="col">C1</th>
    <th scope="col">C2</th>
    <th scope="col">C3</th>
    <th scope="col">C4</th>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row 1</th>
      <td>cell</td>
      <td>cell</td>
      <td>cell</td>
      <td>cell</td>
    </tr>
  </tbody>
</table>
<button id="increase">Increase column span</button>
<button id="decrease">Decrease column span</button>
<div>The first &lt;col&gt; spans <output>2</output> actual column(s).</div>
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

### CSS

```css
.multiColumn {
  background-color: #d7d9f2;
}
```

### JavaScript

```js
// Obtain relevant interface elements
const col = document.querySelectorAll("col")[1];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  col.span = col.span + 1;

  // Update the display
  output.textContent = col.span;
});

decreaseButton.addEventListener("click", () => {
  col.span = col.span - 1;

  // Update the display
  output.textContent = col.span;
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
