---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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

  - : Die Position des Startpunkts der Verlaufslinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite (`left` oder `right`) an und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standard `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufslinie. Ein Wert von `0deg` entspricht `to top`; aufsteigende Werte rotieren im Uhrzeigersinn von dort aus.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlauffarbe die Mitte der Farbüberblendung erreichen sollte. Wird dies weggelassen, ist der Mittelpunkt der Farbüberblendung die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Verläufen](#zusammensetzung_eines_linearen_verlaufs) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse – die _Verlaufslinie_ – und zwei oder mehr _Farbstopp-Punkte_ definiert. Jeder Punkt auf der Achse hat eine unterschiedliche Farbe; um einen glatten Verlauf zu erzeugen, zeichnet die `linear-gradient()` Funktion eine Reihe von farbigen Linien, die senkrecht zur Verlaufslinie stehen und jeweils die Farbe des Punktes annehmen, an dem sie die Verlaufslinie schneiden.

![linear-gradient.png](linear-gradient.png)

Die Verlaufslinie wird durch die Mitte des Kastens, der das Verlaufbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optionale Farbstopppunkte.

Der _Startpunkt_ ist die Stelle auf der Verlaufslinie, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Verlaufslinie mit einer senkrechten Linie definiert, die vom Box-Eckpunkt vorbeiführt, der sich im gleichen Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunkts verstanden werden. Diese recht komplexen Definitionen führen zu einem interessanten Effekt, der manchmal _magische Ecken_ genannt wird: Die Ecken, die dem Start- und Endpunkt am nächsten sind, haben die gleiche Farbe wie ihre jeweiligen Start- bzw. Endpunkte.

#### Anpassung von Verläufen

Durch Hinzufügen zusätzlicher Farbstopppunkte auf der Verlaufslinie können Sie einen sehr angepassten Übergang zwischen mehreren Farben erstellen. Eine Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie die Position einer Farbe nicht angeben, wird sie zwischen der vorhergehenden und der folgenden Farbe in der Mitte platziert. Die folgenden beiden Verläufe sind äquivalent.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben gleichmäßig von der Farbe eines Farbstopps zur Farbe des anschließenden Farbstopps, wobei die Mitte zwischen den Farben die halbe Strecke des Farbwechsels darstellt. Sie können diesen Mittelpunkt an eine beliebige Position zwischen zwei Farbstopps verschieben, indem Sie einen unbeschrifteten % Farbhinweis zwischen zwei Farben hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels liegen sollte. Das folgende Beispiel ist von Anfang bis zur 10%-Marke rot und von 90% bis zum Ende blau. Zwischen 10% und 90% wechselt die Farbe von Rot zu Blau; der Mittelpunkt des Farbwechsels liegt jedoch bei der 30%-Marke anstelle von 50%, wie es ohne den 30% Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Position liegen, erfolgt der Übergang als harter Schnitt zwischen den ersten und letzten Farben, die an dieser Position deklariert wurden.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorhergehenden Farbstopps und schaffen einen harten Übergang. Folgendes ändert sich von Rot zu Gelb bei der 40%-Marke und geht dann von Gelb zu Blau über 25% des Verlaufs über:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Multi-Position-Farbstopps sind zulässig. Eine Farbe kann als zwei benachbarte Farbstopps deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Verläufe sind äquivalent:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn keine Farbe mit einem `0%` Stopp vorhanden ist, wird die erste erklärte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, wenn bei diesem letzten Stopp keine Länge deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf in einem Winkel von 45 Grad

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die Box unten verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, welcher über Grün, Gelb und Orange führt.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit Farbstopps an mehreren Positionen

Dieses Beispiel verwendet Farbstopps an mehreren Positionen, wobei benachbarte Farben denselben Farbstoppwert aufweisen und so einen gestreiften Effekt erzeugen.

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

Bitte sehen Sie [die Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS-Bildermodul](/de/docs/Web/CSS/CSS_images)
