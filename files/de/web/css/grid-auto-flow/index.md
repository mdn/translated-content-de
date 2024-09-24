---
title: grid-auto-flow
slug: Web/CSS/grid-auto-flow
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{CSSRef}}

Die **`grid-auto-flow`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, wie der Autoplatzierungsalgorithmus funktioniert und spezifiziert, wie automatisch platzierte Elemente in das Raster eingefügt werden.

{{EmbedInteractiveExample("pages/css/grid-auto-flow.html")}}

> [!NOTE]
> Die Eigenschaft `masonry-auto-flow` wurde aus dem CSS [Masonry layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout) zugunsten von `grid-auto-flow` entfernt.
> Siehe [csswg-drafts #10231](https://github.com/w3c/csswg-drafts/issues/10231) für Details.

## Syntax

```css
/* Schlüsselwortwerte */
grid-auto-flow: row;
grid-auto-flow: column;
grid-auto-flow: dense;
grid-auto-flow: row dense;
grid-auto-flow: column dense;

/* Globale Werte */
grid-auto-flow: inherit;
grid-auto-flow: initial;
grid-auto-flow: revert;
grid-auto-flow: revert-layer;
grid-auto-flow: unset;
```

Diese Eigenschaft kann eine von zwei Formen annehmen:

- ein einzelnes Schlüsselwort: eines von `row`, `column` oder `dense`.
- zwei Schlüsselwörter: `row dense` oder `column dense`.

### Werte

- `row`
  - : Elemente werden platziert, indem jede Zeile der Reihe nach gefüllt wird, wobei bei Bedarf neue Zeilen hinzugefügt werden. Wenn weder `row` noch `column` angegeben wird, wird `row` angenommen.
- `column`
  - : Elemente werden platziert, indem jede Spalte der Reihe nach gefüllt wird, wobei bei Bedarf neue Spalten hinzugefügt werden.
- `dense`

  - : Der „dichte“ Platzierungsalgorithmus versucht, frühere Lücken im Raster zu füllen, wenn kleinere Elemente später auftauchen. Dies kann dazu führen, dass Elemente außerhalb der Reihenfolge erscheinen, wenn dadurch Lücken gefüllt werden, die von größeren Elementen hinterlassen wurden.

    Wenn er ausbleibt, wird ein „spärlicher“ Algorithmus verwendet, bei dem der Plazierungsalgorithmus nur "nach vorne" im Raster bewegt wird, wenn Elemente platziert werden, und niemals zurückgeht, um Lücken zu füllen. Dies stellt sicher, dass alle automatisch platzierten Elemente "in der Reihenfolge" erscheinen, auch wenn dadurch Lücken bleiben, die von späteren Elementen hätten gefüllt werden können.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Automatische Rasterplatzierung einstellen

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
- [Automatische Platzierung im Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- Video: [Introducing grid auto-placement and order](https://gridbyexample.com/video/series-auto-placement-order/)
