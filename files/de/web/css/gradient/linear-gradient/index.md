---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, einer speziellen Art von {{CSSxRef("&lt;image&gt;")}}.

{{InteractiveExample("CSS Demo: linear-gradient()")}}

```css interactive-example-choice
background: linear-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: linear-gradient(
  to left,
  #333333,
  #333333 50%,
  #eeeeee 75%,
  #333333 75%
);
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
  - : Die Position des Startpunkts der Gradientenlinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines zeigt die horizontale Seite (`left` oder `right`) an und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seitenschlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg` bzw. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Richtungswinkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren von dort im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen, die jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder eine {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten sein können.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}} Hinweis, der definiert, wie der Verlauf des Gradienten zwischen angrenzenden Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Farbmitte des Übergangs erreicht werden soll. Wenn weggelassen, ist die Mitte des Farbverlaufs die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Verläufen](#zusammensetzung_eines_linearen_gradienten) folgt den gleichen Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Behälter zu füllen, verwenden Sie stattdessen die {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}-Funktion.

Da `<gradient>` zum `<image>`-Datentyp gehört, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse – die _Gradientenlinie_ – und zwei oder mehr _Farbstopp-Punkte_ definiert. Jeder Punkt auf der Achse hat eine eigene Farbe; um einen sanften Verlauf zu erzeugen, zeichnet die `linear-gradient()`-Funktion eine Serie von farbigen Linien, die senkrecht zur Gradientenlinie stehen und jeweils der Farbe des Punkts entsprechen, an dem sie die Gradientenlinie schneiden.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum des Rahmens, der das Verlaufsbild enthält, und durch einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optionale Farbstopppunkte.

Der _Startpunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Gradientenlinie mit einer von der Rahmenecke kommenden Senkrechten definiert, die sich im gleichen Quadranten befindet. Der Endpunkt kann als der symmetrische Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die den Start- und Endpunkten am nächsten liegenden Ecken haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Verläufen

Durch das Hinzufügen weiterer Farbstopps auf der Gradientenlinie können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erzeugen. Die Position eines Farbstopps kann explizit durch Verwendung einer {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Standort einer Farbe nicht angeben, wird sie mittig zwischen der vorhergehenden und der folgenden Farbe platziert. Die folgenden beiden Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verläuft der Farbübergang sanft von der Farbe an einem Farbstopp zur Farbe am nächsten Farbstopp, wobei die Mitte des Farbverlaufs der Mittelpunkt zwischen den zwei Farbstopps ist. Sie können diesen Mittelpunkt an eine beliebige Position zwischen zwei Farbstopps verschieben, indem Sie zwischen den beiden Farben einen unbeschrifteten % Farbe-Hinweis hinzufügen, um anzugeben, wo die Mitte des Farbverlaufs sein soll. Im folgenden Beispiel ist von Anfang an bis zur 10%-Marke alles rot und von 90% bis zum Ende alles blau. Zwischen 10% und 90% wechselt die Farbe von rot zu blau, jedoch ist der Mittelpunkt des Übergangs bei der 30%-Marke und nicht bei 50%, wie es ohne den 30%-Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps am selben Ort liegen, wird der Übergang eine harte Linie zwischen der ersten und der letzten an diesem Ort deklarierten Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorhergehenden Farbstopps und erzeugen einen harten Übergang. Der folgende ändert sich bei der 40%-Marke von rot zu gelb und geht dann über 25% des Gradienten von gelb zu blau über:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrfachpositionierte Farbstopps sind erlaubt. Eine Farbe kann als zwei nebeneinanderliegende Farbstopps deklariert werden, indem beide Positionen in der CSS-Deklaration enthalten sind. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn es keine Farbe mit einem `0%`-Stopp gibt, wird die zuerst deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, falls kein Längenwert für diesen letzten Stopp deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient im 45-Grad-Winkel

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

### Gradient, der bei 60% der Gradientenlinie beginnt

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

### Interpolierung mit Farbton

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau über das kürzere Kreissegment im {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die untere Box verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über das längere Segment wechselt und dabei durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit mehrpositionierten Farbstopps

Dieses Beispiel verwendet mehrpositionierte Farbstopps, wobei angrenzende Farben denselben Farbwert aufweisen, wodurch ein gestreifter Effekt entsteht.

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

### Weitere Beispiele für lineare Verläufe

Weitere Beispiele finden Sie unter [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients).

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
- [CSS-Bilder-Modul](/de/docs/Web/CSS/CSS_images)
