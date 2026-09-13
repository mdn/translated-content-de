---
title: "`max-width` CSS property"
short-title: max-width
slug: Web/CSS/Reference/Properties/max-width
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`max-width`** legt die maximale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Eigenschaft {{cssxref("width")}} größer wird als der durch `max-width` angegebene Wert.

`max-width` überschreibt {{cssxref("width")}}, aber {{cssxref("min-width")}} überschreibt `max-width`.

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
  color: white;
}
```

## Syntax

```css
/* <length> value */
max-width: 3.5em;
max-width: anchor-size(--my-anchor inline, 245px);
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
  - : Definiert `max-width` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert `max-width` als Prozentsatz der Breite des enthaltenden Blocks.
- `none`
  - : Keine Begrenzung für die Größe der Box.
- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte `max-width`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `max-width`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die maximale Breite der [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box den verfügbaren Platz im enthaltenden Block ausfüllen zu lassen und verhält sich damit in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box statt auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box an.

    > [!NOTE]
    > Informationen zu den von Browsern für den Wert `stretch` verwendeten Aliassen und zu seinem Implementierungsstatus finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit festgelegtem `max-width` nicht abgeschnitten werden und/oder keine anderen Inhalte verdecken, wenn die Seite gezoomt wird, um die Textgröße zu erhöhen.

- [MDN-Erklärungen zum Verständnis von WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.4 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximale Breite in Pixeln festlegen

In diesem Beispiel ist das „child“ entweder 150 Pixel breit oder so breit wie das „parent“, je nachdem, welcher Wert kleiner ist.

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
- Leitfaden [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
