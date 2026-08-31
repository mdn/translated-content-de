---
title: "`flex-shrink` CSS property"
short-title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: efbef0da1dbe29be125eb7db0b831a4e4bd9220d
---

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Shrink-Faktor eines Flex-Items fest. Wenn die Größe aller Flex-Items größer ist als der Flex-Container, können die [Flex-Items schrumpfen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#the_flex-shrink_property), um entsprechend ihrem `flex-shrink`-Wert zu passen. Der [negative freie Raum](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#positive_and_negative_free_space) jeder Flex-Linie wird auf die Flex-Items der Linie verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzform mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-shrink` allein zu setzen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) erweitern sich zu verlässlichen Kombinationen von {{cssxref("flex-grow")}}, `flex-shrink` und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhalten zu erreichen.

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

Diese Eigenschaft wird mit folgendem Wert angegeben:

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Beschreibung

Die `flex-shrink`-Eigenschaft gibt den Flex-Shrink-Faktor an, der bestimmt, wie stark das Flex-Item im Verhältnis zu den anderen Flex-Items im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft behandelt Situationen, in denen der Browser die Flex-Basis-Werte der Flex-Items berechnet und feststellt, dass diese zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Items schrumpfen, um ein Überlaufen des Containers zu verhindern.

Die `flex-grow`-Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven freien Raums proportional zum Flex-Grow-Faktor jedes Items, wobei nur der Wert der `flex-grow`-Eigenschaft berücksichtigt wird. Die `flex-shrink`-Eigenschaft verwaltet die Entfernung von negativem freiem Raum, um die Boxen ohne Überlaufen in ihren Container zu passen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Flex-Shrink-Faktor wird mit der Flex-Basisgröße multipliziert; dies verteilt negativen Raum im Verhältnis dazu, wie stark das Item schrumpfen kann. Dies verhindert, dass kleinere Items auf `0px` schrumpfen, bevor ein größeres Item merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex` Kurzform ist der Shrink-Faktor immer die zweite `<number>`. Wenn die Kurzform nur einen Zahlenwert enthält, wird davon ausgegangen, dass dieser Wert der `flex-grow`-Wert ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schrumpffaktors eines Flex-Items

Dieses Beispiel zeigt, wie negativer freier Raum basierend auf dem Schrumpffaktor des Items verteilt wird. Es umfasst fünf Flex-Items mit einem `flex-shrink`-Wert größer als 0, die eine kombinierte Breite haben, die größer ist als die Breite ihres Parent-Flex-Containers.

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

Wir geben jedem Flex-Item eine {{cssxref("width")}} von `200px`. Da die {{cssxref("flex-basis")}}-Eigenschaft standardmäßig auf `auto` steht, hat jedes Item eine Flex-Basis von `200px`. Dies ergibt für die Flex-Items eine Gesamtbreite von `1000px`, also das Doppelte der Containergröße. Wir setzen alle Flex-Items auf schrumpfbar, mit `flex-shrink`-Werten größer als `0`. Die letzten beiden Items haben größere `flex-shrink`-Werte, sodass sie mehr schrumpfen werden.

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

Die Flex-Items überlaufen ihren Container nicht, da sie schrumpfen können: Die `500px` negativer freier Raum werden basierend auf ihren `flex-shrink`-Werten auf die fünf Items verteilt. Die Summe aller Schrumpfwerte für die fünf Items beträgt `1 + 1 + 1 + 1.5 + 2` = `6.5`. Folglich wird die Breite der Items mit `flex-shrink: 1` um `1/6.5 * 500px` = `76.92px` reduziert, die Breite der Items mit `flex-shrink: 1.5` um `1.5/6.5 * 500px` = `115.38px`, und die Breite der Items mit `flex-shrink: 2` um `2/6.5 * 500px` = `153.85px`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Verhältnissteuerung von Flex-Items entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS Flexibler Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
