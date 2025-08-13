---
title: height
slug: Web/CSS/height
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Höhe eines Elements fest. Standardmäßig definiert die Eigenschaft die Höhe des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area). Wenn jedoch {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, bestimmt sie stattdessen die Höhe des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area).

{{InteractiveExample("CSS Demo: height")}}

```css interactive-example-choice
height: 150px;
```

```css interactive-example-choice
height: 6em;
```

```css interactive-example-choice
height: 75%;
```

```css interactive-example-choice
height: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the height.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: white;
}
```

Die Eigenschaften {{cssxref("min-height")}} und {{cssxref("max-height")}} überschreiben `height`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `height` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` zu `0` aufgelöst wird und Prozentwerte relativ zur SVG-Ansichtshöhe für `<rect>` sind. Der CSS `height` Eigenschaftswert überschreibt jeden SVG {{SVGAttr("height")}} Attributwert, der auf dem SVG-Element festgelegt ist.

## Syntax

```css
/* <length> values */
height: 120px;
height: 10em;
height: 100vh;
height: anchor-size(height);
height: anchor-size(--my-anchor self-block, 250px);
height: clamp(200px, anchor-size(width));

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;
height: stretch;

/* Global values */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die Höhe als Distanzwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Höhe als Prozentsatz der Höhe des [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Höhe für das angegebene Element aus.
- `max-content`
  - : Die intrinsische bevorzugte Höhe.
- `min-content`
  - : Die intrinsische Mindesthöhe.
- `fit-content`
  - : Verwendet den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die Fit-Content-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, also `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`
  - : Setzt die Höhe der [Randbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Randbox zu füllen, ähnlich wie `100%`, wendet jedoch die resultierende Größe auf die Randbox statt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box an.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `height`-Einstellung nicht abgeschnitten oder andere Inhalte verdeckt werden, wenn die Seite herangezoomt wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständigung WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Höhe mit Pixeln und Prozentsätzen festlegen

#### HTML

```html
<div id="taller">I'm 50 pixels tall.</div>
<div id="shorter">I'm 25 pixels tall.</div>
<div id="parent">
  <div id="child">I'm half the height of my parent.</div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_height_using_pixels_and_percentages', 'auto', 240)}}

### Höhe strecken, um den umschließenden Block zu füllen

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
@supports not (height: stretch) {
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
  height: 150px;
  margin: 1rem;
  border: solid;
}

.child {
  margin: 1rem;
  background: #00999999;
}

.stretch {
  height: stretch;
}
```

#### Ergebnis

{{EmbedLiveSample('Stretch height to fill the containing block', 'auto', 380)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("minmax", "minmax()")}}
- SVG {{SVGAttr("height")}} Attribut
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
