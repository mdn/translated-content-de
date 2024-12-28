---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: a9280d06d6e78ec8fc35d3a7a0f7f98d921370e0
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den flexiblen Wachstumsfaktor fest, der bestimmt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements deren Wachstumsfaktorwert als Anteil an der Gesamtsumme aller `flex-grow` Faktoren der Flex-Elemente ist.

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

Die `flex-grow` Eigenschaft wird als eine einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft bestimmt, wie viel des verbleibenden Raums im Flex-Container dem Element zugewiesen werden soll (der flexible Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder die Höhe des Elements, abhängig von dem Wert von {{cssxref("flex-direction")}}.

Der verbleibende Raum oder positive freie Raum ist die Größe des Flex-Containers minus der Größe aller Flex-Elemente zusammen. Wenn alle gleichrangigen Elemente denselben flexiblen Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil am verbleibenden Raum. Üblicherweise wird `flex-grow: 1` eingestellt, aber das Setzen des flexiblen Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` führt zu demselben Ergebnis: der Wert ist ein Verhältnis.

Wenn die `flex-grow` Werte unterschiedlich sind, wird der positive Freiraum gemäß dem durch die unterschiedlichen flexiblen Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktorwerte aller gleichrangigen Flex-Elemente werden addiert. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wird um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor wachsen.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente haben `flex-grow` Faktoren von `0`, `1`, `2` und `3`, jeweils, ist die Gesamt-Hauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiver Freiraum verteilt werden muss. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) ist gleich sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`. Jedes Flex-Element erhält 50px Freiraum multipliziert mit seinem `flex-grow` Faktor — also `0`, `50px`, `100px` und `150px` jeweils. Die gesamten Größen der Flex-Elemente werden jeweils `100px`, `150px`, `200px` und `250px`.

`flex-grow` wird allgemein zusammen mit den anderen {{cssxref("flex")}} Kurzschreibweise-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex` Kurzschreibweise-Eigenschaft zu nutzen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Element Wachstumsfaktor setzen

In diesem Beispiel ist die Summe der sechs `flex-grow` Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktorwert `12,5%` des verbleibenden Raums beträgt.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt sind, und die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Größen von `A`, `B`, `C` und `F` gleichmäßig verteilt, wobei jedes `12,5%` des verbleibenden Raums und `D` und `E` jeweils `25%` des zusätzlichen Raums erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnisse von Flex-Elementen entlang der Hauptachse steuern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` ist merkwürdig. Oder doch nicht?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
