---
title: "`flex-grow` CSS property"
short-title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel vom [**positiven freien Raum**](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) des Flex-Containers, sofern vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements seinem Wachstumsfaktor-Wert als Anteil an der Gesamtsumme aller Flex-Wachstumsfaktoren der Flex-Elemente entspricht.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-grow` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu verlässlichen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}}, und {{cssxref("flex-basis")}}, die dazu beitragen, die häufig gewünschten Flex-Verhalten zu erreichen.

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

### Werte

Diese Eigenschaft wird als `<number>` angegeben:

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standard ist 0, was das Wachstum des Flex-Elements verhindert.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Raums im Flex-Container dem Element zugewiesen werden soll (der Flex-Wachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder die Höhe des Elements, abhängig vom {{cssxref("flex-direction")}} Wert.

Der verbleibende Raum oder positive freie Raum ist die Größe des Flex-Containers minus der Größe aller Flex-Elemente zusammen. Wenn alle benachbarten Elemente denselben Flex-Wachstumsfaktor haben, erhalten alle Elemente den gleichen Anteil des verbleibenden Raums. Die gängige Praxis besteht darin, `flex-grow: 1` festzulegen, aber das Festlegen des Flex-Wachstumsfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` erzielt das gleiche Ergebnis: Der Wert ist ein Verhältnis.

Falls die `flex-grow`-Werte unterschiedlich sind, wird der positive freie Raum entsprechend dem Verhältnis der verschiedenen Flex-Wachstumsfaktoren verteilt. Die `flex-grow`-Faktorwerte aller benachbarten Flex-Elemente werden zusammengezählt. Der positive freie Raum des Flex-Containers, sofern vorhanden, wird dann durch diese Gesamtsumme geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow`-Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel: Wenn vier `100px` Flex-Elemente in einem `700px` Container sind und die Flex-Elemente `flex-grow`-Faktoren von `0`, `1`, `2` und `3` haben, beträgt die Gesamthauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiver freier Raum verteilt werden müssen. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) beträgt sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`. Jedes Flex-Element erhält 50px freien Raum multipliziert mit seinem `flex-grow` Faktor — also `0`, `50px`, `100px` und `150px` jeweils. Die Gesamtgröße der Flex-Elemente wird somit `100px`, `150px`, `200px` und `250px` jeweils.

`flex-grow` wird in der Regel neben den anderen {{cssxref("flex")}} Kurzschreibweisen {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}} verwendet. Die Verwendung der `flex` Kurzschreibweise wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Wachstumsfaktors von Flex-Elementen

In diesem Beispiel beträgt die Summe von sechs `flex-grow`-Faktoren acht, was bedeutet, dass jeder Wachstumsfaktorwert `12,5%` des verbleibenden Raums beträgt.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden, wird, falls die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, der zusätzliche Raum unter den Flex-Elementen verteilt. `A`, `B`, `C` und `F` erhalten jeweils `12,5%` des verbleibenden Raums und `D` und `E` erhalten jeweils `25%` des zusätzlichen Raums.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundprinzipien von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [`flex-grow` ist seltsam. Oder doch nicht?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
