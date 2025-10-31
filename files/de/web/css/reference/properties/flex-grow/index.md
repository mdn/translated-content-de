---
title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt den Flex-Wachstumsfaktor, der angibt, wie viel vom [**positiven Freiraum**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Elemente, kann dieser positive Freiraum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements ihrem Wachstumsfaktor-Wert als Anteil an der Gesamtsumme aller Flex-Element-Wachstumsfaktoren entspricht.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-grow` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu verlässlichen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}}, und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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

Die `flex-grow` Eigenschaft wird als einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Raums im Flex-Container dem Element (dem Flex-Wachstumsfaktor) zugewiesen werden soll.

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom {{cssxref("flex-direction")}} Wert.

Der verbleibende Raum oder positive Freiraum ist die Größe des Flex-Containers minus die Größe aller zusammengefügten Flex-Elemente. Wenn alle benachbarten Elemente denselben Flex-Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil des verbleibenden Raums. Die gängige Praxis ist, `flex-grow: 1` zu setzen, aber den Flex-Wachstumsfaktor für alle Flex-Elemente auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` zu setzen, wird dasselbe Ergebnis produzieren: Der Wert ist ein Verhältnis.

Wenn die `flex-grow` Werte unterschiedlich sind, wird der positive Freiraum gemäß dem Verhältnis verteilt, das durch die unterschiedlichen Flex-Wachstumsfaktoren definiert ist. Die `flex-grow` Faktorwerte aller benachbarten Flex-Elemente werden zusammengezählt. Der positive Freiraum des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wird um diesen Quotienten multipliziert mit ihrem eigenen Wachstumsfaktor wachsen.

Zum Beispiel, wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente `flex-grow` Faktoren von `0`, `1`, `2`, und `3` haben, beträgt die Gesamt-Hauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiver Freiraum zu verteilen ist. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) ergibt sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedes Flex-Element erhält 50px Freiraum multipliziert mit seinem `flex-grow` Faktor — also `0`, `50px`, `100px`, und `150px` respektive. Die Gesamtgröße der Flex-Elemente beträgt dann `100px`, `150px`, `200px`, und `250px` respektive.

Das `flex-grow` wird normalerweise zusammen mit den anderen {{cssxref("flex")}} Kurzschreibweise-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Die Verwendung der `flex` Kurzschreibweise wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor des Flex-Elements festlegen

In diesem Beispiel ist die Summe von sechs `flex-grow` Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktor-Wert `12.5%` des verbleibenden Raumes beträgt.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden, und die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Flex-Elementen verteilt, wobei `A`, `B`, `C` und `F` jeweils `12.5%` des verbleibenden Raumes und `D` und `E` jeweils `25%` des zusätzlichen Raumes erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS-flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` ist merkwürdig. Oder ist es?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
