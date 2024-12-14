---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus wiederholten Gradienten besteht, die von einem Ursprung ausstrahlen. Sie ist ähnlich wie {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container zu bedecken, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Dimensionen des grundlegenden radialen Gradienten (die Entfernung zwischen dem letzten Farbstopp und dem ersten) verschoben. Dadurch fällt die Position jedes endenden Farbstopps mit einem startenden Farbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der gemildert werden kann, indem die erste Farbe als letzte wiederholt wird.

Wie jeder Gradient hat auch ein wiederholter radialer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d. h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht bei {{cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green,
   with the colors repeating every 30px */
repeating-radial-gradient(circle at center, red 0, blue, green 30px)

/* An elliptical gradient near the top left of its container,
   starting red, changing to green and back again,
   repeating five times between the center and the bottom right corner,
   and only once between the center and the top left corner */
repeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%)
```

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Gradienten, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Gradienten. Der Wert kann `circle` (was bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallel ausgerichtete Ellipse ist) sein. Wenn nicht angegeben, lautet der Standardwert `ellipse`.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                                             |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Gradienten erreicht die Seite der Box, die am nächsten zu ihrem Zentrum liegt (für Kreise) oder erreicht sowohl die vertikalen als auch die horizontalen Seiten, die am nächsten zum Zentrum liegen (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Gradienten wird so dimensioniert, dass sie genau die am nächsten gelegene Ecke der Box von ihrem Zentrum aus erreicht.                                                                                              |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so dimensioniert ist, dass sie die Seite der Box erreicht, die am weitesten von ihrem Zentrum entfernt ist (oder vertikale und horizontale Seiten).                              |
    | `farthest-corner` | Die endende Form des Gradienten wird so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus erreicht.                                                                                            |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardwerte `farthest-corner` und `closest-side`. Verwenden Sie nur die Standard-Schlüsselwörter, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Gradientenachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Gradientenstrahl. Prozentuale Werte dazwischen sind linear auf dem virtuellen Gradientenstrahl positioniert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Schwarz-Weiß-Gradient

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    black,
    black 5px,
    white 5px,
    white 10px
  );
}
```

{{EmbedLiveSample('Black_and_white_gradient', 120, 120)}}

### Farthest-corner

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
.radial-gradient {
  width: 240px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red,
    black 5%,
    blue 5%,
    green 10%
  );
  background: repeating-radial-gradient(
    ellipse farthest-corner at 20% 20%,
    red 0 5%,
    green 5% 10%
  );
}
```

{{EmbedLiveSample('Farthest-corner', 120, 120)}}

Der elliptische Gradient wird zu 20% von oben links zentriert und wiederholt sich 10 Mal zwischen dem Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke). Browser, die Farbstopps mit mehreren Positionen unterstützen, zeigen eine rot und grün gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Gradient, der von rot zu schwarz und dann von blau zu grün wechselt.

### Interpolation mit Farbton

```html hidden
<div class="shorter"></div>
<div class="longer"></div>
```

```css hidden
div {
  display: inline-block;
  margin-top: 1rem;
  width: 45vw;
  height: 80vh;
}

.shorter::before {
  content: "shorter hue";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "longer hue";
  display: block;
  margin-top: -1rem;
}
```

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet, und der [hue](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: repeating-radial-gradient(
    circle at center in hsl shorter hue,
    red 30px,
    blue 60px
  );
}

.longer {
  background-image: repeating-radial-gradient(
    circle at center in hsl longer hue,
    red 30px,
    blue 60px
  );
}
```

Die Box links verwendet die [kurze Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von rot zu blau über den kürzeren Bogen am {{Glossary("Color_wheel", "Farbkreis")}} geht. Die Box rechts verwendet die [lange Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen geht, durch Grün, Gelb und Orange.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte schauen Sie sich [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradient-Funktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
