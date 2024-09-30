---
title: height
slug: Web/CSS/height
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`height`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt die Höhe eines Elements. Standardmäßig definiert die Eigenschaft die Höhe des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area). Wenn {{cssxref("box-sizing")}} jedoch auf `border-box` gesetzt ist, bestimmt sie stattdessen die Höhe des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/height.html")}}

Die Eigenschaften {{cssxref("min-height")}} und {{cssxref("max-height")}} überschreiben `height`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `height` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` zu `0` aufgelöst wird und Prozentwerte sich für `<rect>` auf die SVG-Viewport-Höhe beziehen. Der CSS `height`-Wert überschreibt jegliche SVG {{SVGAttr("height")}} Attributwerte, die am SVG-Element festgelegt sind.

## Syntax

```css
/* <length> values */
height: 120px;
height: 10em;
height: 100vh;
height: anchor-size(height);
height: anchor-size(--myAnchor self-block, 250px);
height: clamp(200px, anchor-size(width));

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;
height: minmax(min-content, anchor-size(width));
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
  - : Definiert die Höhe als Streckenwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Höhe als Prozentsatz der Höhe des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Höhe für das angegebene Element aus.
- `max-content`
  - : Die intrinsisch bevorzugte Höhe.
- `min-content`
  - : Die intrinsisch minimale Höhe.
- `fit-content`
  - : Nutzt den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die Fit-Content-Formel mit dem verfügbaren Platz ersetzt durch das angegebene Argument, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Höhe der [Randkästchen](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Höhe seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, das Randkästchen so zu gestalten, dass es den verfügbaren Platz im umgebenden Block ausfüllt, und verhält sich damit ähnlich wie `100%`, wendet jedoch die resultierende Größe auf das Randkästchen anstatt auf das durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Kästchen an.

    > [!NOTE]
    > Um Aliase zu überprüfen, die von Browsern für den Wert `stretch` verwendet werden, und seinen Implementierungsstatus, siehe die [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit festgelegter `height` beim Vergrößern der Seite, um die Textgröße zu erhöhen, nicht abgeschnitten werden und/oder andere Inhalte verdecken.

- [MDN-Verständnis von WCAG, Erklärungen zur Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C-Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Höhe mit Pixeln und Prozentwerten festlegen

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("clamp", "minmax()")}}
