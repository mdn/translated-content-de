---
title: grid-column
slug: Web/CSS/grid-column
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-column`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_column", "Grid-Spalte")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und damit den Inline-Start- und Inline-Endrand seines {{Glossary("grid_areas", "Grid-Bereichs")}} angibt.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Zusammengesetzte Eigenschaften

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

Diese Eigenschaft wird als ein oder zwei `<grid-line>`-Werte angegeben.

Wenn zwei `<grid-line>`-Werte angegeben sind, werden sie durch `/` getrennt.
Die Langform `grid-column-start` wird mit dem Wert vor dem Schrägstrich festgelegt, und die Langform `grid-column-end` wird mit dem Wert nach dem Schrägstrich festgelegt.

Jeder `<grid-line>`-Wert kann wie folgt angegeben werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, und zeigt eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` an.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-column: foo;` den Start-/Endrand dieses benannten Grid-Bereichs auswählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde zuvor ausdrücklich angegeben).

    Andernfalls wird dies so behandelt, als ob die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative ganze Zahl angegeben ist, wird rückwärts gezählt, beginnend vom Endrand des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu bestimmen.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Span für die Platzierung des Grid-Elements bei, sodass der entsprechende Rand des Grid-Bereichs des Elements n Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen für die Zählung dieser Spanne haben.

    Wenn das `<integer>` weggelassen wird, ist der Standardwert `1`. Negative ganze Zahlen oder `0` sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grid-Spaltengröße und Position festlegen

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

- [Zeilenbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Zeilenbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
