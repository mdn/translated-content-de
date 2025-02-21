---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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

  - : Die Position des Ausgangspunkts der Gradientenlinie. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines, das die horizontale Seite (`left` oder `right`), und eines, das die vertikale Seite (`top` oder `bottom`) angibt. Die Reihenfolge der Seiten-Schlüsselwörter spielt keine Rolle. Wenn nichts angegeben ist, wird `to bottom` als Standardwert verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel übersetzt.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Gradientenlinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte rotieren von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Ein `color-stop`-Wert nach {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stop-Positionen, (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Achse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}}-Hinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps verläuft. Die Länge gibt an, an welchem Punkt zwischen zwei Farbstopps die Übergangsfarbe den Mittelpunkt des Farbwechsels erreichen soll. Wird er weggelassen, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Das Rendern von [Farbstopps in CSS-Gradienten](#zusammensetzung_eines_linearen_gradienten) folgt denselben Regeln wie Farbstopps in [SVG-Gradienten](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein linearer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen linearen Gradient zu erstellen, der sich wiederholt, um seinen Behälter zu füllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`-Elemente zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s verwendet werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines linearen Gradienten

Ein linearer Gradient wird durch eine Achse definiert—die _Gradientenlinie_—und zwei oder mehr _Farbstopp-Punkte_. Jeder Punkt auf der Achse hat eine andere Farbe; um einen glatten Übergang zu schaffen, zieht die Funktion `linear-gradient()` eine Serie von farbigen Linien senkrecht zur Gradientenlinie, wobei jede die Farbe des Punktes hat, an dem sie die Gradientenlinie schneidet.

![linear-gradient.png](linear-gradient.png)

Die Gradientenlinie wird durch das Zentrum der Box, die das Gradientenbild enthält, und einen Winkel definiert. Die Farben des Gradienten werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt und dazwischen optional Farbstopp-Punkte.

Der _Startpunkt_ ist der Ort auf der Gradientenlinie, an dem die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Gradientenlinie mit einer senkrechten Linie definiert, die von der Boxecke, die im gleichen Quadranten liegt, kommt. Der Endpunkt kann als symmetrischer Punkt des Startpunkts verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal _magische Ecken_ genannt wird: Die Ecken, die dem Start- und Endpunkt am nächsten liegen, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassen von Gradienten

Durch das Hinzufügen weiterer Farbstopp-Punkte auf der Gradientenlinie können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} definiert werden. Wenn Sie die Position einer Farbe nicht angeben, wird sie zur Hälfte zwischen der vorhergehenden und der nachfolgenden positioniert. Die folgenden beiden Gradienten sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig verläuft der Übergang der Farben sanft von der Farbe eines Farbstopps zur Farbe des nachfolgenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Übergangs ist. Sie können diesen Punkt an jede Position zwischen zwei Farbstopps verschieben, indem Sie einen nicht gekennzeichneten %-Farbhinweis zwischen diesen beiden Farben hinzufügen, um anzugeben, wo der Mittelpunkt des Farbwechsels sein soll. Im folgenden Beispiel ist es von Anfang an bis zur 10% -Markierung durchgehend rot und von 90% bis zum Ende durchgehend blau. Zwischen 10% und 90% wechselt die Farbe von rot zu blau, jedoch ist der Mittelpunkt des Übergangs bei der 30% -Markierung anstatt der 50%, was ohne den 30% -Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an der gleichen Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps von geringerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Wechsel von rot zu gelb erfolgt bei der 40%-Marke und wechselt dann von gelb zu blau über 25% des Gradienten hinweg:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrpositions-Farbstopps sind erlaubt. Eine Farbe kann als zwei angrenzende Farbstopps deklariert werden, indem beide Positionen in der CSS-Deklaration enthalten sind. Die folgenden drei Gradienten sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig, wenn es keine Farbe mit einem `0%`-Stopp gibt, wird die erste deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur Marke `100%` fortgesetzt oder an der Marke `100%` sein, wenn auf diesem letzten Stopp keine Länge deklariert wurde.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gradient im 45-Grad-Winkel

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und die [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die obere Box verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau geht und den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet. Die untere Box verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau unter Verwendung des längeren Bogens wechselt, durchläuft dabei Grüntöne, Gelbtöne und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

### Gradient mit mehrpositionierten Farbstopps

Dieses Beispiel verwendet mehrpositionierte Farbstopps mit benachbarten Farben, die denselben Farbstoppwert haben, was einen Streifeneffekt erzeugt.

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

Weitere Beispiele finden Sie unter [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients).

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
