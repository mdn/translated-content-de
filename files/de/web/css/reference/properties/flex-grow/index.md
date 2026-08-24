---
title: "`flex-grow` CSS property"
short-title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`flex-grow`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Flex-Wachstumsfaktor fest, der angibt, wie viel des [**positiven freien Raums**](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) des Flex-Containers einem Flex-Element für die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) zugewiesen werden soll, falls vorhanden.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierten Hauptgrößen seiner Flex-Elemente, kann dieser positive freie Raum unter den Flex-Elementen verteilt werden. Jedes Element wächst entsprechend seinem Wachstumsfaktor als Anteil an der Summe aller Flex-Wachstumsfaktoren der Flex-Elemente.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzform mit einem Schlüsselwortwert wie `auto` oder `initial` anstelle von `flex-grow` alleine zu verwenden. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu verlässlichen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}}, und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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

Diese Eigenschaft wird wie folgt angegeben:

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 0, wodurch das Wachstum des Flex-Elements verhindert wird.

## Beschreibung

Diese Eigenschaft legt fest, wie viel des verbleibenden Raums im Flex-Container dem Element (dem Flex-Wachstumsfaktor) zugewiesen werden soll.

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom {{cssxref("flex-direction")}}-Wert.

Der verbleibende Raum oder positive freie Raum ist die Größe des Flex-Containers minus der Größe aller zusammen genommenen Flex-Elementgrößen. Wenn alle Nebenelemente denselben Flex-Wachstumsfaktor haben, erhalten alle Elemente denselben Anteil des verbleibenden Raums. Üblich ist es, `flex-grow: 1` zu setzen, aber für alle Flex-Elemente den Flex-Wachstumsfaktor auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` zu setzen, ergibt dasselbe Ergebnis: der Wert ist ein Verhältnis.

Unterscheiden sich die `flex-grow`-Werte, wird der positive freie Raum entsprechend dem durch die verschiedenen Flex-Wachstumsfaktoren festgelegten Verhältnis verteilt. Die `flex-grow`-Faktorwerte aller benachbarten Flex-Elemente werden zusammenaddiert. Der positive Freiraum des Flex-Containers wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow`-Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel, wenn vier Flex-Elemente von `100px` sich in einem Container von `700px` befinden und die Flex-Elemente `flex-grow`-Faktoren von `0`, `1`, `2` und `3` haben, beträgt die gesamte Hauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiver Freiraum verteilt werden müssen. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) ergibt sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`. Jedes Flex-Element erhält 50px Freiraum multipliziert mit seinem `flex-grow`-Faktor — also `0`, `50px`, `100px` und `150px` jeweils. Die gesamten Flex-Elementgrößen werden respektive zu `100px`, `150px`, `200px` und `250px`.

`flex-grow` wird generell mit den anderen {{cssxref("flex")}} Kurzform-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Die Verwendung der `flex` Kurzform-Eigenschaft wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Wachstumsfaktors von Flex-Elementen

In diesem Beispiel ist die Summe der sechs `flex-grow`-Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktorwert `12,5%` des verbleibenden Raums ist.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt werden und die Summe des Hauptinhalts dieser Flex-Elemente kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den Flex-Elementen verteilt, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Raums und `D` und `E` jeweils `25%` des zusätzlichen Raums erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzform
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
