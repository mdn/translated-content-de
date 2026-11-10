---
title: CSS-Funktion `linear-gradient()`
short-title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die **`linear-gradient()`**-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) von [CSS](/de/docs/Web/CSS) erzeugt ein Bild mit einem stufenlosen Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie. Das Ergebnis ist ein Wert des Datentyps {{cssxref("gradient")}}, einer besonderen Form von {{cssxref("image")}}.

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
  - : Die Position des Startpunkts der Verlaufslinie. Wenn sie angegeben wird, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: Eines bezeichnet die horizontale Seite (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Schlüsselwörter spielt keine Rolle. Ohne Angabe gilt standardmäßig `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` beziehungsweise `90deg`. Die übrigen Werte werden in einen Winkel umgerechnet.

- {{cssxref("angle")}}
  - : Der Richtungswinkel der Verlaufslinie. Der Wert `0deg` entspricht `to top`; mit steigenden Werten dreht sich die Richtung im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert für einen Farbstopp, gefolgt von einer oder zwei optionalen Stopp-Positionen. Jede Position ist entweder ein {{CSSxRef("&lt;percentage&gt;")}}- oder ein {{CSSxRef("&lt;length&gt;")}}-Wert entlang der Verlaufsachse.
- `<color-hint>`
  - : Ein Hinweis für die {{Glossary("interpolation", "Interpolation")}}, der festlegt, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge bestimmt, an welcher Stelle zwischen zwei Farbstopps die Verlaufsfarbe die Mitte des Farbübergangs erreicht. Ohne Angabe liegt diese Mitte auf halber Strecke zwischen den beiden Farbstopps.

> [!NOTE]
> Für die Darstellung von [Farbstopps in CSS-Verläufen](#aufbau_eines_linearen_verlaufs) gelten dieselben Regeln wie für Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie jeder Verlauf hat auch ein linearer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description): Er besitzt weder eine natürliche oder bevorzugte Größe noch ein bevorzugtes Seitenverhältnis. Seine tatsächliche Größe entspricht der Größe des Elements, auf das er angewendet wird.

Wenn Sie einen linearen Verlauf erstellen möchten, der sich wiederholt und so seinen Container ausfüllt, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`-Werte zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo {{cssxref("image")}}-Werte zulässig sind. Deshalb funktioniert `linear-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

### Aufbau eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse – die _Verlaufslinie_ – und mindestens zwei _Farbstopp-Punkte_ definiert. Jeder Punkt auf der Achse hat eine bestimmte Farbe. Um einen gleichmäßigen Verlauf zu erzeugen, zeichnet die Funktion `linear-gradient()` eine Reihe farbiger Linien senkrecht zur Verlaufslinie. Jede dieser Linien hat die Farbe des Punkts, an dem sie die Verlaufslinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Verlaufslinie wird durch den Mittelpunkt des Kastens, der das Verlaufsbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch mindestens zwei Punkte bestimmt: den Startpunkt, den Endpunkt und gegebenenfalls dazwischenliegende Farbstopp-Punkte.

Der _Startpunkt_ ist die Stelle auf der Verlaufslinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist die Stelle, an der die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Verlaufslinie mit einer senkrechten Linie definiert, die durch eine Ecke des Kastens im selben Quadranten verläuft. Der Endpunkt lässt sich als Spiegelpunkt des Startpunkts verstehen. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der gelegentlich als _magische Ecken_ bezeichnet wird: Die Ecken, die dem Start- und Endpunkt am nächsten liegen, haben jeweils dieselbe Farbe wie der entsprechende Punkt.

#### Verläufe anpassen

Indem Sie weitere Farbstopp-Punkte auf der Verlaufslinie hinzufügen, können Sie den Übergang zwischen mehreren Farben gezielt gestalten. Die Position eines Farbstopps lässt sich mit einem {{CSSxRef("&lt;length&gt;")}}- oder einem {{CSSxRef("&lt;percentage&gt;")}}-Wert ausdrücklich festlegen. Wenn Sie für eine Farbe keine Position angeben, wird sie auf halber Strecke zwischen der vorhergehenden und der nachfolgenden Farbe platziert. Die folgenden beiden Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig gehen die Farben zwischen zwei aufeinanderfolgenden Farbstopps gleichmäßig ineinander über. Die Mitte des Farbübergangs liegt dabei auf halber Strecke zwischen den Farbstopps. Sie können diese Mitte an eine beliebige Stelle zwischen den beiden Farbstopps verschieben, indem Sie zwischen den Farben einen Prozentwert ohne Farbangabe als Hinweis einfügen. Dieser gibt an, wo die Mitte des Farbübergangs liegen soll. Im folgenden Beispiel ist der Verlauf vom Anfang bis zur 10-%-Marke durchgehend rot und von der 90-%-Marke bis zum Ende durchgehend blau. Zwischen 10 % und 90 % geht Rot in Blau über. Die Mitte des Übergangs liegt jedoch bei 30 % statt bei 50 %, wie es ohne den Hinweis bei 30 % der Fall wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Position liegen, entsteht ein abrupter Übergang zwischen der ersten und der letzten Farbe, die für diese Position angegeben wurden.

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Ein nachfolgender Farbstopp mit einem niedrigeren Wert überschreibt den Wert des vorherigen Farbstopps und erzeugt dadurch einen abrupten Übergang. Im folgenden Beispiel wechselt die Farbe bei 40 % von Rot zu Gelb und geht anschließend über 25 % des Verlaufs von Gelb in Blau über:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Farbstopps mit mehreren Positionen sind zulässig. Eine Farbe kann als zwei benachbarte Farbstopps angegeben werden, indem beide Positionen in der CSS-Deklaration stehen. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Wenn kein Farbstopp bei `0%` angegeben ist, beginnt die erste angegebene Farbe standardmäßig an dieser Stelle. Ebenso reicht die letzte Farbe bis zur `100%`-Marke; wenn für den letzten Farbstopp keine Länge angegeben ist, befindet er sich an der `100%`-Marke.

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

### Verlauf, der bei 60 % der Verlaufslinie beginnt

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

### Interpolation in einem rechteckigen Farbraum

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

### Interpolation des Farbtons

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

Der obere Kasten verwendet die [Interpolation über den kürzeren Bogen](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter): Auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht die Farbe über den kürzeren Bogen direkt von Rot zu Blau über. Der untere Kasten verwendet die [Interpolation über den längeren Bogen](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer): Die Farbe geht über den längeren Bogen von Rot zu Blau über und durchläuft dabei Grün-, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Farbstopps an mehreren Positionen

Dieses Beispiel verwendet Farbstopps an mehreren Positionen. Benachbarte Farben haben denselben Farbstopp-Wert, wodurch ein Streifeneffekt entsteht.

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

{{EmbedLiveSample("gradient_with_multi-position_color-stops", 120, 120)}}

### Weitere Beispiele für lineare Verläufe

Weitere Beispiele finden Sie unter [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Weitere Verlaufsfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- [CSS-Modul für Bilder](/de/docs/Web/CSS/Guides/Images)
