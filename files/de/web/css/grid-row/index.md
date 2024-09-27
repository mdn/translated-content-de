---
title: grid-row
slug: Web/CSS/grid-row
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-row`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Grid-Items innerhalb einer [Gitterreihe](/de/docs/Glossary/grid_row) fest, indem es eine Linie, eine Spanne oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt und somit die Start- und Endkante seines [Gittersbereichs](/de/docs/Glossary/grid_areas) angibt.

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

## Bestandteile von Eigenschaften

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

Diese Eigenschaft wird als ein oder zwei `<grid-line>` Werte angegeben.

Wenn zwei `<grid-line>`-Werte angegeben werden, werden sie durch `/` getrennt. Die Langschreibweise `grid-row-start` wird auf den Wert vor dem Schrägstrich gesetzt, und die Langschreibweise `grid-row-end` wird auf den Wert nach dem Schrägstrich gesetzt.

Jeder `<grid-line>`-Wert kann angegeben werden als:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder beide `<custom-ident>` und `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das anzeigt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was auf eine automatische Platzierung, eine automatische Spanne oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Gittersbereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-row: foo;` die Start-/Endkante dieses benannten Gittersbereichs auswählt (sofern nicht eine andere Linie mit dem Namen `foo-start`/`foo-end` vorher explizit angegeben wurde).

    Andernfalls wird dies behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterslinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird rückwärts gezählt, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterslinien diesen Namen zur Bestimmung dieser Position haben.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gittersabstand zur Platzierung des Grid-Elements bei, sodass die entsprechende Kante des Gittersbereichs des Grid-Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterslinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen zum Zweck des Zählens dieser Spanne haben.

    Wenn die `<integer>`-Angabe ausgelassen wird, wird sie standardmäßig auf `1` gesetzt. Negative Ganzzahlen oder 0 sind ungültig.

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
- [Linienbasierte Platzierung mit CSS Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
