---
title: CSS-Funktion `repeating-linear-gradient()`
short-title: repeating-linear-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-linear-gradient
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`repeating-linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus sich wiederholenden linearen Verläufen besteht. Sie ist ähnlich wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um seinen gesamten Container abzudecken. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("gradient")}}, welches eine spezielle Art von {{cssxref("image")}} ist.

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

Die Länge des sich wiederholenden Verlaufs ist der Abstand zwischen dem ersten und dem letzten Farbstopp. Wenn die erste Farbe keine Farb-Stopp-Länge hat, beträgt die Farb-Stopp-Länge standardmäßig 0. Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Länge des grundlegenden linearen Verlaufs verschoben. Dadurch fällt die Position jedes Endfarbstopps mit einem Anfangsfarbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang. Dies kann geändert werden, indem die erste Farbe erneut als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein wiederholender linearer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-linear-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

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
  - : Die Position des Startpunkts der Verlaufslinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines weist die horizontale Seite (`left` oder `right`) und das andere die vertikale Seite (`top` oder `bottom`) aus. Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, wird `to bottom` standardmäßig verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg` jeweils. Die anderen Werte werden in einen Winkel übersetzt.

- {{cssxref("angle")}}
  - : Der Winkel der Richtung der Verlaufslinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte drehen sich von dort im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen, (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%`, oder eine Länge von `0`, stellt den Beginn des Verlaufs dar; der Wert `100%` ist 100% der Bildgröße, was bedeutet, dass sich der Verlauf nicht wiederholt.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn ausgelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Wiedergabe von Farbstopps in sich wiederholenden linearen Verläufen folgt den gleichen Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

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

### Zehn wiederholende horizontale Balken

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

Weil der letzte Farbstopp bei 10% liegt und der Verlauf vertikal ist, ist jeder Verlauf im wiederholten Verlauf 10% der Höhe, was 10 horizontale Balken ergibt.

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
  color: #333300;
  font-weight: bolder;
  padding-left: 1.5rem;
}
```

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das obere Kästchen verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), d.h. die Farbe geht von Rot zu Blau und verwendet dabei den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbrad")}}. Das untere Kästchen verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), d.h. die Farbe geht von Rot zu Blau und verwendet dabei den längeren Bogen, der über Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

> [!NOTE]
> Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
