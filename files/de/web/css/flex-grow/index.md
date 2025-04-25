---
title: flex-grow
slug: Web/CSS/flex-grow
l10n:
  sourceCommit: c2cfce2cd4a7b4057270c59e61cc4576084638ba
---

{{CSSRef}}

Die **`flex-grow`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Wachstumfaktor fest, der angibt, wie viel vom [**positiven freien Platz**](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) des Flex-Containers, falls vorhanden, der Hauptgröße des Flex-Elements zugewiesen werden soll.

Wenn die Hauptgröße des Flex-Containers größer ist als die kombinierte Hauptgröße seiner Flex-Elemente, kann dieser positive freie Platz unter den Flex-Elementen verteilt werden, wobei das Wachstum jedes Elements dessen Wachstumsfaktor als Anteil der Gesamtsumme aller Wachstumsfaktoren der Flex-Elemente ist.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-basis` alleine festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu zuverlässigen Kombinationen von `flex-grow`, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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
  background-color: rgba(0, 0, 255, 0.2);
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
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 0, was verhindert, dass das Flex-Element wächst.

## Beschreibung

Diese Eigenschaft spezifiziert, wie viel von dem verbleibenden Platz im Flex-Container dem Element zugewiesen werden sollte (der Wachstumfaktor des Flex-Elements).

Die [Hauptgröße](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox#the_flex_model) ist entweder die Breite oder Höhe des Elements, abhängig vom Wert von {{cssxref("flex-direction")}}.

Der verbleibende Platz oder positive freie Platz ist die Größe des Flex-Containers minus der Größe aller Flex-Element-Größen zusammen. Wenn alle gleichrangigen Elemente denselben Wachstumfaktor haben, erhalten alle Elemente den gleichen Anteil des verbleibenden Platzes. Übliche Praxis ist es, `flex-grow: 1` zu setzen, aber das Setzen des Wachstumfaktors für alle Flex-Elemente auf `88`, `100`, `1.2` oder jeden anderen Wert größer als `0` wird dasselbe Ergebnis liefern: der Wert ist ein Verhältnis.

Wenn die `flex-grow` Werte unterschiedlich sind, wird der positive freie Platz entsprechend dem durch die unterschiedlichen Wachstumfaktoren definierten Verhältnis verteilt. Die `flex-grow` Faktorwerte aller gleichrangigen Flex-Elemente werden zusammengezählt. Der positive freie Platz des Flex-Containers, falls vorhanden, wird dann durch diese Summe geteilt. Die Hauptgröße jedes Flex-Elements mit einem `flex-grow` Wert größer als `0` wird um diesen Quotienten multipliziert mit seinem eigenen Wachstumfaktor vergrößert.

Zum Beispiel, wenn vier `100px` große Flex-Elemente in einem `700px` Container sind und die Flex-Elemente `flex-grow` Faktoren von `0`, `1`, `2`, und `3` haben, ist die gesamte Hauptgröße der vier Elemente `400px`, was bedeutet, dass `300px` positiver freier Platz verteilt werden muss. Die Summe der vier Wachstumfaktoren (`0 + 1 + 2 + 3 = 6`) ist gleich sechs. Deshalb ist jeder Wachstumfaktor gleich `50px` (`(300px / 6 )`. Jedem Flex-Element werden 50px freien Platz multipliziert mit seinem `flex-grow` Faktor gegeben — also `0`, `50px`, `100px` und `150px` entsprechend. Die Gesamtgrößen der Flex-Elemente betragen dann `100px`, `150px`, `200px` und `250px`.

`flex-grow` wird im Allgemeinen zusammen mit den anderen {{cssxref("flex")}} Kurzschreib-Eigenschaften, {{cssxref("flex-shrink")}} und {{cssxref("flex-basis")}}, verwendet. Die Verwendung der `flex` Kurzschreib-Eigenschaft wird empfohlen, um sicherzustellen, dass alle Werte gesetzt sind.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung des Wachstumfaktors von Flex-Elementen

In diesem Beispiel ist die Summe von sechs `flex-grow` Faktoren gleich acht, was bedeutet, dass jeder Wachstumsfaktorwert `12,5%` des verbleibenden Platzes entspricht.

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

Wenn die sechs Flex-Elemente entlang der Hauptachse des Containers verteilt sind, erhält, falls die Summe der Hauptinhalte dieser Flex-Elemente kleiner als die Größe der Hauptachse des Containers ist, jedes der Größen-Flex-Elemente den überschüssigen Platz, wobei `A`, `B`, `C` und `F` jeweils `12,5%` des verbleibenden Platzes und `D` und `E` jeweils `25%` des zusätzlichen Platzes erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("flex")}} Kurzschreibweise
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [`flex-grow` ist seltsam. Oder doch nicht?](https://css-tricks.com/flex-grow-is-weird/) über CSS-Tricks (2017)
