---
title: grid-column
slug: Web/CSS/grid-column
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`grid-column`** CSS [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_column", "Grid-Spalte")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Platzierung im Grid beiträgt und somit die Inline-Start- und Inline-Endkante seines {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft wird als ein oder zwei `<grid-line>` Werte angegeben.

Wenn zwei `<grid-line>` Werte angegeben werden, sind diese mit `/` getrennt.
Die Langform `grid-column-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-column-end` wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>` Wert kann wie folgt angegeben werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie zur Platzierung des ersten solchen Linie zum Grid-Element bei.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizite benannte Linien in dieser Form, sodass die Angabe `grid-column: foo;` den Start-/Endrand dieses benannten Grid-Bereichs wählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit festgelegt).

    Andernfalls wird dies so behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben wurde.

- `<integer> && <custom-ident>?`
  - : Trägt zur Platzierung der n-ten Grid-Line des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts vom Endrand des expliziten Grids aus.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt zu einer Grid-Spanne bei, sodass der entsprechende Rand des Grid-Bereichs des Grid-Elements n Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Gitterlinien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die `<integer>` weggelassen wird, wird sie standardmäßig auf `1` gesetzt. Negative Ganzzahlen oder `0` sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Position der Grid-Spalte festlegen

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

- [Platzierung basierend auf Linien mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
