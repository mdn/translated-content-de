---
title: "`grid-area` CSS-Eigenschaft"
short-title: grid-area
slug: Web/CSS/Reference/Properties/grid-area
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`grid-area`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) definiert die Größe und Position eines Gitternetz-Elements innerhalb eines {{Glossary("grid", "Gitternetzes")}}, indem sie eine Linie, eine Spanne oder nichts (automatisch) zu dessen Gitternetzplatzierung beiträgt und so die Ränder seines {{Glossary("grid_areas", "Gitternetzbereichs")}} festlegt.

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

Wenn vier `<grid-line>`-Werte angegeben sind, wird `grid-row-start` auf den ersten Wert gesetzt, `grid-column-start` auf den zweiten Wert, `grid-row-end` auf den dritten Wert und `grid-column-end` auf den vierten Wert.

Wenn `grid-column-end` weggelassen wird und `grid-column-start` ein {{cssxref("&lt;custom-ident&gt;")}} ist, wird `grid-column-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-row-end` weggelassen wird und `grid-row-start` ein `<custom-ident>` ist, wird `grid-row-end` auf dieses `<custom-ident>` gesetzt; andernfalls wird es auf `auto` gesetzt.

Wenn `grid-column-start` weggelassen wird und `grid-row-start` ein `<custom-ident>` ist, werden alle vier Langformen auf diesen Wert gesetzt. Andernfalls wird es auf `auto` gesetzt.

Die `grid-area`-Eigenschaft kann auch auf ein {{cssxref("&lt;custom-ident&gt;")}} gesetzt werden, das als Name für den Bereich fungiert und dann mit {{cssxref("grid-template-areas")}} platziert werden kann.

## Bestandteileigenschaften

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
  - : Ist ein Schlüsselwort, das angibt, dass die Eigenschaft nichts zur Platzierung des Gitternetz-Elements beiträgt. Dies weist auf eine automatische Platzierung oder eine Standardspanne von `1` hin.
- `<custom-ident>`
  - : Wenn es eine benannte Linie mit dem Namen `<custom-ident>-start` oder `<custom-ident>-end` gibt, trägt es die erste solche Linie zur Platzierung des Gitternetz-Elements bei.

    > [!NOTE]
    > Benannte Gitternetzbereiche erzeugen automatisch implizite benannte Linien dieser Form, sodass z.B. die Angabe `grid-area: foo;` die Start-/Endkante dieses benannten Gitternetzbereichs auswählt (es sei denn, eine andere Linie mit dem Namen `foo-start`/`foo-end` wurde vorher explizit angegeben).

    Andernfalls wird dies behandelt, als ob die Ganzzahl `1` zusammen mit dem `<custom-ident>` angegeben worden wäre.

- `<integer> && <custom-ident>?`
  - : Trägt zur Platzierung des n-ten Gitternetz-Linien beim Gitternetz-Element bei. Wenn eine negative Ganzzahl angegeben ist, wird stattdessen rückwärts gerechnet, angefangen bei der Endkante des expliziten Gitternetzes.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitternetzlinien diesen Namen haben, um diese Position zu finden.

    Ein {{cssxref("&lt;integer&gt;")}}-Wert von `0` ist ungültig.

- `span && [ <integer> || <custom-ident> ]`
  - : Trägt eine Gitternetzspanne zur Platzierung des Gitternetz-Elements bei, sodass die entsprechende Kante des Gitternetzbereichs des Gitternetz-Elements _n_ Linien von der gegenüberliegenden Kante entfernt ist.

    Wenn ein Name als {{cssxref("&lt;custom-ident&gt;")}} angegeben ist, werden nur Linien mit diesem Namen gezählt. Wenn nicht genügend Linien mit diesem Namen existieren, wird angenommen, dass alle impliziten Gitternetzlinien auf der Seite des expliziten Gitternetzes, die der Suchrichtung entspricht, diesen Namen haben, um diese Spanne zu zählen.

    Wenn die {{cssxref("&lt;integer&gt;")}} weggelassen wird, beträgt sie standardmäßig `1`. Negative Ganzzahlen oder 0 sind ungültig.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gitternetzbereiche festlegen

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
- [Gitternetz-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
- Video: [Gitternetz-Template-Bereiche](https://gridbyexample.com/video/grid-template-areas/)
