---
title: grid-row
slug: Web/CSS/grid-row
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`grid-row`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_row", "Gitterreihe")}} fest, indem sie eine Linie, einen Bereich oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt, wobei die Inline-Start- und Inline-Endkanten seines {{Glossary("grid_areas", "Gitterbereichs")}} spezifiziert werden.

{{InteractiveExample("CSS Demo: grid-row")}}

```css interactive-example-choice
grid-row: 1;
```

```css interactive-example-choice
grid-row: 1 / 3;
```

```css interactive-example-choice
grid-row: 2 / -1;
```

```css interactive-example-choice
grid-row: 1 / span 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-gap: 10px;
  width: 200px;
}

.example-container > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}
```

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-row-end`](/de/docs/Web/CSS/grid-row-end)
- [`grid-row-start`](/de/docs/Web/CSS/grid-row-start)

## Syntax

```css
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: some-grid-area;
grid-row: some-grid-area / some-other-grid-area;

/* <integer> + <custom-ident> values */
grid-row: some-grid-area 4;
grid-row: 4 some-grid-area / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span some-grid-area;
grid-row: 5 some-grid-area span;
grid-row: span 3 / 6;
grid-row: span some-grid-area / span some-other-grid-area;
grid-row: 5 some-grid-area span / 2 span;

/* Global values */
grid-row: inherit;
grid-row: initial;
grid-row: revert;
grid-row: revert-layer;
grid-row: unset;
```

Diese Eigenschaft wird als ein oder zwei `<grid-line>`-Werte angegeben.

Wenn zwei `<grid-line>`-Werte angegeben werden, sind sie durch `/` getrennt. Die Langform `grid-row-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-row-end` wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>`-Wert kann wie folgt angegeben werden:

- entweder als Schlüsselwort `auto`
- oder als `<custom-ident>`-Wert
- oder als `<integer>`-Wert
- oder sowohl als `<custom-ident>` als auch als `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was Auto-Platzierung, eine automatische Spanne oder eine Standardspranne von `1` bedeutet.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie die erste solcher Linien zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Gitterbereiche generieren automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-row: foo;` die Start-/Endkante dieses benannten Gitterbereichs wählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher ausdrücklich spezifiziert).

    Andernfalls wird dies behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird stattdessen rückwärts gezählt, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspanne zur Platzierung des Grid-Elements bei, sodass die entsprechende Kante des Gitterbereichs des Grid-Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das `<integer>` weggelassen wird, wird es auf `1` gesetzt. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Position der Gitterreihe festlegen

#### HTML

```html
<div id="grid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: 200px;
  grid-template-rows: repeat(6, 1fr);
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-row: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-row: span 2 / 7;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_row_size_and_location", "200px", "200px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
