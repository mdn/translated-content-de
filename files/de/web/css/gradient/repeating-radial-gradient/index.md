---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus sich wiederholenden Gradienten besteht, die von einem Ursprung aus strahlen. Sie ist ähnlich der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente an, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um den gesamten Container abzudecken, ähnlich der {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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
  #333,
  #333 10px,
  #eee 10px,
  #eee 20px
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

Mit jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Dimensionen des grundlegenden radialen Gradienten verschoben (der Abstand zwischen dem letzten und dem ersten Farb-Stopp). Somit fällt die Position jedes endenden Farb-Stopp mit einem startenden Farb-Stopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der durch Wiederholung der ersten Farbe als letzte Farbe gemildert werden kann.

Wie bei jedem Gradienten hat ein sich wiederholender radialer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe passt sich der Größe des Elements an, auf das es angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht mit {{cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

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
  - : Die Position des Gradienten, interpretiert genauso wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Gradienten. Der Wert kann `circle` (was bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<extent-keyword>`
  - : Ein Stichwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Stichwort         | Beschreibung                                                                                                                                                                                             |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Gradienten trifft auf die Seite des Kastens, die dem Zentrum am nächsten ist (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten nächst dem Zentrum (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Gradienten ist so bemessen, dass sie genau die nächstgelegene Ecke des Kastens vom Zentrum aus erreicht.                                                                            |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so bemessen ist, dass sie die vom Zentrum am weitesten entfernte Seite des Kastens erreicht (oder vertikale und horizontale Seiten).             |
    | `farthest-corner` | Die endende Form des Gradienten ist so bemessen, dass sie genau die am weitesten entfernte Ecke des Kastens vom Zentrum aus erreicht.                                                                    |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardbegriffe `farthest-corner` und `closest-side`. Verwenden Sie nur die Standardbegriffe, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein `color-stop`s {{cssxref("&lt;color&gt;")}} Wert, gefolgt von einer optionalen Stopp-Position (entweder einem {{cssxref("&lt;percentage&gt;")}} oder einer {{cssxref("&lt;length&gt;")}} entlang der Gradientenachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Gradientenstrahl. Dazwischen liegende Prozentwerte werden linear auf dem virtuellen Gradientenstrahl positioniert.

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

Der elliptische Gradient wird 20 % von oben links zentriert und wird 10 Mal zwischen dem Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke) wiederholt. Browser, die Mehrfachpositionen für Farbstopps unterstützen, zeigen eine rot-grün gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Gradienten, der von rot zu schwarz und dann von blau zu grün übergeht.

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von rot zu blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen verläuft und durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie sich [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientfunktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
