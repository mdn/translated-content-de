---
title: max-width
slug: Web/CSS/Reference/Properties/max-width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`max-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Breite eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) der {{cssxref("width")}}-Eigenschaft größer wird als der durch `max-width` angegebene Wert.

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

`max-width` überschreibt {{cssxref("width")}}, aber {{cssxref("min-width")}} überschreibt `max-width`.

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
  - : Definiert die `max-width` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-width` als Prozentsatz der Breite des umgebenden Blocks.
- `none`
  - : Keine Größenbeschränkung der Box.
- {{cssxref("max-content")}}
  - : Die intrinsische bevorzugte `max-width`.
- {{cssxref("min-content")}}
  - : Die intrinsische minimale `max-width`.
- {{cssxref("fit-content")}}
  - : Nutzt den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/Reference/Values/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- [`fit-content(<length-percentage>)`](/de/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Verwendet die `fit-content`-Formel mit dem angegebenen Argument anstelle des verfügbaren Raums, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die maximale Breite der [margin box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite seines [Containerelements](/de/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box den verfügbaren Platz im Containerelement ausfüllen zu lassen, verhält sich also in gewisser Weise ähnlich wie `100%`, jedoch wird die resultierende Größe auf die Margin-Box anstatt auf die Box angewendet, die durch [box-sizing](/de/docs/Web/CSS/Reference/Properties/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um Aliase zu überprüfen, die von Browsern für den `stretch`-Wert verwendet werden, und um den Implementierungsstatus zu sehen, lesen Sie den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente, die mit einer `max-width` versehen sind, nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Erklärung zu WCAG, Richtlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erklärung zum Erfolgskriterium 1.4.4 | W3C Verständnis zu WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximale Breite in Pixeln festlegen

In diesem Beispiel wird das "child" entweder 150 Pixel breit sein oder die Breite des "parent", je nachdem, was kleiner ist.

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul
