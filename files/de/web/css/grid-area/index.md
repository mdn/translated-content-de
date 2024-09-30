---
title: grid-area
slug: Web/CSS/grid-area
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **`grid-area`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb eines [Grids](/de/docs/Glossary/grid) fest, indem sie eine Linie, eine Spannweite oder nichts (automatisch) zu seiner Grid-Platzierung beiträgt und damit die Ränder seines [Grid-Bereichs](/de/docs/Glossary/grid_areas) bestimmt.

{{EmbedInteractiveExample("pages/css/grid-area.html")}}

Wenn vier `<grid-line>`-Werte angegeben sind, wird `grid-row-start` auf den ersten Wert, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert gesetzt.

Wenn `grid-column-end` weggelassen wird und `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, wird `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird und `grid-row-start` ein `<custom-ident>` ist, wird `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird und `grid-row-start` ein `<custom-ident>` ist, werden alle vier Langformen auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area` Eigenschaft kann auch auf einen {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, der als Name für den Bereich fungiert, der dann mit {{cssxref("grid-template-areas")}} platziert werden kann.

## Bestandteile

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`grid-row-start`](/de/docs/Web/CSS/grid-row-start)
- [`grid-column-start`](/de/docs/Web/CSS/grid-column-start)
- [`grid-row-end`](/de/docs/Web/CSS/grid-row-end)
- [`grid-column-end`](/de/docs/Web/CSS/grid-column-end)

## Syntax

```css
/* Keyword values */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> values */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? values */
grid-area: 4 some-grid-area;
grid-area: 4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] values */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Global values */
grid-area: inherit;
grid-area: initial;
grid-area: revert;
grid-area: revert-layer;
grid-area: unset;
```

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt, was eine automatische Platzierung oder eine Standardspannweite von `1` bedeutet.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form. Das Festlegen von `grid-area: foo;` wählt die Start-/Endkante dieses benannten Grid-Bereichs (es sei denn, eine andere Linie namens `foo-start`/`foo-end` wurde vorher ausdrücklich spezifiziert).

    Andernfalls wird dies so behandelt, als wäre die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitternetzlinie zur Platzierung des Grid-Elements bei. Wenn eine negative ganze Zahl angegeben wird, zählt sie stattdessen rückwärts, beginnend von der Endkante des expliziten Grids.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitternetzlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("&lt;integer&gt;")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Grid-Spanne zur Platzierung des Grid-Elements bei, sodass die entsprechende Kante des Grid-Bereichs des Elements _n_ Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitternetzlinien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen haben, um diese Spannweite zu zählen.

    Wenn das {{cssxref("&lt;integer&gt;")}} weggelassen wird, beträgt es standardmäßig `1`. Negative ganze Zahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Grid-Bereichen

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
  grid-template: repeat(4, 1fr) / 50px 100px;
}

#item1 {
  background-color: lime;
  grid-area: 2 / 2 / auto / span 3;
}

#item2 {
  background-color: yellow;
}

#item3 {
  background-color: blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_grid_areas", "100%", "150px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-row")}}
- {{cssxref("grid-row-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-column-end")}}
- {{cssxref("grid-template-areas")}}
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Grid-Template-Bereiche](https://gridbyexample.com/video/grid-template-areas/)
