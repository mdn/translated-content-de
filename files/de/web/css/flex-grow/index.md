---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 76eacc88eeb753726bf73a7a632ca4bb6ba423de
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis), sofern vorhanden, der Hauptgröße des Flex-Elements im Flex-Container zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen aufgeteilt werden. Das Wachstum jedes Elements basiert auf seinem Wachstumsfaktorwert im Verhältnis zur Gesamtsumme aller Wachstumsfaktoren der Flex-Elemente.

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

Die `flex-grow` Eigenschaft wird als einzelnes `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Der Standardwert ist 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Raums im Flex-Container dem Element zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn/CSS/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom {{cssxref("flex-direction")}} Wert.

Der verbleibende Raum, oder positive freie Raum, ist die Größe des Flex-Containers minus der Größe aller Flex-Elemente zusammen. Wenn alle benachbarten Elemente denselben Flex-Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil am verbleibenden Raum. Üblich ist es, `flex-grow: 1` zu setzen, aber das Setzen des Flex-Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` führt zum selben Ergebnis: Der Wert ist ein Verhältnis.

Wenn sich die `flex-grow` Werte unterscheiden, wird der positive freie Raum gemäß dem durch die unterschiedlichen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktorwerte aller benachbarten Flex-Elemente werden zusammengerechnet. Der positive freie Raum des Flex-Containers, wenn vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wird um diesen Quotienten, multipliziert mit seinem eigenen Wachstumsfaktor, wachsen.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente Wachstumsfaktoren von `0`, `1`, `2` und `3` haben, beträgt die Gesamthauptgröße der drei Elemente `400px`, was bedeutet, dass es `300px` positiven freien Raum zu verteilen gibt. Es gibt insgesamt 6 Wachstumsfaktoren (`3 + 2 + 1`), daher entspricht jeder Wachstumsfaktor `50px` (`(300px / 6 )`. Jedes Flex-Element erhält eine Menge an positiver freien Raum, die diesem Betrag multipliziert mit seinem `flex-grow` Wert entspricht — also `0`, `50px`, `100px` und `150px` jeweils. Die Gesamtgrößen der Flex-Elemente betragen daher `100px`, `150px`, `200px` und `250px`.

`flex-grow` wird im Allgemeinen zusammen mit den anderen {{cssxref("flex")}} Shorthand-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex` Shorthand-Eigenschaft zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Wachstumsfaktors eines Flex-Elements

In diesem Beispiel gibt es insgesamt acht Wachstumsfaktoren, die auf die sechs Flex-Elemente verteilt sind, was bedeutet, dass jeder Wachstumsfaktor `12,5%` des verbleibenden Raums entspricht.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden, und die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum auf die Größen-Flex-Elemente verteilt, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Raums erhalten und `D` und `E` jeweils `25%` des zusätzlichen Raums erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Shorthand
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [Modul für flexibles CSS Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [`flex-grow` ist komisch. Oder nicht?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
