---
title: max-width
slug: Web/CSS/max-width
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{CSSRef}}

Die **`max-width`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die maximale Breite eines Elements fest. Sie verhindert, dass der [benutzte Wert](/de/docs/Web/CSS/used_value) der {{cssxref("width")}} Eigenschaft größer wird als der durch `max-width` angegebene Wert.

{{EmbedInteractiveExample("pages/css/max-width.html")}}

`max-width` überschreibt {{cssxref("width")}}, aber {{cssxref("min-width")}} überschreibt `max-width`.

## Syntax

```css
/* <length> Wert */
max-width: 3.5em;
max-width: anchor-size(--myAnchor inline, 245px);
max-width: calc(anchor-size(width) + 4em);

/* <percentage> Wert */
max-width: 75%;

/* Schlüsselwortwerte */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fit-content(20em);
max-width: stretch;

/* Globale Werte */
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
  - : Keine Begrenzung der Größe des Rahmens.
- `max-content`
  - : Die intrinsische bevorzugte `max-width`.
- `min-content`
  - : Die intrinsische minimale `max-width`.
- `fit-content`
  - : Nutzt den verfügbaren Platz, aber nicht mehr als [max-content](/de/docs/Web/CSS/max-content), also `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Verwendet die `fit-content`-Formel mit dem verfügbaren Platz, ersetzt durch das angegebene Argument, also `min(max-content, max(min-content, argument))`.
- `stretch`

  - : Begrenzung der maximalen Breite des [Margin-Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) des Elements auf die Breite seines [umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block). Es versucht, die Margin-Box so weit wie möglich im umgebenden Block zu füllen und verhält sich somit ähnlich wie `100%`, wendet die resultierende Größe jedoch auf die Margin-Box statt auf die durch [box-sizing](/de/docs/Web/CSS/box-sizing) bestimmte Box an.

    > [!NOTE]
    > Um die von Browsern verwendeten Aliase für den Wert `stretch` und den Implementierungsstatus zu überprüfen, siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Stellen Sie sicher, dass Elemente mit einer `max-width` nicht abgeschnitten werden und/oder andere Inhalte verdecken, wenn die Seite vergrößert wird, um die Textgröße zu erhöhen.

- [MDN Understanding WCAG, Erläuterungen zu Richtlinie 1.4](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Verständnis des Erfolgskriteriums 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der maximalen Breite in Pixeln

In diesem Beispiel wird das "child" entweder 150 Pixel breit oder, soweit kleiner, die Breite des "parent" sein.

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
