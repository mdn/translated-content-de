---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Verkleinerungsfaktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können die [Flex-Elemente verkleinert werden](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property), um entsprechend ihrem `flex-shrink`-Wert zu passen. Der [negative freie Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) jeder Flexzeile wird zwischen den Flex-Elementen der Zeile verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurznotation anstelle separater Deklarationen von `flex-shrink`, {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} zu verwenden. Wir haben sie hier getrennt, da dieses Dokument eine der Komponenten der `flex`-Kurznotation behandelt: die `flex-shrink`-Eigenschaft.

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
  background-color: rgba(0, 0, 255, 0.2);
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

Die `flex-shrink`-Eigenschaft spezifiziert den Verkleinerungsfaktor, der bestimmt, wie stark das Flex-Element im Vergleich zu den restlichen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft behandelt Situationen, in denen der Browser die flex-basis-Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente geschrumpft, damit sie nicht den Container überfluten.

Die `flex-grow`-Eigenschaft behandelt die Verteilung des verfügbaren positiven freien Raums proportional zum Wachstumsfaktor jedes Elements, wobei der Wert der `flex-grow`-Eigenschaft die einzige Überlegung darstellt. Die `flex-shrink`-Eigenschaft verwaltet das Entfernen von negativem freien Raum, um die Boxen in ihren Container passen zu lassen, ohne dass sie überfluten. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Verkleinerungsfaktor wird mit der Basisgröße des Flex-Elements multipliziert; dies verteilt negativen Raum proportional dazu, wie stark das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größerer Gegenstand merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex`-Kurznotation ist der Verkleinerungsfaktor immer die zweite `<number>`. Wenn die Kurznotation nur einen numerischen Wert enthält, wird angenommen, dass dieser Wert der `flex-grow`-Wert ist.

## Werte

Die `flex-shrink`-Eigenschaft wird als eine einzelne `<number>` angegeben.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verkleinerungsfaktor von Flex-Elementen festlegen

Dieses Beispiel zeigt, wie negativer freier Raum basierend auf dem Verkleinerungsfaktor des Elements verteilt wird. Es umfasst fünf Flex-Elemente mit einem `flex-shrink`-Wert größer als 0, die eine kombinierte Breite haben, die größer ist als die Breite ihres übergeordneten Flex-Containers.

#### HTML

```html
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
  <div class="box4" style="background-color:lightsalmon;">D</div>
  <div class="box5" style="background-color:lightgreen;">E</div>
</div>
```

#### CSS

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die Eigenschaft {{cssxref("flex-basis")}} standardmäßig auf `auto` steht, beträgt die flex-basis jedes Elements `200px`. Dies gibt den Flex-Elementen eine Gesamtbreite von `1000px`, doppelt so groß wie der Container. Wir setzen alle Flex-Elemente so, dass sie verkleinert werden können, mit `flex-shrink`-Werten größer als `0`. Die letzten beiden Elemente haben höhere `flex-shrink`-Werte festgelegt, sodass sie stärker schrumpfen.

```css
#content {
  display: flex;
  width: 500px;
}

#content div {
  width: 200px;
}

.box {
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
```

#### Ergebnis

{{EmbedLiveSample('Setting_flex_item_shrink_factor', 500, 100)}}

Die Flex-Elemente überlaufen ihren Container nicht, da sie schrumpfen können: die `500px` negativer freier Raum wird unter den fünf Elementen basierend auf ihren `flex-shrink`-Werten verteilt. Die ersten drei Elemente haben `flex-shrink: 1` gesetzt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` gesetzt. Die endgültige Breite von D und E ist geringer als die der anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexibler Box-Layout-](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
