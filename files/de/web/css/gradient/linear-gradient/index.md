---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welcher eine besondere Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Die Position des Startpunkts der Verlaufslinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite (`left` oder `right`) und das andere die vertikale Seite (`top` oder `bottom`) an. Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Richtung der Verlaufslinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte drehen sich von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farbverlaufpunkts, gefolgt von einer oder zwei optionalen Stopp-Positionen (jede ist entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbverlaufspunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbverlaufspunkten die Verlausfarbe den Mittelwert des Farbübergangs erreichen sollte. Wird sie weggelassen, ist der Mittelwert des Farbübergangs der Mittelwert zwischen zwei Farbverlaufspunkten.

> [!NOTE]
> Die Darstellung von [Farbverläufen in CSS-Verläufen](#zusammensetzung_eines_linearen_verlaufs) folgt den gleichen Regeln wie Farbverläufe in [SVG-Verläufen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein Linearverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe passt sich der Größe des Elements an, auf das er angewendet wird.

Um einen linearen Verlauf zu erzeugen, der sich wiederholt, um seinen Behälter zu füllen, verwenden Sie die {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}} Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse definiert—die _Verlaufslinie_—und zwei oder mehr _Farbverlaufspunkte_. Jeder Punkt auf der Achse ist eine eigene Farbe; um einen sanften Verlauf zu erzeugen, zeichnet die `linear-gradient()` Funktion eine Reihe von Farbstrichen, die senkrecht zur Verlaufslinie verlaufen, wobei jeder Strich der Farbe des Punktes entspricht, an dem er die Verlaufslinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Verlaufslinie wird durch das Zentrum der Box bestimmt, die das Verlaufsbild enthält, und durch einen Winkel. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optionale Farbverlaufspunkte.

Der _Startpunkt_ ist der Ort auf der Verlaufslinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Verlaufslinie mit einer senkrechten Linie bestimmt, die von der Eckbox kommt, die sich im selben Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal _magische Ecken_ genannt wird: die Ecken, die den Start- und Endpunkten am nächsten liegen, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer Farbverlaufspunkte auf der Verlaufslinie können Sie einen höchst individuell gestalteten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbverlaufs kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie die Position einer Farbe nicht angeben, wird sie genau zwischen der vorhergehenden und der folgenden Farbe platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verlaufen die Farben sanft von der Farbe an einem Farbverlaufspunkt zur Farbe am folgenden Farbverlaufspunkt, wobei der Mittelwert zwischen den Farben der Halbpunkt des Farbübergangs ist. Sie können diesen Mittelwert an jede Position zwischen zwei Farbverlaufspunkten verschieben, indem Sie einen unbeschrifteten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo das Zentrum des Farbübergangs sein soll. Das folgende Beispiel ist von Anfang bis zur 10%-Markierung durchgehend rot und von 90% bis zum Ende durchgehend blau. Zwischen 10% und 90% wechselt die Farbe von rot zu blau, jedoch ist der Mittelpunkt des Übergangs an der 30%-Marke anstatt bei 50%, wie es ohne den 30% Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbverlaufspunkte an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle deklarierten Farbe.

Farbverlaufspunkte sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbverlaufspunkte mit niedrigeren Werten überschreiben den Wert des vorherigen Farbverlaufs, wodurch ein harter Übergang entsteht. Folgendes Beispiel wechselt bei der 40%-Markierung von rot zu gelb und geht dann in einem Übergang von gelb zu blau über 25% des Verlaufs über:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Farbverläufe mit mehreren Positionen sind erlaubt. Eine Farbe kann als zwei aneinandergrenzende Farbverläufe deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig wird, wenn keine Farbe mit einem `0%` Stopp angegeben ist, die zuerst deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Markierung weitergeführt oder an dieser liegen, wenn keine Länge für diesen letzten Stopp deklariert wurde.

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Kästchen verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot nach blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das untere Kästchen verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), bedeutet, dass die Farbe von rot nach blau über den längeren Bogen geht, durchläuft Grün, Gelb und Orange.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit mehrpositionalen Farbverläufen

Dieses Beispiel verwendet mehrpositionale Farbverläufe, wobei angrenzende Farben denselben Farbverlaufpunkt haben und so einen Streifeneffekt erzeugen.

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

Bitte sehen Sie [Verwendung von CSS Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bilder Modul](/de/docs/Web/CSS/CSS_images)
