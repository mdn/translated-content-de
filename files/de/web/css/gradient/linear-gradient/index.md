---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Ihr Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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

  - : Der Ausgangspunkt der Gradientenlinie. Wenn angegeben, besteht er aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines zeigt die horizontale Seite (`left` oder `right`) an, das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Schlüsselwörter spielt keine Rolle. Wird nichts angegeben, ist die Standardeinstellung `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Richtungswinkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte drehen sich im Uhrzeigersinn von dort aus.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (jede davon entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder eine {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein [Interpolations](/de/docs/Glossary/interpolation)-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge gibt an, an welchem Punkt zwischen zwei Farbstopps die mittlere Farbe der Verlaufübergangs erreicht werden soll. Fehlt dieser Hinweis, ist die Mitte des Farbverlaufs die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbverläufen in CSS-Gradienten](#zusammensetzung_eines_linearen_verlaufs) folgt denselben Regeln wie Farbverläufe in [SVG-Gradienten](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Behälter zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse definiert — die _Gradientenlinie_ — und zwei oder mehr _Farbstopp-Punkte_. Jeder Punkt auf der Achse ist eine eigenständige Farbe; um einen gleichmäßigen Verlauf zu erstellen, zeichnet die `linear-gradient()` Funktion eine Reihe farbiger Linien senkrecht zur Gradientenlinie, wobei jede die Farbe des Punktes hat, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch die Mitte des die Verlaufsabbildung enthaltenden Kastens und durch einen Winkel definiert. Die Farben des Gradienten werden von zwei oder mehr Punkten bestimmt: dem Ausgangspunkt, dem Endpunkt und dazwischen optionalen Farbstopppunkten.

Der _Ausgangspunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch die Kreuzung der Gradientenlinie mit einer senkrechten Linie definiert, die vom Kasteneck kommt, welches sich im gleichen Quadranten befindet. Der Endpunkt kann als der symmetrische Punkt des Ausgangspunktes verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die den Ausgangs- und Endpunkten am nächsten liegen, haben dieselbe Farbe wie ihre jeweiligen Ausgangs- oder Endpunkte.

#### Anpassung von Verläufen

Indem Sie weitere Farbstopppunkte auf der Gradientenlinie hinzufügen, können Sie einen hochgradig angepassten Verlauf zwischen mehreren Farben erstellen. Eine Farbstopposition kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht angeben, wird sie in der Mitte zwischen der vorhergehenden und der nachfolgenden platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbstop zum Farbwert des anschließenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Mittelpunkt an eine beliebige Position zwischen zwei Farbstops verschieben, indem Sie einen unbeschrifteten % Farbhint zwischen den beiden Farben hinzufügen, um anzuzeigen, wo der Mittelpunkt des Farbverlaufs sein soll. Das folgende Beispiel ist von Beginn bis zur 10%-Marke solid rot und von 90% bis zum Ende solid blau. Zwischen 10% und 90% wechselt die Farbe von rot zu blau; allerdings ist der Mittelpunkt des Übergangs bei der 30%-Marke anstelle von 50%, was ohne den 30% Farbhint der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstops an derselben Stelle sind, wird der Übergang zu einer harten Linie zwischen der ersten und der letzten dort angegebenen Farbe.

Farbstops sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstops mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Im folgenden Beispiel wechselt es bei der 40%-Marke von rot zu gelb und dann wechselt es von gelb zu blau über 25% des Verlaufs:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrfachpositionierte Farbstops sind zulässig. Eine Farbe kann als zwei angrenzende Farbstops angegeben werden, indem beide Positionen in der CSS-Deklaration eingeschlossen werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%` Stop vorhanden ist, wird die erste deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, wenn an diesem letzten Stop keine Länge angegeben wurde.

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

### Interpolieren mit Hue

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und [hue](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Der obere Kasten verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau über die kürzere Achse auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) geht. Der untere Kasten verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über die längere Achse geht, dabei grünt, gelb und orange durchläuft.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit mehrfach positionierten Farbstops

Dieses Beispiel verwendet mehrfach positionierte Farbstops, bei denen benachbarte Farben denselben Farbstopwert haben und so einen gestreiften Effekt erzeugen.

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

### Weitere lineare Verlauf-Beispiele

Bitte sehen Sie sich [die Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauffunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bilder Modul](/de/docs/Web/CSS/CSS_images)
