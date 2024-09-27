---
title: repeating-linear-gradient()
slug: Web/CSS/gradient/repeating-linear-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-linear-gradient()`**- [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus sich wiederholenden linearen Verläufen besteht. Sie ist ähnlich wie {{cssxref("gradient/linear-gradient", "linear-gradient()")}} und nimmt die gleichen Argumente an, aber sie wiederholt die Farbverläufe unendlich in alle Richtungen, um ihren gesamten Behälter abzudecken. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}}-Datentyps, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-repeating-linear-gradient.html")}}

Die Länge des sich wiederholenden Verlaufs ist der Abstand zwischen dem ersten und letzten Farbverlauf. Wenn die erste Farbe keine Farbverlaufslänge hat, beträgt die standardmäßige Farbverlaufslänge 0. Mit jeder Wiederholung werden die Positionen der Farbverläufe um ein Vielfaches der Länge des Basis-Linearen-Verlaufs verschoben. Folglich fällt die Position jeder endenden Farbverlauf mit einem beginnenden Farbverlauf zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang. Dies kann geändert werden, indem die erste Farbe erneut als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender linearer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description), d. h. er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-linear-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}}-Datentyp verwenden.

## Syntax

```css
/* A repeating gradient tilted 45 degrees,
   starting blue and finishing red, repeating 3 times */
repeating-linear-gradient(45deg, blue, red 33.3%)

/* A repeating gradient going from the bottom right to the top left,
   starting blue and finishing red, repeating every 20px */
repeating-linear-gradient(to left top, blue, red 20px)

/* A gradient going from the bottom to top,
   starting blue, turning green after 40%,
   and finishing red. This gradient doesn't repeat because
   the last color stop defaults to 100% */
repeating-linear-gradient(0deg, blue, green 40%, red)

/* A gradient repeating five times, going from the left to right,
   starting red, turning green, and back to red */
repeating-linear-gradient(to right, red 0%, green 10%, red 20%)

/* Interpolation in rectangular color space */
repeating-linear-gradient(in oklab, blue, red 50px)

/* Interpolation in polar color space */
repeating-linear-gradient(in hsl, blue, red 50px)

/* Interpolation in polar color space
  with longer hue interpolation method */
repeating-linear-gradient(in hsl longer hue, blue, red 50px)
```

### Werte

- `<side-or-corner>`

  - : Die Position des Startpunkts der Verlaufslinie. Falls angegeben, besteht sie aus dem Wort `to` und bis zu zwei Schlüsselwörtern: eines gibt die horizontale Seite an (`left` oder `right`), und das andere die vertikale Seite (`top` oder `bottom`). Die Reihenfolge der Schlüsselwörter spielt keine Rolle. Falls nicht angegeben, wird `to bottom` als Standardwert verwendet.

    Die Werte `to top`, `to bottom`, `to left` und `to right` entsprechen den Winkeln `0deg`, `180deg`, `270deg` und `90deg` jeweils. Andere Werte werden in einen Winkel übersetzt.

- {{cssxref("&lt;angle&gt;")}}
  - : Der Winkel der Verlaufslinie. Ein Wert von `0deg` entspricht `to top`; zunehmende Werte drehen sich von dort aus im Uhrzeigersinn.
- `<linear-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbverlaufsstopp, gefolgt von ein oder zwei optionalen Stopp-Positionen, (jeweils entweder ein {{CSSxRef("&lt;percentage&gt;")}} oder ein {{CSSxRef("&lt;length&gt;")}} entlang der Verlaufslinie). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert den Beginn des Verlaufs; der Wert `100%` entspricht 100% der Bildgröße, was bedeutet, dass sich der Verlauf nicht wiederholt.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbverläufen verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbverläufen der Verlauf die Mitte des Farbübergangs erreichen sollte. Wird er weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbverläufen.

> [!NOTE]
> Die Darstellung von [Farbverläufen in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt den gleichen Regeln wie Farbverläufe in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

### Formale Syntax

{{csssyntax}}

## Beispiele

### Zebra-Streifen

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 20px,
    black 20px,
    black 40px
  );
  /* with multiple color stop lengths */
  background-image: repeating-linear-gradient(
    -45deg,
    transparent 0 20px,
    black 20px 40px
  );
}
```

{{EmbedLiveSample('Zebra_stripes', 120, 120)}}

### Zehn sich wiederholende horizontale Balken

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(26 198 204),
    rgb(26 198 204) 7%,
    rgb(100 100 100) 10%
  );
}
```

{{EmbedLiveSample('Ten_repeating_horizontal_bars', 120, 120)}}

Da der letzte Farbverlauf 10% beträgt und der Verlauf vertikal ist, ist jeder Verlauf im wiederholten Verlauf 10% der Höhe, und es passen 10 horizontale Balken hinein.

### Interpolation im rechteckigen Farbraum

```css hidden
body {
  width: 100vw;
  height: 100vh;
}
```

```css
body {
  background: repeating-linear-gradient(90deg in oklab, blue, red 100px);
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
  color: #330;
  font-weight: bolder;
  padding-left: 1.5rem;
}
```

In diesem Beispiel für die Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet, und es wird der [Farbton](/de/docs/Web/CSS/hue) interpoliert.

```css
.shorter {
  background: repeating-linear-gradient(
    90deg in hsl shorter hue,
    red,
    blue 300px
  );
}

.longer {
  background: repeating-linear-gradient(
    90deg in hsl longer hue,
    red,
    blue 300px
  );
}
```

Der obere Rahmen verwendet eine [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), bedeutet, die Farbe wechselt von rot zu blau unter Verwendung des kürzeren Bogens auf dem [Farbkreis](/de/docs/Glossary/Color_wheel). Der untere Rahmen nutzt eine [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau wechselt unter Verwendung des längeren Bogens, der durch Grüntöne, Gelbtöne und Orangetöne verläuft.

{{EmbedLiveSample("Interpolating with hue", 120, 120)}}

> [!NOTE]
> Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
