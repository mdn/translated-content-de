---
title: grid-column
slug: Web/CSS/grid-column
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-column`** CSS-[Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Gitternetz-Elements innerhalb einer {{glossary("grid column", "Gitternetzspalte")}} fest, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu ihrer Positionierung im Gitter beiträgt und somit den Inline-Start und Inline-Ende des zugehörigen {{glossary("grid areas", "Gitternetzbereichs")}} spezifiziert.

{{EmbedInteractiveExample("pages/css/grid-column.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`grid-column-end`](/de/docs/Web/CSS/grid-column-end)
- [`grid-column-start`](/de/docs/Web/CSS/grid-column-start)

## Syntax

```css
/* Schlüsselwort-Werte */
grid-column: auto;
grid-column: auto / auto;

/* <custom-ident>-Werte */
grid-column: somegridarea;
grid-column: somegridarea / someothergridarea;

/* <integer> + <custom-ident>-Werte */
grid-column: somegridarea 4;
grid-column: 4 somegridarea / 6;

/* span + <integer> + <custom-ident>-Werte */
grid-column: span 3;
grid-column: span somegridarea;
grid-column: 5 somegridarea span;
grid-column: span 3 / 6;
grid-column: span somegridarea / span someothergridarea;
grid-column: 5 somegridarea span / 2 span;

/* Globale Werte */
grid-column: inherit;
grid-column: initial;
grid-column: revert;
grid-column: revert-layer;
grid-column: unset;
```

Diese Eigenschaft wird als ein oder zwei `<grid-line>`-Werte angegeben.

Wenn zwei `<grid-line>`-Werte angegeben sind, werden sie durch `/` getrennt. Die Langform `grid-column-start` wird auf den Wert vor dem Schrägstrich gesetzt und die Langform `grid-column-end` auf den Wert nach dem Schrägstrich.

Jeder `<grid-line>`-Wert kann wie folgt spezifiziert werden:

- entweder das Schlüsselwort `auto`
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Gitternetz-Elements beiträgt, was eine automatische Platzierung, eine automatische Spannweite oder eine Standardspannweite von `1` anzeigt.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Gitternetz-Elements bei.

    > [!NOTE]
    > Benannte Gitternetzbereiche erzeugen automatisch implizite benannte Linien dieser Form, sodass die Angabe `grid-column: foo;` die Start-/Endkante dieses benannten Gitternetzbereichs auswählt (es sei denn, es wurde vorher explizit eine andere Linie mit dem Namen `foo-start`/`foo-end` angegeben).

    Andernfalls wird dies so behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Gitternetz-Elements bei. Wenn eine negative Ganzzahl angegeben wird, wird stattdessen rückwärts gezählt, beginnend von der Endkante des expliziten Gitters.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspannweite zur Platzierung des Gitternetz-Elements bei, sodass die entsprechende Kante des Gitternetzbereichs n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Gitters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannweite zu zählen.

    Wenn die `<integer>` weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formal Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Größe und Position der Gitterspalte

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

- [Linienbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Linienbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
