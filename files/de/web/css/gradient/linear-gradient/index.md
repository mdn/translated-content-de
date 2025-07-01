---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem stufenweisen Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, das eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  linear-gradient(217deg, rgb(255 0 0 / 0.8), rgb(255 0 0 / 0) 70.71%),
  linear-gradient(127deg, rgb(0 255 0 / 0.8), rgb(0 255 0 / 0) 70.71%),
  linear-gradient(336deg, rgb(0 0 255 / 0.8), rgb(0 0 255 / 0) 70.71%);
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
  - : Die Position des Startpunkts der Gradientenlinie. Falls angegeben, besteht es aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Falls nicht angegeben, ist die Standardeinstellung `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` bzw. `90deg`. Die anderen Werte werden in einen Winkel umgerechnet.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren im Uhrzeigersinn davon aus.
- `<linear-color-stop>`
  - : Ein Farbhaltepunkt-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopppositionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder eine {{CSSxRef("&lt;length&gt;")}} entlang der Gradientenachse).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen angrenzenden Farbhaltepunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbhaltepunkten die Farbe des Verlaufs den Mittelpunkt des Farbwechsels erreichen soll. Fehlt dieser, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbhaltepunkten.

> [!NOTE]
> Die Darstellung von [color stops in CSS-Gradianten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopps in [SVG-Gradianten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements, auf das es angewendet wird, entsprechen.

Um einen linearen Verlauf zu erstellen, der zur Füllung seines Containers wiederholt wird, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse definiert — die _Gradientenlinie_ — und zwei oder mehr \_Farbhaltepunkt-\_Positionen. Jeder Punkt auf der Achse ist eine andere Farbe; um einen glatten Verlauf zu schaffen, zeichnet die `linear-gradient()`-Funktion eine Reihe von farbigen Linien, die senkrecht zur Gradientenlinie stehen, wobei jede die Farbe des Punktes annimmt, an dem sie die Gradientenlinie kreuzt.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum des den Gradienten enthaltenden Rahmens und einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optionale Farbhaltepunkte.

Der _Startpunkt_ ist die Position auf der Gradientenlinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch die Schnittstelle der Gradientenlinie mit einer senkrechten Linie definiert, die von der Ecke des Rahmens verläuft, welche sich im gleichen Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunktes verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: die Ecken, die dem Start- und Endpunkt am nächsten sind, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer Farbhaltepunkte auf der Gradientenlinie können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbhaltepunktes kann explizit durch eine {{CSSxRef("&lt;length&gt;")}} oder ein {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht spezifizieren, wird sie auf halbem Weg zwischen der vorhergehenden und der folgenden platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig erfolgt der Farbverlauf nahtlos von der Farbe an einem Farbhaltepunkt zur Farbe am darauffolgenden Farbhaltepunkt, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbwechsels ist. Sie können diesen Mittelpunkt an jede Position zwischen zwei Farbhaltepunkten verschieben, indem Sie ein unbeschriftetes %-Farbhinweis zwischen den beiden Farben hinzufügen, um anzuzeigen, wo die Mitte des Farbwechsels sein soll. Im folgenden Beispiel ist das Bild von Anfang bis zur 10%-Marke solid rot und von 90% bis zum Ende solid blau. Zwischen 10% und 90% wechselt die Farbe von Rot zu Blau, wobei der Mittelpunkt des Wechsels an der 30%-Marke und nicht bei 50% liegt, wie es ohne das 30%-Farbhinweis passiert wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbhaltepunkte an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein.

Farbhaltepunkte sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende niedrigere Farbhaltepunkte überschreiben den Wert des vorherigen Farbhaltepunktes und erzeugen einen harten Übergang. Das Folgende ändert sich bei der 40%-Marke von Rot zu Gelb und wechselt dann von Gelb zu Blau über 25% des Verlaufs:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrere Positionen für Farbhaltepunkte sind erlaubt. Eine Farbe kann als zwei benachbarte Farbhaltepunkte deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%`-Halt angegeben ist, ist die erste deklarierte Farbe an diesem Punkt. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, wenn keine Länge an diesem letzten Halt angegeben wurde.

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

### Interpolation mit dem Farbton

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

In diesem Beispiel für die Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Die untere Box verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei durch Grüntöne, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Farbhalten mit mehreren Positionen

Dieses Beispiel verwendet Farbhaltepunkte mit mehreren Positionen, bei denen angrenzende Farben denselben Farbhalbwert haben und so einen Streifeneffekt schaffen.

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

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradienten-Funktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bildermodul](/de/docs/Web/CSS/CSS_images)
