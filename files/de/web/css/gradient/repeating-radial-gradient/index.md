---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt ein Bild, das aus sich wiederholenden Verläufen besteht, die von einem Ursprung ausgehen. Sie ist ähnlich wie {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container zu füllen, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt vom Datentyp {{cssxref("&lt;gradient&gt;")}}, das eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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

Mit jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Abmessungen des grundlegenden radialen Verlaufs verschoben (der Abstand zwischen dem letzten Farbstop und dem ersten). Somit fällt die Position jedes endenden Farbstopps mit einem startenden zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, was durch Wiederholung der ersten Farbe als letzte Farbe abgemildert werden kann.

Wie bei jedem Verlauf hat ein sich wiederholender radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird.

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

### Values

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in gleicher Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist `center` der Standardwert.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nicht angegeben, ist `ellipse` der Standardwert.
- `<extent-keyword>`
  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                      |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft auf die dem Zentrum nächstgelegene Seite des Kastens (für Kreise) oder trifft auf beide vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs ist so bemessen, dass sie genau die nächste Ecke des Kastens von seinem Zentrum aus erreicht.                                                                                       |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so bemessen ist, dass sie die dem Zentrum fernstliegende Seite des Kastens erreicht (oder vertikale und horizontale Seiten).                              |
    | `farthest-corner` | Die endende Form des Verlaufs ist so bemessen, dass sie genau die fernstliegende Ecke des Kastens von seinem Zentrum aus erreicht.                                                                                |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardbegriffe `farthest-corner` und `closest-side` bzw. Verwenden Sie nur die Standardbegriffe, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Der {{cssxref("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Verlaufslinie). Ein Prozentsatz von `0%` oder eine Länge von `0` stellt das Zentrum des Verlaufs dar; der Wert `100%` stellt die Schnittstelle der endenden Form mit dem virtuellen Verlaufstrahl dar. Prozentwerte dazwischen sind linear auf dem virtuellen Verlaufstrahl positioniert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Schwarz-Weiße Verlauf

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

Der elliptische Verlauf wird zu 20% vom oberen linken Punkt zentriert und wiederholt sich 10 Mal zwischen dem Zentrum und der fernstliegenden Ecke (der unteren rechten Ecke). Browser, die Mehrfachpositions-Farbstopps unterstützen, zeigen eine rot-grün gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von Rot zu Schwarz und dann von Blau zu Grün geht.

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet, und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das linke Kästchen verwendet [shorter interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} von Rot zu Blau wechselt. Das rechte Kästchen verwendet [longer interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe über den längeren Bogen von Rot zu Blau verläuft und dabei durch Grüntöne, Gelbtöne und Orangetöne geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
