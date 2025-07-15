---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`repeating-linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus sich wiederholenden linearen Verläufen besteht. Sie ist ähnlich wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} und verwendet die gleichen Argumente, jedoch werden die Farbstopps unendlich in alle Richtungen wiederholt, um den gesamten Container abzudecken. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, einer speziellen Art von {{cssxref("&lt;image&gt;")}}.

{{InteractiveExample("CSS Demo: repeating-linear-gradient()")}}

```css interactive-example-choice
background: repeating-linear-gradient(
  #e66465,
  #e66465 20px,
  #9198e5 20px,
  #9198e5 25px
);
```

```css interactive-example-choice
background: repeating-linear-gradient(45deg, #3f87a6, #ebf8e1 15%, #f69d3c 20%);
```

```css interactive-example-choice
background:
  repeating-linear-gradient(transparent, #4d9f0c 40px),
  repeating-linear-gradient(0.25turn, transparent, #3f87a6 20px);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

Die Länge des sich wiederholenden Verlaufs ist der Abstand zwischen dem ersten und dem letzten Farb-Stopp. Wenn die erste Farbe keine Farb-Stopp-Länge hat, beträgt die Farb-Stopp-Länge standardmäßig 0. Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Länge des grundlegenden linearen Verlaufs verschoben. Somit fällt die Position jedes endenden Farbstopps mit einem beginnenden Farb-Stopp zusammen; wenn die Farbw Werte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang. Dies kann geändert werden, indem die erste Farbe erneut als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-linear-gradient()` nicht auf {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

## Syntax

```css
/* A repeating gradient tilted 45 degrees,
   starting blue and finishing red, repeating 3 times */
repeating-linear-gradient(45deg, blue, red 33.3%)

/* A repeating gradient going from the bottom right to the top left,
   starting blue and finishing red, repeating every 20px */
repeating-linear-gradient(to left top, blue, red 20px)

/* A gradient going from the bottom to top,
   starting blue, turning green after 40%,
   and finishing red. This gradient doesn't repeat because
   the last color stop defaults to 100% */
repeating-linear-gradient(0deg, blue, green 40%, red)

/* A gradient repeating five times, going from the left to right,
   starting red, turning green, and back to red */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%)

/* Interpolation in rectangular color space */
repeating-linear-gradient(in oklab, blue, red 50px)

/* Interpolation in polar color space */
repeating-linear-gradient(in hsl, blue, red 50px)

/* Interpolation in polar color space
  with longer hue interpolation method */
repeating-linear-gradient(in hsl longer hue, blue, red 50px)
```

### Werte

- `<side-or-corner>`
  - : Die Position des Startpunkts der Verlaufslinie. Falls angegeben, besteht es aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines für die horizontale Seite (`left` oder `right`) und das andere für die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist die Standardeinstellung `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg` entsprechend. Die anderen Werte werden in einen Winkel übersetzt.

- {{cssxref("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufsrichtung. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren im Uhrzeigersinn von dort.
- `<linear-color-stop>`
  - : Ein Farb-Stopp mit einem {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%` oder eine Länge von `0` stellt den Beginn des Verlaufs dar; der Wert `100%` entspricht 100% der Bildgröße, was bedeutet, dass der Verlauf sich nicht wiederholen wird.
- `<color-hint>`
  - : Der color-hint ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe die Mitte des Farbübergangs erreichen sollte. Wenn weggelassen, liegt die Mitte des Farbübergangs in der Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden linearen Verläufen folgt den gleichen Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Formale Syntax

{{CSSSyntax}}

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
  /* with multiple color stop lengths */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('Zebra_stripes', 120, 120)}}

### Zehn sich wiederholende horizontale Balken

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

Da der letzte Farb-Stopp bei 10% liegt und der Verlauf vertikal ist, beträgt jeder Verlauf im wiederholten Verlauf 10% der Höhe, passend für 10 horizontale Balken.

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

### Interpolation mit Farbton

```html hidden
<div class="shorter">shorter hue</div>
<div class="longer">longer hue</div>
```

```css hidden
div {
  height: 50vh;
  color: #330;
  font-weight: bolder;
  padding-left: 1.5rem;
}
```

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das obere Feld verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das untere Feld verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht, der durch Grün, Gelb und Orange führt.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

> [!NOTE]
> Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
