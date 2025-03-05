---
title: grid-column
slug: Web/CSS/grid-column
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`grid-column`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Grid-Items innerhalb einer {{Glossary("grid_column", "Grid-Spalte")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Positionierung im Grid beiträgt, und damit die Inline-Start- und Inline-End-Kante seines {{Glossary("grid_areas", "Grid-Bereichs")}} spezifiziert.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Wenn zwei `<grid-line>` Werte angegeben werden, sind sie durch ein `/` getrennt. Die Langform `grid-column-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-column-end` wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>` Wert kann angegeben werden als:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>` Wert
- oder ein `<integer>` Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Items beiträgt, was eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` bedeutet.
- `<custom-ident>`

  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` existiert, trägt sie die erste solche Linie zur Platzierung des Grid-Items bei.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizite benannte Linien dieser Form, daher wird durch die Angabe von `grid-column: foo;` die Start-/Endkante dieses benannten Grid-Bereichs gewählt (es sei denn, eine andere Linie namens `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Items bei. Wenn eine negative Ganzzahl angegeben wird, wird stattdessen rückwärts gezählt, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Items bei, sodass die entsprechende Kante des Grid-Bereichs des Items n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird davon ausgegangen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das `<integer>` weggelassen wird, wird `1` als Standardwert angenommen. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Position einer Grid-Spalte festlegen

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

- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
