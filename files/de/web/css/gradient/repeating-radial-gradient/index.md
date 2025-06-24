---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus wiederholten Verläufen besteht, die von einem Ursprung ausstrahlen. Sie ähnelt der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente an, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um den gesamten Container abzudecken, ähnlich wie bei {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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

Mit jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Dimensionen des grundlegenden radialen Verlaufs verschoben (der Abstand zwischen dem letzten und dem ersten Farbstopp). Somit fällt die Position jedes endenden Farbstopps mit einem startenden Farbstopp zusammen; wenn sich die Farbwerte unterscheiden, führt dies zu einem scharfen visuellen Übergang, der gemildert werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

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
  - : Die Position des Verlaufs, interpretiert wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nichts angegeben ist, wird `center` als Standardwert verwendet.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Verlaufsform ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nichts angegeben ist, wird `ellipse` als Standardwert verwendet.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                              |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft die Seite der Box, die ihrem Zentrum am nächsten liegt (für Kreise) oder trifft sowohl die vertikalen als auch horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs ist so dimensioniert, dass sie genau die nächstgelegene Ecke der Box von ihrem Zentrum aus trifft.                                                                                          |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so dimensioniert ist, dass sie die Seite der Box trifft, die ihrem Zentrum am weitesten entfernt ist (oder vertikal und horizontal Seiten).                       |
    | `farthest-corner` | Die endende Form des Verlaufs ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus trifft.                                                                                  |

    > [!NOTE]
    > Frühere Implementierungen dieser Funktion umfassten andere Schlüsselwörter (`cover` und `contain`) als Synonyme des Standards `farthest-corner` und `closest-side`. Verwenden Sie nur die Standard-Schlüsselwörter, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer optionalen Stoppposition (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%`, oder eine Länge von `0`, repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Verlaufsstrahl. Prozentwerte dazwischen werden linear auf dem virtuellen Verlaufsstrahl positioniert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Schwarz-weiß-Verlauf

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

Der elliptische Verlauf wird 20% vom oberen linken Rand zentriert sein und wird sich 10 Mal zwischen dem Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke) wiederholen. Browser, die mehrere Positionen für Farbstopps unterstützen, zeigen eine rot-grün gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von Rot zu Schwarz und dann von Blau zu Grün geht.

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verläuft. Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und durch Grün-, Gelb- und Orangetöne geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
