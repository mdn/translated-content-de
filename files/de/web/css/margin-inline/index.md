---
title: margin-inline
slug: Web/CSS/margin-inline
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`margin-inline`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) ist eine Shorthand-Eigenschaft, die sowohl den logischen Inline-Anfang als auch die Endmargen eines Elements definiert. Diese werden in physische Margen umgewandelt, abhängig vom Schreibmodus, der Richtung und der Textorientierung des Elements.

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

## Aufgeschlüsselte Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

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

Diese Eigenschaft entspricht den {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}} oder den {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}} Eigenschaften, abhängig von den Werten, die für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} und {{CSSxRef("text-orientation")}} definiert sind.

Die `margin-inline` Eigenschaft kann mit einem oder zwei Werten spezifiziert werden.

- Wenn **ein** Wert angegeben wird, gilt derselbe Margin für **Anfang und Ende**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Margin für den **Anfang**, der zweite für das **Ende**.

### Werte

Die `margin-inline` Eigenschaft nimmt dieselben Werte wie die {{CSSxRef("margin", "", "#values")}} Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Margen für den Inline-Anfang und das Inline-Ende

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
- Die zugeordneten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
