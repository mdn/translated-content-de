---
title: grid-row
slug: Web/CSS/grid-row
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`grid-row`** CSS-[Kurzschrift-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) spezifiziert die Größe und Position eines Grid-Elements innerhalb einer {{Glossary("grid_row", "Grid-Zeile")}}, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu ihrer Grid-Platzierung beiträgt und somit die inline-start und inline-end Kante ihres {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

{{EmbedInteractiveExample("pages/css/grid-row.html")}}

## Bestandteile der Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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

Wenn zwei `<grid-line>`-Werte angegeben sind, werden sie durch `/` getrennt. Die Langform `grid-row-start` wird auf den Wert vor dem Schrägstrich gesetzt und die Langform `grid-row-end` auf den Wert nach dem Schrägstrich.

Jeder `<grid-line>`-Wert kann folgendermaßen angegeben werden:

- entweder das `auto` Schlüsselwort
- oder ein `<custom-ident>`-Wert
- oder ein `<integer>`-Wert
- oder sowohl `<custom-ident>` als auch `<integer>`, getrennt durch ein Leerzeichen
- oder das Schlüsselwort `span` zusammen mit entweder einem `<custom-ident>` oder einem `<integer>` oder beidem.

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und eine automatische Platzierung, eine automatische Spanne oder eine Standardsparne von `1` angibt.
- `<custom-ident>`

  - : Wenn eine benannte Linie mit dem Namen `<custom-ident>-start`/`<custom-ident>-end` existiert, trägt sie zur Platzierung des Grid-Elements bei, indem sie die erste solcher Linien in das Grid einfügt.

    > [!NOTE]
    > Benannte Grid-Bereiche generieren automatisch implizite benannte Linien dieser Form. Die Angabe von `grid-row: foo;` wählt also die Start-/Endkante dieses benannten Grid-Bereichs (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies so behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben wurde.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Grid-Linie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben ist, wird rückwärts gezählt, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("integer")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die entsprechende Kante des Grid-Bereichs des Elements n Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als `<custom-ident>` angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Grid-Linien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das `<integer>` weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größe und Position der Grid-Zeile festlegen

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
- [Zeilenbasierte Platzierung mit CSS-Grid](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- Video: [Zeilenbasierte Platzierung](https://gridbyexample.com/video/series-line-based-placement/)
