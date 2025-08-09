---
title: max-height
slug: Web/CSS/max-height
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`max-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Höhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) der {{cssxref("height")}} Eigenschaft größer wird als der für `max-height` angegebene Wert.

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

`max-height` überschreibt {{cssxref("height")}}, aber {{cssxref("min-height")}} überschreibt `max-height`.

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
  - : Definiert die `max-height` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-height` als Prozentsatz der Höhe des umgebenden Blocks.
- `none`
  - : Keine Begrenzung der Box-Größe.
- `max-content`
  - : Die intrinsische bevorzugte `max-height`.
- `min-content`
  - : Die intrinsisch minimale `max-height`.
- `fit-content`
  - : Nutzt den verfügbaren Raum, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content` Formel mit dem durch das angegebene Argument ersetzten verfügbaren Raum, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`
  - : Begrenzt die maximale Höhe der [Margin Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) eines Elements auf die Höhe des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, die Margin Box so zu gestalten, dass sie den verfügbaren Raum im umgebenden Block ausfüllt, ähnlich wie `100%`, aber die resultierende Größe auf die Margin Box anwendet und nicht auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den `stretch` Wert und dessen Implementierungsstatus zu prüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `max-height` nicht abgeschnitten werden und/oder keine anderen Inhalte verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Leitfaden zum Verständnis der WCAG, Erklärung der Richtlinie 1.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von max-height mit Prozent- und Schlüsselwortwerten

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
- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model) Leitfaden
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
