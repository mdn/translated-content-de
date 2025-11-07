---
title: grid-area
slug: Web/CSS/Reference/Properties/grid-area
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`grid-area`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) legt die Größe und Position eines Rasterelements innerhalb eines {{Glossary("grid", "Rasters")}} fest, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Rasterplatzierung beiträgt, und damit die Ränder seines {{Glossary("grid_areas", "Rasterbereichs")}} definiert.

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

Wenn vier `<grid-line>` Werte angegeben werden, wird `grid-row-start` auf den ersten Wert gesetzt, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert.

Wenn `grid-column-end` weggelassen wird und `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, wird `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird und `grid-row-start` ein `<custom-ident>` ist, wird `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird und `grid-row-start` ein `<custom-ident>` ist, werden alle vier Einzelwerte auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area` Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich fungiert, der dann mit {{cssxref("grid-template-areas")}} platziert werden kann.

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`grid-row-start`](/de/docs/Web/CSS/Reference/Properties/grid-row-start)
- [`grid-column-start`](/de/docs/Web/CSS/Reference/Properties/grid-column-start)
- [`grid-row-end`](/de/docs/Web/CSS/Reference/Properties/grid-row-end)
- [`grid-column-end`](/de/docs/Web/CSS/Reference/Properties/grid-column-end)

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Rasterelements beiträgt, was auf eine automatische Platzierung oder eine Standardspanne von `1` hinweist.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` gibt, trägt sie die erste derartige Linie zur Platzierung des Rasterelements bei.

    > [!NOTE]
    > Benannte Rasterbereiche erzeugen automatisch implizite benannte Linien dieser Form, daher wird bei der Angabe von `grid-area: foo;` der Start-/Endrand dieses benannten Rasterbereichs gewählt (sofern nicht zuvor eine andere Linie namens `foo-start`/`foo-end` explizit angegeben wurde).

    Andernfalls wird dies behandelt, als wäre die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Rasterlinie zur Platzierung des Rasterelements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts, beginnend vom Endrand des expliziten Rasters.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Rasterlinien für diesen Zweck diesen Namen haben.

    Ein {{cssxref("&lt;integer&gt;")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Rasterspanne zur Platzierung des Rasterelements bei, so dass der entsprechende Rand des Rasterbereichs des Elements _n_ Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen vorhanden sind, wird davon ausgegangen, dass alle impliziten Rasterlinien auf der Seite des expliziten Rasters, das der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn das {{cssxref("&lt;integer&gt;")}} weggelassen wird, beträgt es standardmäßig `1`. Negative Ganzzahlen oder `0` sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen von Rasterbereichen

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
- [Rastervorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- Video: [Rastervorlagenbereiche](https://gridbyexample.com/video/grid-template-areas/)
