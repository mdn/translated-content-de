---
title: flex-wrap
slug: Web/CSS/flex-wrap
l10n:
  sourceCommit: 1f12a4156d4aec63d8466c49a39b1ac76d8a5735
---

{{CSSRef}}

Die **`flex-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Flex-Elemente auf eine Zeile gezwungen oder auf mehrere Zeilen umgebrochen werden können. Wenn das Umbrechen erlaubt ist, legt es die Richtung fest, in der die Zeilen gestapelt werden.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

Die {{cssxref("flex-flow")}} Kurzschreibweise kann verwendet werden, um sowohl die {{CSSXRef("flex-direction")}} als auch die `flex-wrap` Eigenschaften festzulegen, die die Haupt- und Kreuzachsen des Flex-Containers definieren.

## Syntax

```css
flex-wrap: nowrap; /* Standardwert */
flex-wrap: wrap;
flex-wrap: wrap-reverse;

/* Globale Werte */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Werte

Die `flex-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus den folgenden Werten ausgewählt wird:

- `nowrap`
  - : Die Flex-Elemente werden in einer einzigen Zeile angeordnet, was dazu führen kann, dass der Flex-Container überläuft. Der Cross-Start entspricht [inline-start oder block-start](/de/docs/Glossary/Flow_relative_values), abhängig vom {{cssxref("flex-direction")}} Wert. Dies ist der Standardwert.
- `wrap`
  - : Die Flex-Elemente brechen in mehrere Zeilen um. Der Cross-Start entspricht [inline-start oder block-start](/de/docs/Glossary/Flow_relative_values), abhängig vom aktuellen [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) und dem {{cssxref("flex-direction")}} Wert.
- `wrap-reverse`
  - : Verhält sich genauso wie `wrap`, aber Cross-Start und Cross-Ende sind invertiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Flex-Container-Umbruchwerten

#### HTML

```html
<h4>Dies ist ein Beispiel für flex-wrap:wrap</h4>
<div class="content">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>Dies ist ein Beispiel für flex-wrap:nowrap</h4>
<div class="content1">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
<h4>Dies ist ein Beispiel für flex-wrap:wrap-reverse</h4>
<div class="content2">
  <div class="red">1</div>
  <div class="green">2</div>
  <div class="blue">3</div>
</div>
```

#### CSS

```css
/* Gemeinsame Stile */
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

/* Flexbox-Stile */
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSXRef("flex-direction")}}
- {{CSSXRef("flex-flow")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
