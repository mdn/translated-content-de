---
title: "`flex-shrink` CSS property"
short-title: flex-shrink
slug: Web/CSS/Reference/Properties/flex-shrink
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`flex-shrink`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt den Flex-Schrumpfungsfaktor für ein Flex-Element fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#the_flex-shrink_property), um entsprechend ihrem `flex-shrink`-Wert zu passen. Der [negative Freiraum](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios#positive_and_negative_free_space) jeder Flex-Zeile wird zwischen den Flex-Elementen der Zeile verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-shrink` allein festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/Reference/Properties/flex#values) expandieren zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, `flex-shrink` und {{cssxref("flex-basis")}}, die helfen, die üblichen gewünschten Flex-Verhaltensweisen zu erreichen.

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
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig 1.

## Beschreibung

Die `flex-shrink`-Eigenschaft gibt den Flex-Schrumpfungsfaktor an, der bestimmt, wie stark das Flex-Element im Vergleich zu den anderen Flex-Elementen im Flex-Container schrumpft, wenn negativer Freiraum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die Flex-Basis-Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, schrumpfen die Elemente, damit sie den Container nicht überlaufen.

Die `flex-grow`-Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven Freiraums proportional zu jedem `flex-grow`-Faktor des Elements, wobei der Wert der `flex-grow`-Eigenschaft die einzige Überlegung ist. Die `flex-shrink`-Eigenschaft verwaltet das Entfernen von negativem Freiraum, um die Boxen innerhalb ihres Containers anzupassen, ohne überzulaufen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Flex-Schrumpfungsfaktor wird mit der Basisgröße des Flex-Elements multipliziert; dies verteilt den negativen Raum proportional dazu, wie stark das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den {{cssxref("flex-grow")}}- und {{cssxref("flex-basis")}}-Eigenschaften verwendet. Innerhalb der `flex`-Kurzschreibweise ist der Schrumpfungsfaktor immer die zweite `<number>`. Wenn in der Kurzschreibweise nur ein Zahlenwert enthalten ist, wird dieser als `flex-grow`-Wert angenommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schrumpfungsfaktors für Flex-Elemente

Dieses Beispiel demonstriert, wie negativer Freiraum basierend auf dem Schrumpfungsfaktor des Elements verteilt wird. Es enthält fünf Flex-Elemente mit einem `flex-shrink`-Wert größer als 0, die eine kombinierte Breite haben, die größer ist als die Breite ihres übergeordneten Flex-Containers.

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

Wir geben jedem Flex-Element eine {{cssxref("Breite")}} von `200px`. Da die {{cssxref("flex-basis")}}-Eigenschaft standardmäßig auf `auto` eingestellt ist, hat jedes Element eine Flex-Basis von `200px`. Dies gibt den Flex-Elementen eine Gesamtbreite von `1000px`, das Doppelte der Containergröße. Wir setzen alle Flex-Elemente auf schrumpfbar mit `flex-shrink`-Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink`-Werte, sodass sie stärker schrumpfen.

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

Die Flex-Elemente überlaufen ihren Container nicht, da sie schrumpfen können: Die `500px` an negativem Freiraum werden unter den fünf Elementen basierend auf ihren `flex-shrink`-Werten verteilt. Die ersten drei Elemente haben `flex-shrink: 1` gesetzt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` gesetzt. Die endgültige Breite von D und E ist geringer als bei den anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios)
- [CSS flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
