---
title: grid-column
slug: Web/CSS/grid-column
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-column`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb einer [Grid-Spalte](/de/docs/Glossary/grid_column) fest, indem es zur Platzierung im Grid eine Linie, eine Spannweite oder nichts (automatisch) beiträgt. Dadurch werden der Inline-Start- und Inline-Endrand seines [Grid-Bereichs](/de/docs/Glossary/grid_areas) festgelegt.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-column-end`](/de/docs/Web/CSS/grid-column-end)
- [`grid-column-start`](/de/docs/Web/CSS/grid-column-start)

## Syntax

```css
/* Keyword values */
grid-column: auto;
grid-column: auto / auto;

/* <custom-ident> values */
grid-column: somegridarea;
grid-column: somegridarea / someothergridarea;

/* <integer> + <custom-ident> values */
grid-column: somegridarea 4;
grid-column: 4 somegridarea / 6;

/* span + <integer> + <custom-ident> values */
grid-column: span 3;
grid-column: span somegridarea;
grid-column: 5 somegridarea span;
grid-column: span 3 / 6;
grid-column: span somegridarea / span someothergridarea;
grid-column: 5 somegridarea span / 2 span;

/* Global values */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: revert-layer;
grid-column: unset;
```

Diese Eigenschaft wird als ein oder zwei `<grid-line>`-Werte angegeben.

Wenn zwei `<grid-line>`-Werte gegeben sind, werden sie durch `/` getrennt. Die Langform `grid-column-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langform `grid-column-end` auf den Wert nach dem Schrägstrich.

Jeder `<grid-line>`-Wert kann wie folgt angegeben werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder beide, `<custom-ident>` und `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatisierte Platzierung, eine automatische Spannweite oder eine Standardspannung von `1` bedeutet.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie die erste dieser Linien zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizit benannte Linien dieser Form. Das Festlegen von `grid-column: foo;` wählt daher den Anfangs-/Endrand dieses benannten Grid-Bereichs (sofern nicht eine andere Linie mit dem Namen `foo-start`/`foo-end` vorher explizit festgelegt wurde).

    Andernfalls wird dies so behandelt, als wäre die Zahl `1` zusammen mit `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird stattdessen rückwärts ab der Endkante des expliziten Grids gezählt.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spannweite zur Platzierung des Grid-Elements bei, so dass die entsprechende Kante des Grid-Bereichs des Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannweite zu zählen.

    Wenn `<integer>` weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Größe und Position der Grid-Spalte

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

- [Line-based placement with CSS grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Line-based placement](https://gridbyexample.com/video/series-line-based-placement/)
