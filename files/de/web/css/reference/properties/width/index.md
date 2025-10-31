---
title: width
slug: Web/CSS/Reference/Properties/width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Breite eines Elements fest. Standardmäßig setzt sie die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area), aber wenn {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, legt sie die Breite des [Rahmenbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) fest.

{{InteractiveExample("CSS Demo: width")}}

```css interactive-example-choice
width: 150px;
```

```css interactive-example-choice
width: 20em;
```

```css interactive-example-choice
width: 75%;
```

```css interactive-example-choice
width: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange sein Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert für `width` kleiner als der Wert für `min-width` ist, dann überschreibt `min-width` `width`.
- Wenn der Wert für `width` größer als der Wert für `max-width` ist, dann überschreibt `max-width` `width`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}}, und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` für `<svg>` zu `100%` und für andere Elemente zu `0` aufgelöst wird, und Prozentwerte relativ zur Breite des SVG-Ansichtsfensters für `<rect>` sind. Der CSS-Wert der Eigenschaft `width` überschreibt jeden auf dem SVG-Element gesetzten Wert des SVG-Attributes {{SVGAttr("width")}}.

## Syntax

```css
/* <length> values */
width: 300px;
width: 25em;
width: anchor-size(width);
width: anchor-size(--my-anchor inline, 120%);

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;
width: stretch;

/* Global values */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die Breite als einen Distanzwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Breite als Prozentsatz der Breite des [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das spezifizierte Element aus.
- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte Breite.
- {{cssxref("min-content")}}
  - : Die intrinsische Mindestbreite.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/fit-content_function)
  - : Verwendet die fit-content-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`
  - : Setzt die Breite der [Randbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umfassenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Randbox so zu gestalten, dass sie den verfügbaren Platz im umfassenden Block ausfüllt, verhält sich also in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Randbox anstelle der durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box an.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, deren `width` festgelegt ist, beim Zoomen der Seite, um die Textgröße zu erhöhen, nicht abgeschnitten und/oder anderer Inhalt nicht verdeckt wird.

- [MDN Verständnis von WCAG, Erklärung der Leitlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Standardbreite

```css
p.gold {
  background: gold;
}
```

```html
<p class="gold">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

### Beispiel mit Pixeln und ems

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

{{EmbedLiveSample('Example using pixels and ems', '500px', '64px')}}

### Beispiel mit Prozentsatz

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Width in percentage</div>
```

{{EmbedLiveSample('Example using percentage', '500px', '64px')}}

### Beispiel mit "max-content"

```css
p.max-green {
  background: lightgreen;
  width: max-content;
}
```

```html
<p class="max-green">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### Beispiel mit "min-content"

```css
p.min-blue {
  background: lightblue;
  width: min-content;
}
```

```html
<p class="min-blue">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

### Breite strecken, um den umfassenden Block auszufüllen

#### HTML

```html
<div class="parent">
  <div class="child">text</div>
</div>

<div class="parent">
  <div class="child stretch">stretch</div>
</div>
```

#### CSS

```css hidden
@supports not (width: stretch) {
  .parent {
    display: none !important;
  }

  body::after {
    content: "Your browser doesn't support the `stretch` value yet.";
  }
}
```

```css
.parent {
  border: solid;
  margin: 1rem;
  display: flex;
}

.child {
  background: #00999999;
  margin: 1rem;
}

.stretch {
  width: stretch;
}
```

#### Ergebnis

{{EmbedLiveSample('Stretch width to fill the containing block', 'auto', 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- SVG {{SVGAttr("width")}} Attribut
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
