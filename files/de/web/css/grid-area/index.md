---
title: grid-area
slug: Web/CSS/grid-area
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`grid-area`** CSS-[Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) gibt die Größe und Position eines Grid-Items innerhalb eines {{Glossary("grid", "Grids")}} an, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu seiner Gitterplatzierung beiträgt und somit die Ränder seines {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

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
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}

#example-element {
  background-color: rgba(255, 0, 200, 0.2);
  border: 3px solid rebeccapurple;
}
```

Wenn vier `<grid-line>`-Werte angegeben sind, wird `grid-row-start` auf den ersten Wert, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert gesetzt.

Wenn `grid-column-end` weggelassen wird, wird, falls `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird, wird, falls `grid-row-start` ein `<custom-ident>` ist, `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird, werden alle vier Langform-Eigenschaften auf diesen Wert gesetzt, falls `grid-row-start` ein `<custom-ident>` ist. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area`-Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich dient, der dann mit Hilfe von {{cssxref("grid-template-areas")}} platziert werden kann.

## Bestandteileneigenschaften

Diese Eigenschaft ist eine Kurzform der folgenden CSS-Eigenschaften:

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Items beiträgt und für automatische Platzierung oder eine standardmäßige Spanne von `1` steht.
- `<custom-ident>`

  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` gibt, trägt sie die erste solche Linie zur Platzierung des Grid-Items bei.

    > [!NOTE]
    > Benannte Grid-Bereiche erzeugen automatisch implizit benannte Linien dieser Form, sodass die Angabe von `grid-area: foo;` den Start-/Endrand des benannten Grid-Bereichs wählt (sofern nicht zuvor explizit eine andere Linie mit dem Namen `foo-start`/`foo-end` definiert wurde).

    Andernfalls wird dies so behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`

  - : Trägt die n-te Gitterlinie zur Platzierung des Grid-Items bei. Wenn eine negative Ganzzahl angegeben wird, wird sie umgekehrt gezählt, beginnend vom Endrand des expliziten Grids.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien für diesen Zweck diesen Namen tragen.

    Ein {{cssxref("&lt;integer&gt;")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`

  - : Trägt eine Gitterspanne zur Platzierung des Grid-Items bei, so dass der entsprechende Rand des Gitterbereichs des Grid-Items _n_ Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitterlinien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, diesen Namen tragen.

    Wenn der {{cssxref("&lt;integer&gt;")}} weggelassen wird, wird standardmäßig `1` angenommen. Negative Ganzzahlen oder 0 sind ungültig.

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
