---
title: height
slug: Web/CSS/height
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`height`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert die Höhe eines Elements. Standardmäßig definiert die Eigenschaft die Höhe des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area). Wenn jedoch {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, bestimmt sie stattdessen die Höhe des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/height.html")}}

Die Eigenschaften {{cssxref("min-height")}} und {{cssxref("max-height")}} überschreiben `height`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `height` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}} SVG-Elemente, wobei `auto` zu `0` aufgelöst wird und Prozentwerte relativ zur SVG-Ansichtshöhe für `<rect>` sind. Der CSS `height`-Eigenschaftswert überschreibt jeden SVG-{{SVGAttr("height")}}-Attributwert, der auf dem SVG-Element festgelegt ist.

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
  - : Definiert die Höhe als einen Entfernungswert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Höhe als Prozentwert der Höhe des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Höhe für das angegebene Element.
- `max-content`
  - : Die intrinsische bevorzugte Höhe.
- `min-content`
  - : Die intrinsische Mindesthöhe.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die fit-content-Formel mit dem angegebenen Argument anstelle des verfügbaren Raums, d.h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Höhe des [Randbereichs](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, den Randbereich so zu gestalten, dass er den verfügbaren Raum im umgebenden Block füllt, ähnlich wie `100%`, aber die resultierende Größe auf den Randbereich anwendend, anstatt auf den durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmten Bereich.

    > [!NOTE]
    > Um Aliase zu prüfen, die von Browsern für den Wert `stretch` verwendet werden, und dessen Implementierungsstatus, sehen Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) nach.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer festgelegten `height` nicht abgeschnitten werden und/oder andere Inhalte verdecken, wenn die Seite zum Vergrößern der Textgröße gezoomt wird.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis von Erfolgskriterium 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

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
- {{cssxref("clamp", "minmax()")}}
- SVG {{SVGAttr("height")}} Attribut
- [Einführung in das CSS-Grundlegende Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
