---
title: padding-inline
slug: Web/CSS/padding-inline
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`padding-inline`** [CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) definiert den logischen Start- und End-Einzug eines Elements im Inlinelayout. Diese Eigenschaft ordnet physische Padding-Eigenschaften zu, abhängig vom Schreibrichtungmodus, der Textausrichtung und der Textorientierung des Elements.

{{EmbedInteractiveExample("pages/css/padding-inline.html")}}

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft `padding-inline` kann mit einem oder zwei Werten angegeben werden. Wenn ein einzelner Wert angegeben wird, gilt dieser sowohl für {{cssxref("padding-inline-start")}} als auch für {{cssxref("padding-inline-end")}}. Wenn zwei Werte angegeben werden, wird der erste Wert für {{cssxref("padding-inline-start")}} und der zweite für {{cssxref("padding-inline-end")}} verwendet.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentwert, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgrenzenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die durch `padding-inline` festgelegten Padding-Werte können den Eigenschaften {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} oder den Eigenschaften {{cssxref("padding-right")}} und {{cssxref("padding-left")}} entsprechen. Dies hängt von den Werten ab, die für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definiert sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Inline-Padding für vertikalen Text einstellen

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
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
