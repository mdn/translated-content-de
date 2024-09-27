---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 76eacc88eeb753726bf73a7a632ca4bb6ba423de
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Wachstumsfaktor für Flex-Elemente fest, der bestimmt, wie viel von dem [**positiven freien Raum**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, sofern vorhanden, der [Hauptgröße](/de/docs/Learn/CSS/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements dem Wert seines Wachstumsfaktors als Anteil der Summe aller Wachstumsfaktoren der Flex-Elemente entspricht.

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
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig ist der Wert 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Raumes im Flex-Container dem Element zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn/CSS/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom Wert der {{cssxref("flex-direction")}}.

Der verbleibende Raum oder der positive freie Raum ist die Größe des Flex-Containers minus der Summe der Größen aller Flex-Elemente. Wenn alle Geschwisterelemente den gleichen Flex-Wachstumsfaktor haben, erhalten alle Elemente den gleichen Anteil des verbleibenden Raums. Üblich ist es, `flex-grow: 1` festzulegen, aber das Festlegen des Flex-Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` führt zum gleichen Ergebnis: Der Wert ist ein Verhältnis.

Wenn die `flex-grow` Werte unterschiedlich sind, wird der positive freie Raum gemäß dem durch die unterschiedlichen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktorwerte aller Geschwister-Flex-Elemente werden zusammengezählt. Der positive freie Raum des Flex-Containers, sofern vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wird um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor wachsen.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente haben `flex-grow` Faktoren von `0`, `1`, `2` und `3`, ist die gesamte Hauptgröße der drei Elemente `400px`, was bedeutet, dass `300px` positiver freier Raum zu verteilen ist. Es gibt insgesamt 6 Wachstumsfaktoren (`3 + 2 + 1`), daher entspricht jeder Wachstumsfaktor `50px` (`(300px / 6 )`. Jedes Flex-Element erhält einen Anteil des positiven freien Raums in Höhe dieses Betrags multipliziert mit seinem `flex-grow` Wert — also `0`, `50px`, `100px` und `150px` entsprechend. Die gesamten Größen der Flex-Elemente sind daher `100px`, `150px`, `200px` und `250px` entsprechend.

`flex-grow` wird im Allgemeinen zusammen mit den anderen {{cssxref("flex")}} Kurzschreibweisen, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex` Kurzschreibweise zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formaldefinition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor für Flex-Elemente festlegen

In diesem Beispiel sind insgesamt acht Wachstumsfaktoren auf die sechs Flex-Elemente verteilt, was bedeutet, dass jeder Wachstumsfaktor `12,5%` des verbleibenden Raums entspricht.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt sind, und die Summe des Hauptinhalts jener Flex-Elemente kleiner als die Größe der Hauptachse des Containers ist, wird der zusätzliche Raum unter den größen Flex-Elementen verteilt, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Raums erhalten und `D` und `E` jeweils `25%` des zusätzlichen Raums erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` ist seltsam. Oder doch nicht?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
