---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

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
  - : Die Position des Startpunkts der Gradientenlinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seitenangaben spielt keine Rolle. Falls nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left`, und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg`, und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; von dort aus drehen sich zunehmende Werte im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Farb-Stopp-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie sich der Gradient zwischen benachbarten Farbstopps entwickelt. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Gradientenfarbe den Mittelpunkt des Farbwechsels erreichen soll. Wird kein Hinweis gegeben, ist der Mittelpunkt des Farbwechsels der Punkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopps in [SVG-Gradienten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description), d.h. er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe passt sich der Größe des Elements an, auf das er angewendet wird.

Um einen linearen Gradienten zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse definiert - die _Gradientenlinie_ - und zwei oder mehr _Farb-Stopp-Punkte_. Jeder Punkt auf der Achse hat eine eigene Farbe; um einen sanften Übergang zu erzeugen, zeichnet die Funktion `linear-gradient()` eine Reihe von farbigen Linien senkrecht zur Gradientenlinie, die jeweils die Farbe des Punkts auf der Gradientenlinie annehmen, den sie schneiden.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch den Mittelpunkt der Box, die das Gradientenbild enthält, und durch einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und ggf. dazwischenliegende Farb-Stopp-Punkte.

Der _Startpunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird definiert durch den Schnittpunkt der Gradientenlinie mit einer senkrechten Linie, die vom Box-Eckpunkt aus verläuft, welcher sich im selben Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunkts betrachtet werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _Magic Corners_ bezeichnet wird: Die Ecken, die dem Start- und Endpunkt am nächsten sind, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Gradienten

Durch Hinzufügen von mehr Farb-Stopp-Punkten auf der Gradientenlinie können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Eine Farb-Stopp-Position kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht angeben, wird sie genau zwischen der vorherigen und der folgenden Farbe platziert. Die folgenden zwei Gradienten sind äquivalent.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farb-Stopp zur Farbe am nächsten Farb-Stopp, wobei der Mittelpunkt der Farbänderung der Mittelpunkt zwischen den Farbstopps ist. Sie können diesen Mittelpunkt an eine beliebige Position zwischen zwei Farbstopps verschieben, indem Sie einen nicht beschrifteten % Farbhinweis zwischen den zwei Farben hinzufügen, um anzugeben, wo der Mittelpunkt des Farbwechsels liegen soll. Das folgende Beispiel ist von Anfang an bis zur 10% Marke durchgehend rot und ab 90% bis zum Ende durchgehend blau. Zwischen 10% und 90% wechseln die Farben von rot nach blau. Der Übergangsmittelpunkt liegt jedoch bei 30% anstatt bei 50%, wie es ohne den 30% Farbhinweis gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, erfolgt der Übergang als harte Linie zwischen der ersten und letzten an diesem Ort deklarierten Farbe.

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit einem niedrigeren Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt an der 40% Marke von rot zu gelb und ändert sich dann über 25% des Gradienten von gelb zu blau:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrstückige Farbstopps sind erlaubt. Eine Farbe kann als zwei aneinandergrenzende Farbstopps deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Gradienten sind äquivalent:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%`-Stopp vorhanden ist, wird die zuerst deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke weiterlaufen oder an der `100%`-Marke sein, wenn keine Länge für den letzten Stopp deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient unter einem 45-Grad-Winkel

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Feld verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} genutzt wird. Das untere Feld verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau wechselt, indem der längere Bogen durch Grüns, Gelbs und Orangen durchlaufen wird.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit mehrstückigen Farbstopps

Dieses Beispiel verwendet mehrstückige Farbstopps, indem benachbarte Farben denselben Farb-Stopp-Wert haben, wodurch ein gestreifter Effekt entsteht.

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

### Mehr lineare Gradienten-Beispiele

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele an.

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
- [CSS-Images-Modul](/de/docs/Web/CSS/CSS_images)
