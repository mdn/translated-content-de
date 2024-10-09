---
title: max-height
slug: Web/CSS/max-height
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`max-height`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Höhe eines Elements fest. Sie verhindert, dass der [verwendete Wert](/de/docs/Web/CSS/used_value) der {{cssxref("height")}} Eigenschaft größer wird als der für `max-height` angegebene Wert.

{{EmbedInteractiveExample("pages/css/max-height.html")}}

`max-height` übersteuert {{cssxref("height")}}, aber {{cssxref("min-height")}} übersteuert `max-height`.

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
  - : Definiert die `max-height` als Prozentsatz der Höhe des umschließenden Blocks.
- `none`
  - : Keine Begrenzung der Größe des Kastens.
- `max-content`
  - : Die intrinsisch bevorzugte `max-height`.
- `min-content`
  - : Die intrinsische Mindesthöhe `max-height`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der maximalen Höhe des [Margin-Kastens](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Höhe des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, den Margin-Kasten so zu füllen, dass er den verfügbaren Platz im umschließenden Block einnimmt, ähnlich wie `100%`, wobei die resultierende Größe jedoch auf den Margin-Kasten und nicht auf den durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmten Kasten angewendet wird.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den Wert `stretch` und dessen Implementierungsstatus zu überprüfen, sehen Sie sich den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) an.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `max-height` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Leitfaden 1.4-Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von max-height mit Prozentwerten und Schlüsselwörtern

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
- [Einführung in das grundlegende CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
