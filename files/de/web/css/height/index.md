---
title: height
slug: Web/CSS/height
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`height`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt die Höhe eines Elements fest. Standardmäßig definiert diese Eigenschaft die Höhe des [Inhaltsbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area). Wenn {{cssxref("box-sizing")}} auf `border-box` gesetzt ist, wird stattdessen die Höhe des [Randbereichs](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area) bestimmt.

{{EmbedInteractiveExample("pages/css/height.html")}}

Die Eigenschaften {{cssxref("min-height")}} und {{cssxref("max-height")}} überschreiben `height`.

> [!NOTE]
> Als geometrische Eigenschaft gilt `height` auch für die {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}} und {{SVGElement("foreignObject")}}-SVG-Elemente, wobei sich `auto` auf `0` auflöst und Prozentwerte relativ zur Höhe des SVG-Viewports für `<rect>` sind. Der CSS-`height`-Wert überschreibt jeden in einem SVG-Element gesetzten {{SVGAttr("height")}}-Attributwert.

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
  - : Definiert die Höhe als einen Distanzwert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die Höhe als einen Prozentsatz der Höhe des [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block).
- `auto`
  - : Der Browser berechnet und wählt eine Höhe für das angegebene Element aus.
- `max-content`
  - : Die bevorzugte intrinsische Höhe.
- `min-content`
  - : Die minimale intrinsische Höhe.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d. h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die fit-content-Formel mit dem verfügbaren Raum, der durch das angegebene Argument ersetzt wird, d. h. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Setzt die Höhe der [Aussenabgrenzung](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Ziel ist es, die Außenabgrenzung so zu gestalten, dass der verfügbare Platz im umschließenden Block ausgefüllt wird. In gewisser Weise verhält sich dies ähnlich zu `100%`, jedoch wird die resultierende Größe auf die Außenabgrenzung angewendet anstelle des Bereichs, der von [box-sizing](/de/docs/Web/CSS/box-sizing) definiert wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliases für den Wert `stretch` und deren Implementierungsstatus zu überprüfen, sehen Sie im Abschnitt [Browser-Kompatibilität](#browser_kompatibilität) nach.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einer `height` gesetzt sind, nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN-Verständnis des WCAG-Leitfadens 1.4: Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung Erfolgskriterium 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Höhe mithilfe von Pixeln und Prozentsätzen einstellen

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
- SVG {{SVGAttr("height")}}-Attribut
- [Einführung zum grundlegenden CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
