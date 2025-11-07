---
title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Die Position des Startpunkts der Verlaufsachse. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seitenschlüsselwörter spielt keine Rolle. Falls nicht angegeben, ist der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel umgewandelt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufsachse. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte drehen sich von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopppositionen (jede davon entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Verlaufsachse).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}}-Hinweis, der definiert, wie der Verlauf zwischen angrenzenden Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Übergangsfarbe den Mittelwert des Farbübergangs erreichen sollte. Wenn weggelassen, ist der Mittelwert des Farbübergangs der Mittelwert zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Verläufen](#zusammensetzung_eines_linearen_verlaufs) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description), d. h., er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um sein Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Weil `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/Reference/Values/image)s verwendet werden können. Aus diesem Grund wird `linear-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften funktionieren, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf ist durch eine Achse—die _Verlaufsachse_—und zwei oder mehr _Farbstoppunkte_ definiert. Jeder Punkt auf der Achse hat eine eindeutige Farbe; um einen sanften Verlauf zu erzeugen, zieht die Funktion `linear-gradient()` eine Reihe von farbigen Linien, die senkrecht zur Verlaufsachse sind, wobei jede Linie der Farbe des Punktes entspricht, an dem sie die Verlaufsachse schneidet.

![linear-gradient.png](linear-gradient.png)

Die Verlaufsachse wird durch das Zentrum des Kastens, der das Verlaufsbild enthält, und durch einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Anfangspunkt, den Endpunkt und eventuell dazwischen liegende Farbstopppunkte.

Der _Startpunkt_ ist der Ort auf der Verlaufsachse, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Verlaufsachse mit einer senkrechten Linie definiert, die von der Ecke des Kastens verläuft, die im gleichen Quadranten liegt. Der Endpunkt kann als der symmetrische Punkt des Anfangspunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die den Start- und Endpunkten am nächsten sind, haben dieselbe Farbe wie die jeweiligen Start- oder Endpunkte.

#### Anpassen von Verläufen

Indem Sie weitere Farbstopppunkte auf der Verlaufsachse hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie die Position einer Farbe nicht angeben, wird sie genau zwischen der vorhergehenden und nachfolgenden Farbe gesetzt. Die folgenden beiden Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verläuft der Übergang von der Farbe bei einem Farbstopp zu der Farbe beim nachfolgenden Farbstopps gleichmäßig, wobei der Mittelwert der Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Mittelpunkt an jede beliebige Position zwischen zwei Farbstopps verschieben, indem Sie einen nicht benannten % Farbhinweis zwischen den beiden Farben hinzufügen, um anzuzeigen, wo der Mittelpunkt des Farbübergangs sein soll. Im folgenden Beispiel ist es von Anfang bis zur 10%-Marke ein kräftiges Rot und von 90% bis zum Ende ein kräftiges Blau. Zwischen 10 % und 90 % wechselt die Farbe von Rot zu Blau, jedoch liegt der Mittelpunkt des Übergangs bei der 30 %-Marke anstatt bei 50 %, wie es ohne den 30 %-Farbhinweis geschehen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Position sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle angegebenen Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Folgendes Beispiel wechselt an der 40%-Marke von Rot zu Gelb und dann von Gelb zu Blau über 25% des Verlaufs:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrfachpositionierte Farbstopps sind erlaubt. Eine Farbe kann als zwei angrenzende Farbstopps durch Angabe beider Positionen in der CSS-Deklaration deklariert werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig wird, wenn es keine Farbe mit einem `0%`-Stopp gibt, die zuerst deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, wenn bei diesem letzten Stopp keine Länge deklariert wurde.

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

### Verlauf, der bei 60% der Verlaufsachse beginnt

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

In diesem Interpolation-Beispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbmodell verwendet, und es wird der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Kästchen verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verläuft. Das untere Kästchen verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und dabei Grün, Gelb und Orange durchquert.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Verlauf mit mehrfach positionierten Farbstopps

Dieses Beispiel verwendet mehrfach positionierte Farbstopps, wobei benachbarte Farben denselben Farbstoppwert haben, was einen Streifeneffekt erzeugt.

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

### Mehr linear-gradient-Beispiele

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS Bildermodul](/de/docs/Web/CSS/CSS_images)
