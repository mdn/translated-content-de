---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 9f8f926dd4a27c1d3ec622cade9ba34818851951
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem stufenweisen Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, eine spezielle Art von {{CSSxRef("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

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

  - : Die Position des Startpunkts der Gradientenlinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Richtungswinkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte drehen sich von dort im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbübergangs, gefolgt von einer oder zwei optionalen Stopppositionen (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}}-Hinweis, der definiert, wie der Verlauf zwischen angrenzenden Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops der Farbverlauf den Mittelpunkt des Farbwechsels erreichen soll. Wenn dies weggelassen wird, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von [Farbverläufen in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbverläufe in [SVG-Gradienten](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Verlauf wird durch eine Achse definiert - die _Gradientenlinie_ - und zwei oder mehr _Farbstop-Punkte_. Jeder Punkt auf der Achse hat eine eigene Farbe; um einen fließenden Farbverlauf zu erstellen, zeichnet die Funktion `linear-gradient()` eine Serie farbiger Linien, die senkrecht zur Gradientenlinie stehen, wobei jede die Farbe des Punktes annimmt, an dem sie die Gradientenlinie kreuzt.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum des Kastens, der das Verlaufbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optionale Farbstopppunkte.

Der _Startpunkt_ ist die Position auf der Gradientenlinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch die Kreuzung der Gradientenlinie mit einer senkrechten Linie definiert, die von der Ecke des Kastens stammt, die sich im gleichen Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunktes verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal _magische Ecken_ genannt wird: Die Ecken, die dem Start- und Endpunkt am nächsten sind, haben die gleiche Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer Farbstopppunkte auf der Gradientenlinie kann ein hochgradig angepasster Übergang zwischen mehreren Farben erstellt werden. Die Position eines Farbstopps kann explizit durch ein {{CSSxRef("&lt;length&gt;")}} oder ein {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie die Position einer Farbe nicht angeben, wird sie in der Mitte zwischen der vorhergehenden und der folgenden Farbe positioniert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verläuft der Farbübergang fließend von der Farbe an einem Farbstopp zur Farbe am nachfolgenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt zwischen dem Farbwechsel ist. Sie können diesen Mittelpunkt an jede Stelle zwischen zwei Farbstopps verschieben, indem Sie einen nicht beschrifteten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo die Mitte des Farbwechsels sein soll. Das folgende Beispiel zeigt Rot von Anfang bis zur 10%-Marke und Blau von 90% bis zum Ende. Zwischen 10% und 90% verläuft der Übergang von Rot zu Blau, wobei der Mittelpunkt des Übergangs bei der 30%-Marke liegt, anstatt bei 50%, wie es ohne den 30%-Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Position sind, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle deklarierten Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit einem niedrigeren Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt von Rot zu Gelb an der 40%-Marke und dann von Gelb zu Blau über 25% des Gradienten:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Multi-Positions-Farbstopps sind erlaubt. Eine Farbe kann als zwei aufeinanderfolgende Farbstopps deklariert werden, indem beide Positionen in der CSS-Deklaration aufgenommen werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%` Stopp vorhanden ist, wird die zuerst deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt, oder bei der `100%`-Marke sein, wenn keine Länge an diesem letzten Stopp deklariert wurde.

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Kästchen verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Das untere Kästchen verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft, durch Grüntöne, Gelbtöne und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Multi-Positions-Farbstopps

Dieses Beispiel verwendet Multi-Positions-Farbstopps, bei denen benachbarte Farben denselben Farbstoppp-Wert haben, wodurch ein gestreifter Effekt entsteht.

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
- [CSS-Bildermodul](/de/docs/Web/CSS/CSS_images)
