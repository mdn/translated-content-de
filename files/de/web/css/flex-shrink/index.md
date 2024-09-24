---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Schrumpffaktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können sich die [Flex-Elemente verkleinern](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property), um gemäß ihrem `flex-shrink`-Wert zu passen. Jeder Flex-Zeile wird der [negative freie Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) unter den Flex-Elementen der Zeile, die einen `flex-shrink`-Wert größer als `0` haben, verteilt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschreibweise anstelle von separaten `flex-shrink`, {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} Deklarationen zu verwenden. Wir haben sie hier getrennt, da dieses Dokument eine der `flex` Kurzschreibkomponenten abdeckt: die `flex-shrink` Eigenschaft.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

## Syntax

```css
/* <number> Werte */
flex-shrink: 2;
flex-shrink: 0.6;

/* Globale Werte */
flex-shrink: inherit;
flex-shrink: initial;
flex-shrink: revert;
flex-shrink: revert-layer;
flex-shrink: unset;
```

## Beschreibung

Die `flex-shrink` Eigenschaft bestimmt den Schrumpffaktor, der festlegt, wie stark ein Flex-Element im Verhältnis zu den übrigen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die flex-basis Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente schrumpfen, damit sie den Container nicht überlaufen.

Die `flex-grow` Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven freien Raums proportional zu jedem Flex-Wachstumsfaktor des Elements, wobei der Wert der `flex-grow` Eigenschaft die einzige Überlegung ist. Die `flex-shrink` Eigenschaft verwaltet die Beseitigung des negativen freien Raums, um Kästchen in ihren Container zu bringen, ohne dass dieser überläuft. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Schrumpffaktor wird mit der Flex-Basisgröße multipliziert; dies verteilt den negativen Raum proportional zu der Fähigkeit des Elements zu schrumpfen. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich verkleinert wird.

In der Regel wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex` Kurzschreibweise ist der Schrumpffaktor immer der zweite `<number>`. Wenn die Kurzschreibweise nur einen Zahlenwert enthält, wird dieser als `flex-grow` Wert angenommen.

## Werte

Die `flex-shrink` Eigenschaft wird als einzelner `<number>` angegeben.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardmäßig auf 1 gesetzt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schrumpffaktors für Flex-Elemente

Dieses Beispiel demonstriert, wie negativer freier Raum basierend auf dem Schrumpffaktor des Elements verteilt wird. Es enthält fünf Flex-Elemente mit einem `flex-shrink` Wert größer als 0, die zusammen eine Breite haben, die größer ist als die Breite des übergeordneten Flex-Containers.

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

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die Eigenschaft {{cssxref("flex-basis")}} standardmäßig auf `auto` gesetzt ist, hat jedes Element eine flex-basis von `200px`. Dadurch haben die Flex-Elemente eine Gesamtbreite von `1000px`, was doppelt so groß wie der Container ist. Wir setzen alle Flex-Elemente so, dass sie schrumpfbar sind, mit `flex-shrink` Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink` Werte, sodass sie mehr schrumpfen.

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

Die Flex-Elemente überlaufen ihren Container nicht, weil sie schrumpfen können: der `500px` negative freie Raum wird unter den fünf Elementen basierend auf ihren `flex-shrink` Werten verteilt. Die ersten drei Elemente haben `flex-shrink: 1` gesetzt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` gesetzt. Die endgültige Breite von D und E ist kleiner als die der anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte des Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
