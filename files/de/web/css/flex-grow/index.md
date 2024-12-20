---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 3aaeeb6d6289c973477d4d4cc92b1d77c91c0b50
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, sofern vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements durch dessen Wachstumsfaktorwert als Anteil an der Gesamtsumme aller Wachstumsfaktoren der Flex-Elemente bestimmt wird.

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

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

Die Eigenschaft `flex-grow` wird als einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig ist dies 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Raums im Flex-Container dem Element zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom Wert von {{cssxref("flex-direction")}}.

Der verbleibende Raum, oder positive freie Raum, ist die Größe des Flex-Containers minus der Größe aller Flex-Elemente zusammen. Wenn alle gleichrangigen Elemente den gleichen Flex-Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil am verbleibenden Raum. Es ist üblich, `flex-grow: 1` festzulegen, aber die Festlegung des Flex-Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` führt zum gleichen Ergebnis: Der Wert ist ein Verhältnis.

Wenn sich die `flex-grow` Werte unterscheiden, wird der positive freie Raum gemäß dem durch die unterschiedlichen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktorwerte aller gleichrangigen Flex-Elemente werden zusammengezählt. Der positive Freiraum des Flex-Containers, sofern vorhanden, wird dann durch diese Gesamtsumme geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel, wenn sich vier `100px` Flex-Elemente in einem `700px` Container befinden und die Flex-Elemente `flex-grow` Faktoren von `0`, `1`, `2` und `3` haben, beträgt die gesamte Hauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiver Freiraum verteilt werden kann. Es gibt insgesamt 6 Wachstumsfaktoren (`0 + 1 + 2 + 3`). Deshalb ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedes Flex-Element erhält eine Menge an positivem Freiraum, die diesem Wert multipliziert mit seinem `flex-grow` Faktor entspricht — also `0`, `50px`, `100px` und `150px` jeweils. Die gesamten Flex-Elementgrößen sind daher `100px`, `150px`, `200px` und `250px` jeweils.

`flex-grow` wird in der Regel zusammen mit den anderen {{cssxref("flex")}} Kurzschreibweise-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex` Kurzschreibweise zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Flex-Element Wachstumsfaktors

In diesem Beispiel gibt es insgesamt acht Wachstumsfaktoren, die auf die sechs Flex-Elemente verteilt sind, was bedeutet, dass jeder Wachstumsfaktor `12,5%` des verbleibenden Raums ausmacht.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt sind, und die Summe der Hauptinhalte dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Flex-Elementen verteilt, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Raums erhalten und `D` und `E` jeweils `25%` des zusätzlichen Raums.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` ist seltsam. Oder doch nicht?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
