---
title: padding-inline
slug: Web/CSS/padding-inline
l10n:
  sourceCommit: f26b3f2ab7a079151245759bc2682427dc36870c
---

{{CSSRef}}

Die **`padding-inline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) definiert den logischen Inline-Padding-Anfang und das -Ende eines Elements. Diese Zuordnung erfolgt zu den physischen Padding-Eigenschaften, je nach Schreibrichtung, Richtung und Textorientierung des Elements.

{{EmbedInteractiveExample("pages/css/padding-inline.html")}}

## Bestandteileigenschaften

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

Die `padding-inline`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben wird, wird dieser sowohl für {{cssxref("padding-inline-start")}} als auch für {{cssxref("padding-inline-end")}} verwendet. Bei zwei Werten wird der erste für {{cssxref("padding-inline-start")}} und der zweite für {{cssxref("padding-inline-end")}} verwendet.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe des Paddings als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe des Paddings als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die durch `padding-inline` angegebenen Padding-Werte können den Eigenschaften {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} oder den Eigenschaften {{cssxref("padding-right")}} und {{cssxref("padding-left")}} entsprechen, abhängig von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Inline-Paddings für vertikalen Text

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
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
