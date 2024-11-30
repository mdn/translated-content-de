---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 36197e9ff8f503d40729889367fe1ad76d2f3640
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem stufenweisen Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

## Syntax

```css
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

  - : Die Position des Startpunkts der Gradientenlinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wird nichts angegeben, wird `to bottom` als Standardwert verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Andere Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; höhere Werte drehen sich von dort im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Farb-Stoppwert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopp-Positionen, die entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder eine {{CSSxRef("&lt;length&gt;")}} entlang der Gradientenachse sind.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}}-Hinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps verläuft. Die Länge gibt an, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf die Mitte des Farbwechsels erreichen soll. Wird nichts angegeben, ist die Mitte des Farbwechsels die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopps in [SVG-Gradienten](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Gradient zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse – die _Gradientenlinie_ – und zwei oder mehr _Farbstoppunkte_ definiert. Jeder Punkt auf der Achse ist eine eigene Farbe; um einen sanften Übergang zu erzeugen, zeichnet die `linear-gradient()` Funktion eine Reihe von farbigen Linien senkrecht zur Gradientenlinie, wobei jede die Farbe des Punktes hat, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum der Box, die das Gradientenbild enthält, und durch einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: dem Startpunkt, dem Endpunkt und dazwischen optionalen Farbstoppunkten.

Der _Startpunkt_ ist der Punkt auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch die Kreuzung der Gradientenlinie mit einer senkrechten Linie definiert, die von der Box-Ecke verläuft, die sich im gleichen Quadranten befindet. Der Endpunkt kann als der symmetrische Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die den Start- und Endpunkten am nächsten sind, haben die gleiche Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Gradienten

Durch das Hinzufügen weiterer Farbstoppunkte auf der Gradientenlinie können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit mit einer {{CSSxRef("&lt;length&gt;")}} oder einem {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Standort einer Farbe nicht angeben, wird sie in der Mitte zwischen der vorhergehenden und der folgenden platziert. Die folgenden zwei Gradienten sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verlaufen die Farben reibungslos von der Farbe an einem Farbstopp zur Farbe am nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Mittelpunkt an jede Position zwischen zwei Farbstopps verschieben, indem Sie einen nicht etikettierten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzuzeigen, wo die Mitte des Farbübergangs sein soll. Das folgende Beispiel ist fest rot vom Anfang bis zur 10%-Marke und fest blau von 90% bis zum Ende. Zwischen 10% und 90% wechselt die Farbe von rot zu blau, jedoch ist der Mittelpunkt des Übergangs bei der 30%-Marke anstatt 50%, wie es ohne den 30% Farbhinweis geschehen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an dieselbe Position gesetzt werden, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle angegebenen Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt an der 40%-Marke von rot zu gelb und wechselt dann über 25% des Gradienten von gelb zu blau:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositionen-Farbstopps sind erlaubt. Eine Farbe kann als zwei benachbarte Farbstopps erklärt werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Gradienten sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn es keine Farbe mit einem `0%` Stopp gibt, wird die erste deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke liegen, wenn keine Länge an diesem letzten Stopp angegeben wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient mit einem 45-Grad-Winkel

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet, und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die untere Box verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen wechselt und dabei durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit Mehrpositionen-Farbstopps

Dieses Beispiel verwendet Mehrpositionen-Farbstopps, wobei benachbarte Farben denselben Farbstopp-Wert haben und einen Streifeneffekt erzeugen.

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

Bitte sehen Sie [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bilder-Modul](/de/docs/Web/CSS/CSS_images)
