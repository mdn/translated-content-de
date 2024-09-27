---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild bestehend aus sich wiederholenden Verläufen, die von einem Ursprung strahlen. Sie ist ähnlich wie {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente an. Jedoch wiederholt sie die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container zu bedecken, ähnlich wie bei {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

Mit jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Dimensionen des grundlegenden radialen Verlaufs verschoben (die Entfernung zwischen dem letzten und dem ersten Farbverlauf). So fällt die Position jedes endenden Farbstopps mit einem beginnenden Farbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der gemildert werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und auch kein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

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
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist die Standardeinstellung `center`.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenausgerichtete Ellipse ist) sein. Wenn nicht angegeben, ist die Standardeinstellung `ellipse`.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                       |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs erreicht die Seite der Box, die am nächsten zum Zentrum liegt (für Kreise) oder trifft beide, die vertikalen und horizontalen Seiten (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs wird so bemessen, dass sie genau die nächstgelegene Ecke der Box von ihrem Zentrum aus erreicht.                                                     |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so bemessen wird, dass sie die von ihrem Zentrum aus am weitesten entfernte Seite der Box erreicht.                        |
    | `farthest-corner` | Die endende Form des Verlaufs wird so bemessen, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus erreicht.                                             |

    > [!NOTE]
    > Frühere Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für das Standard `farthest-corner` und `closest-side`. Verwenden Sie nur die Standard-Schlüsselwörter, da einige Implementierungen bereits diese älteren Varianten gestrichen haben.

- `<color-stop>`
  - : Ein Farbpunkt mit einem {{cssxref("&lt;color&gt;")}} Wert, gefolgt von einer optionalen Stoppposition (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentwert von `0%`, oder eine Länge von `0`, repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert die Schnittstelle der endenden Form mit dem virtuellen Verlaufstrahl. Prozentwerte dazwischen sind linear auf dem virtuellen Verlaufstrahl positioniert.

### Formale Syntax

{{csssyntax}}

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

Der elliptische Verlauf wird 20% vom oberen linken Punkt zentriert und wird 10 Mal zwischen dem Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke) wiederholt. Browser, die mehrere Positionen für Farbstopps unterstützen, zeigen eine rot-grün gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von Rot zu Schwarz und dann von Blau zu Grün verläuft.

### Interpolieren mit Farbton

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

In diesem Beispiel für die Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das Kästchen links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot zu Blau über den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) wechselt. Das Kästchen rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, durch Grün, Gelb und Orange hindurch.

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
