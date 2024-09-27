---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`flex-shrink`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Schrumpffaktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property), um entsprechend ihrem `flex-shrink`-Wert zu passen. Der [negative Freiraum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) jeder Flex-Linie wird zwischen den Flex-Elementen der Linie verteilt, die einen `flex-shrink`-Wert größer als `0` haben.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}} Kurzschrift anstelle von separaten Deklarationen für `flex-shrink`, {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} zu verwenden. Wir haben sie hier getrennt dargestellt, da dieses Dokument eine der `flex` Kurzschriftkomponenten behandelt: die `flex-shrink` Eigenschaft.

{{EmbedInteractiveExample("pages/css/flex-shrink.html")}}

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

Die `flex-shrink` Eigenschaft bestimmt den Schrumpffaktor, der festlegt, wie stark das Flex-Element relativ zu den anderen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer Freiraum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der Browser die Flexbasiswerte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente schrumpfen, damit sie den Container nicht überfüllen.

Die `flex-grow` Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven Freiraums proportional zu jedem Element basierend auf seinem Flexwachstumsfaktor, wobei der Wert der `flex-grow` Eigenschaft die einzige Überlegung ist. Die `flex-shrink` Eigenschaft verwaltet das Entfernen von negativem Freiraum, um sicherzustellen, dass die Boxen in ihren Container passen, ohne ihn zu überfüllen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Schrumpffaktor wird mit der flexiblen Basisgröße multipliziert; dies verteilt den negativen Raum proportional dazu, wie stark das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex` Kurzschrift ist der Schrumpffaktor immer der zweite `<number>`. Wenn die Kurzschrift nur einen Zahlenwert enthält, wird dieser Wert als `flex-grow` Wert angenommen.

## Werte

Die `flex-shrink` Eigenschaft wird als einzelne `<number>` angegeben.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Schrumpffaktors von Flex-Elementen

Dieses Beispiel zeigt, wie negativer Freiraum basierend auf dem Schrumpffaktor des Elements verteilt wird. Es enthält fünf Flex-Elemente mit einem `flex-shrink` Wert größer als 0, die eine kombinierte Breite haben, die größer als die Breite ihres übergeordneten Flex-Containers ist.

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

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die Eigenschaft {{cssxref("flex-basis")}} standardmäßig auf `auto` gesetzt ist, hat jedes Element eine Flexbasis von `200px`. Dadurch haben die Flex-Elemente eine Gesamtbreite von `1000px`, was doppelt so groß ist wie der Container. Wir setzen alle Flex-Elemente auf schrumpfbar, mit `flex-shrink` Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink` Werte, sodass sie stärker schrumpfen werden.

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

Die Flex-Elemente überfüllen ihren Container nicht, weil sie schrumpfen können: die `500px` negativer Freiraum werden basierend auf ihren `flex-shrink` Werten unter den fünf Elementen verteilt. Die ersten drei Elemente haben `flex-shrink: 1` gesetzt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` gesetzt. Die endgültige Breite von D und E ist geringer als bei den anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
