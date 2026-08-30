---
title: "`flex-shrink` CSS property"
short-title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: 85d26079214ccd6171a472cf2389211c3b0d7e96
---

Die **`flex-shrink`**- [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Flex-Schrumpffaktor eines Flex-Elements fest. Sollte die Größe aller Flex-Elemente größer als der Flex-Container sein, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#the_flex-shrink_property), um gemäß ihrem `flex-shrink`-Wert zu passen. Der [negative freie Raum](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#positive_and_negative_free_space) jeder Flexzeile wird zwischen den Flex-Elementen der Zeile verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}}-Kurzform mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-shrink` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) expandieren zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, `flex-shrink` und {{cssxref("flex-basis")}}, die dazu beitragen, die häufig gewünschten Flex-Verhaltensweisen zu erreichen.

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

## Werte

Diese Eigenschaft wird als folgender Wert angegeben:

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Beschreibung

Die `flex-shrink`-Eigenschaft gibt den Flex-Schrumpffaktor an, der bestimmt, wie stark das Flex-Element relativ zu den anderen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die flex-basis-Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange der `flex-shrink`-Wert positiv ist, werden die Elemente schrumpfen, damit sie den Container nicht überlaufen.

Die `flex-grow`-Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven freien Raumes proportional zum flex-grow-Faktor jedes Elements, wobei der Wert der `flex-grow`-Eigenschaft die einzige Überlegung ist. Die `flex-shrink`-Eigenschaft verwaltet das Entfernen von negativem freien Raum, um die Kästchen in ihren Container ohne Überlauf zu passen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Flex-Schrumpffaktor wird mit der Flex-Basisgröße multipliziert; dies verteilt negativen Raum proportional dazu, wie stark das Element schrumpfen kann. Dadurch wird verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex`-Kurzform ist der Schrumpffaktor immer das zweite `<number>`. Wenn die Kurzform nur einen Zahlenwert enthält, wird dieser Wert als `flex-grow`-Wert angenommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schrumpffaktors von Flex-Elementen

Dieses Beispiel zeigt, wie negativer freier Raum basierend auf dem Schrumpffaktor des Elements verteilt wird. Es umfasst fünf Flex-Elemente mit einem `flex-shrink`-Wert größer als 0, die zusammen eine Breite haben, die größer als die Breite ihres übergeordneten Flex-Containers ist.

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

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die {{cssxref("flex-basis")}}-Eigenschaft standardmäßig auf `auto` gesetzt ist, hat jedes Element eine flex-basis von `200px`. Dies ergibt eine Gesamtbreite der Flex-Elemente von `1000px`, doppelt so groß wie der Container. Wir setzen alle Flex-Elemente auf schrumpfbar, mit `flex-shrink`-Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink`-Werte, sodass sie mehr schrumpfen.

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

Die Flex-Elemente überlaufen ihren Container nicht, weil sie schrumpfen können: Die `500px` negativer freier Raum wird unter den fünf Elementen basierend auf ihren `flex-shrink`-Werten verteilt. Die Summe aller Schrumpfwerte für die fünf Elemente beträgt `1 + 1 + 1 + 1.5 + 2` = `6.5`. Daher wird die Breite der Elemente mit `flex-shrink: 1` um `1/6.5 * 500px` = `76.92px` reduziert, die Breite der Elemente mit `flex-shrink: 1.5` um `1.5/6.5 * 500px` = `115.38px` und die Breite der Elemente mit `flex-shink: 2` um `2/6.5 * 500px` = `153.85px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS-Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul
