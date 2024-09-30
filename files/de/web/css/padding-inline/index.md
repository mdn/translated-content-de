---
title: padding-inline
slug: Web/CSS/padding-inline
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

Die **`padding-inline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert den logischen Anfangs- und Endabstand eines Elements, der je nach Schreibmodus des Elements, der Ausrichtung und der Textorientierung den physischen Padding-Eigenschaften zugeordnet wird.

{{EmbedInteractiveExample("pages/css/padding-inline.html")}}

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`padding-inline-end`](/de/docs/Web/CSS/padding-inline-end)
- [`padding-inline-start`](/de/docs/Web/CSS/padding-inline-start)

## Syntax

```css
/* <length> values */
padding-inline: 10px 20px; /* An absolute length */
padding-inline: 1em 2em; /* relative to the text size */
padding-inline: 10px; /* sets both start and end values */

/* <percentage> values */
padding-inline: 5% 2%; /* relative to the nearest block container's width */

/* Global values */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: revert-layer;
padding-inline: unset;
```

Die `padding-inline`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, wird er sowohl als Wert für {{cssxref("padding-inline-start")}} als auch für {{cssxref("padding-inline-end")}} verwendet. Wenn zwei Werte angegeben werden, wird der erste für {{cssxref("padding-inline-start")}} und der zweite für {{cssxref("padding-inline-end")}} verwendet.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Abstands als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Abstands als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die Werte für diese Eigenschaft entsprechen der {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}}, oder {{cssxref("padding-right")}} und {{cssxref("padding-left")}} Eigenschaft, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Padding für vertikalen Text festlegen

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
  writing-mode: vertical-rl;
  padding-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_padding_for_vertical_text", 140, 140)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physikalischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
