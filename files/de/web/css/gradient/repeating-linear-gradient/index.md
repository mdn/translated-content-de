---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`repeating-linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus wiederholten linearen Verläufen besteht. Es ist ähnlich wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} und nimmt dieselben Argumente an, aber die Farbverläufe wiederholen sich unendlich in alle Richtungen, um ihren gesamten Container zu füllen. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, welches eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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

Die Länge des wiederholten Verlaufs ist der Abstand zwischen dem ersten und letzten Farbverlauf. Wenn die erste Farbe keine Farblängenangabe hat, beträgt der Standardwert 0. Mit jeder Wiederholung werden die Positionen der Farbverläufe um ein Vielfaches der Länge des Basislinearverlaufs verschoben. So fällt die Position jedes endenden Farbverlaufs mit einem beginnenden Farbverlauf zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang. Dies kann geändert werden, indem die erste Farbe erneut als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein wiederholter linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe stimmt mit der Größe des Elements überein, auf das er angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-linear-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp nutzen.

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

  - : Die Position des Startpunkts der Verlaufsachse. Falls spezifiziert, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite (`left` oder `right`) an und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` sind gleichbedeutend mit den Winkeln `0deg`, `180deg`, `270deg` und `90deg` jeweils. Die anderen Werte werden in einen Winkel umgewandelt.

- {{cssxref("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufsachse. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren von dort im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Farbstopps' {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen, (jeweils als {{CSSxRef("&lt;percentage&gt;")}} oder {{CSSxRef("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert den Anfang des Verlaufs; der Wert `100%` ist 100% der Bildgröße, was bedeutet, dass der Verlauf sich nicht wiederholt.
- `<color-hint>`
  - : Der color-hint ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufskurve den Mittelpunkt des Farbwechsels erreichen sollte. Falls nicht angegeben, liegt der Mittelpunkt des Farbwechsels zwischen den zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in wiederholten linearen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Zebra-Streifen

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

### Zehn wiederholende horizontale Streifen

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

Da der letzte Farbstopp 10% beträgt und der Verlauf vertikal ist, ist jeder Verlauf im wiederholten Verlauf 10% der Höhe, was 10 horizontale Streifen ergibt.

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

Die Box oben verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot nach Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verläuft. Die Box unten verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot nach Blau über den längeren Bogen verläuft, durch Grün, Gelb und Orange hindurch.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

> [!NOTE]
> Bitte sehen Sie sich [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

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
