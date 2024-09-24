---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus sich wiederholenden linearen Verläufen besteht. Sie ist ähnlich wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} und nimmt die gleichen Argumente, wiederholt jedoch die Farbwechsel unendlich in alle Richtungen, um ihren gesamten Container abzudecken. Das Ergebnis der Funktion ist ein Objekt vom {{cssxref("&lt;gradient&gt;")}} Datentyp, eine spezielle Art von {{cssxref("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

Die Länge des sich wiederholenden Verlaufs entspricht dem Abstand zwischen dem ersten und letzten Farbwechsel. Hat die erste Farbe keine Farbstopp-Länge, wird die Farbstopp-Länge standardmäßig auf 0 gesetzt. Bei jeder Wiederholung werden die Positionen der Farbwechsel um ein Vielfaches der Länge des grundlegenden linearen Verlaufs verschoben. Somit fällt die Position eines jeden endenden Farbwechsels mit einem startenden Farbwechsel zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang. Dies kann geändert werden, indem die erste Farbe nochmals als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, es hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das sie angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-linear-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

## Syntax

```css
/* Ein sich wiederholender Verlauf um 45 Grad geneigt,
   beginnt mit Blau und endet mit Rot, wiederholt sich 3-mal */
repeating-linear-gradient(45deg, blue, red 33.3%)

/* Ein sich wiederholender Verlauf von unten rechts nach oben links,
   beginnt mit Blau und endet mit Rot, wiederholt sich alle 20px */
repeating-linear-gradient(to left top, blue, red 20px)

/* Ein Verlauf von unten nach oben,
   beginnt mit Blau, wird nach 40% grün
   und endet mit Rot. Dieser Verlauf wiederholt sich nicht, da
   der letzte Farbstopp standardmäßig 100% ist */
repeating-linear-gradient(0deg, blue, green 40%, red)

/* Ein Verlauf, der sich fünfmal wiederholt, von links nach rechts,
   beginnt mit Rot, wird grün und wieder rot */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%)

/* Interpolation im rechteckigen Farbraum */
repeating-linear-gradient(in oklab, blue, red 50px)

/* Interpolation im polaren Farbraum */
repeating-linear-gradient(in hsl, blue, red 50px)

/* Interpolation im polaren Farbraum
  mit längerer Farbton-Interpolationsmethode */
repeating-linear-gradient(in hsl longer hue, blue, red 50px)
```

### Werte

- `<side-or-corner>`

  - : Die Position des Startpunkts der Verlaufslinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines zeigt die horizontale Seite (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`) an. Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg` jeweils. Die anderen Werte werden in einen Winkel umgerechnet.

- {{cssxref("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufslinie. Ein Wert von `0deg` entspricht `to top`; steigende Werte drehen sich im Uhrzeigersinn von dort.
- `<linear-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen, (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder eine {{CSSxRef("&lt;length&gt;")}} entlang der Verlaufachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert den Beginn des Verlaufs; der Wert `100%` ist 100% der Bildgröße, was bedeutet, dass der Verlauf sich nicht wiederholen wird.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbwechseln fortschreitet. Die Länge gibt an, an welchem Punkt der Verlauf zwischen zwei Farbwechseln die Mitte der Farbänderung erreichen soll. Wird er weggelassen, befindet sich der Mittelpunkt der Farbänderung in der Mitte zwischen zwei Farbwechseln.

> [!NOTE]
> Die Darstellung von [Farbwechseln in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt den gleichen Regeln wie Farbwechsel in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

### Formale Syntax

{{csssyntax}}

## Beispiele

### Zebrastreifen

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );
  /* mit mehreren Farbstopp-Längen */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('Zebra_stripes', 120, 120)}}

### Zehn sich wiederholende horizontale Streifen

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(26 198 204),
    rgb(26 198 204) 7%,
    rgb(100 100 100) 10%
  );
}
```

{{EmbedLiveSample('Ten_repeating_horizontal_bars', 120, 120)}}

Da der letzte Farbstopp bei 10% liegt und der Verlauf vertikal ist, sind alle Verläufe im Wiederholungsbereich 10% der Höhe, was 10 horizontale Streifen ermöglicht.

### Interpolation im rechteckigen Farbraum

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: repeating-linear-gradient(90deg in oklab, blue, red 100px);
}
```

{{EmbedLiveSample("Interpolation in rectangular color space", 120, 120)}}

### Interpolieren mit Farbton

```html hidden
<div class="shorter">kürzerer Farbton</div>
<div class="longer">längerer Farbton</div>
```

```css hidden
div {
  height: 50vh;
  color: #330;
  font-weight: bolder;
  padding-left: 1.5rem;
}
```

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: repeating-linear-gradient(
    90deg in hsl shorter hue,
    red,
    blue 300px
  );
}

.longer {
  background: repeating-linear-gradient(
    90deg in hsl longer hue,
    red,
    blue 300px
  );
}
```

Die Box oben verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von rot zu blau über den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) geht. Die Box unten verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen geht, durch Grüntöne, Gelb- und Orangetöne hindurch.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

> [!NOTE]
> Weitere Beispiele finden Sie unter [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
