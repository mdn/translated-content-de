---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

Die **`flex-grow`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel der [**positiven freien Raum**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements ihrem Wachstumsfaktorwert als Verhältnis der Summe aller Flex-Wachstumsfaktoren der Elemente entspricht.

> [!NOTE]
> Es wird empfohlen, das {{cssxref("flex")}}-Shorthand mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-basis` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu verlässlichen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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
  background-color: rgb(0 0 255 / 0.2);
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

Die `flex-grow`-Eigenschaft wird als einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel vom restlichen Raum im Flex-Container dem Element zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom {{cssxref("flex-direction")}}-Wert.

Der restliche Raum, oder positive freie Raum, ist die Größe des Flex-Containers minus der Größe aller zusammengelegten Flex-Elemente. Wenn alle benachbarten Elemente den gleichen Flex-Wachstumsfaktor haben, erhalten alle Elemente den gleichen Anteil des restlichen Raums. Üblich ist es, `flex-grow: 1` zu setzen, aber wenn der Flex-Wachstumsfaktor für alle Flex-Elemente auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` gesetzt wird, ergibt sich das gleiche Ergebnis: Der Wert ist ein Verhältnis.

Wenn die `flex-grow`-Werte unterschiedlich sind, wird der positive freie Raum gemäß dem durch die verschiedenen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow`-Faktorwerte aller benachbarten Flex-Elemente werden zusammengezählt. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow`-Wert größer als `0` wird um diesen Quotienten multipliziert mit ihrem eigenen Wachstumsfaktor wachsen.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente Wachstumsfaktoren von `0`, `1`, `2` und `3` haben, beträgt die gesamte Hauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiven freien Raum zu verteilen sind. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) beträgt sechs. Daher entspricht jeder Wachstumsfaktor `50px` (`300px / 6`). Jedes Flex-Element erhält 50px freien Raum multipliziert mit seinem `flex-grow`-Faktor — also `0`, `50px`, `100px`, und `150px` entsprechend. Die gesamten Flex-Elementgrößen werden `100px`, `150px`, `200px`, und `250px`.

`flex-grow` wird im Allgemeinen zusammen mit den anderen {{cssxref("flex")}}-Shorthand-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex`-Shorthand-Eigenschaft zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor des Flex-Elements setzen

In diesem Beispiel entspricht die Summe der sechs `flex-grow`-Faktoren acht, was bedeutet, dass jeder Wachstumsfaktorwert `12.5%` des verbleibenden Raums ist.

#### HTML

```html
<h1>This is a <code>flex-grow</code> example</h1>
<p>
  A, B, C, and F have <code>flex-grow: 1</code> set. D and E have
  <code>flex-grow: 2</code> set.
</p>
<div id="content">
  <div class="box1">A</div>
  <div class="box2">B</div>
  <div class="box3">C</div>
  <div class="box4">D</div>
  <div class="box5">E</div>
  <div class="box6">F</div>
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

.box1,
.box2,
.box3,
.box6 {
  flex-grow: 1;
}

.box4,
.box5 {
  flex-grow: 2;
  border: 3px solid rgb(0 0 0 / 20%);
}

.box1 {
  background-color: red;
}
.box2 {
  background-color: lightblue;
}
.box3 {
  background-color: yellow;
}
.box4 {
  background-color: brown;
}
.box5 {
  background-color: lightgreen;
}
.box6 {
  background-color: brown;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting flex item grow factor')}}

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden, und die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Größen der Flex-Elemente verteilt, wobei `A`, `B`, `C` und `F` jeweils `12.5%` des restlichen Raumes und `D` und `E` jeweils `25%` des zusätzlichen Raums erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Shorthand
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
