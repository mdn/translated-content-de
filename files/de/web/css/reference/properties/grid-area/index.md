---
title: grid-area
slug: Web/CSS/Reference/Properties/grid-area
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`grid-area`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) bestimmt die Größe und Position eines Grid-Elements innerhalb eines {{Glossary("grid", "Grids")}}, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu dessen Grid-Platzierung beiträgt und damit die Ränder seines {{Glossary("grid_areas", "Grid-Bereichs")}} festlegt.

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

Wenn vier `<grid-line>` Werte angegeben sind, wird `grid-row-start` auf den ersten Wert, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert gesetzt.

Wird `grid-column-end` weggelassen und ist `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}}, wird `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wird `grid-row-end` weggelassen und ist `grid-row-start` ein `<custom-ident>`, wird `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wird `grid-column-start` weggelassen und ist `grid-row-start` ein `<custom-ident>`, werden alle vier Langformen auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area` Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich dient, der dann durch {{cssxref("grid-template-areas")}} platziert werden kann.

## Bestanteilende Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("grid-row-start")}}
- {{cssxref("grid-column-start")}}
- {{cssxref("grid-row-end")}}
- {{cssxref("grid-column-end")}}

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Grid-Elements beiträgt und auf Auto-Platzierung oder eine Standardschspanne von `1` hinweist.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` gibt, trägt es die erste dieser Linien zur Platzierung des Grid-Elements bei.

    > [!NOTE]
    > Benannte Gridbereiche generieren automatisch implizite benannte Linien in dieser Form. Das heißt, wenn `grid-area: foo;` angegeben wird, wird die Anfangs-/Endkante dieses benannten Gridbereichs gewählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies so behandelt, als wäre die ganze Zahl `1` zusammen mit dem `<custom-ident>` angegeben worden.

- `<integer> && <custom-ident>?`
  - : Trägt die n-te Gridlinie zur Platzierung des Grid-Elements bei. Wenn eine negative Ganzzahl angegeben wird, zählt sie stattdessen rückwärts vom Endrand des expliziten Grids.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gridlinien für diesen Zweck diesen Namen haben.

    Ein {{cssxref("&lt;integer&gt;")}} Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Gridspanne zur Platzierung des Grid-Elements bei, sodass der entsprechende Rand des Gridbereichs des Grid-Elements _n_ Linien vom gegenüberliegenden Rand entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben wird, werden nur Linien mit diesem Namen gezählt. Wenn nicht genug Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gridlinien auf der Seite des expliziten Grids, die der Suchrichtung entspricht, für diesen Zweck diesen Namen haben.

    Wenn der {{cssxref("&lt;integer&gt;")}} weggelassen wird, ist der Standardwert `1`. Negative Ganzzahlen oder `0` sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grid-Bereiche festlegen

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
- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- Video: [Grid-Template-Bereiche](https://gridbyexample.com/video/grid-template-areas/)
