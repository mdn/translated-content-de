---
title: margin-block
slug: Web/CSS/Reference/Properties/margin-block
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`margin-block`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) definiert die logischen Anfangs- und Endabstände eines Elements im Block, die je nach Schreibmodus, Richtung und Textausrichtung des Elements auf physische Abstände abgebildet werden.

{{InteractiveExample("CSS Demo: margin-block")}}

```css interactive-example-choice
margin-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 1rem auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row">One</div>
    <div class="row transition-all" id="example-element">Two</div>
    <div class="row">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: white;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("margin-block-start")}}
- {{cssxref("margin-block-end")}}

## Syntax

```css
/* <length> values */
margin-block: 10px 20px; /* An absolute length */
margin-block: 1em 2em; /* relative to the text size */
margin-block: 5% 2%; /* relative to the nearest block container's width */
margin-block: 10px; /* sets both start and end values */
margin-block: anchor-size(inline);
margin-block: calc(anchor-size(width) / 4) 1em;

/* Keyword values */
margin-block: auto;

/* Global values */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

Diese Eigenschaft entspricht den Eigenschaften {{CSSxRef("margin-top")}} und {{CSSxRef("margin-bottom")}}, oder {{CSSxRef("margin-right")}} und {{CSSxRef("margin-left")}}, abhängig von den definierten Werten für {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} und {{CSSxRef("text-orientation")}}.

Die `margin-block`-Eigenschaft kann mit einem oder zwei Werten angegeben werden.

- Wenn **ein** Wert angegeben wird, gilt der gleiche Abstand für **sowohl Anfang als auch Ende**.
- Wenn **zwei** Werte angegeben werden, gilt der erste Abstand für den **Anfang**, der zweite für das **Ende**.

### Werte

Die `margin-block`-Eigenschaft nimmt die gleichen Werte wie die {{CSSxRef("margin", "", "#values")}}-Eigenschaft.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Abständen am Anfang und Ende des Blocks

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
  margin-block: 20px 40px;
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

{{EmbedLiveSample("Setting_block_start_and_end_margins", 140, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values)
- Die zugeordneten physischen Eigenschaften: {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, und {{CSSxRef("margin-left")}}
- {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}}, {{CSSxRef("text-orientation")}}
