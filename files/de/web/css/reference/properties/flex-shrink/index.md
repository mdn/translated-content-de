---
title: "`flex-shrink` CSS property"
short-title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Flex-Schrumpffaktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#the_flex-shrink_property), um entsprechend ihrem `flex-shrink`-Wert zu passen. Der [negative freie Raum](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#positive_and_negative_free_space) jeder Flexzeile wird zwischen den Flex-Elementen der Zeile verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}}-Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-shrink` eigenständig zu setzen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, `flex-shrink` und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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

Die `flex-shrink`-Eigenschaft bestimmt den Flex-Schrumpffaktor, der festlegt, wie stark das Flex-Element im Verhältnis zu den restlichen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die flex-basis-Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente schrumpfen, um ein Überlaufen des Containers zu verhindern.

Die `flex-grow`-Eigenschaft kümmert sich um die Verteilung des verfügbaren positiven freien Raums proportional zu jedem Element gemäß dessen Flex-Wachstumsfaktor, wobei der Wert der `flex-grow`-Eigenschaft als einzige Überlegung dient. Die `flex-shrink`-Eigenschaft verwaltet das Entfernen von negativem freiem Raum, um die Boxen ins Behältnis zu passen, ohne überzufließen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Flex-Schrumpffaktor wird mit der Flex-Größe multipliziert; dies verteilt den negativen Raum proportional zu dem Maß, in dem das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex`-Kurzschreibweise ist der Schrumpffaktor immer die zweite `<number>`. Wenn die Kurzschreibweise nur einen Zahlenwert enthält, wird dieser Wert als `flex-grow`-Wert angenommen.

## Werte

Die `flex-shrink`-Eigenschaft wird als einzelne `<number>` angegeben.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Schrumpffaktor von Flex-Elementen einstellen

Dieses Beispiel zeigt, wie negativer freier Raum basierend auf dem Schrumpffaktor des Elements verteilt wird. Es umfasst fünf Flex-Elemente mit einem `flex-shrink`-Wert größer als 0, die zusammen eine Breite haben, die größer ist als die Breite des übergeordneten Flex-Containers.

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

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die Eigenschaft {{cssxref("flex-basis")}} standardmäßig auf `auto` steht, hat jedes Element eine Flex-Basis von `200px`. Dies gibt den Flex-Elementen eine Gesamtbreite von `1000px`, doppelt so groß wie der Container. Wir setzen alle Flex-Elemente auf schrumpfbar, mit `flex-shrink`-Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink`-Werte, sodass sie mehr schrumpfen.

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

Die Flex-Elemente laufen nicht über ihren Container hinaus, weil sie in der Lage sind zu schrumpfen: die `500px` negativer freier Raum werden unter den fünf Elementen anhand ihrer `flex-shrink`-Werte verteilt. Die ersten drei Elemente haben `flex-shrink: 1` gesetzt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` gesetzt. Die endgültige Breite von D und E ist kleiner als die der anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
