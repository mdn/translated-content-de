---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`max-width`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die maximale Breite eines Elements fest. Sie verhindert, dass der [used value](/de/docs/Web/CSS/CSS_cascade/used_value) der {{cssxref("width")}}-Eigenschaft größer wird als der mit `max-width` angegebene Wert.

{{EmbedInteractiveExample("pages/css/max-width.html")}}

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
  - : Definiert `max-width` als absoluten Wert.
- {{cssxref("&lt;percentage&gt;")}}
  - : Definiert `max-width` als Prozentsatz der Breite des umgebenden Blocks.
- `none`
  - : Keine Begrenzung der Box-Größe.
- `max-content`
  - : Die intrinsische bevorzugte `max-width`.
- `min-content`
  - : Die intrinsische minimale `max-width`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), also `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel, wobei der verfügbare Platz durch das angegebene Argument ersetzt wird, also `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Beschränkt die maximale Breite der [margin box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) des Elements auf die Breite des [containing block](/de/docs/Web/CSS/CSS_display/Containing_block#identifying_the_containing_block). Es versucht, dass die Margin-Box den verfügbaren Platz im umgebenden Block ausfüllt und verhält sich dadurch ähnlich wie `100%`, wendet jedoch die resultierende Größe auf die Margin-Box an und nicht auf die Box, die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmt wird.

    > [!NOTE]
    > Um sich über von Browsern verwendete Aliase für den `stretch`-Wert und dessen Implementierungsstatus zu informieren, sehen Sie sich den Abschnitt zur [Browser-Kompatibilität](#browser_kompatibilität) an.

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit `max-width` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite gezoomt wird, um den Text zu vergrößern.

- [MDN Leitfaden zu WCAG, Erklärungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Erläuterung des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximalbreite in Pixeln festlegen

In diesem Beispiel ist das "child" entweder 150 Pixel breit oder hat die Breite des "parent", je nachdem, welcher Wert kleiner ist.

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
- [Einführung in das CSS-Grundlagen-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model)-Modul
