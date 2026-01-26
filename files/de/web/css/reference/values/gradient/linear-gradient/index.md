---
title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{cssxref("gradient")}} Datentyps, der eine besondere Art von {{cssxref("image")}} ist.

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
  - : Die Position des Startpunkts der Gradientenlinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines zeigt die horizontale Seite (`left` oder `right`) und das andere die vertikale Seite (`top` oder `bottom`) an. Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standard `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` sind gleichbedeutend mit den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{cssxref("angle")}}
  - : Der Richtungswinkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; steigende Werte rotieren von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Color-Stop des {{CSSxRef("&lt;color&gt;")}} Wertes, gefolgt von ein oder zwei optionalen Stoppositionen (entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Gradientenachse).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}} Hinweis, der definiert, wie der Gradient zwischen benachbarten Color-Stops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Color-Stops die Gradientenfarbe den Mittelpunkt des Farbverlaufs erreichen sollte. Wenn weggelassen, ist der Mittelpunkt des Farbverlaufs der Mittelpunkt zwischen zwei Color-Stops.

> [!NOTE]
> Die Darstellung von [Color-Stops in CSS-Gradienten](#zusammensetzung_eines_linearen_verlaufs) folgt denselben Regeln wie Color-Stops in [SVG-Gradienten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo {{cssxref("image")}} verwendet werden können. Aus diesem Grund wird `linear-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften funktionieren, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse - die _Gradientenlinie_ - und zwei oder mehr _Color-Stop-Punkte_ definiert. Jeder Punkt auf der Achse ist eine eindeutige Farbe; um einen fließenden Verlauf zu erzeugen, zeichnet die `linear-gradient()` Funktion eine Reihe von farbigen Linien senkrecht zur Gradientenlinie, von denen jede die Farbe des Punktes wiedergibt, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch die Mitte der Box, die das Gradientenbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und, dazwischen, optionale Color-Stop-Punkte.

Der _Startpunkt_ ist die Stelle auf der Gradientenlinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Diese beiden Punkte werden durch den Schnittpunkt der Gradientenlinie mit einer Linie definiert, die rechtwinklig von der Ecke der Box kommt, welche im selben Quadranten liegt. Der Endpunkt kann als symmetrischer Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal _magische Ecken_ genannt wird: Die Ecken, die dem Start- und Endpunkt am nächsten liegen, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassung von Verläufen

Indem Sie weitere Color-Stop-Punkte auf der Gradientenlinie hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Color-Stops kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht angeben, wird sie in der Mitte zwischen derjenigen, die ihr vorausgeht, und derjenigen, die ihr folgt, platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verlaufen die Farben sanft von der Farbe eines Color-Stops zur Farbe des nächsten Color-Stops, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbverlaufs ist. Sie können diesen Mittelpunkt an jede Position zwischen zwei Color-Stops verschieben, indem Sie einen nicht bezeichneten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo der Übergangsmittelpunkt liegen sollte. Im folgenden Beispiel ist es von Anfang bis zur 10%-Marke festes Rot und von 90% bis zum Ende festes Blau. Zwischen 10% und 90% verläuft die Farbe von Rot nach Blau, jedoch ist der Übergangsmittelpunkt an der 30%-Marke statt bei 50%, wie es ohne den 30% Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Color-Stops am selben Standort liegen, wird der Übergang eine harte Linie zwischen der ersten und der letzten an diesem Ort deklarierten Farbe sein.

Color-Stops sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Color-Stops mit niedrigerem Wert überschreiben den Wert des vorherigen Color-Stops und erzeugen einen harten Übergang. Das folgende Beispiel wechselt an der 40%-Marke von Rot zu Gelb und geht dann über 25% des Verlaufs von Gelb zu Blau über:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Multi-Position-Color-Stops sind erlaubt. Eine Farbe kann als zwei aufeinanderfolgende Color-Stops deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn es keine Farbe mit einem `0%`-Stop gibt, wird die erste deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, wenn keine Länge bei diesem letzten Stop deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf in einem 45-Grad-Winkel

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau übergeht, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Die untere Box verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau übergeht, indem der längere Bogen verwendet wird, der durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Multi-Position-Color-Stops

Dieses Beispiel verwendet Multi-Position-Color-Stops, wobei benachbarte Farben denselben Color-Stop-Wert haben und einen Streifeneffekt erzeugen.

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

### Mehr linear-gradient Beispiele

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- [CSS-Bilder-Modul](/de/docs/Web/CSS/Guides/Images)
