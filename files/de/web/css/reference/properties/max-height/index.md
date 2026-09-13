---
title: "`max-height` CSS property"
short-title: max-height
slug: Web/CSS/Reference/Properties/max-height
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`max-height`** legt die maximale Höhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der Eigenschaft {{cssxref("height")}} größer wird als der für `max-height` angegebene Wert.

`max-height` überschreibt {{cssxref("height")}}, aber {{cssxref("min-height")}} überschreibt `max-height`.

{{InteractiveExample("CSS Demo: max-height")}}

```css interactive-example-choice
max-height: 150px;
```

```css interactive-example-choice
max-height: 7em;
```

```css interactive-example-choice
max-height: 75%;
```

```css interactive-example-choice
max-height: 10px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the maximum height. <br />This will limit
    how tall the box can be, potentially causing an overflow.
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

## Syntax

```css
/* <length> value */
max-height: 3.5em;
max-height: anchor-size(height);
max-height: calc(anchor-size(--my-anchor self-block, 250px) + 2em);

/* <percentage> value */
max-height: 75%;

/* Keyword values */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fit-content(20em);
max-height: stretch;

/* Global values */
max-height: inherit;
max-height: initial;
max-height: revert;
max-height: revert-layer;
max-height: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Definiert `max-height` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert `max-height` als Prozentsatz der Höhe des enthaltenden Blocks.
- `none`
  - : Keine Begrenzung für die Größe der Box.
- {{cssxref("max-content")}}
  - : Die intrinsisch bevorzugte `max-height`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `max-height`.
- {{cssxref("fit-content")}}
  - : Verwendet den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die maximale Höhe der [margin box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [enthaltenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es wird versucht, die margin box den verfügbaren Platz im enthaltenden Block ausfüllen zu lassen, sodass sich dies ähnlich wie `100%` verhält, die resultierende Größe jedoch auf die margin box statt auf die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmte Box angewendet wird.

    > [!NOTE]
    > Informationen zu von Browsern für den Wert `stretch` verwendeten Aliasnamen und zu dessen Implementierungsstatus finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer gesetzten `max-height` beim Zoomen der Seite zur Vergrößerung der Textgröße nicht abgeschnitten werden und/oder andere Inhalte verdecken.

- [MDN-Erklärungen zu WCAG, Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erfolgskriterium 1.4.4 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### max-height mithilfe von Prozent- und Schlüsselwortwerten festlegen

```css
table {
  max-height: 75%;
}

form {
  max-height: none;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("min-height")}}
- {{Cssxref("height")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("max-block-size")}}
- {{cssxref("box-sizing")}}
- Leitfaden [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
