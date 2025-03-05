---
title: grid-row
slug: Web/CSS/grid-row
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`grid-row`** CSS-[Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_row", "Grid-Reihe")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und dadurch den Start- und Endpunkt seiner {{Glossary("grid_areas", "Grid-Fläche")}} angibt.

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Abkürzung für die folgenden CSS-Eigenschaften:

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

Wenn zwei `<grid-line>`-Werte angegeben sind, werden sie durch `/` getrennt. Die `grid-row-start` Langform wird auf den Wert vor dem Schrägstrich gesetzt, und die `grid-row-end` Langform wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>`-Wert kann angegeben werden als:

- entweder das `auto` Keyword
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Keyword `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beiden.

### Werte

- `auto`
  - : Ist ein Keyword, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt diese die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass die Angabe `grid-row: foo;` den Start-/Endpunkt dieses benannten Grid-Bereichs auswählt (es sei denn, es wurde vorher explizit eine andere Linie namens `foo-start`/`foo-end` angegeben).

    Ansonsten wird dies so behandelt, als wäre die Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird stattdessen rückwärts gezählt, beginnend vom Endrand des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Span zur Platzierung des Grid-Elements bei, sodass der entsprechende Rand des Grid-Elements Grid-Fläche n Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannbreite zu zählen.

    Wenn das `<integer>` weggelassen wird, beträgt es standardmäßig `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung der Grid-Reihengröße und -position

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
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
