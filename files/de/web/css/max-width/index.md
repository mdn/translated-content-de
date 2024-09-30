---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`max-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Breite eines Elements fest. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/used_value) der {{cssxref("width")}}-Eigenschaft größer wird als der durch `max-width` angegebene Wert.

{{EmbedInteractiveExample("pages/css/max-width.html")}}

`max-width` überschreibt {{cssxref("width")}}, jedoch überschreibt {{cssxref("min-width")}} `max-width`.

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
  - : Die intrinsische bevorzugte `max-width`.
- `min-content`
  - : Die intrinsische minimale `max-width`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, jedoch nicht mehr als [max-content](/de/docs/Web/CSS/max-content), d.h. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem durch das Argument ersetzten verfügbaren Platz, d.h. `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzt die maximale Breite der [Randbox](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, die Randbox in den verfügbaren Raum des umgebenden Blocks zu füllen, wirkt also in gewisser Weise ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Randbox anstatt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box an.

    > [!NOTE]
    > Um Aliase zu prüfen, die von Browsern für den `stretch`-Wert verwendet werden, und der Stand der Implementierung, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit `max-width` nicht abgeschnitten werden und/oder keinen anderen Inhalt verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Verständnis von WCAG, Leitfaden 1.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maximalbreite in Pixeln festlegen

In diesem Beispiel wird der "child" entweder 150 Pixel breit oder so breit wie der "parent", je nachdem, welches kleiner ist.

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

- [Das Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{cssxref("width")}}, {{cssxref("min-width")}}
- Die zugeordneten logischen Eigenschaften: {{cssxref("max-inline-size")}}, {{cssxref("max-block-size")}}
