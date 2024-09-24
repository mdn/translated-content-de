---
title: linear-gradient()
slug: Web/CSS/gradient/linear-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`linear-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben entlang einer geraden Linie besteht. Das Ergebnis ist ein Objekt vom Datentyp {{CSSxRef("&lt;gradient&gt;")}}, eine spezielle Art von {{CSSxRef("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-linear-gradient.html")}}

## Syntax

```css
/* Ein Verlauf im Winkel von 45 Grad,
   beginnend mit Blau und endend mit Rot */
linear-gradient(45deg, blue, red)

/* Ein Verlauf vom unteren rechten zum oberen linken Eck,
   beginnend mit Blau und endend mit Rot */
linear-gradient(to left top, blue, red)

/* Interpolation im rechteckigen Farbraum */
linear-gradient(in oklab, blue, red)

/* Interpolation im polaren Farbraum */
linear-gradient(in hsl, blue, red)

/* Interpolation im polaren Farbraum
   mit längerer Farbinterpolationsmethode */
linear-gradient(in hsl longer hue, blue, red)

/* Farbstop: Ein Verlauf von unten nach oben,
   beginnend mit Blau, wechselnd zu Grün bei 40% seiner Länge,
   und endend mit Rot */
linear-gradient(0deg, blue, green 40%, red)

/* Farbhint: Ein Verlauf von links nach rechts,
   beginnend mit Rot, Erreichen der Zwischenfarbe
   bei 10% der Strecke des Verlaufes,
   der restliche 90% der Länge ändert sich zu Blau */
linear-gradient(.25turn, red, 10%, blue)

/* Mehrfachpositions-Farbstop: Ein Verlauf im Winkel von 45 Grad,
   mit einer roten unteren linken Hälfte und einer blauen oberen rechten Hälfte,
   mit einer harten Linie, wo der Verlauf von Rot zu Blau wechselt */
linear-gradient(45deg, red 0 50%, blue 50% 100%)
```

### Werte

- `<side-or-corner>`

  - : Die Position des Startpunkts der Verlaufsachse. Wenn angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines für die horizontale Seite (`left` oder `right`) und eines für die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Seiten-Schlüsselwörter ist egal. Wenn nicht angegeben, ist die Standardeinstellung `to bottom`.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg`. Die anderen Werte werden in einen Winkel umgerechnet.

