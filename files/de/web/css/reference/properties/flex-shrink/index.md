---
title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Schrumpfungsfaktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer ist als der Flex-Container, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property), um entsprechend ihrem `flex-shrink` Wert zu passen. Jeder negativen Freiraum in den Flex-Linien wird zwischen den Flex-Elementen verteilt, die einen `flex-shrink` Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschrift mit einem Schlüsselwortwert wie `auto` oder `initial` anstelle des alleinigen Setzens von `flex-basis` zu verwenden. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, `flex-shrink`, und {{cssxref("flex-basis")}}, die helfen, die allgemein gewünschten Flex-Verhaltensweisen zu erreichen.

{{InteractiveExample("CSS Demo: flex-shrink")}}

```css interactive-example-choice
flex-shrink: 0;
```

```css interactive-example-choice
flex-shrink: 1;
```

```css interactive-example-choice
flex-shrink: 2;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">I shrink</div>
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
  flex-basis: 300px;
}
```

## Syntax

```css
/* <number> values */
flex-shrink: 2;
flex-shrink: 0.6;

/* Global values */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

## Beschreibung

Die `flex-shrink` Eigenschaft spezifiziert den Flex-Schrumpfungsfaktor, der bestimmt, wie stark das Flex-Element im Vergleich zu den anderen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer Freiraum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die `flex-basis` Werte der Flex-Elemente berechnet und feststellt, dass diese zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente schrumpfen, damit sie den Container nicht überfüllen.

Die `flex-grow` Eigenschaft befasst sich mit der Verteilung von verfügbarem positiven Freiraum proportional zu jedem Element anhand des `flex-grow` Faktors, wobei der Wert der `flex-grow` Eigenschaft die einzige Überlegung ist. Die `flex-shrink` Eigenschaft verwaltet das Entfernen von negativem Freiraum, damit die Boxen in ihren Container passen, ohne überzulaufen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Flex-Schrumpfungsfaktor wird mit der Flex-Basisgröße multipliziert; dies verteilt den negativen Raum proportional dazu, wie stark das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente zu `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

In der Regel wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex` Kurzschrift ist der Schrumpfungsfaktor immer die zweite `<number>`. Wenn die Kurzschrift nur einen Zahlenwert enthält, wird davon ausgegangen, dass dieser der `flex-grow` Wert ist.

## Werte

Die `flex-shrink` Eigenschaft wird als eine einzelne `<number>` spezifiziert.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schrumpfungsfaktors eines Flex-Elements

Dieses Beispiel demonstriert, wie negativer Freiraum basierend auf dem Schrumpfungsfaktor des Elements verteilt wird. Es enthält fünf Flex-Elemente mit einem `flex-shrink` Wert größer als 0, die zusammen eine Breite haben, die größer ist als die Breite ihres übergeordneten Flex-Containers.

#### HTML

```html
<div id="content">
  <div class="box1">A</div>
  <div class="box2">B</div>
  <div class="box3">C</div>
  <div class="box4">D</div>
  <div class="box5">E</div>
</div>
```

#### CSS

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die {{cssxref("flex-basis")}} Eigenschaft standardmäßig auf `auto` gesetzt ist, beträgt die Flex-Basis jedes Elements `200px`. Dadurch haben die Flex-Elemente eine Gesamtheit von `1000px`, was doppelt so groß ist wie der Container. Wir setzen alle Flex-Elemente auf schrumpfbar, mit `flex-shrink` Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink` Werte, sodass sie mehr schrumpfen.

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  width: 200px;
}

.box1,
.box2,
.box3 {
  flex-shrink: 1;
}

.box4 {
  flex-shrink: 1.5;
}

.box5 {
  flex-shrink: 2;
}
```

```css hidden
#content {
  margin: 5px;
}
div {
  font-family: monospace;
  outline: 1px solid;
  line-height: 4em;
  text-align: center;
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
  background-color: lightsalmon;
}
.box5 {
  background-color: lightgreen;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_flex_item_shrink_factor', 500, 100)}}

Die Flex-Elemente überfüllen ihren Container nicht, da sie schrumpfen können: der `500px` negative Freiraum wird unter den fünf Elementen basierend auf ihren `flex-shrink` Werten verteilt. Die ersten drei Elemente haben `flex-shrink: 1` eingestellt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` eingestellt. Die endgültige Breite von D und E ist geringer als die der anderen, wobei E kleiner ist als D.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Kontrollieren der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
