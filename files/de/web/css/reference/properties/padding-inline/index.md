---
title: padding-inline
slug: Web/CSS/Reference/Properties/padding-inline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`padding-inline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) definiert den logischen Inline-Anfang und -Ende der Auffüllung eines Elements, die je nach Schreibmodus, Richtung und Textausrichtung des Elements den physischen Auffüllungseigenschaften zugeordnet wird.

{{InteractiveExample("CSS Demo: padding-inline")}}

```css interactive-example-choice
padding-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-inline: 15px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-inline: 5% 20%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`padding-inline-end`](/de/docs/Web/CSS/Reference/Properties/padding-inline-end)
- [`padding-inline-start`](/de/docs/Web/CSS/Reference/Properties/padding-inline-start)

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

Die `padding-inline`-Eigenschaft kann mit einem oder zwei Werten angegeben werden. Wenn ein Wert angegeben ist, wird er sowohl für {{cssxref("padding-inline-start")}} als auch für {{cssxref("padding-inline-end")}} verwendet. Wenn zwei Werte angegeben sind, wird der erste für {{cssxref("padding-inline-start")}} und der zweite für {{cssxref("padding-inline-end")}} verwendet.

### Werte

- {{cssxref("&lt;length&gt;")}}
  - : Die Größe der Auffüllung als fester Wert. Muss nicht negativ sein.
- {{cssxref("&lt;percentage&gt;")}}
  - : Die Größe der Auffüllung als Prozentsatz, relativ zur Inline-Größe (_Breite_ in einer horizontalen Sprache, definiert durch {{cssxref("writing-mode")}}) des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block). Muss nicht negativ sein.

## Beschreibung

Die durch `padding-inline` angegebenen Auffüllungswerte können den Eigenschaften {{cssxref("padding-top")}} und {{cssxref("padding-bottom")}} oder den Eigenschaften {{cssxref("padding-right")}} und {{cssxref("padding-left")}} gleichwertig sein, abhängig von den für {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} definierten Werten.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen der Inline-Auffüllung für vertikalen Text

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

- [CSS Logical Properties and Values](/de/docs/Web/CSS/Guides/Logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, und {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
