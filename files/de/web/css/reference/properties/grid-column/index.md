---
title: grid-column
slug: Web/CSS/Reference/Properties/grid-column
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`grid-column`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe und Position eines Grid-Items innerhalb einer {{Glossary("grid_column", "Grid-Spalte")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Platzierung im Grid beiträgt. Dadurch werden die Inline-Start- und Inline-Endkante des {{Glossary("grid_areas", "Grid-Bereichs")}} bestimmt.

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
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`grid-column-end`](/de/docs/Web/CSS/Reference/Properties/grid-column-end)
- [`grid-column-start`](/de/docs/Web/CSS/Reference/Properties/grid-column-start)

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

Diese Eigenschaft wird als ein oder zwei `<grid-line>` Werte angegeben.

Wenn zwei `<grid-line>` Werte angegeben sind, werden sie durch einen Schrägstrich `/` getrennt.
Die Langform `grid-column-start` wird auf den Wert vor dem Schrägstrich festgelegt, und die Langform `grid-column-end` wird auf den Wert nach dem Schrägstrich festgelegt.

Jeder `<grid-line>` Wert kann angegeben werden als:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Items beiträgt, was eine automatische Platzierung, eine automatische Spannweite oder eine Standardspannweite von `1` bedeutet.
- `<custom-ident>`

  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` existiert, trägt sie die erste solche Linie zur Platzierung des Grid-Items bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizite benannte Linien dieser Form. Daher wählt die Angabe `grid-column: foo;` die Start-/Endkante des benannten Grid-Bereichs (es sei denn, es wurde explizit bereits eine andere Linie mit dem Namen `foo-start`/`foo-end` angegeben).

    Andernfalls wird dies so behandelt, als ob die Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Items bei. Wenn eine negative Zahl angegeben ist, wird stattdessen in umgekehrter Reihenfolge gezählt, beginnend vom Endrand des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Existieren nicht genügend Linien mit diesem Namen, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Items bei, sodass die entsprechende Kante des Grid-Bereichs des Items n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Existieren nicht genügend Linien mit diesem Namen, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids entsprechend der Suchrichtung diesen Namen für das Zählen dieser Spannweite haben.

    Wenn `<integer>` ausgelassen wird, wird standardmäßig `1` verwendet. Negative ganze Zahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Größe und Position von Grid-Spalten

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

- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
