---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Flex-Schrumpffaktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property), um gemäß ihrem `flex-shrink`-Wert zu passen. Jeder Flex-Zeilen wird der [negative freie Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) zwischen den Flex-Elementen der Zeile verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise mit einem Schlüsselwortwert wie `auto` oder `initial` zu verwenden, anstatt `flex-basis` alleine festzulegen. Die [Schlüsselwortwerte](/de/docs/Web/CSS/flex#values) erweitern sich zu zuverlässigen Kombinationen von {{cssxref("flex-grow")}}, `flex-shrink` und {{cssxref("flex-basis")}}, die helfen, die häufig gewünschten Flex-Verhaltensweisen zu erzielen.

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

Die `flex-shrink` Eigenschaft legt den Flex-Schrumpffaktor fest, der bestimmt, wie stark das Flex-Element im Vergleich zum Rest der Flex-Elemente im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die Flex-Basis-Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente schrumpfen, damit sie den Container nicht überlaufen.

Die `flex-grow` Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven freien Raums proportional zu jedem Element's Flex-Wachstumsfaktor, wobei der Wert der `flex-grow` Eigenschaft die einzige Überlegung ist. Die `flex-shrink` Eigenschaft verwaltet das Entfernen von negativem freien Raum, um Boxen so in ihren Container zu passen, dass sie nicht überlaufen. Platz zu entfernen ist etwas komplizierter als Platz hinzuzufügen. Der Flex-Schrumpffaktor wird mit der Flex-Basisgröße multipliziert; dies verteilt negativen Raum proportional dazu, wie viel das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

In der Regel wird `flex-shrink` zusammen mit den {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} Eigenschaften verwendet. Innerhalb der `flex`-Kurzschreibweise ist der Schrumpffaktor immer die zweite `<number>`. Wenn die Kurzschreibweise nur einen Zahlenwert enthält, wird angenommen, dass dieser Wert der `flex-grow`-Wert ist.

## Werte

Die `flex-shrink` Eigenschaft wird als einzelne `<number>` angegeben.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Flex-Element Schrumpffaktor setzen

Dieses Beispiel zeigt, wie negativer freier Raum basierend auf dem Schrumpffaktor des Elements verteilt wird. Es umfasst fünf Flex-Elemente mit einem `flex-shrink` Wert größer als 0, deren kombinierte Breite größer als die Breite ihres übergeordneten Flex-Containers ist.

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

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die {{cssxref("flex-basis")}}-Eigenschaft standardmäßig auf `auto` steht, ist die Flex-Basis jedes Elements `200px`. Das gibt den Flex-Elementen eine Gesamtbreite von `1000px`, doppelt so groß wie der Container. Wir setzen alle Flex-Elemente auf schrumpfbar, mit `flex-shrink` Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink` Werte, damit sie mehr schrumpfen.

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

Die Flex-Elemente überlaufen ihren Container nicht, da sie in der Lage sind zu schrumpfen: Die `500px` negativer freier Raum wird unter den fünf Elementen basierend auf ihren `flex-shrink` Werten verteilt. Die ersten drei Elemente haben `flex-shrink: 1` gesetzt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` gesetzt. Die endgültige Breite von D und E ist kleiner als bei den anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS flexibles Boxenlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
