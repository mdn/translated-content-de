---
title: grid-row
slug: Web/CSS/Reference/Properties/grid-row
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`grid-row`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe und Position eines Grid-Items innerhalb einer {{Glossary("grid_row", "Grid-Zeile")}} fest, indem es eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und damit den Inline-Start- und Inline-Endrand seines {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-row-end`](/de/docs/Web/CSS/Reference/Properties/grid-row-end)
- [`grid-row-start`](/de/docs/Web/CSS/Reference/Properties/grid-row-start)

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

Wenn zwei `<grid-line>`-Werte angegeben werden, sind sie durch `/` getrennt. Die Langform `grid-row-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-row-end` auf den Wert nach dem Schrägstrich.

Jeder `<grid-line>`-Wert kann folgendermaßen angegeben werden:

- entweder als `auto` Schlüsselwort
- oder als ein `<custom-ident>` Wert
- oder als ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Items beiträgt, was eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` bedeutet.
- `<custom-ident>`

  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` vorhanden ist, trägt es die erste solche Linie zur Platzierung des Grid-Items bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizite benannte Linien dieser Form. Wenn also `grid-row: foo;` angegeben wird, wird der Start-/Endrand dieses benannten Grid-Bereichs gewählt (es sei denn, es wurde zuvor explizit eine andere Linie mit `foo-start`/`foo-end` benannt).

    Andernfalls wird es behandelt, als wäre die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Items bei. Wenn eine negative ganze Zahl angegeben ist, wird rückwärts gezählt, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu bestimmen.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Items bei, so dass die entsprechende Kante des Grid-Bereichs des Grid-Items n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen für das Zählen dieser Spanne haben.

    Wenn `<integer>` weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Größe und Position der Grid-Zeile

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
- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
