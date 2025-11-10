---
title: flex-grow
slug: Web/CSS/Reference/Properties/flex-grow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`flex-grow`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Flexwachstumsfaktor fest, der angibt, wie viel des [**positiven Freiraums**](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) im Flexcontainer, falls vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flexitems zugewiesen werden soll.

Wenn die Hauptgröße des Flexcontainers größer ist als die kombinierten Hauptgrößen seiner Flexitems, kann dieser positive Freiraum auf die Flexitems verteilt werden, wobei das Wachstum jedes Items durch dessen Wachstumsfaktorwert im Verhältnis zur Gesamtsumme aller Flexwachstumsfaktoren der Flexitems bestimmt wird.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}}-Kurzform mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-grow` alleine zu setzen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu zuverlässigen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flexverhaltensweisen zu erreichen.

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
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig 0, was verhindert, dass das Flexitem wächst.

## Beschreibung

Diese Eigenschaft gibt an, wie viel des verbleibenden Platzes im Flexcontainer dem Item zugewiesen werden soll (der Flexwachstumsfaktor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Items, abhängig vom Wert der {{cssxref("flex-direction")}}.

Der verbleibende Platz, oder positive Freiraum, ist die Größe des Flexcontainers minus die Größe aller Flexitems zusammen. Wenn alle gleichrangigen Items den gleichen Flexwachstumsfaktor haben, erhalten alle Items den gleichen Anteil des verbleibenden Platzes. Üblicherweise wird `flex-grow: 1` gesetzt, aber das Setzen des Flexwachstumsfaktors für alle Flexitems auf `88`, `100`, `1.2` oder einen anderen Wert größer als `0` ergibt dasselbe Ergebnis: Der Wert ist ein Verhältnis.

Wenn die `flex-grow`-Werte unterschiedlich sind, wird der positive Freiraum entsprechend dem Verhältnis verteilt, das durch die unterschiedlichen Flexwachstumsfaktoren definiert ist. Die `flex-grow`-Faktorwerte aller gleichrangigen Flexitems werden zusammen addiert. Der positive Freiraum des Flexcontainers, falls vorhanden, wird dann durch diese Gesamtsumme geteilt. Die Hauptgröße jedes Flexitems mit einem `flex-grow`-Wert größer als `0` wächst um diesen Quotienten multipliziert mit seinem eigenen Wachstumsfaktor.

Zum Beispiel: Wenn vier `100px`-Flexitems in einem `700px`-Container sind und die Flexitems haben `flex-grow`-Faktoren von `0`, `1`, `2` und `3`, beträgt die Gesamthauptgröße der vier Items `400px`, was bedeutet, dass `300px` positiver Freiraum verteilt werden müssen. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) beträgt sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedes Flexitem erhält 50px Freiraum multipliziert mit seinem `flex-grow`-Faktor — also `0`, `50px`, `100px` und `150px` jeweils. Die gesamten Flexitemgrößen betragen dann `100px`, `150px`, `200px` und `250px` jeweils.

`flex-grow` wird im Allgemeinen zusammen mit den anderen {{cssxref("flex")}} Kurzform-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Es wird empfohlen, die `flex` Kurzform-Eigenschaft zu verwenden, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor des Flexitems setzen

In diesem Beispiel ist die Summe von sechs `flex-grow`-Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktorwert `12.5%` des verbliebenen Platzes ist.

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

Wenn die sechs Flexitems entlang der Hauptachse des Containers verteilt sind und die Summe des Hauptinhalts dieser Flexitems kleiner ist als die Größe der Hauptachse des Containers, wird der überschüssige Platz unter den Größe-Flexitems verteilt, wobei `A`, `B`, `C` und `F` jeweils `12.5%` des verbleibenden Platzes erhalten und `D` und `E` jeweils `25%` des zusätzlichen Platzes bekommen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzform
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuerung der Verhältnisse von Flexitems entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [`flex-grow` ist seltsam. Oder nicht?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
