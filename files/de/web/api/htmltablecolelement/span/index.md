---
title: "HTMLTableColElement: span Eigenschaft"
short-title: span
slug: Web/API/HTMLTableColElement/span
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`span`** Schreibgeschützte Eigenschaft der {{domxref("HTMLTableColElement")}} Schnittstelle steht für die Anzahl der Spalten, die dieses {{htmlelement("col")}} oder {{htmlelement("colgroup")}} umspannen muss; dadurch kann die Spalte Platz über mehrere Spalten der Tabelle einnehmen. Sie spiegelt das [`span`](/de/docs/Web/HTML/Element/col#span) Attribut wider.

## Wert

Eine positive Zahl, die die Anzahl der Spalten darstellt.

> [!NOTE]
> Beim Festlegen eines neuen Wertes wird der Wert auf die nächstgelegene strikt positive Zahl (bis zu 1000) _geklammert_.

## Beispiele

Dieses Beispiel stellt zwei Schaltflächen zur Verfügung, um die Spaltenanzahl der ersten Zelle des Körpers zu ändern.

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
<button id="increase">Erhöhen Sie die Spaltenanzahl</button>
<button id="decrease">Verringern Sie die Spaltenanzahl</button>
<div>Die erste &lt;col&gt; erstreckt sich über <output>2</output> tatsächliche Spalte(n).</div>
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
// Ermitteln relevanter Schnittstellenelemente
const col = document.querySelectorAll("col")[1];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  col.span = col.span + 1;

  // Anzeige aktualisieren
  output.textContent = col.span;
});

decreaseButton.addEventListener("click", () => {
  col.span = col.span - 1;

  // Anzeige aktualisieren
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

- {{domxref("HTMLTableCellElement.colSpan")}}
