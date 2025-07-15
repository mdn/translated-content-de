---
title: flex-wrap
slug: Web/CSS/flex-wrap
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`flex-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Flex-Elemente auf einer Zeile erzwungen werden oder auf mehreren Zeilen umbrechen können. Wenn das Umbruch erlaubt ist, legt es die Richtung fest, in der die Zeilen gestapelt werden.

{{InteractiveExample("CSS Demo: flex-wrap")}}

```css interactive-example-choice
flex-wrap: nowrap;
```

```css interactive-example-choice
flex-wrap: wrap;
```

```css interactive-example-choice
flex-wrap: wrap-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Item One</div>
    <div>Item Two</div>
    <div>Item Three</div>
    <div>Item Four</div>
    <div>Item Five</div>
    <div>Item Six</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

Die Kurzform der Eigenschaft {{cssxref("flex-flow")}} kann verwendet werden, um sowohl die Eigenschaften {{CSSXRef("flex-direction")}} und `flex-wrap` festzulegen, die jeweils die Haupt- und die Querachse des Flex-Containers definieren.

## Syntax

```css
flex-wrap: nowrap; /* Default value */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Global values */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Werte

Die `flex-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort aus den folgenden Werten festgelegt:

- `nowrap`
  - : Die Flex-Elemente werden in einer einzigen Zeile angeordnet, was dazu führen kann, dass der Flex-Container überläuft. Der Cross-Start entspricht {{Glossary("Flow_relative_values", "inline-start oder block-start")}}, abhängig vom Wert der {{cssxref("flex-direction")}}. Dies ist der Standardwert.
- `wrap`
  - : Die Flex-Elemente brechen in mehrere Zeilen um. Der Cross-Start entspricht {{Glossary("Flow_relative_values", "inline-start oder block-start")}}, abhängig von der aktuellen [Schreibweise](/de/docs/Web/CSS/CSS_writing_modes) und dem Wert der {{cssxref("flex-direction")}}.
- `wrap-reverse`
  - : Verhält sich wie `wrap`, aber Cross-Start und Cross-Ende sind umgekehrt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Flex-Container-Umbruchwerten

#### HTML

```html
<h4>This is an example for flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>This is an example for flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Common Styles */
.content,
.content1,
.content2 {
  color: #fff;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.content div,
.content1 div,
.content2 div {
  height: 50%;
  width: 300px;
}
.red {
  background: orangered;
}
.green {
  background: yellowgreen;
}
.blue {
  background: steelblue;
}

/* Flexbox Styles */
.content {
  display: flex;
  flex-wrap: wrap;
}
.content1 {
  display: flex;
  flex-wrap: nowrap;
}
.content2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Ergebnisse

{{ EmbedLiveSample('Setting flex container wrap values', '', '700') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} Kurzform
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
