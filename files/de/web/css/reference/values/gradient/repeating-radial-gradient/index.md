---
title: "`repeating-radial-gradient()` CSS-Funktion"
short-title: repeating-radial-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-radial-gradient
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus sich wiederholenden Verläufen besteht, die von einem Ursprung aus radial verlaufen. Sie ähnelt der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt dieselben Argumente an, jedoch werden die Farbstopps unendlich in alle Richtungen wiederholt, um den gesamten Container abzudecken, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("gradient")}} Dateityps, der eine spezielle Art von {{cssxref("image")}} ist.

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

Mit jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Abmessungen des grundlegenden radialen Verlaufs (der Abstand zwischen dem letzten und dem ersten Farbstopp) verschoben. So fällt die Position jedes Endfarbstopps mit einem Anfangsfarbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der gemildert werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie jeder Verlauf hat auch ein wiederholender radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht bei {{cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

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
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<extent-keyword>`
  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                            |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft auf die nächstgelegene Seite der Box von seinem Zentrum aus (bei Kreisen) oder trifft auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (bei Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs wird so dimensioniert, dass sie genau die nächstgelegene Ecke der Box von ihrem Zentrum aus trifft.                                                                                       |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so dimensioniert ist, dass sie die am weitesten vom Zentrum entfernte Seite der Box trifft (oder vertikal und horizontal am weitesten entfernte Seiten).        |
    | `farthest-corner` | Die endende Form des Verlaufs wird so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus trifft.                                                                               |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardbegriffe `farthest-corner` und `closest-side`. Verwenden Sie nur die Standard-Schlüsselwörter, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%`, oder eine Länge von `0`, steht für das Zentrum des Verlaufs; der Wert `100%` repräsentiert die Schnittstelle der endenden Form mit dem virtuellen Verlaufsstrahl. Zwischenwerte in Prozent werden linear auf dem virtuellen Verlaufsstrahl positioniert.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Schwarz-weißer Verlauf

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

Der elliptische Verlauf wird 20% vom oberen linken Rand zentriert und wiederholt sich 10-mal zwischen dem Zentrum und der am weitesten entfernten Ecke (unten rechts). Browser, die mehrfache Positions-Farbstopps unterstützen, werden eine rot-grün gestreifte Ellipse anzeigen. Browser, die die Syntax noch nicht unterstützen, zeigen einen Verlauf von Rot zu Schwarz und dann von Blau zu Grün.

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbmodell verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

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

Der Kasten links verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot zu Blau über den kürzeren Bogen am {{Glossary("Color_wheel", "Farbkreis")}} geht. Der Kasten rechts verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und durch Grün, Gelb und Orange läuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Weitere Beispiele finden Sie unter [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
