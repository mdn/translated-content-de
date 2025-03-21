---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die **`max-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) der {{cssxref("width")}} Eigenschaft größer wird als der durch `max-width` angegebene Wert.

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
  - : Definiert die `max-width` als Prozentsatz der Breite des umgebenden Blocks.
- `none`
  - : Keine Begrenzung der Boxgröße.
- `max-content`
  - : Die intrinsisch bevorzugte `max-width`.
- `min-content`
  - : Die intrinsisch minimale `max-width`.
- `fit-content`
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die maximale Breite der [Randbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Randbox zu füllen, so dass es sich in gewisser Weise ähnlich wie `100%` verhält, aber die resultierende Größe auf die Randbox anwendet und nicht auf die Box, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um Aliase zu überprüfen, die von Browsern für den Wert `stretch` verwendet werden, sowie dessen Implementierungsstatus, siehe die [Browser-Kompatibilität](#browser-kompatibilität) Sektion.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einem `max-width` nicht abgeschnitten werden und/oder andere Inhalte nicht verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis für WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximalbreite in Pixel festlegen

In diesem Beispiel wird das "child" entweder 150 Pixel breit sein oder die Breite des "parent", je nachdem, welches kleiner ist.

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
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
