---
title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`flex-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Flex-Elemente in eine Linie gezwungen oder auf mehrere Linien verteilt werden können. Wenn das Umbruch erlaubt ist, legt sie die Richtung fest, in der die Linien gestapelt werden.

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

Die Kurzform der Eigenschaft {{cssxref("flex-flow")}} kann verwendet werden, um sowohl die Eigenschaften {{CSSXRef("flex-direction")}} als auch `flex-wrap` festzulegen, die jeweils die Haupt- und Querachse des Flex-Containers definieren.

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

Die Eigenschaft `flex-wrap` wird als ein einzelnes Schlüsselwort angegeben, das aus den folgenden Werten ausgewählt wird:

- `nowrap`
  - : Die Flex-Elemente werden in einer einzigen Linie dargestellt, was dazu führen kann, dass der Flex-Container überläuft. Der Queranfang entspricht {{Glossary("Flow_relative_values", "inline-start oder block-start")}}, je nach {{cssxref("flex-direction")}}-Wert. Dies ist der Standardwert.
- `wrap`
  - : Die Flex-Elemente brechen in mehrere Linien um. Der Queranfang entspricht {{Glossary("Flow_relative_values", "inline-start oder block-start")}}, abhängig vom aktuellen [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) und dem {{cssxref("flex-direction")}}-Wert.
- `wrap-reverse`
  - : Verhält sich wie `wrap`, aber Queranfang und Querende sind vertauscht.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Umbruchwerten für Flex-Container

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
  color: white;
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
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Meistern des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
