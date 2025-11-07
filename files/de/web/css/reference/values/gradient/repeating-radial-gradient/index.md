---
title: repeating-radial-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-radial-gradient
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus sich wiederholenden Gradienten besteht, die von einem Ursprung aus strahlen. Sie ähnelt der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente, wiederholt jedoch die Farb-Stopps in alle Richtungen unendlich, um ihren gesamten Container zu bedecken, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine besondere Art von {{cssxref("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: repeating-radial-gradient()")}}

```css interactive-example-choice
background: repeating-radial-gradient(#e66465, #9198e5 20%);
```

```css interactive-example-choice
background: repeating-radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: repeating-radial-gradient(
  circle at 100%,
  #333333,
  #333333 10px,
  #eeeeee 10px,
  #eeeeee 20px
);
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

Bei jeder Wiederholung werden die Positionen der Farb-Stopps um ein Vielfaches der Grunddimensionen des radialen Gradienten verschoben (der Abstand zwischen dem letzten Farb-Stopp und dem ersten). Daher fällt die Position jedes endenden Farb-Stopps mit einem startenden Farb-Stopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem deutlichen visuellen Übergang, der abgemildert werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie bei jedem Gradienten hat ein sich wiederholender radialer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht bei {{cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

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
  - : Die Position des Gradienten, interpretiert wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Gradienten. Der Wert kann `circle` (bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<extent-keyword>`
  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                     |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Gradienten trifft die Seite der Box, die dem Zentrum am nächsten ist (bei Kreisen) oder trifft sowohl die vertikalen als auch die horizontalen Seiten, die dem Zentrum am nächsten sind (bei Ellipsen). |
    | `closest-corner`  | Die endende Form des Gradienten ist so dimensioniert, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus erreicht.                                                                    |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form dimensioniert ist, um die dem Zentrum am weitesten entfernte Seite der Box (oder vertikale und horizontale Seiten) zu erreichen.                            |
    | `farthest-corner` | Die endende Form des Gradienten ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus erreicht.                                                                   |

    > [!NOTE]
    > Frühere Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme der Standardbegriffe `farthest-corner` und `closest-side`. Verwenden Sie nur die Standardbegriffe, da einige Implementierungen diese älteren Varianten bereits abgeschafft haben.

- `<color-stop>`
  - : Ein Farb-Stopp mit einem {{cssxref("&lt;color&gt;")}}-Wert, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Gradienten). Ein Prozentsatz von `0%` oder eine Länge von `0` stellt das Zentrum des Gradienten dar; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Gradientenstrahl. Prozentwerte dazwischen sind linear auf dem virtuellen Gradientenstrahl positioniert.

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

Der elliptische Gradient wird 20% vom oberen linken Bereich zentriert und wird 10 Mal zwischen der Mitte und der am weitesten entfernten Ecke (der unteren rechten Ecke) wiederholt. Browser, die mehrfache Positionsfarbstopps unterstützen, zeigen eine Rot-Grün gestreifte Ellipse. Browser, die die Syntax noch nicht unterstützen, sehen einen Gradient, der von Rot nach Schwarz und dann von Blau nach Grün übergeht.

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem genutzt und [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das Kästchen links verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), das bedeutet, die Farbe geht von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}}. Das Kästchen rechts verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), das bedeutet, die Farbe geht von Rot zu Blau über den längeren Bogen und durchläuft dabei Grüntöne, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie [CSS-Gradienten verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Gradienten verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
