---
title: margin-inline
slug: Web/CSS/Reference/Properties/margin-inline
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`margin-inline`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ist eine Kurzschreibweise, die sowohl die logischen Start- als auch Endränder eines Elements definiert, welche je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Ränder abbildet.

{{InteractiveExample("CSS Demo: margin-inline")}}

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-inline: 10px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-inline: 5% 10%;
writing-mode: horizontal-tb;
direction: rtl;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="col">One</div>
    <div class="col transition-all" id="example-element">Two</div>
    <div class="col">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
}

.col {
  width: 33.33%;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
  unicode-bidi: bidi-override;
}
```

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-inline-start")}}
- {{cssxref("margin-inline-end")}}

## Syntax

```css
/* <length> values */
margin-inline: 10px 20px; /* An absolute length */
margin-inline: 1em 2em; /* relative to the text size */
margin-inline: 5% 2%; /* relative to the nearest block container's width */
margin-inline: 10px; /* sets both start and end values */
margin-inline: anchor-size(width);
margin-inline: calc(anchor-size(self-block) / 5) auto;

/* Keyword values */
margin-inline: auto;

/* Global values */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, abhängig von den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, und {{CSSxRef("text-orientation")}}.

Die `margin-inline`-Eigenschaft kann mit einem oder zwei Werten angegeben werden.

- Wenn **ein** Wert angegeben ist, wird derselbe Rand sowohl auf den **Start- als auch Endrand** angewendet.
- Wenn **zwei** Werte angegeben sind, wird der erste Rand für den **Startrand** und der zweite für den **Endrand** verwendet.

### Werte

Die `margin-inline`-Eigenschaft akzeptiert dieselben Werte wie die {{CSSxRef("margin", "", "#values")}}-Eigenschaft.

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Inline-Start- und Endränder festlegen

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-inline: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>Example text</p>
</div>
<div class="verticalExample">
  <p>Example text</p>
</div>
```

#### Ergebnis

{{EmbedLiveSample("Setting_inline_start_and_end_margins", 140, 240)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die abgebildeten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
