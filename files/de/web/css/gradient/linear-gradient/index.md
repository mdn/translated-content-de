---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine besondere Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: linear-gradient()")}}

```css interactive-example-choice
background: linear-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);
```

```css interactive-example-choice
background:
  linear-gradient(217deg, rgb(255 0 0 / 0.8), transparent 70.71%),
  linear-gradient(127deg, rgb(0 255 0 / 0.8), transparent 70.71%),
  linear-gradient(336deg, rgb(0 0 255 / 0.8), transparent 70.71%);
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

## Syntax

```css
/* A gradient with a single color of red */
linear-gradient(red)

/* A gradient tilted 45 degrees,
   starting blue and finishing red */
linear-gradient(45deg, blue, red)

/* A gradient going from the bottom right to the top left corner,
   starting blue and finishing red */
linear-gradient(to left top, blue, red)

/* Interpolation in rectangular color space */
linear-gradient(in oklab, blue, red)

/* Interpolation in polar color space */
linear-gradient(in hsl, blue, red)

/* Interpolation in polar color space
  with longer hue interpolation method */
linear-gradient(in hsl longer hue, blue, red)

/* Color stop: A gradient going from the bottom to top,
   starting blue, turning green at 40% of its length,
   and finishing red */
linear-gradient(0deg, blue, green 40%, red)

/* Color hint: A gradient going from the left to right,
   starting red, getting to the midpoint color
   10% of the way across the length of the gradient,
   taking the rest of the 90% of the length to change to blue */
linear-gradient(.25turn, red, 10%, blue)

/* Multi-position color stop: A gradient tilted 45 degrees,
   with a red bottom-left half and a blue top-right half,
   with a hard line where the gradient changes from red to blue */
linear-gradient(45deg, red 0 50%, blue 50% 100%)
```

### Werte

- `<side-or-corner>`
  - : Die Position des Startpunktes der Liniengradienten. Wenn angegeben, besteht es aus dem Wort `to` und bis zu zwei Schlüsselwörtern: Eines gibt die horizontale Seite an (`left` oder `right`), und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Andere Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientlinie. Ein Wert von `0deg` entspricht `to top`; steigende Werte drehen sich von dort im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Farbstopps {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen den benachbarten Farbstopps voranschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlauf-Farbe den Mittelpunkt der Farbüberblendung erreichen soll. Wenn weggelassen, ist der Mittelpunkt der Farbüberblendung der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Color Stops in CSS-Verläufen](#komposition_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description), d.h. es gibt keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} Funktion.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

### Komposition eines linearen Gradienten

Ein linearer Verlauf wird durch eine Achse definiert — die _Verlaufsachse_ — und zwei oder mehr _Farbstopps_. Jeder Punkt auf der Achse ist eine spezifische Farbe; um einen gleichmäßigen Verlauf zu erzeugen, zieht die `linear-gradient()` Funktion eine Reihe von farbigen Linien, die senkrecht zur Verlaufsachse stehen und an jedem Punkt der Achse die Farbe annehmen, wo sie die Verlaufsachse schneiden.

![linear-gradient.png](linear-gradient.png)

Die Verlaufslinie wird durch das Zentrum des Kastens, der das Verlaufsbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und, dazwischen, optionale Farbstopppunkte.

Der _Startpunkt_ ist die Stelle auf der Verlaufslinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser zwei Punkte wird durch den Schnittpunkt der Verlaufslinie mit einer Linie definiert, die senkrecht von der Ecke des Kästchens verläuft, die sich in derselben Quadrante befindet. Der Endpunkt kann als der symmetrische Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die den Start- und Endpunkten am nächsten sind, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassung von Verläufen

Durch das Hinzufügen weiterer Farbstopps auf der Verlaufslinie können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht angeben, wird sie in der Mitte zwischen den vorhergehenden und nachfolgenden Farben platziert. Die folgenden beiden Verläufe sind äquivalent.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln Farben sanft von der Farbe an einem Farbstopppunkt zur Farbe am nächsten Farbstopppunkt, wobei der Mittelpunkt zwischen den Farben der halbe Weg der Farbüberblendung zwischen den beiden Punkten ist. Sie können diesen Mittelpunkt an jede Position zwischen zwei Farbstopps verschieben, indem Sie einen unlabelelden % Farbhinweis zwischen den beiden Farben hinzufügen, um anzuzeigen, wo der Mittelpunkt des Farbübergangs liegen soll. Das folgende Beispiel ist von Anfang an bis zur 10 %-Marke durchgehend rot und von 90 % bis zum Ende durchgehend blau. Zwischen 10 % und 90 % wechselt die Farbe von Rot zu Blau, jedoch liegt der Mittelpunkt des Übergangs bei der 30 %-Marke statt bei 50 %, was ohne den 30 % Farbhinweis passiert wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten Farbangabe an dieser Stelle sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorhergehenden Farbstopps, wodurch ein harter Übergang entsteht. Im folgenden Beispiel ändert sich die Farbe von Rot zu Gelb an der 40 %-Marke und wechselt dann von Gelb zu Blau über 25 % des Verlaufs:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Multi-Position-Farbstopps sind erlaubt. Eine Farbe kann als zwei benachbarte Farbstopps erklärt werden, indem beide Positionen in der CSS-Deklaration eingeschlossen werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%`-Stopp vorhanden ist, wird die zuerst deklarierte Farbe an diesem Punkt sein. In ähnlicher Weise wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder bei der `100%`-Marke sein, wenn auf diesem letzten Stopp keine Länge deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf im 45-Grad-Winkel

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(45deg, red, blue);
}
```

{{EmbedLiveSample("Gradient_at_a_45-degree_angle", 120, 120)}}

### Verlauf, der bei 60% der Verlaufslinie beginnt

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(135deg, orange 60%, cyan);
}
```

{{EmbedLiveSample("Gradient_that_starts_at_60_of_the_gradient_line", 120, 120)}}

### Interpolation im rechteckigen Farbraum

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(90deg in oklab, blue, red);
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
  color: white;
  font-weight: bolder;
}
```

In diesem Beispiel für die Interpolation wird das [HSL]-Farbmodell (/de/docs/Web/CSS/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Kästchen verwendet die [kurzeren Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), das heißt, die Farbe wechselt direkt von Rot zu Blau unter Verwendung des kürzeren Bogens auf dem {{Glossary("Color_wheel", "Farbkreis")}}. Das untere Kästchen verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), das heißt, die Farbe wechselt von Rot zu Blau, indem sie den längeren Bogen durchläuft und dabei durch Grüns, Gelbs und Oranges geht.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Multi-Position-Farbstopps

Dieses Beispiel verwendet Multi-Position-Farbstopps, wobei benachbarte Farben denselben Farbstopppunkt haben und einen gestreiften Effekt erzeugen.

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: linear-gradient(
    to right,
    red 20%,
    orange 20% 40%,
    yellow 40% 60%,
    green 60% 80%,
    blue 80%
  );
}
```

{{EmbedLiveSample("Gradient_with_multi-position_color_stops", 120, 120)}}

### Weitere linear-gradient Beispiele

Bitte sehen Sie sich [die Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bildermodul](/de/docs/Web/CSS/CSS_images)
