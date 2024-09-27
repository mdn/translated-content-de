---
title: max-height
slug: Web/CSS/max-height
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`max-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Höhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("height")}} Eigenschaft größer wird als der für `max-height` angegebene Wert.

{{EmbedInteractiveExample("pages/css/max-height.html")}}

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
  - : Definiert die `max-height` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert die `max-height` als Prozentsatz der Höhe des umgebenden Blocks.
- `none`
  - : Keine Begrenzung der Größe des Kastens.
- `max-content`
  - : Die intrinsische bevorzugte `max-height`.
- `min-content`
  - : Die intrinsische minimale `max-height`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, der durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der maximalen Höhe des [Margin-Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Höhe seines [beinhaltenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box an den verfügbaren Raum im beinhaltenden Block anzupassen, verhält sich also in gewisser Weise ähnlich wie `100%`, wobei die resultierende Größe jedoch auf die Margin-Box angewendet wird, anstatt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box.

    > [!NOTE]
    > Um die von Browsern für den `stretch`-Wert verwendeten Aliase und den Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit `max-height` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis WCAG, Leitlinie 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis Erfolgskriterium 1.4.4 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen von max-height mit Prozent- und Schlüsselwortwerten

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

- [Das Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{Cssxref("height")}}, {{Cssxref("min-height")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}
