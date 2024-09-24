---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 76eacc88eeb753726bf73a7a632ca4bb6ba423de
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der [Hauptgröße](/de/docs/Learn/CSS/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements durch den Wachstumsfaktor-Wert als Anteil an der Summe der Wachstumsfaktoren aller Flex-Elemente bestimmt wird.

{{EmbedInteractiveExample("pages/css/flex-grow.html")}}

## Syntax

```css
/* <number> Werte */
flex-grow: 3;
flex-grow: 0.6;

/* Globale Werte */
flex-grow: inherit;
flex-grow: initial;
flex-grow: revert;
flex-grow: revert-layer;
flex-grow: unset;
```

Die `flex-grow` Eigenschaft wird als einzelner `<number>` Wert angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standard ist 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft legt fest, wie viel des verbleibenden Raums im Flex-Container dem Element zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn/CSS/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder die Höhe des Elements, abhängig vom Wert von {{cssxref("flex-direction")}}.

Der verbleibende Raum oder positive freie Raum ist die Größe des Flex-Containers minus der Größe aller Flex-Elemente zusammen. Wenn alle Schwester-Elemente denselben Flex-Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil des verbleibenden Raums. Es ist üblich, `flex-grow: 1` festzulegen, aber das Festlegen des Flex-Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` führt zum gleichen Ergebnis: der Wert ist ein Verhältnis.

Wenn die `flex-grow` Werte unterschiedlich sind, wird der positive freie Raum gemäß dem durch die unterschiedlichen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktor-Werte aller Schwester-Flex-Elemente werden zusammengezählt. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel, wenn sich vier `100px` Flex-Elemente in einem `700px` Container befinden und die Flex-Elemente `flex-grow` Faktoren von `0`, `1`, `2`, und `3` haben, beträgt die gesamte Hauptgröße der drei Elemente `400px`, was bedeutet, dass `300px` positiver freier Raum zu verteilen sind. Es gibt insgesamt 6 Wachstumsfaktoren (`3 + 2 + 1`), daher entspricht jeder Wachstumsfaktor `50px` (`(300px / 6 )`). Jedem Flex-Element wird ein Anteil des positiven freien Raums zugewiesen, der dieser Menge multipliziert mit seinem `flex-grow` Wert entspricht — also `0`, `50px`, `100px`, und `150px` entsprechend. Die Gesamtgrößen der Flex-Elemente betragen somit `100px`, `150px`, `200px`, und `250px` jeweils.

`flex-grow` wird im Allgemeinen zusammen mit den anderen {{cssxref("flex")}} Kurzschreibungseigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}} verwendet. Es wird empfohlen, die `flex` Kurzschreibungseigenschaft zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor für Flex-Element setzen

In diesem Beispiel sind insgesamt acht Wachstumsfaktoren unter den sechs Flex-Elementen verteilt, was bedeutet, dass jeder Wachstumsfaktor `12.5%` des verbleibenden Raums ausmacht.

#### HTML

```html
<h1>Dies ist ein <code>flex-grow</code> Beispiel</h1>
<p>
  A, B, C, und F haben <code>flex-grow: 1</code> gesetzt. D und E haben
  <code>flex-grow: 2</code> gesetzt.
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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden, und wenn die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Größen-Flex-Elementen verteilt, wobei `A`, `B`, `C`, und `F` jeweils `12.5%` des verbleibenden Raums und `D` und `E` jeweils `25%` des zusätzlichen Raums erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzform
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
