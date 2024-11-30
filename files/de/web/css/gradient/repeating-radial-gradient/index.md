---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 36197e9ff8f503d40729889367fe1ad76d2f3640
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus sich wiederholenden Verläufen besteht, die von einem Ursprung ausstrahlen. Sie ist ähnlich wie {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um den gesamten Container zu füllen, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, einer speziellen Art von {{cssxref("&lt;image&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Abmessungen des grundlegenden radialen Gradienten verschoben (der Abstand zwischen dem letzten Farbpunkt und dem ersten). Somit fällt die Position jedes Endfarbstopps mit einem Startfarbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der durch Wiederholung der ersten Farbe als letzte Farbe gemildert werden kann.

Wie bei jedem Verlauf hat ein sich wiederholender radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d. h. er hat weder eine natürliche noch eine bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Da `<gradient>`s dem `<image>` Datentyp angehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht mit {{cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

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
  - : Die Position des Gradienten, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standard `center`.
- `<shape>`
  - : Die Form des Gradienten. Der Wert kann `circle` (bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenausgerichtete Ellipse ist) sein. Wenn nicht angegeben, ist der Standard `ellipse`.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die Endform sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                          |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Gradienten trifft auf die Seite des Kastens, die dem Zentrum am nächsten ist (bei Kreisen) oder trifft auf beide vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (bei Ellipsen). |
    | `closest-corner`  | Die Endform des Gradienten ist so dimensioniert, dass sie genau die nächste Ecke des Kastens vom Zentrum aus erreicht.                                                                                                |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die Seite des Kastens trifft, die am weitesten vom Zentrum entfernt ist (oder vertikale und horizontale Seiten).                    |
    | `farthest-corner` | Die Endform des Gradienten ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke des Kastens vom Zentrum aus erreicht.                                                                                 |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardwerte `farthest-corner` und `closest-side`. Verwenden Sie ausschließlich die Standard-Schlüsselwörter, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}} Wert des Farbstopps, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Achse des Gradienten). Ein Prozentsatz von `0%` oder eine Länge von `0` steht für das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Gradientenstrahl. Prozentwerte dazwischen sind linear auf dem virtuellen Gradientenstrahl positioniert.

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

Der elliptische Verlauf wird 20% vom oberen linken Rand zentriert und wiederholt sich 10-mal zwischen dem Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke). Browser, die mehrfache Positionsfarbstopps unterstützen, zeigen eine rot-grün gestreifte Ellipse. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von Rot nach Schwarz und dann von Blau nach Grün geht.

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

Das linke Kästchen verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe vom Rot zum Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verläuft. Das rechte Kästchen verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe vom Rot zum Blau über den längeren Bogen verläuft, durch Grüntöne, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte lesen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

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
