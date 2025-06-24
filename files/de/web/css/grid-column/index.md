---
title: grid-column
slug: Web/CSS/grid-column
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`grid-column`** CSS-[Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Rasterelements innerhalb einer {{Glossary("grid_column", "Rasterspalte")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu dessen Rasterplatzierung beiträgt und so den Anfangs- und Endrand seines {{Glossary("grid_areas", "Rasterbereichs")}} bestimmt.

{{InteractiveExample("CSS Demo: grid-column")}}

```css interactive-example-choice
grid-column: 1;
```

```css interactive-example-choice
grid-column: 1 / 3;
```

```css interactive-example-choice
grid-column: 2 / -1;
```

```css interactive-example-choice
grid-column: 1 / span 2;
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

## Zusammengefasste Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`grid-column-end`](/de/docs/Web/CSS/grid-column-end)
- [`grid-column-start`](/de/docs/Web/CSS/grid-column-start)

## Syntax

```css
/* Keyword values */
grid-column: auto;
grid-column: auto / auto;

/* <custom-ident> values */
grid-column: some-grid-area;
grid-column: some-grid-area / some-other-grid-area;

/* <integer> + <custom-ident> values */
grid-column: some-grid-area 4;
grid-column: 4 some-grid-area / 6;

/* span + <integer> + <custom-ident> values */
grid-column: span 3;
grid-column: span some-grid-area;
grid-column: 5 some-grid-area span;
grid-column: span 3 / 6;
grid-column: span some-grid-area / span some-other-grid-area;
grid-column: 5 some-grid-area span / 2 span;

/* Global values */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: revert-layer;
grid-column: unset;
```

Diese Eigenschaft wird als ein oder zwei `<grid-line>`-Werte angegeben.

Wenn zwei `<grid-line>`-Werte angegeben werden, sind sie durch ein `/` getrennt.
Die Langform `grid-column-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-column-end` auf den Wert nach dem Schrägstrich.

Jeder `<grid-line>`-Wert kann wie folgt angegeben werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder beides `<custom-ident>` und `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Rasterelements beiträgt, was eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` bedeutet.
- `<custom-ident>`

  - : Falls es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Rasterelements bei.

    > [!NOTE]
    > Benannte Rasterbereiche generieren automatisch implizite benannte Linien dieser Form, sodass die Angabe von `grid-column: foo;` die Start-/Endkante dieses benannten Rasterbereichs wählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird dies so behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Rasterlinie zur Platzierung des Rasterelements bei. Wenn eine negative ganze Zahl angegeben wird, zählt sie stattdessen rückwärts, beginnend vom äußeren Rand des expliziten Gitters.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien diesen Namen für den Zweck haben, diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Rasterspanne zur Platzierung des Rasterelements bei, sodass die entsprechende Kante des Rasterbereichs des Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen für den Zweck des Zählens dieser Spanne haben.

    Wenn `<integer>` weggelassen wird, wird `1` als Standardwert angenommen. Negative ganze Zahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Rasterspaltengröße und -position

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
  height: 100px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 100px;
}

#item1 {
  background-color: lime;
}

#item2 {
  background-color: yellow;
  grid-column: 2 / 4;
}

#item3 {
  background-color: blue;
  grid-column: span 2 / 7;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_column_size_and_location", "100%", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}

- [Linienbasierte Platzierung mit CSS-Raster](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
