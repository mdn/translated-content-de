---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, einer speziellen Art von {{CSSxRef("&lt;image&gt;")}}.

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
  linear-gradient(217deg, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 70.71%),
  linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
  linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
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

  - : Die Position des Startpunkts der Gradientenlinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite (`left` oder `right`) und das andere die vertikale Seite (`top` oder `bottom`) an. Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left`, und `to right` sind äquivalent zu den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; steigende Werte drehen im Uhrzeigersinn von dort.
- `<linear-color-stop>`
  - : Ein Color-Stop-Wert von {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen, (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie der Gradient zwischen angrenzenden Farbstopps verläuft. Die Länge gibt an, an welchem Punkt zwischen zwei Farbstopps die Gradientenfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn ausgelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Color Stops in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt den gleichen Regeln wie Color Stops in [SVG-Gradienten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description), d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}-Funktion.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse definiert—die _Gradientenlinie_—und zwei oder mehr _Color-Stop-Punkte_. Jeder Punkt auf der Achse ist eine bestimmte Farbe; um einen glatten Verlauf zu erstellen, zeichnet die `linear-gradient()`-Funktion eine Reihe von farbigen Linien, die senkrecht zur Gradientenlinie verlaufen, jede entspricht der Farbe des Punktes, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum der Box, die das Gradientenbild enthält, und durch einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Anfangspunkt, den Endpunkt und, dazwischen, optionale Color-Stop-Punkte.

Der _Anfangspunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch die Schnittstelle der Gradientenlinie mit einer senkrechten Linie definiert, die aus der Ecke der Box verläuft, die in demselben Quadranten liegt. Der Endpunkt kann als symmetrischer Punkt des Anfangspunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die den Anfangs- und Endpunkten nächstgelegenen Ecken haben die gleiche Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Individualisieren von Verläufen

Durch das Hinzufügen weiterer Farbstopppunkte auf der Gradientenlinie können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Standort einer Farbe nicht angeben, wird sie in der Mitte zwischen der vorhergehenden und der folgenden platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben reibungslos von der Farbe an einem Farbstopp zur Farbe am nachfolgenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Mittelpunkt an jede beliebige Stelle zwischen zwei Farbstopps verschieben, indem Sie einen nicht gekennzeichneten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo der Mittelpunkt des Farbübergangs sein soll. Das folgende Beispiel ist festes Rot vom Start bis zur 10%-Marke und festes Blau von 90% bis zum Ende. Zwischen 10% und 90% wechselt die Farbe von Rot nach Blau, wobei der Mittelpunkt des Übergangs bei 30% statt 50% liegt, wie es ohne den 30%-Farbhinweis der Fall wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen den ersten und letzten an dieser Stelle deklarierten Farben sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit geringerem Wert überschreiben den Wert des vorherigen Farbstopps, wodurch ein harter Übergang erzeugt wird. Der folgende Übergang wechselt bei der 40%-Marke von Rot zu Gelb und dann über 25% des Gradienten von Gelb zu Blau:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositionen-Farbstopps sind zulässig. Eine Farbe kann als zwei benachbarte Farbstopps angegeben werden, indem beide Positionen in der CSS-Deklaration enthalten sind. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn es keine Farbe mit einem `0%` Stopp gibt, wird die erste deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder bei der `100%`-Marke sein, wenn keine Länge an diesem letzten Stopp deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf mit einem Winkel von 45 Grad

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

### Verlauf, der bei 60% der Gradientenlinie beginnt

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

In diesem Interpolationsbeispiel wird das [HSL-Farbsystem](/de/docs/Web/CSS/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die Box oben verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau geht und den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} nutzt. Die Box unten verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und durch Grün, Gelb und Orange zieht.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Multi-Position-Farbstopps

Dieses Beispiel verwendet Multi-Position-Farbstopps, wobei benachbarte Farben den gleichen Farbstoppwert haben, wodurch ein Streifeneffekt entsteht.

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

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradient-Funktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS Bilder Modul](/de/docs/Web/CSS/CSS_images)
