---
title: max-height
slug: Web/CSS/max-height
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die **`max-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Höhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) der {{cssxref("height")}} Eigenschaft größer wird als der für `max-height` angegebene Wert.

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
  color: #ffffff;
}
```

`max-height` überschreibt {{cssxref("height")}}, aber {{cssxref("min-height")}} überschreibt `max-height`.

## Syntax

```css
/* <length> value */
max-height: 3.5em;
max-height: anchor-size(height);
max-height: calc(anchor-size(--myAnchor self-block, 250px) + 2em);

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
  - : Definiert die `max-height` als einen absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-height` als einen Prozentsatz der Höhe des umschließenden Blocks.
- `none`
  - : Keine Begrenzung der Boxgröße.
- `max-content`
  - : Die intrinsische bevorzugte `max-height`.
- `min-content`
  - : Die intrinsische minimale `max-height`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), also `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, also `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der maximalen Höhe des [Margin-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Höhe seines [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, den Margin-Box-Raum im umschließenden Block vollständig auszufüllen, verhält sich also ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box anstatt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box an.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den Wert `stretch` und dessen Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `max-height` nicht abgeschnitten werden und/oder keine anderen Inhalte verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Richtlinien 1.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formalen Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von max-height mit Prozentwerten und Schlüsselwortwerten

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
- [Einführung in das CSS-Basis-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
