---
title: grid-area
slug: Web/CSS/grid-area
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`grid-area`** CSS-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) legt die Größe und Position eines Grid-Elements innerhalb eines {{glossary("grid", "Rasters")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu ihrer Grid-Platzierung beiträgt und so die Ränder ihres {{glossary("grid areas", "Rasterbereichs")}} definiert.

{{EmbedInteractiveExample("pages/css/grid-area.html")}}

Wenn vier `<grid-line>`-Werte angegeben sind, wird `grid-row-start` auf den ersten Wert gesetzt, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert.

Wenn `grid-column-end` ausgelassen wird und `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, wird `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` ausgelassen wird und `grid-row-start` ein `<custom-ident>` ist, wird `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` ausgelassen wird und `grid-row-start` ein `<custom-ident>` ist, werden alle vier Langformen auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die Eigenschaft `grid-area` kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich dient und dann mithilfe von {{cssxref("grid-template-areas")}} platziert werden kann.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`grid-row-start`](/de/docs/Web/CSS/grid-row-start)
- [`grid-column-start`](/de/docs/Web/CSS/grid-column-start)
- [`grid-row-end`](/de/docs/Web/CSS/grid-row-end)
- [`grid-column-end`](/de/docs/Web/CSS/grid-column-end)

## Syntax

```css
/* Keyword-Werte */
grid-area: auto;
grid-area: auto / auto;
grid-area: auto / auto / auto;
grid-area: auto / auto / auto / auto;

/* <custom-ident> Werte */
grid-area: some-grid-area;
grid-area: some-grid-area / another-grid-area;

/* <integer> && <custom-ident>? Werte */
grid-area: 4 some-grid-area;
grid-area: 4 some-grid-area / 2 another-grid-area;

/* span && [ <integer> || <custom-ident> ] Werte */
grid-area: span 3;
grid-area: span 3 / span some-grid-area;
grid-area: 2 span / another-grid-area span;

/* Globale Werte */
grid-area: inherit;
grid-area: initial;
grid-area: revert;
grid-area: revert-layer;
grid-area: unset;
```

### Werte

- `auto`
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und eine automatische Platzierung oder eine Standardspanne von `1` anzeigt.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen '`<custom-ident>-start`'/'`<custom-ident>-end`' gibt, trägt es die erste solche Linie zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Rasterbereiche generieren automatisch implizit benannte Linien dieser Form, sodass das Festlegen von `grid-area: foo;` die Start-/Endkante dieses benannten Rasterbereichs wählt (sofern nicht vorher explizit eine andere Linie namens `foo-start`/`foo-end` angegeben wurde).

    Andernfalls wird dies so behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Rasterlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts beginnend vom Endrand des expliziten Rasters.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien diesen Namen für den Zweck der Positionsbestimmung haben.

    Ein {{cssxref("&lt;integer&gt;")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Rasterspanne zur Platzierung des Grid-Elements bei, sodass der entsprechende Rand des Rasterbereichs des Grid-Elements _n_ Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien auf der Seite des expliziten Rasters, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die {{cssxref("&lt;integer&gt;")}} weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Rasterbereichen

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
