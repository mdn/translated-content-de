---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine besondere Art von {{CSSxRef("&lt;image&gt;")}} ist.

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

  - : Die Position des Startpunkts der Gradientenlinie. Wenn angegeben, besteht es aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seitenbegriffe spielt keine Rolle. Wenn nicht angegeben, wird `to bottom` als Standardwert verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel umgewandelt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Richtungswinkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; steigende Werte drehen sich von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Farb-Stopp-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder eine {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein [Interpolations](/de/docs/Glossary/interpolation) hinweis, der angibt, wie sich der Gradient zwischen benachbarten Farbstops weiterentwickelt. Die Länge bestimmt, an welchem Punkt zwischen zwei Farbstops die Gradientenfarbe den Mittelpunkt des Farbübergangs erreichen sollte. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopps in [SVG-Gradienten](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein linearer Gradient [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Gradient zu erstellen, der sich wiederholt und seinen Behälter füllt, verwenden Sie die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse definiert – die _Gradientenlinie_ – und zwei oder mehr _Farb-Stopp-Punkte_. Jeder Punkt auf der Achse ist eine eigene Farbe; um einen glatten Übergang zu schaffen, zeichnet die `linear-gradient()` Funktion eine Reihe farbiger Linien senkrecht zur Gradientenlinie, von denen jede die Farbe des Punktes annimmt, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum der Box, die das Gradientenbild enthält, und durch einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und gegebenenfalls optionale Farb-Stopp-Punkte dazwischen.

Der _Startpunkt_ ist der Punkt auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch die Schnittstelle der Gradientenlinie mit einer senkrechten Linie definiert, die aus der Eckbox kommt, die sich im gleichen Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunkts gesehen werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die den Start- und Endpunkten am nächsten liegen, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassung von Gradienten

Durch Hinzufügen weiterer Farb-Stopp-Punkte auf der Gradientenlinie können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farb-Stops kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Standort einer Farbe nicht angeben, wird sie auf halbem Weg zwischen jener platziert, die ihr vorausgeht, und jener, die ihr folgt. Die folgenden zwei Gradienten sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig erfolgt der Farbverlauf sanft von der Farbe an einem Farb-Stopp zur Farbe am nachfolgenden Farb-Stopp, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt zwischen dem Farbverlauf ist. Sie können diesen Mittelpunkt an jede Stelle zwischen zwei Farb-Stops verschieben, indem Sie einen unbeschrifteten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo der Mittelpunkt des Farbverlaufs liegen soll. Im folgenden Beispiel ist es von Anfang bis zur 10% Marke ein starkes Rot und von 90% bis zum Ende ein starkes Blau. Zwischen 10% und 90% erfolgt der Übergang von Rot zu Blau, wobei der Mittelpunkt des Übergangs jedoch bei der 30% Marke liegt anstatt bei 50%, wie ohne die 30% Farbhinweis.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farb-Stops an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle deklarierten Farbe sein.

Farb-Stops sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farb-Stops mit niedrigerem Wert überschreiben den Wert des vorhergehenden Farb-Stops und erzeugen einen harten Übergang. Das folgende Beispiel wechselt an der 40% Marke von Rot zu Gelb und geht dann über 25% des Gradients von Gelb zu Blau über:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositionen-Farb-Stops sind erlaubt. Eine Farbe kann als zwei benachbarte Farb-Stops durch das Einbeziehen beider Positionen in die CSS-Deklaration deklariert werden. Die folgenden drei Gradienten sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%` Stopp vorhanden ist, wird die erste deklarierte Farbe an dieser Stelle sein. Ebenso wird die letzte Farbe bis zur `100%` Marke fortgesetzt oder an der `100%` Marke sein, wenn an diesem letzten Stopp keine Länge deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient in einem 45-Grad-Winkel

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau mit der kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) geht. Die untere Box verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht, indem sie durch Grüntöne, Gelbtöne und Orangetöne verläuft.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit Mehrpositionen-Farb-Stops

Dieses Beispiel verwendet Mehrpositionen-Farb-Stops, wobei benachbarte Farben denselben Farb-Stopp-Wert haben, was einen streifenförmigen Effekt erzeugt.

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

### Mehr Beispiele für linear-gradient

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

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
- [CSS Images Modul](/de/docs/Web/CSS/CSS_images)
