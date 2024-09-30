---
title: grid-row
slug: Web/CSS/grid-row
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-row`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer [Grid-Zeile](/de/docs/Glossary/grid_row) fest, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und somit die Inline-Start- und Inline-Endkante seines [Grid-Bereichs](/de/docs/Glossary/grid_areas) spezifiziert.

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-row-end`](/de/docs/Web/CSS/grid-row-end)
- [`grid-row-start`](/de/docs/Web/CSS/grid-row-start)

## Syntax

```css
/* Keyword values */
grid-row: auto;
grid-row: auto / auto;

/* <custom-ident> values */
grid-row: somegridarea;
grid-row: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-row: somegridarea 4;
grid-row: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-row: span 3;
grid-row: span somegridarea;
grid-row: 5 somegridarea span;
grid-row: span 3 / 6;
grid-row: span somegridarea / span someothergridarea;
grid-row: 5 somegridarea span / 2 span;

/* Global values */
grid-row: inherit;
grid-row: initial;
grid-row: revert;
grid-row: revert-layer;
grid-row: unset;
```

Diese Eigenschaft wird als ein oder zwei `<grid-line>`-Werte angegeben.

Wenn zwei `<grid-line>`-Werte angegeben sind, werden sie durch einen `/` getrennt. Die Langform `grid-row-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-row-end` wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>`-Wert kann angegeben werden als:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder beides `<custom-ident>` und `<integer>`, durch ein Leerzeichen getrennt
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatische Platzierung, eine automatische Spannweite oder eine Standardspannweite von `1` anzeigt.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie zur Platzierung des Grid-Elements bei, indem die erste solche Linie verwendet wird.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizit benannte Linien dieser Form, sodass die Angabe `grid-row: foo;` die Start-/Endkante des benannten Grid-Bereichs auswählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde zuvor explizit angegeben).

    Andernfalls wird dies so behandelt, als ob die Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt zur Platzierung des nth Grid-Linie bei. Wenn eine negative Zahl angegeben wird, zählt sie stattdessen rückwärts, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spannweite zur Platzierung des Grid-Elements bei, sodass die entsprechende Kante des Grid-Bereichs des Grid-Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannweite zu zählen.

    Wenn das `<integer>` weggelassen wird, ist es standardmäßig `1`. Negative Zahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Größe und Position der Grid-Zeile

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
- [Line-based placement with CSS grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
