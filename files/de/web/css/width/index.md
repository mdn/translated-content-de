---
title: width
slug: Web/CSS/width
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Die **`width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Breite eines Elements fest. Standardmäßig wird die Breite des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area) gesetzt. Ist jedoch {{cssxref("box-sizing")}} auf `border-box` eingestellt, wird die Breite des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) festgelegt.

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
  color: #ffffff;
}
```

Der angegebene Wert von `width` gilt für den Inhaltsbereich, solange dieser Wert innerhalb der durch {{cssxref("min-width")}} und {{cssxref("max-width")}} definierten Werte bleibt.

- Wenn der Wert für `width` kleiner ist als der Wert für `min-width`, dann überschreibt `min-width` den `width`-Wert.
- Wenn der Wert für `width` größer ist als der Wert für `max-width`, dann überschreibt `max-width` den `width`-Wert.

> [!NOTE]
> Als geometrische Eigenschaft gilt `width` auch für die SVG-Elemente {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}}, wobei `auto` bei `<svg>` auf `100%` und bei anderen Elementen auf `0` aufgelöst wird und Prozentwerte relativ zur SVG-Viewport-Breite bei `<rect>` sind. Der CSS `width`-Eigenschaftswert überschreibt jeden SVG {{SVGAttr("width")}}-Attributwert, der auf dem SVG-Element gesetzt ist.

## Syntax

```css
/* <length> values */
width: 300px;
width: 25em;
width: anchor-size(width);
width: anchor-size(--myAnchor inline, 120%);

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
  - : Definiert die Breite als Distanzwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Breite als Prozentsatz der Breite des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Breite für das angegebene Element aus.
- `max-content`
  - : Die intrinsische bevorzugte Breite.
- `min-content`
  - : Die intrinsische Mindestbreite.
- `fit-content`
  - : Nutzt den verfügbaren Raum, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die fit-content-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Breite des [Randbereichs](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es wird versucht, den Randbereich so zu füllen, dass er den verfügbaren Raum im umgebenden Block ausnutzt, verhält sich also ähnlich wie `100%`, wendet jedoch die resultierende Größe auf den Randbereich an, anstatt auf den durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmten Bereich.

## Barrierefreiheit

Stellen Sie sicher, dass mit einer `width`-Eigenschaft versehene Elemente nicht abgeschnitten werden und/oder andere Inhalte nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN-Verständnis von WCAG, Erklärungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
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

### Beispiel mit Prozentwerten

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

### Breite ausdehnen, um den umgebenden Block zu füllen

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
  background: #0999;
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
- [Einführung in das CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
