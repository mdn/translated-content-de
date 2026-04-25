---
title: "`linear-gradient()` CSS-Funktion"
short-title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Ihr Ergebnis ist ein Objekt des {{cssxref("gradient")}}-Datentyps, einer speziellen Art von {{cssxref("image")}}.

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
  - : Die Position des Startpunkts der Verlaufslinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines zeigt die horizontale Seite an (`left` oder `right`), das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel umgewandelt.

- {{cssxref("angle")}}
  - : Der Richtungswinkel der Verlaufslinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein Farb-Stopp-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von einem oder zwei optionalen Stopp-Positionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Verlaufs).
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie der Verlauf zwischen zwei benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Verlauf die Mitte des Farbübergangs erreichen soll. Wenn weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Das Rendern von [Farbstopps in CSS-Verläufen](#zusammensetzung_eines_linearen_verlaufs) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo {{cssxref("image")}}s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse — die _Verlaufslinie_ — und zwei oder mehr _Farbstopp-Punkte_ definiert. Jeder Punkt auf der Achse hat eine andere Farbe; um einen sanften Verlauf zu erzeugen, zeichnet die Funktion `linear-gradient()` eine Reihe von farbigen Linien, die senkrecht zur Verlaufslinie stehen und jede die Farbe des Punktes haben, an dem sie die Verlaufslinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Verlaufslinie wird durch das Zentrum des Kastens, der das Verlaufsbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen liegende optionale Farbstopppunkte.

Der _Startpunkt_ ist der Ort auf der Verlaufslinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Verlaufslinie mit einer senkrechten Linie definiert, die von der Ecke des Kastens verläuft, die sich im selben Quadranten befindet. Der Endpunkt kann als der symmetrische Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: die Ecken, die dem Start- und Endpunkt am nächsten sind, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Verläufen

Indem Sie mehr Farbstopppunkte auf der Verlaufslinie hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht spezifizieren, wird sie genau in der Mitte zwischen der vorherigen und der nachfolgenden Farbe platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln Farben sanft von der Farbe am einen Farb-Stopp zur Farbe am folgenden Farb-Stopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Mittelpunkt an eine beliebige Position zwischen zwei Farbstopps verschieben, indem Sie einen nicht gekennzeichneten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo der Mittelpunkt des Farbübergangs sein sollte. Im folgenden Beispiel ist es von Anfang bis zur 10%-Marke festes Rot und von 90% bis zum Ende festes Blau. Zwischen 10% und 90% wechselt die Farbe von Rot zu Blau, der Mittelpunkt des Übergangs liegt jedoch bei der 30%-Marke anstatt der 50%-Marke, wie es ohne den 30% Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps am selben Ort sind, wird die Übergangsstellung eine harte Linie zwischen der zuerst und zuletzt an diesem Ort deklarierten Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps niedrigerer Werte überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Übergang ändert sich an der 40%-Marke von Rot zu Gelb und geht dann über 25% des Verlaufs von Gelb zu Blau über.

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositionierte Farbstopps sind erlaubt. Eine Farbe kann als zwei nebeneinander liegende Farbstopps deklariert werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn es keine Farbe mit einem `0%`-Stopp gibt, wird die erste deklarierte Farbe an diesem Punkt stehen. Ebenso wird die letzte Farbe bis zur `100%`-Marke andauern oder an der `100%`-Marke sein, wenn keine Länge an diesem letzten Stopp deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verlauf bei einem 45-Grad-Winkel

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbsystem verwendet, und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Feld verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über die kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das untere Feld verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht, durch Grüntöne, Gelbtöne und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit mehrpositionierten Farbstopps

Dieses Beispiel verwendet mehrpositionierte Farbstopps, wobei benachbarte Farben denselben Farb-Stopp-Wert haben und so einen Streifeneffekt erzeugen.

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

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- [CSS-Bildermodul](/de/docs/Web/CSS/Guides/Images)
