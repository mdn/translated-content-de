---
title: grid-area
slug: Web/CSS/grid-area
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Die **`grid-area`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) spezifiziert die Größe und Position eines Rasterelements innerhalb eines {{Glossary("grid", "Rasters")}}, indem es eine Linie, eine Spanne oder nichts (automatisch) zu seiner Rasterplatzierung beiträgt und so die Ränder seines {{Glossary("grid_areas", "Rasterbereichs")}} festlegt.

{{InteractiveExample("CSS Demo: grid-area")}}

```css interactive-example-choice
grid-area: a;
```

```css interactive-example-choice
grid-area: b;
```

```css interactive-example-choice
grid-area: c;
```

```css interactive-example-choice
grid-area: 2 / 1 / 2 / 4;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">Example</div>
  </div>
</section>
```

```css interactive-example
.example-container {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, minmax(40px, auto));
  grid-template-areas:
    "a a a"
    "b c c"
    "b c c";
  grid-gap: 10px;
  width: 200px;
}

.example-container > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
}
```

Wenn vier `<grid-line>` Werte angegeben sind, wird `grid-row-start` auf den ersten Wert gesetzt, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert.

Wenn `grid-column-end` weggelassen wird, wird `grid-column-end` auf das `<custom-ident>` gesetzt, wenn `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird, wird `grid-row-end` auf das `<custom-ident>` gesetzt, wenn `grid-row-start` ein `<custom-ident>` ist; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird, werden alle vier Langformen auf diesen Wert gesetzt, wenn `grid-row-start` ein `<custom-ident>` ist. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area` Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich dient, der dann mittels {{cssxref("grid-template-areas")}} platziert werden kann.

## Zusammengesetzte Eigenschaften

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Rasterelements beiträgt und eine automatische Platzierung oder eine Standardspanne von `1` anzeigt.
- `<custom-ident>`
  - : Falls eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` existiert, trägt sie die erste solche Linie zur Platzierung des Rasterelements bei.

    > [!NOTE]
    > Benannte Rasterbereiche generieren automatisch implizit benannte Linien dieser Form. Wird also `grid-area: foo;` angegeben, wählt dies die Start-/Endkante des benannten Rasterbereichs (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies so behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Rasterlinie zur Platzierung des Rasterelements bei. Wenn eine negative Ganzzahl angegeben ist, wird stattdessen rückwärts gezählt, beginnend vom Endrand des expliziten Rasters.

    Falls ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien diesen Namen zu Zwecken der Bestimmung dieser Position haben.

    Ein {{cssxref("&lt;integer&gt;")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Rasterspanne zur Platzierung des Rasterelements bei, sodass die entsprechende Kante des Rasterbereichs _n_ Linien von der gegenüberliegenden Kante entfernt ist.

    Falls ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Rasterlinien auf der Seite des expliziten Rasters, die der Suchrichtung entspricht, diesen Namen zu Zwecken der Zählung dieser Spanne haben.

    Wenn das {{cssxref("&lt;integer&gt;")}} ausgelassen wird, ist es standardmäßig `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Rasterbereiche festlegen

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
- [Raster-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- Video: [Raster-Template-Bereiche](https://gridbyexample.com/video/grid-template-areas/)
