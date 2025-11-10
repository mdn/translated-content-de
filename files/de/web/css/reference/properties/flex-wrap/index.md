---
title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`flex-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Flex-Elemente in eine einzige Zeile gezwungen werden oder auf mehrere Zeilen umbrechen können. Wenn Umbrüche erlaubt sind, legt sie die Richtung fest, in der die Zeilen gestapelt werden.

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

Die Kurzschreibweise der {{cssxref("flex-flow")}} Eigenschaft kann sowohl die Eigenschaften {{CSSXRef("flex-direction")}} als auch `flex-wrap` festlegen, die jeweils die Haupt- und Querachsen des Flex-Containers definieren.

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

Die `flex-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus den folgenden Werten ausgewählt wird:

- `nowrap`
  - : Die Flex-Elemente werden in einer einzigen Zeile angeordnet, was dazu führen kann, dass der Flex-Container überläuft. Der Querstart entspricht {{Glossary("Flow_relative_values", "inline-start oder block-start")}}, abhängig vom Wert von {{cssxref("flex-direction")}}. Dies ist der Standardwert.
- `wrap`
  - : Die Flex-Elemente werden in mehrere Zeilen umbrochen. Der Querstart entspricht {{Glossary("Flow_relative_values", "inline-start oder block-start")}}, abhängig vom aktuellen [Schreibmodus](/de/docs/Web/CSS/Guides/Writing_modes) und dem Wert von {{cssxref("flex-direction")}}.
- `wrap-reverse`
  - : Verhält sich genauso wie `wrap`, aber Querstart und Querend sind vertauscht.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wrap-Werte für Flex-Container festlegen

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

{{EmbedLiveSample('Wrap-Werte für Flex-Container festlegen', '', '700')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} Kurzschreibweise
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Meisterung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- [CSS-Flexibles-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
