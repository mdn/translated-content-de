---
title: flex-shrink
slug: Web/CSS/flex-shrink
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`flex-shrink`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt den Flex-Shrink-Faktor eines Flex-Elements fest. Wenn die Größe aller Flex-Elemente größer als der Flex-Container ist, können die [Flex-Elemente schrumpfen](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#the_flex-shrink_property), um entsprechend ihrem `flex-shrink`-Wert zu passen. Jeder Flex-Linie wird der [negative freie Raum](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis#positive_and_negative_free_space) zwischen den Linien-Flex-Elementen, die einen `flex-shrink`-Wert größer als `0` haben, verteilt.

> [!NOTE]
> Es wird empfohlen, die {{cssxref("flex")}}-Kurzschrift anstelle von separaten `flex-shrink`-, {{cssxref("flex-grow")}}- und {{cssxref("flex-basis")}}-Deklarationen zu verwenden. Wir haben sie hier getrennt, da dieses Dokument eine der Komponenten der `flex`-Kurzschrift behandelt: die `flex-shrink`-Eigenschaft.

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

Die `flex-shrink`-Eigenschaft legt den Flex-Shrink-Faktor fest, der bestimmt, wie stark das Flex-Element im Verhältnis zu den anderen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft betrifft Situationen, in denen der Browser die `flex-basis`-Werte der Flex-Elemente berechnet und feststellt, dass sie zu groß sind, um in den Flex-Container zu passen. Solange `flex-shrink` einen positiven Wert hat, werden die Elemente schrumpfen, um ein Überlaufen des Containers zu verhindern.

Die `flex-grow`-Eigenschaft befasst sich mit der Verteilung des verfügbaren positiven freien Raums proportional zu jedem Element mit dem flex-grow-Faktor, wobei der Wert der `flex-grow`-Eigenschaft die einzige Überlegung ist. Die `flex-shrink`-Eigenschaft steuert das Entfernen von negativem freien Raum, um sicherzustellen, dass die Boxen ohne Überlaufen in ihren Container passen. Das Entfernen von Raum ist etwas komplizierter als das Hinzufügen von Raum. Der Flex-Shrink-Faktor wird mit der Basisgröße des Flex-Elements multipliziert; dies verteilt den negativen Raum proportional zu dem, wie stark das Element schrumpfen kann. Dies verhindert, dass kleinere Elemente auf `0px` schrumpfen, bevor ein größeres Element merklich reduziert wird.

Im Allgemeinen wird `flex-shrink` zusammen mit den Eigenschaften {{cssxref("flex-grow")}} und {{cssxref("flex-basis")}} verwendet. Innerhalb der `flex`-Kurzschrift ist der Shrink-Faktor immer der zweite `<number>`. Wenn die Kurzschrift nur einen Zahlenwert enthält, wird davon ausgegangen, dass dieser Wert der `flex-grow`-Wert ist.

## Werte

Die `flex-shrink`-Eigenschaft wird als ein einzelnes `<number>` angegeben.

- `<number>`
  - : Siehe {{cssxref("&lt;number&gt;")}}. Negative Werte sind ungültig. Standardwert ist 1.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Shrink-Faktors für Flex-Elemente

Dieses Beispiel zeigt, wie negativer freier Raum basierend auf dem Shrink-Faktor des Elements verteilt wird. Es umfasst fünf Flex-Elemente mit einem `flex-shrink`-Wert größer als 0, die zusammen eine Breite haben, die größer ist als die Breite ihres übergeordneten Flex-Containers.

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

Wir geben jedem Flex-Element eine {{cssxref("width")}} von `200px`. Da die {{cssxref("flex-basis")}}-Eigenschaft standardmäßig `auto` ist, beträgt die Flex-Basis jedes Elements `200px`. Dies ergibt für die Flex-Elemente eine Gesamtbreite von `1000px`, was doppelt so groß ist wie der Container. Wir setzen alle Flex-Elemente so, dass sie schrumpfbar sind, mit `flex-shrink`-Werten größer als `0`. Die letzten beiden Elemente haben größere `flex-shrink`-Werte, sodass sie mehr schrumpfen.

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

Die Flex-Elemente überlaufen ihren Container nicht, weil sie schrumpfen können: die `500px` an negativem freien Raum werden basierend auf ihren `flex-shrink`-Werten unter den fünf Elementen verteilt. Die ersten drei Elemente haben `flex-shrink: 1` eingestellt. D hat `flex-shrink: 1.5` und E hat `flex-shrink: 2` eingestellt. Die endgültige Breite von D und E ist kleiner als die der anderen, wobei E kleiner als D ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
