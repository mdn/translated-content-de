---
title: flex-wrap
slug: Web/CSS/flex-wrap
l10n:
  sourceCommit: 1f12a4156d4aec63d8466c49a39b1ac76d8a5735
---

{{CSSRef}}

Die **`flex-wrap`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob Flex-Elemente in einer Zeile erzwungen werden oder auf mehrere Zeilen umgebrochen werden können. Falls ein Umbruch erlaubt ist, legt sie die Richtung fest, in der die Zeilen gestapelt werden.

{{EmbedInteractiveExample("pages/css/flex-wrap.html")}}

Die Kurzschrift-Eigenschaft {{cssxref("flex-flow")}} kann verwendet werden, um sowohl die Eigenschaften {{CSSXRef("flex-direction")}} als auch `flex-wrap` festzulegen, die jeweils die Haupt- und Querachsen des Flex-Containers definieren.

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
  - : Die Flex-Elemente sind in einer einzigen Zeile angeordnet, was dazu führen kann, dass der Flex-Container überfließt. Der Querstart entspricht [inline-start oder block-start](/de/docs/Glossary/Flow_relative_values), abhängig vom Wert der {{cssxref("flex-direction")}}. Dies ist der Standardwert.
- `wrap`
  - : Die Flex-Elemente brechen in mehrere Zeilen um. Der Querstart entspricht [inline-start oder block-start](/de/docs/Glossary/Flow_relative_values), abhängig vom aktuellen [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) und dem Wert der {{cssxref("flex-direction")}}.
- `wrap-reverse`
  - : Verhält sich wie `wrap`, jedoch sind Querstart und Querende invertiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Wrap-Werten für Flex-Container

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
- {{CSSXRef("flex-flow")}} Kurzschrift
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
