---
title: "`flex-grow` CSS property"
short-title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`flex-grow`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel des [**positiven Freiraums**](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) des Flex-Containers, sofern vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Items zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Items, kann dieser positive Freiraum unter den Flex-Items verteilt werden. Das Wachstum jedes Items entspricht dem Wert seines Wachstumsfaktors als ein Anteil zur Summe aller Flex-Wachstumsfaktoren der Flex-Items.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-grow` allein einzustellen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu zuverlässigen Kombinationen aus `flex-grow`, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, die helfen, die üblicherweise gewünschten Flex-Verhaltensweisen zu erreichen.

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
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Der Standardwert ist 0, was verhindert, dass das Flex-Item wächst.

## Beschreibung

Diese Eigenschaft legt fest, wie viel des verbleibenden Raums im Flex-Container dem Item zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder die Höhe des Items, abhängig vom {{cssxref("flex-direction")}}-Wert.

Der verbleibende Raum, oder positiver Freiraum, ist die Größe des Flex-Containers minus der Gesamtgröße aller Flex-Item-Größen zusammen. Wenn alle benachbarten Items denselben Flex-Wachstumsfaktor haben, erhalten alle Items denselben Anteil des verbleibenden Raums. Der gebräuchliche Ansatz ist, `flex-grow: 1` zu setzen, aber das Festlegen des Flex-Wachstumsfaktors für alle Flex-Items auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` führt zum selben Ergebnis: Der Wert ist ein Verhältnis.

Wenn die `flex-grow`-Werte unterschiedlich sind, wird der positive Freiraum gemäß dem durch die unterschiedlichen Flex-Wachstumsfaktoren definierten Verhältnis verteilt. Die `flex-grow`-Faktorwerte aller benachbarten Flex-Items werden zusammengezählt. Der positive Freiraum des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Items mit einem `flex-grow`-Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel, wenn vier `100px` Flex-Items in einem `700px` Container sind und die Flex-Items haben `flex-grow`-Faktoren von `0`, `1`, `2` und `3`, sind die Gesamthauptgrößen der vier Items `400px`, was bedeutet, dass `300px` an positivem Freiraum zu verteilen sind. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) entspricht sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedes Flex-Item erhält 50px Freiraum multipliziert mit seinem `flex-grow`-Faktor — also `0`, `50px`, `100px` und `150px` entsprechend. Die Gesamtgrößen der Flex-Items werden zu `100px`, `150px`, `200px` und `250px`.

`flex-grow` wird üblicherweise zusammen mit den anderen {{cssxref("flex")}} Kurzschreibweise-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex` Kurzschreibweise-Eigenschaft zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Item Wachstumsfaktor einstellen

In diesem Beispiel ist die Summe der sechs `flex-grow`-Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktorwert `12,5%` des verbleibenden Raums entspricht.

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

Wenn die sechs Flex-Items entlang der Hauptachse des Containers verteilt werden, und die Summe des Hauptinhalts dieser Flex-Items kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Flex-Items verteilt. `A`, `B`, `C` und `F` erhalten jeweils `12,5%` des verbleibenden Raums, und `D` und `E` erhalten jeweils `25%` des zusätzlichen Raums.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuern der Verhältnisse von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS-Flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
