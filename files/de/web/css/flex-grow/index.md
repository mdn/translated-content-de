---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Wachstumsfaktor fest, der angibt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers einem Flex-Element in seiner [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) zugewiesen werden soll, falls vorhanden.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements durch den Wachstumsfaktor als Anteil an der Gesamtsumme aller Wachstumsfaktoren der Flex-Elemente bestimmt wird.

{{InteractiveExample("CSS Demo: flex-grow")}}

```css interactive-example-choice
flex-grow: 1;
```

```css interactive-example-choice
flex-grow: 2;
```

```css interactive-example-choice
flex-grow: 3;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">I grow</div>
  <div>Item Two</div>
  <div>Item Three</div>
</section>
```

```css interactive-example
.default-example {
  border: 1px solid #c5c5c5;
  width: auto;
  max-height: 300px;
  display: flex;
}

.default-example > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
  margin: 10px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
}
```

## Syntax

```css
/* <number> values */
flex-grow: 3;
flex-grow: 0.6;

/* Global values */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

Die `flex-grow` Eigenschaft wird als einzelnes `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standard ist 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft legt fest, wie viel des verbleibenden Raums im Flex-Container dem Element (dem Wachstumsfaktor) zugewiesen werden soll.

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder die Höhe des Elements, abhängig vom Wert der {{cssxref("flex-direction")}}.

Der verbleibende Raum, oder positive freie Raum, ist die Größe des Flex-Containers minus der Gesamtsumme der Größen aller Flex-Elemente. Haben alle benachbarten Elemente den gleichen Wachstumsfaktor, erhalten alle Elemente denselben Anteil am verbleibenden Raum. Üblicherweise wird `flex-grow: 1` gesetzt, aber die Festlegung des Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` ergibt das gleiche Ergebnis: der Wert ist ein Verhältnis.

Wenn die `flex-grow` Werte unterschiedlich sind, wird der positive freie Raum entsprechend dem durch die unterschiedlichen Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktorwerte aller benachbarten Flex-Elemente werden zusammengezählt. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Gesamtsumme geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente `flex-grow` Faktoren von `0`, `1`, `2` und `3` haben, beträgt die Gesamtgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiven freien Raum zu verteilen sind. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) beträgt sechs. Daher entspricht jeder Wachstumsfaktor `50px` (`(300px / 6 )`. Jedes Flex-Element erhält 50px freien Raum multipliziert mit seinem `flex-grow` Faktor — also `0`, `50px`, `100px` und `150px` jeweils. Die gesamte Flex-Elementgröße beträgt `100px`, `150px`, `200px` und `250px` jeweils.

`flex-grow` wird allgemein zusammen mit den anderen {{cssxref("flex")}} Kurzschreibeigenschaften {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}} verwendet. Die Verwendung der `flex` Kurzschreibeigenschaft wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Wachstumsfaktors eines Flex-Elements

In diesem Beispiel ist die Summe der sechs `flex-grow` Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktorwert `12,5%` des verbleibenden Raums entspricht.

#### HTML

```html
<h1>This is a <code>flex-grow</code> example</h1>
<p>
  A, B, C, and F have <code>flex-grow: 1</code> set. D and E have
  <code>flex-grow: 2</code> set.
</p>
<div id="content">
  <div class="small" style="background-color:red;">A</div>
  <div class="small" style="background-color:lightblue;">B</div>
  <div class="small" style="background-color:yellow;">C</div>
  <div class="double" style="background-color:brown;">D</div>
  <div class="double" style="background-color:lightgreen;">E</div>
  <div class="small" style="background-color:brown;">F</div>
</div>
```

#### CSS

```css
#content {
  display: flex;
}

div > div {
  border: 3px solid rgb(0 0 0 / 20%);
}

.small {
  flex-grow: 1;
}

.double {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
}
```

#### Ergebnis

{{EmbedLiveSample('Setting flex item grow factor')}}

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden und die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Flex-Elementen verteilt, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Raums erhalten und `D` und `E` jeweils `25%` des zusätzlichen Raums.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Kontrollieren von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
