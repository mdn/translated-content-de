---
title: "`linear-gradient()` CSS-Funktion"
short-title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: 11a5944cd0a3bf015b2ee9c7ee4c55025dd878ca
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{cssxref("gradient")}}-Datentyps, das eine besondere Art von {{cssxref("image")}} ist.

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
  - : Die Position des Startpunkts der Gradientenlinie. Wenn angegeben, besteht es aus dem Wort `to` und bis zu zwei Stichwörtern: eines davon gibt die horizontale Seite an (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seitenstichwörter spielt keine Rolle. Wenn nichts angegeben ist, wird `to bottom` als Standardwert verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` bzw. `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{cssxref("angle")}}
  - : Der Winkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren im Uhrzeigersinn von dort aus.
- `<linear-color-stop>`
  - : Ein Farb-Stop-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stop-Positionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Gradient zwischen benachbarten Farb-Stops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farb-Stops der Gradient die Mitte des Farbübergangs erreichen soll. Wenn sie weggelassen wird, befindet sich der Mittelpunkt des Farbübergangs in der Mitte zwischen zwei Farb-Stops.

> [!NOTE]
> Die Darstellung von [Farb-Stops in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt den gleichen Regeln wie Farb-Stops in [SVG-Gradienten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem anderen Gradienten hat ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat weder eine natürliche noch eine bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe passt sich der Größe des Elements an, auf das er angewendet wird.

Um einen linearen Gradient zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}-Funktion.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo {{cssxref("image")}}s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse - die _Gradientenlinie_ - und zwei oder mehr _Farb-Stop-Punkte_ definiert. Jeder Punkt auf der Achse hat eine eigene Farbe; um einen glatten Gradienten zu erzeugen, zeichnet die `linear-gradient()`-Funktion eine Reihe farbiger Linien, die senkrecht zur Gradientenlinie stehen und jeweils die Farbe des Punktes haben, an dem sie die Gradientenlinie kreuzen.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum des den Gradienten enthaltenden Rechtecks und durch einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen gelegene optionale Farb-Stop-Punkte.

Der _Startpunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Gradientenlinie mit einer senkrechten Linie definiert, die vom Eckpunkt der Box verläuft, welcher im gleichen Quadranten liegt. Der Endpunkt kann als symmetrischer Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die dem Start- und Endpunkt am nächsten sind, haben die gleiche Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Gradienten anpassen

Durch das Hinzufügen weiterer Farb-Stop-Punkte auf der Gradientenachse können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farb-Stops kann explizit definiert werden, indem ein {{CSSxRef("&lt;length&gt;")}} oder ein {{CSSxRef("&lt;percentage&gt;")}} verwendet wird. Wenn Sie die Position einer Farbe nicht angeben, wird sie auf halbem Weg zwischen der vorhergehenden und der folgenden Farbe platziert. Die folgenden zwei Gradienten sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben glatt von der Farbe an einem Farb-Stop zur Farbe am darauf folgenden Farb-Stop, wobei der Mittelpunkt zwischen den Farben den halben Weg zwischen dem Farbübergang darstellt. Sie können diesen Mittelpunkt an jede Position zwischen zwei Farb-Stops verschieben, indem Sie einen unlabeleden %-Farbhint zwischen den beiden Farben hinzufügen, um anzuzeigen, wo die Mitte des Farbübergangs liegen soll. Das folgende Beispiel ist von Beginn bis zur 10%-Marke solid rot und von 90% bis zum Ende solid blau. Zwischen 10% und 90% wechselt die Farbe von rot zu blau, jedoch befindet sich der Mittelpunkt des Übergangs bei der 30%-Marke statt bei 50%, wie es ohne den 30%-Farbhint der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farb-Stops an der gleichen Position sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt an dieser Stelle deklarierten Farben sein.

Farb-Stops sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farb-Stops mit niedrigerem Wert überschreiben den Wert des vorherigen Farb-Stops und erzeugen einen harten Übergang. Der folgende Übergang wechselt an der 40%-Marke von rot zu gelb und dann von gelb zu blau über 25% des Gradienten:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositions-Farb-Stops sind erlaubt. Eine Farbe kann als zwei benachbarte Farb-Stops deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Gradienten sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Wenn standardmäßig keine Farbe mit einem Stop von `0%` angegeben ist, wird die zuerst deklarierte Farbe an diesem Punkt liegen. Ebenso wird die letzte Farbe bis zur `100%`-Marke reichen oder an der `100%`-Marke sein, wenn keine Länge für diesen letzten Stop deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient mit einem Winkel von 45 Grad

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

### Gradient, der bei 60% der Gradientenachse beginnt

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

### Interpolieren mit Farbton

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die untere Box verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen wechselt, durchläuft grün, gelb und orange.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit Mehrpositions-Farb-Stops

Dieses Beispiel verwendet Mehrpositions-Farb-Stops, wobei angrenzende Farben denselben Farb-Stop-Wert haben, wodurch ein gestreifter Effekt entsteht.

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

### Weitere Beispiele für linear-gradient

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients) an, um weitere Beispiele zu erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- [CSS-Bildermodul](/de/docs/Web/CSS/Guides/Images)
