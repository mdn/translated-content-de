---
title: max-height
slug: Web/CSS/max-height
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`max-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Höhe eines Elements fest. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/used_value) der {{cssxref("height")}}-Eigenschaft größer wird als der für `max-height` angegebene Wert.

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height` überschreibt {{cssxref("height")}}, aber {{cssxref("min-height")}} überschreibt `max-height`.

## Syntax

```css
/* <length> Wert */
max-height: 3.5em;
max-height: anchor-size(height);
max-height: calc(anchor-size(--myAnchor self-block, 250px) + 2em);

/* <percentage> Wert */
max-height: 75%;

/* Schlüsselwortwerte */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fit-content(20em);
max-height: stretch;

/* Globale Werte */
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
  - : Keine Begrenzung der Größe des Elements.
- `max-content`
  - : Die intrinsisch bevorzugte `max-height`.
- `min-content`
  - : Die intrinsisch minimale `max-height`.
- `fit-content`
  - : Verwendet den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d. h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, ersetzt durch das angegebene Argument, d. h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der maximalen Höhe der [margin box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Höhe des [containenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box so zu gestalten, dass sie den verfügbaren Platz im umgebenden Block ausfüllt, verhält sich also ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box an und nicht auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den Wert `stretch` und dessen Implementierungsstatus zu überprüfen, sehen Sie bitte im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) nach.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `max-height` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite zum Vergrößern der Textgröße gezoomt wird.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung von max-height mit Prozentsatz und Schlüsselwortwerten

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

- [Das Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{Cssxref("height")}}, {{Cssxref("min-height")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}
