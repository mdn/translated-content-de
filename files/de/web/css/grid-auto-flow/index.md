---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`grid-auto-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie der Auto-Platzierungsalgorithmus funktioniert und gibt genau an, wie automatisch platzierte Elemente in das Raster eingefügt werden.

{{InteractiveExample("CSS Demo: grid-auto-flow")}}

```css interactive-example-choice
grid-auto-flow: row;
```

```css interactive-example-choice
grid-auto-flow: column;
```

```css interactive-example-choice
grid-auto-flow: row dense;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 220px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element > div:nth-child(1) {
  grid-column: auto / span 2;
}

#example-element > div:nth-child(2) {
  grid-column: auto / span 2;
}
```

> [!NOTE]
> Die Eigenschaft `masonry-auto-flow` wurde aus dem CSS [Masonry-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout) zugunsten von `grid-auto-flow` entfernt.
> Siehe [csswg-drafts #10231](https://github.com/w3c/csswg-drafts/issues/10231) für Details.

## Syntax

```css
/* Keyword values */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Global values */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: revert;
grid-auto-flow: revert-layer;
grid-auto-flow: unset;
```

Diese Eigenschaft kann eine von zwei Formen annehmen:

- ein einzelnes Schlüsselwort: eines von `row`, `column`, oder `dense`.
- zwei Schlüsselwörter: `row dense` oder `column dense`.

### Werte

- `row`
  - : Elemente werden platziert, indem jede Zeile der Reihe nach gefüllt wird, wobei bei Bedarf neue Zeilen hinzugefügt werden. Wird weder `row` noch `column` angegeben, wird `row` angenommen.
- `column`
  - : Elemente werden platziert, indem jede Spalte der Reihe nach gefüllt wird, wobei bei Bedarf neue Spalten hinzugefügt werden.
- `dense`
  - : Der "dichte" Packalgorithmus versucht, Lücken früher im Raster zu füllen, falls später kleinere Elemente auftauchen. Dies kann dazu führen, dass Elemente außer der Reihenfolge erscheinen, wenn dies Lücken füllt, die von größeren Elementen hinterlassen wurden.

    Wenn es weggelassen wird, wird ein "spärlicher" Algorithmus verwendet, bei dem der Platzierungsalgorithmus beim Platzieren von Elementen immer nur "vorwärts" im Raster vorgeht und niemals zurückgeht, um Lücken zu füllen. Dies stellt sicher, dass alle automatisch platzierten Elemente "in der Reihenfolge" erscheinen, selbst wenn dies Lücken hinterlässt, die von späteren Elementen hätten gefüllt werden können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Rasterplatzierung festlegen

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div id="item4"></div>
  <div id="item5"></div>
</div>
<select id="direction">
  <option value="column">column</option>
  <option value="row">row</option>
</select>
<input id="dense" type="checkbox" />
<label for="dense">dense</label>
```

#### CSS

```css
#grid {
  height: 200px;
  width: 200px;
  display: grid;
  gap: 10px;
  grid-template: repeat(4, 1fr) / repeat(2, 1fr);
  grid-auto-flow: column; /* or 'row', 'row dense', 'column dense' */
}

#item1 {
  background-color: lime;
  grid-row-start: 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}

#item4 {
  grid-column-start: 2;
  background-color: red;
}

#item5 {
  background-color: aqua;
}
```

```js hidden
function changeGridAutoFlow() {
  const grid = document.getElementById("grid");
  const direction = document.getElementById("direction");
  const dense = document.getElementById("dense");
  let gridAutoFlow = direction.value === "row" ? "row" : "column";

  if (dense.checked) {
    gridAutoFlow += " dense";
  }

  grid.style.gridAutoFlow = gridAutoFlow;
}

const selectElem = document.querySelector("select");
const inputElem = document.querySelector("input");
selectElem.addEventListener("change", changeGridAutoFlow);
inputElem.addEventListener("change", changeGridAutoFlow);
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_auto-placement", "200px", "260px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid")}}
- [Automatische Platzierung im Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- Video: [Einführung in die automatische Rasterplatzierung und Ordnung](https://gridbyexample.com/video/series-auto-placement-order/)
