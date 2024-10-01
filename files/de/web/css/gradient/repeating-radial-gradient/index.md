---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus sich wiederholenden Verläufen besteht, die von einem Ursprung ausstrahlen. Sie ist ähnlich wie {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt die gleichen Argumente an, wiederholt jedoch die Farbunterbrechungen unendlich in alle Richtungen, um ihren gesamten Container abzudecken, ähnlich wie {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-repeating-radial-gradient.html")}}

Mit jeder Wiederholung werden die Positionen der Farbunterbrechungen um ein Vielfaches der Maße des grundlegenden radialen Verlaufs verschoben (der Abstand zwischen der letzten und der ersten Farbunterbrechung). Somit fällt die Position jeder endenden Farbunterbrechung mit einer startenden Farbunterbrechung zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der abgeschwächt werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie bei jedem Verlauf hat ein sich wiederholender radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

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
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` (was bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenausgerichtete Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<extent-keyword>`

  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                          |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft auf die dem Zentrum am nächsten liegende Seite der Box (für Kreise) oder trifft auf beide vertikalen und horizontalen Seiten, die dem Zentrum am nächsten liegen (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs wird so bemessen, dass sie genau die dem Zentrum am nächsten liegende Ecke der Box trifft.                                                                                              |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so bemessen wird, dass sie die dem Zentrum am weitesten entfernte Seite der Box (oder vertikale und horizontale Seiten) trifft.                               |
    | `farthest-corner` | Die endende Form des Verlaufs wird so bemessen, dass sie genau die dem Zentrum am weitesten entfernte Ecke der Box trifft.                                                                                            |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion beinhalteten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die Standardwerte `farthest-corner` und `closest-side`. Verwenden Sie nur die Standard-Schlüsselwörter, da einige Implementierungen diese älteren Varianten bereits entfernt haben.

- `<color-stop>`
  - : Ein Farbunterbrechungswert des {{cssxref("&lt;color&gt;")}}, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Axis des Verlaufs). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Verlaufsstrahl. Prozentsätze dazwischen sind linear auf dem virtuellen Verlaufsstrahl positioniert.

### Formale Syntax

{{csssyntax}}

## Beispiele

### Schwarz-Weiß-Verlauf

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

Der elliptische Verlauf wird 20% von der oberen linken Ecke zentriert und wiederholt sich 10 Mal zwischen dem Zentrum und der entferntesten Ecke (der unteren rechten Ecke). Browser, die mehrfache Positionen für Farbunterbrechungen unterstützen, zeigen eine rot und grün gestreifte Ellipse an. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von rot zu schwarz und dann von blau zu grün übergeht.

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

In diesem Beispiel für Interpolation wird das [HSL Farbsystem](/de/docs/Web/CSS/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das linke Feld verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von rot nach blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das rechte Feld verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot nach blau über den längeren Bogen geht und dabei durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

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
