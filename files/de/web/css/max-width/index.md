---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`max-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Breite eines Elements fest. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der Eigenschaft {{cssxref("width")}} größer wird als der durch `max-width` angegebene Wert.

{{InteractiveExample("CSS Demo: max-width")}}

```css interactive-example-choice
max-width: 150px;
```

```css interactive-example-choice
max-width: 20em;
```

```css interactive-example-choice
max-width: 75%;
```

```css interactive-example-choice
max-width: 20ch;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Change the maximum width.
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

`max-width` überschreibt {{cssxref("width")}}, aber {{cssxref("min-width")}} überschreibt `max-width`.

## Syntax

```css
/* <length> value */
max-width: 3.5em;
max-width: anchor-size(--myAnchor inline, 245px);
max-width: calc(anchor-size(width) + 4em);

/* <percentage> value */
max-width: 75%;

/* Keyword values */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fit-content(20em);
max-width: stretch;

/* Global values */
max-width: inherit;
max-width: initial;
max-width: revert;
max-width: revert-layer;
max-width: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert die `max-width` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-width` als Prozentsatz der Breite des umschließenden Blocks.
- `none`
  - : Kein Limit für die Größe des Kastens.
- `max-content`
  - : Die intrinsische bevorzugte `max-width`.
- `min-content`
  - : Die intrinsische minimale `max-width`.
- `fit-content`
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der maximalen Breite des [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) eines Elements auf die Breite seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Sie versucht, die Margin-Box zu füllen, um den verfügbaren Platz im umschließenden Block zu nutzen, und verhält sich so ähnlich wie `100%`, aber die resultierende Größe wird auf die Margin-Box angewendet und nicht auf die Box, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um zu überprüfen, welche Aliase von Browsern für den `stretch`-Wert verwendet werden und dessen Implementierungsstatus, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `max-width` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verstehen des Erfolgskriteriums 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximalbreite in Pixeln festlegen

In diesem Beispiel wird das "Kind"-Element entweder 150 Pixel breit oder so breit wie das "Eltern"-Element, je nachdem, welches kleiner ist.

#### HTML

```html
<div id="parent">
  <div id="child">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

#### CSS

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_max_width_in_pixels", 350, 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("min-width")}}
- {{Cssxref("width")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("box-sizing")}}
- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
