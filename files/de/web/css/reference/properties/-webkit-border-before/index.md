---
title: CSS-Eigenschaft `-webkit-border-before`
short-title: -webkit-border-before
slug: Web/CSS/Reference/Properties/-webkit-border-before
l10n:
  sourceCommit: 6354422058e438a2599e4eab71eaec8eb40850fa
---

{{Non-standard_header}}

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`-webkit-border-before`** legt die einzelnen logischen Rahmen-Eigenschaftswerte für den Blockanfang an einer einzigen Stelle im Stylesheet fest.

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

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste aus einem bis drei der folgenden Werte angegeben:

- `<'border-width'>`
  - : Siehe {{cssxref("border-width")}}
- `<'border-style'>`
  - : Siehe {{cssxref("border-style")}}
- `<'color'>`
  - : Siehe {{cssxref("color")}}

## Beschreibung

Die Eigenschaft `-webkit-border-before` wird abhängig vom Schreibmodus, der Schreibrichtung und der Textausrichtung des Elements einem physischen Rahmen zugeordnet. Sie entspricht je nach den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten der Eigenschaft {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} oder {{cssxref("border-left")}}.

Sie steht in Beziehung zu {{cssxref("-webkit-border-after")}}, {{cssxref("-webkit-border-start")}} und {{cssxref("-webkit-border-end")}}, die die anderen Rahmen des Elements definieren.

Das standardisierte Äquivalent dieser Eigenschaft ist {{cssxref("border-block-start")}}.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntaxRaw(`-webkit-border-before = <'border-width'> || <'border-style'> || <color>`)}}

## Beispiele

### Anwenden eines Rahmens mit vertikalem Text

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

Nicht Teil eines Standards, steht jedoch in Beziehung zur standardisierten Eigenschaft {{cssxref("border-block-start")}}.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-block-start")}}
- Die zugeordneten physischen Eigenschaften: {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}} und {{cssxref("border-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
