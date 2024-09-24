---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus sich wiederholenden Verläufen besteht, die von einem Ursprung ausstrahlen. Sie ist ähnlich der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente an, unterscheidet sich jedoch dadurch, dass die Farbstopps in alle Richtungen unendlich wiederholt werden, um ihren gesamten Container abzudecken, ähnlich der Funktion {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, einer speziellen Art von {{cssxref("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Dimensionen des grundlegenden radialen Verlaufs verschoben (dem Abstand zwischen dem letzten und dem ersten Farbstopp). So fällt die Position jedes endenden Farbstopps mit einem startenden Farbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der abgeschwächt werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe passt sich an die Größe des Elements an, auf das er angewendet wird.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht bei {{cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

## Syntax

```css
/* Ein Verlauf in der Mitte seines Containers,
   beginnt rot, wechselt zu blau und endet grün,
   wobei sich die Farben alle 30px wiederholen */
repeating-radial-gradient(circle at center, red 0, blue, green 30px)

/* Ein elliptischer Verlauf in der Nähe der oberen linken Ecke seines Containers,
   beginnt rot, wechselt zu grün und zurück,
   wiederholt sich fünfmal zwischen der Mitte und der unteren rechten Ecke,
   und nur einmal zwischen der Mitte und der oberen linken Ecke */
repeating-radial-gradient(farthest-corner at 20% 20%, red 0, green, red 20%)
```

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht spezifiziert, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` sein (was bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenausgerichtete Ellipse ist). Wenn nicht spezifiziert, ist der Standardwert `ellipse`.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                     |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft auf die Seite der Box, die ihrem Zentrum am nächsten ist (für Kreise), oder auf die vertikale und horizontale Seite, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs ist so bemessen, dass sie genau die nächstgelegene Ecke der Box von ihrem Zentrum aus erreicht.                                                        |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so bemessen ist, dass sie die Seite der Box erreicht, die am weitesten von ihrem Zentrum entfernt ist (oder die vertikalen und horizontalen Seiten).         |
    | `farthest-corner` | Die endende Form des Verlaufs ist so bemessen, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus erreicht.                                                 |

    > [!NOTE]
    > Frühere Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardschlüsselwörter `farthest-corner` und `closest-side`. Verwenden Sie nur die Standardschlüsselwörter, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}} Wert des Farbstopps, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%`, oder eine Länge von `0`, repräsentiert die Mitte des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Verlaufsstrahl. Prozentsätze dazwischen sind linear auf dem virtuellen Verlaufsstrahl positioniert.

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

### Am weitesten entfernte Ecke

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

Der elliptische Verlauf wird 20% von oben links zentriert und wiederholt sich 10 Mal zwischen der Mitte und der am weitesten entfernten Ecke (der unteren rechten Ecke). Browser, die Mehrfachpositions-Farbstopps unterstützen, zeigen eine rote und grüne gestreifte Ellipse. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf von rot zu schwarz und dann von blau zu grün.

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
  content: "kürzerer Farbton";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "längerer Farbton";
  display: block;
  margin-top: -1rem;
}
```

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von rot zu blau übergeht, indem der kürzere Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) verwendet wird. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau übergeht und den längeren Bogen durchläuft, einschließlich grün, gelb und orange.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauffunktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
