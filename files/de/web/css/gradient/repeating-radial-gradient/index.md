---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus sich wiederholenden Gradienten besteht, die von einem Ursprung ausstrahlen. Sie ist ähnlich wie {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente, jedoch wiederholt sie die Farbstopps unendlich in alle Richtungen, um ihren gesamten Container abzudecken, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, einer speziellen Art von {{cssxref("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Dimensionen des grundlegenden radialen Gradienten (die Entfernung zwischen dem letzten und dem ersten Farbstopp) verschoben. Dadurch fällt die Position jedes endenden Farbstopps mit einem startenden Farbstopp zusammen; wenn die Farbwerte unterschiedlich sind, resultiert dies in einem scharfen visuellen Übergang, der gemildert werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie bei jedem Gradienten hat ein sich wiederholender radialer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s eingesetzt werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht mit {{cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

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
  - : Die Position des Gradienten, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nichts angegeben ist, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Gradienten. Der Wert kann `circle` sein (was bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallele Ellipse ist). Wenn nichts angegeben ist, ist der Standardwert `ellipse`.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                              |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Gradienten trifft auf die Seite des Kastens, die dem Zentrum am nächsten ist (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten (für Ellipsen).     |
    | `closest-corner`  | Die endende Form des Gradienten wird so dimensioniert, dass sie genau auf die dem Zentrum nächstgelegene Ecke des Kastens trifft.                                                         |
    | `farthest-side`   | Ähnlich wie `closest-side`, nur dass die endende Form so dimensioniert ist, dass sie die weiteste Seite des Kastens vom Zentrum aus trifft (oder die vertikalen und horizontalen Seiten). |
    | `farthest-corner` | Die endende Form des Gradienten wird so dimensioniert, dass sie genau auf die am weitesten entfernte Ecke des Kastens vom Zentrum trifft.                                                 |

    > [!NOTE]
    > Frühere Implementierungen dieser Funktion beinhalteten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardbegriffe `farthest-corner` und `closest-side`. Verwenden Sie nur die Standardbegriffe, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein Wert des {{cssxref("&lt;color&gt;")}} eines Farbstopps, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Gradienten). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert das Zusammentreffen der endenden Form mit dem virtuellen Gradientenstrahl. Prozentuale Werte dazwischen sind linear auf dem virtuellen Gradientenstrahl positioniert.

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

Der elliptische Gradient wird 20% von oben links zentriert und wiederholt sich 10 Mal zwischen Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke). Browser, die mehrere Positionen von Farbstopps unterstützen, zeigen eine rot-grüne gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von Rot zu Schwarz und dann von Blau zu Grün geht.

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbensystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das linke Kästchen verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot zu Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} geht. Das rechte Kästchen verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und Grün, Gelb und Orange durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie unter [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele nach.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
