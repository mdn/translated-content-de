---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
l10n:
  sourceCommit: 4c978094f227c40bd49a1d71fd494884c6fbeea1
---

{{CSSRef}}

Die **`padding-inline-start`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert den logischen Inline-Startabstand eines Elements, der je nach Schreibmodus, Richtung und Textausrichtung des Elements in einen physikalischen Abstand umgerechnet wird.

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

## Syntax

```css
/* <length> values */
padding-inline-start: 10px; /* An absolute length */
padding-inline-start: 1em; /* A length relative to the text size */

/* <percentage> value */
padding-inline-start: 5%; /* A padding relative to the block container's width */

/* Global values */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, bezogen auf die Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [enthältenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

In einer englischen Sprache, die von links nach rechts und von oben nach unten geht, entspricht die `padding-inline-start` Eigenschaft dieses Textabschnitts der {{cssxref("padding-top")}} Eigenschaft. Ob diese logische Eigenschaft jedoch der `padding-top`, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, oder {{cssxref("padding-left")}} entspricht, hängt vom {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} des Elements ab.

Sie bezieht sich auf {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} und {{cssxref("padding-inline-end")}}, die die anderen Abstände des Elements definieren.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Inline-Startabstands für vertikalen Text

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
