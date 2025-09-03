---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: b822e112e8dd5b8698f0b1b9baaec32c002c707e
---

Die **`flex-grow`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den flex grow factor fest, der bestimmt, wie viel der [**positiven freien Fläche**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) des Flex-Items zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Items, kann diese positive freie Fläche auf die Flex-Items verteilt werden, wobei das Wachstum jedes Items dem Wert ihres Wachstumsfaktors im Verhältnis zur Gesamtsumme aller flex grow Faktoren der Flex-Items entspricht.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}}-Verkürzung mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-grow` allein zu setzen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu zuverlässigen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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

Die Eigenschaft `flex-grow` wird als einzelne `<number>` angegeben.

### Werte

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig 0, was verhindert, dass das Flex-Item wächst.

## Beschreibung

Diese Eigenschaft bestimmt, wie viel der verbleibenden Fläche im Flex-Container dem Item zugewiesen werden soll (der flex grow factor).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder die Höhe des Items, abhängig vom Wert der {{cssxref("flex-direction")}}.

Der verbleibende Raum oder positive freie Raum ist die Größe des Flex-Containers minus der Größe aller Flex-Items zusammen. Wenn alle benachbarten Items denselben flex grow factor haben, erhalten alle Items denselben Anteil an verbleibendem Raum. Übliche Praxis ist es, `flex-grow: 1` zu setzen, aber den flex grow factor für alle Flex-Items auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` zu setzen, führt zum gleichen Ergebnis: der Wert ist ein Verhältnis.

Wenn die `flex-grow`-Werte unterschiedlich sind, wird der positive freie Raum entsprechend dem durch die verschiedenen flex grow Faktoren definierten Verhältnis verteilt. Die `flex-grow`-Faktorwerte aller benachbarten Flex-Items werden addiert. Der positive freie Raum des Flex-Containers, falls vorhanden, wird dann durch diese Gesamtzahl geteilt. Die Hauptgröße jedes Flex-Items mit einem `flex-grow`-Wert größer als `0` wird um dieses Verhältnis multipliziert mit seinem eigenen Wachstumsfaktor wachsen.

Zum Beispiel, wenn vier `100px` Flex-Items in einem `700px` Container sind und die Flex-Items `flex-grow` Faktoren von `0`, `1`, `2` und `3` haben, beträgt die gesamte Hauptgröße der vier Items `400px`, was bedeutet, dass es `300px` positiven freien Raum zu verteilen gibt. Die Summe der vier Wachstumsfaktoren (`0 + 1 + 2 + 3 = 6`) entspricht sechs. Daher ist jeder Wachstumsfaktor gleich `50px` (`(300px / 6 )`). Jedes Flex-Item erhält 50px freien Raum multipliziert mit seinem `flex-grow` Faktor — also `0`, `50px`, `100px` und `150px` jeweils. Die gesamten Flex-Item-Größen werden `100px`, `150px`, `200px` und `250px`.

`flex-grow` wird häufig zusammen mit den anderen {{cssxref("flex")}}-Verkürzungs-Eigenschaften {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}} verwendet. Die Verwendung der `flex`-Verkürzung wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Wachstumsfaktor des Flex-Items setzen

In diesem Beispiel entspricht die Summe aus sechs flex-grow Faktoren acht, was bedeutet, dass jeder Wachstumsfaktorwert `12.5%` des verbleibenden Raumes ist.

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

Wenn die sechs Flex-Items entlang der Hauptachse des Containers verteilt werden und die Summe des Hauptinhalts dieser Flex-Items kleiner ist als die Größe der Hauptachse des Containers, wird der zusätzliche Raum unter den flex-Items verteilt, wobei `A`, `B`, `C` und `F` jeweils `12.5%` des verbleibenden Raumes und `D` und `E` jeweils `25%` des zusätzlichen Raumes erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}}-Verkürzung
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [`flex-grow` is weird. Or is it?](https://css-tricks.com/flex-grow-is-weird/) via CSS-Tricks (2017)
