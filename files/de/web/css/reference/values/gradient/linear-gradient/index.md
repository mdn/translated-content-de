---
title: linear-gradient()
slug: Web/CSS/Reference/Values/gradient/linear-gradient
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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

  - : Die Position des Startpunkts der Gradientenlinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite (`left` oder `right`) an, das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter ist egal. Falls nicht angegeben, lautet der Standardwert `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel umgerechnet.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Richtungswinkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; höhere Werte drehen sich im Uhrzeigersinn davon ausgehend.
- `<linear-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbpunktes, gefolgt von ein oder zwei optionalen Stopp-Positionen (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie der Gradient zwischen angrenzenden Farbpunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbpunkten der Farbverlauf den Mittelpunkt des Farbübergangs erreichen sollte. Falls nicht angegeben, ist der Mittelpunkt des Farbübergangs die Mitte zwischen zwei Farbpunkten.

> [!NOTE]
> Die Darstellung von [Farbstopp-Punkten in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopp-Punkte in [SVG-Gradienten](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Gradients).

## Beschreibung

Wie jeder Gradient hat auch ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Gradient zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/Reference/Values/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp nutzen.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse — die _Gradientenlinie_ — und zwei oder mehr _Farbstopp-Punkte_ definiert. Jeder Punkt auf der Achse hat eine eigene Farbe; um einen sanften Verlauf zu erzeugen, zeichnet die `linear-gradient()`-Funktion eine Serie farbiger Linien, die senkrecht zur Gradientenlinie stehen, wobei jede den Farbwert des Punktes hat, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum der Box, die das Gradientenbild enthält, und einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optionale Farbpunkt-Positionen.

Der _Startpunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Diese beiden Punkte werden jeweils durch das Schneiden der Gradientenlinie mit einer senkrechten Linie definiert, die aus der Ecke der Box kommt, die sich im gleichen Quadranten befindet. Der Endpunkt kann als der symmetrische Punkt des Startpunkts verstanden werden. Diese etwas komplizierten Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die dem Start- und Endpunkt am nächsten sind, haben die gleiche Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Gradienten

Durch Hinzufügen weiterer Farbpunkt-Positionen entlang der Gradientenlinie können Sie einen stark angepassten Übergang zwischen mehreren Farben erzeugen. Die Position eines Farbpunkts kann explizit mit einem {{CSSxRef("&lt;length&gt;")}} oder einem {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie den Ort einer Farbe nicht angeben, wird sie in der Hälfte zwischen der vorhergehenden und der folgenden Farbe platziert. Die folgenden zwei Gradiententypen sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig erfolgt der Farbübergang sanft von der Farbe bei einem Farbstopp zu der Farbe beim nächsten Farbstopp, wobei der Mittelpunkt der beiden Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Mittelpunkt an eine beliebige Position zwischen zwei Farbstopp-Punkten verschieben, indem Sie zwischen den beiden Farben einen nicht bezeichneten % Farbhinweis hinzufügen, um anzugeben, wo der Mittelpunkt des Farbübergangs sein soll. Im folgenden Beispiel ist der Verlauf von Anfang bis zur 10%-Marke in Rot und von 90% bis zum Ende in Blau. Zwischen 10% und 90% wechselt die Farbe von Rot nach Blau, allerdings liegt der Mittelpunkt des Übergangs bei 30% anstatt bei 50%, wie ohne den 30%-Farbhinweis.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Befinden sich zwei oder mehr Farbstopp-Punkte an derselben Position, ist der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Position deklarierten Farbe.

Farbstopp-Punkte sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopp-Punkte mit einem niedrigeren Wert überschreiben den Wert des vorherigen Farbstopp-Punkts und erzeugen einen harten Übergang. Das folgende Beispiel wechselt bei 40% von Rot zu Gelb und dann bei 25% des Gradienten von Gelb zu Blau.

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositionen-Farbstopp-Punkte sind erlaubt. Eine Farbe kann als zwei benachbarte Farbstopp-Punkte durch Angabe beider Positionen in der CSS-Deklaration angezeigt werden. Die folgenden drei Gradienten sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Wenn standardmäßig keine Farbe mit einem `0%`-Stopp vorhanden ist, wird die zuerst deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke weitergeführt oder an dieser Marke sein, wenn keine Länge für diesen letzten Stopp deklariert wurde.

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbsystem verwendet und die [Farbton](/de/docs/Web/CSS/Reference/Values/hue)-Interpolation durchgeführt.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Das obere Kästchen verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), das bedeutet, die Farbe wechselt direkt von Rot zu Blau unter Verwendung des kürzeren Bogens auf dem {{Glossary("Color_wheel", "Farbkreis")}}. Das untere Kästchen verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), das bedeutet, die Farbe wechselt von Rot zu Blau und durchläuft dabei Grüns, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit Mehrpositions-Farbpunkten

Dieses Beispiel verwendet Mehrpositions-Farbstopp-Punkte, bei denen benachbarte Farben den gleichen Farbstopp-Wert haben und somit einen Streifeneffekt erzeugen.

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

### Weitere Beispiele für lineare Gradienten

Sehen Sie sich [CSS-Gradienten verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von CSS-Gradienten](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradienten-Funktionen: {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{CSSxRef("&lt;image&gt;")}}
- [CSS Images Modul](/de/docs/Web/CSS/Guides/Images)