- {{CSSxRef("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufsrichtung. Ein Wert `0deg` entspricht `to top`; steigende Werte rotieren im Uhrzeigersinn von dort aus.
- `<linear-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (jede entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Verlaufsachse).
- `<color-hint>`
  - : Ein {{glossary("interpolation")}}-Hinweis, der festlegt, wie der Verlauf zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Zwischenfarbe des Verlaufs erreicht wird. Wenn weggelassen, ist die Mitte des Farbverlaufs die Mitte zwischen den beiden Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Verläufen](#zusammensetzung_eines_linearen_verlaufs) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird die des Elements entsprechen, auf das er angewendet wird.

Um einen linearen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo [`<image>`](/de/docs/Web/CSS/image)s eingesetzt werden können. Aus diesem Grund funktioniert `linear-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines linearen Verlaufs

Ein linearer Verlauf wird durch eine Achse definiert – die _Verlaufsachse_ – und zwei oder mehr _Farbstopp-Punkte_. Jeder Punkt auf der Achse ist eine eigene Farbe; um einen sanften Verlauf zu erstellen, zeichnet die Funktion `linear-gradient()` eine Serie von farbigen Linien, die senkrecht zur Verlaufsachse stehen, wobei jede die Farbe des Punktes hat, an dem sie die Verlaufsachse schneidet.

![linear-gradient.png](linear-gradient.png)

Die Verlaufsachse wird durch das Zentrum der das Verlaufsbild enthaltenden Box und einen Winkel definiert. Die Farben des Verlaufs werden durch zwei oder mehr Punkte bestimmt: den Startpunkt, den Endpunkt, und dazwischen optionale Farbstopp-Punkte.

Der _Startpunkt_ ist die Position auf der Verlaufsachse, an der die erste Farbe beginnt. Der _Endpunkt_ ist der Punkt, an dem die letzte Farbe endet. Jeder dieser beiden Punkte wird durch den Schnittpunkt der Verlaufsachse mit einer senkrechten Linie bestimmt, die durch die Ecke der Box verläuft, welche sich im gleichen Quadranten befindet. Der Endpunkt kann als symmetrischer Punkt des Startpunktes verstanden werden. Diese etwas komplexen Definitionen führen zu einem interessanten Effekt, der manchmal als _magische Ecken_ bezeichnet wird: Die Ecken, die dem Start- und Endpunkt am nächsten sind, haben dieselbe Farbe wie ihre jeweiligen Start- oder Endpunkte.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer Farbstopp-Punkte auf der Verlaufsachse können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Eine Farbstopp-Position kann explizit durch Verwendung einer {{CSSxRef("&lt;length&gt;")}} oder eines {{CSSxRef("&lt;percentage&gt;")}} festgelegt werden. Wenn Sie den Standort einer Farbe nicht angeben, wird sie zur Hälfte zwischen der vorhergehenden und der folgenden platziert. Die folgenden zwei Verläufe sind gleichwertig.

```css
linear-gradient(red, orange, yellow, green, blue);
linear-gradient(red 0%, orange 25%, yellow 50%, green 75%, blue 100%);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbstopp zur Farbe am nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben der Hälfte zwischen dem Farbwechsel entspricht. Sie können diesen Mittelpunkt an jede Position zwischen zwei Farbstopps verschieben, indem Sie einen unbeschrifteten %-Farbhinweis zwischen den beiden Farben hinzufügen, um anzugeben, wo die Mitte des Farbwechsels sein soll. Das folgende Beispiel ist von Anfang bis zur 10% Marke solid rot und von 90% bis zum Ende solid blau. Zwischen 10% und 90% wechselt die Farbe von rot zu blau, jedoch ist die Mitte des Übergangs bei der 30% Marke anstatt 50%, was ohne den 30% Farbhinweis der Fall gewesen wäre.

```css
linear-gradient(red 10%, 30%, blue 90%);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein.

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit niedrigeren Werten überschreiben den Wert des vorherigen Farbstopps, wodurch ein harter Übergang entsteht. Das folgende Beispiel ändert sich von rot zu gelb bei der 40% Marke und wechselt dann von gelb zu blau über 25% des Verlaufs:

```css
linear-gradient(red 40%, yellow 30%, blue 65%);
```

Mehrfachpositions-Farbstopps sind erlaubt. Eine Farbe kann als zwei aufeinanderfolgende Farbstopps erklärt werden, indem beide Positionen in der CSS-Deklaration angegeben werden. Die folgenden drei Verläufe sind gleichwertig:

```css
linear-gradient(red 0%, orange 10%, orange 30%, yellow 50%, yellow 70%, green 90%, green 100%);
linear-gradient(red, orange 10% 30%, yellow 50% 70%, green 90%);
linear-gradient(red 0%, orange 10% 30%, yellow 50% 70%, green 90% 100%);
```

Standardmäßig wird, wenn keine Farbe mit einem `0%`-Stopp vorhanden ist, die erste deklarierte Farbe an diesem Punkt sein. Ebenso wird die letzte Farbe bis zur `100%`-Marke fortgesetzt oder an der `100%`-Marke sein, wenn an diesem letzten Stopp keine Länge deklariert wurde.

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

In diesem Beispiel wird zur Interpolation das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und die [Farbe](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background: linear-gradient(90deg in hsl shorter hue, red, blue);
}

.longer {
  background: linear-gradient(90deg in hsl longer hue, red, blue);
}
```

Die Box oben verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot nach blau über den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) wechselt. Die Box unten verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot nach blau über den längeren Bogen wechselt und durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating_with_hue", 120, 120)}}

### Verlauf mit Mehrfachpositions-Farbstopps

Dieses Beispiel verwendet Mehrfachpositions-Farbstopps, wobei benachbarte Farben denselben Farbstopp-Wert haben und dadurch ein Streifenmuster erzeugen.

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

### Weitere Beispiele für lineare Verläufe

Bitte sehen Sie sich [die Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

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
- [CSS-Bilder-Modul](/de/docs/Web/CSS/CSS_images)
