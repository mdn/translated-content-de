---
title: "`-webkit-border-before` CSS-Eigenschaft"
short-title: -webkit-border-before
slug: Web/CSS/Reference/Properties/-webkit-border-before
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

{{Non-standard_header}}

Die **`-webkit-border-before`** [CSS](/de/docs/Web/CSS) [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft setzt die einzelnen logischen Blockanfang-Rand-Eigenschaftswerte an einer einzigen Stelle im Stylesheet.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("-webkit-border-before-color")}}
- {{cssxref("-webkit-border-before-style")}}
- {{cssxref("-webkit-border-before-width")}}

## Syntax

```css
/* Border values */
-webkit-border-before: 1px;
-webkit-border-before: 2px dotted;
-webkit-border-before: medium dashed blue;

/* Global values */
-webkit-border-before: inherit;
-webkit-border-before: initial;
-webkit-border-before: revert;
-webkit-border-before: revert-layer;
-webkit-border-before: unset;
```

### Werte

Einer oder mehrere der folgenden Werte, in beliebiger Reihenfolge:

- `<'border-width'>`
  - : Siehe {{cssxref("border-width")}}
- `<'border-style'>`
  - : Siehe {{cssxref("border-style")}}
- `<'color'>`
  - : Siehe {{cssxref("color")}}

## Beschreibung

Die `-webkit-border-before` Eigenschaft wird zu einem physischen Rand in Abhängigkeit vom Schreibrichtung, der Richtung und der Textorientierung des Elements zugeordnet. Sie entspricht der {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, oder {{cssxref("border-left")}} Eigenschaft in Abhängigkeit von den definierten Werten für {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}.

Sie steht in Zusammenhang mit {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}}, und {{cssxref("-webkit-border-end")}}, die die anderen Ränder des Elements definieren.

Das standardmäßige Gegenstück dieser Eigenschaft ist {{cssxref("border-block-start")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-border-before = <'border-width'> || <'border-style'> || <color>`)}}

## Beispiele

### Anwenden eines Randes mit vertikalem Text

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
  -webkit-border-before: 5px dashed blue;
}
```

#### Ergebnis

{{EmbedLiveSample("Applying_a_border_with_vertical_text", 140, 140)}}

## Spezifikationen

Nicht Teil eines Standards, aber es steht im Zusammenhang mit der standardmäßigen {{cssxref("border-block-start")}} Eigenschaft.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-block-start")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, und {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
