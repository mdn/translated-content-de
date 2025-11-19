---
title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Ihr Ergebnis ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Die Position des Startpunkts der Gradientenlinie. Falls angegeben, besteht er aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`) und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seitenschlüsselwörter spielt keine Rolle. Wenn nicht angegeben, wird `to bottom` als Standard verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientenrichtung. Ein Wert von `0deg` entspricht `to top`; steigende Werte drehen sich im Uhrzeigersinn von dort aus.
- `<linear-color-stop>`
  - : Ein Farb-Stopp Wert aus {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge legt fest, an welchem Punkt zwischen zwei Farbstopps der Gradient die Mitte des Farbwechsels erreichen soll. Wenn weggelassen, ist die Mitte des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt den gleichen Regeln wie Farbstopps in [SVG-Gradienten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Gradient hat ein linearer Gradient [keine intrinsischen Maße](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen linearen Gradient zu erstellen, der sich wiederholt, um seinen Container auszufüllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s dem `<image>` Datentyp angehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/Reference/Values/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse definiert—die _Gradientenlinie_—und zwei oder mehr _Farb-Stopp-Punkte_. Jeder Punkt auf der Achse ist eine unterscheidbare Farbe; um einen glatten Gradient zu erzeugen, zeichnet die Funktion `linear-gradient()` eine Serie von farbigen Linien, die senkrecht zur Gradientenlinie stehen, wobei jede Linie die Farbe des Punkts hat, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum des Kastens definiert, der das Gradientbild enthält, und durch einen Winkel. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen mögliche Farb-Stopp-Punkte.

Der _Startpunkt_ ist die Position auf der Gradientenlinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Diese beiden Punkte werden durch den Schnittpunkt der Gradientenlinie mit einer senkrechten Linie definiert, die von der Ecke des Kastens verläuft, welche im gleichen Quadranten liegt. Der Endpunkt kann als der symmetrische Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: die Ecken, die den Start- und Endpunkten am nächsten sind, haben die gleiche Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassung von Gradienten

Indem Sie mehr Farb-Stopp-Punkte auf der Gradientenlinie hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farb-Stopp-Punkts kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie die Position einer Farbe nicht angeben, wird sie in der Mitte zwischen der vorhergehenden und der folgenden platziert. Die folgenden zwei Gradienten sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben reibungslos von der Farbe an einem Farb-Stopp zum nächsten Farb-Stopp, wobei die Mitte des Farbwechsels der halbe Punkt des Farbwechsels ist. Sie können diesen Mittelpunkt an jede Position zwischen zwei Farbstopps verschieben, indem Sie zwischen den beiden Farben einen unausgezeichneten % Farb-Hinweis hinzufügen, um anzuzeigen, wo der Mittelpunkt des Farbwechsels sein sollte. Das folgende Beispiel ist von Anfang bis zur 10%-Markierung in festem Rot und ab 90% bis zum Ende in festem Blau. Zwischen 10% und 90% wechselt die Farbe von Rot zu Blau, jedoch ist der Mittelpunkt des Übergangs bei der 30%-Markierung anstelle von 50%, wie es ohne den 30% Farb-Hinweis gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps sich an derselben Position befinden, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Position angegebenen Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit niedrigeren Werten überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das Folgende wechselt bei der 40%-Markierung von Rot zu Gelb und wechselt dann von Gelb zu Blau über 25% des Gradienten:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositionen-Farbstopps sind erlaubt. Eine Farbe kann als zwei angrenzende Farbstopps erklärt werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Gradienten sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%` Stopp vorhanden ist, wird die zuerst angegebene Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Markierung reichen oder an der `100%`-Markierung sein, wenn bei diesem letzten Stopp keine Länge angegeben wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient in einem Winkel von 45 Grad

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbensystem verwendet und [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Der Kasten oben verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Der Kasten unten verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und durch Grüns, Gelbs und Orangen geht.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit Mehrpositionen-Farbstopps

Dieses Beispiel verwendet Mehrpositionen-Farbstopps, wobei benachbarte Farben denselben Farb-Stopp-Wert haben, was einen gestreiften Effekt erzeugt.

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

Bitte sehen Sie [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradientfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bildmodul](/de/docs/Web/CSS/Guides/Images)
