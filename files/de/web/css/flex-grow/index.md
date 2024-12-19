---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Wachstumsfaktor des Flex-Elements fest, der bestimmt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) im Flex-Container, falls vorhanden, der Hauptgröße des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements seinem Wachstumsfaktor-Wert als Anteil an der Gesamtsumme aller Wachstumsfaktoren der Flex-Elemente entspricht.

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

Die `flex-grow`-Eigenschaft wird als einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel vom verbleibenden Raum im Flex-Container dem Element zugewiesen werden soll (der Wachstumfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom Wert der {{cssxref("flex-direction")}}.

Der verbleibende Raum, oder positive freie Raum, ist die Größe des Flex-Containers minus die Gesamtgröße aller Flex-Elemente. Wenn alle gleichrangigen Elemente denselben Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil des verbleibenden Raums. Üblicherweise wird `flex-grow: 1` gesetzt, aber das Festlegen des Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder irgendeinen anderen Wert größer als `0` wird das gleiche Ergebnis liefern: der Wert ist ein Verhältnis.

Wenn sich die `flex-grow`-Werte unterscheiden, wird der positive freie Raum entsprechend dem durch die unterschiedlichen Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow`-Faktorwerte aller gleichrangigen Flex-Elemente werden zusammenaddiert. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow`-Wert größer als `0` vergrößert sich um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` großen Container sind und die Flex-Elemente `flex-grow`-Faktoren von `0`, `1`, `2`, und `3` haben, beträgt die Gesamtgröße der Hauptgröße der drei Elemente `400px`, was bedeutet, dass `300px` positiver freier Raum verteilt werden müssen. Es gibt insgesamt 6 Wachstumsfaktoren (`3 + 2 + 1`), daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedem Flex-Element wird eine Menge positiver freier Raum in Höhe dieses Betrags multipliziert mit seinem `flex-grow`-Wert zugewiesen – also `0`, `50px`, `100px` und `150px` entsprechend. Die Gesamtgrößen der Flex-Elemente sind daher `100px`, `150px`, `200px` und `250px` entsprechend.

`flex-grow` wird in der Regel zusammen mit den anderen {{cssxref("flex")}}-Kurzschreibweise-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex`-Kurzschrift-Eigenschaft zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor von Flex-Elementen einstellen

In diesem Beispiel sind insgesamt acht Wachstumsfaktoren auf die sechs Flex-Elemente verteilt, was bedeutet, dass jeder Wachstumsfaktor `12,5%` des verbleibenden Raums ausmacht.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt sind, und die Summe der Hauptgröße dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Flex-Elementen verteilt, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Raums erhalten und `D` und `E` jeweils `25%` des zusätzlichen Raums.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}}-Kurzschrift
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
