---
title: repeating-radial-gradient()
slug: Web/CSS/gradient/repeating-radial-gradient
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`repeating-radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus sich wiederholenden Verläufen besteht, die von einem Ursprung aus strahlen. Sie ist ähnlich der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} und nimmt dieselben Argumente an, wiederholt jedoch die Farbstopps unendlich in alle Richtungen, um den gesamten Container abzudecken, ähnlich der {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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

Bei jeder Wiederholung werden die Positionen der Farbstopps um ein Vielfaches der Abmessungen des grundlegenden radialen Verlaufs verschoben (den Abstand zwischen dem letzten und dem ersten Farbstopp). Somit fällt die Position jedes endenden Farbstopps mit einem startenden Farbstopp zusammen; wenn die Farbwerte unterschiedlich sind, führt dies zu einem scharfen visuellen Übergang, der gemildert werden kann, indem die erste Farbe als letzte Farbe wiederholt wird.

Wie jeder Verlauf hat ein wiederholter radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description), d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-radial-gradient()` nicht bei {{cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

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
  - : Die Position des Verlaufs, interpretiert in derselben Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<shape>`
  - : Die Form des Verlaufs. Der Wert kann `circle` sein (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsengerechte Ellipse ist). Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<extent-keyword>`
  - : Ein Schlüsselwort, das beschreibt, wie groß die endende Form sein muss. Die möglichen Werte sind:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                      |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Verlaufs trifft auf die Boxseite, die dem Zentrum am nächsten liegt (bei Kreisen) oder trifft auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten liegen (bei Ellipsen). |
    | `closest-corner`  | Die endende Form des Verlaufs ist so bemessen, dass sie genau die Ecke der Box trifft, die am nächsten zum Zentrum liegt.                                                                                         |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so bemessen ist, dass sie die Seite der Box trifft, die am weitesten vom Zentrum entfernt ist (oder die vertikalen und horizontalen Seiten).              |
    | `farthest-corner` | Die endende Form des Verlaufs ist so bemessen, dass sie genau die Ecke der Box trifft, die am weitesten vom Zentrum entfernt ist.                                                                                 |

    > [!NOTE]
    > Frühe Implementierungen dieser Funktion enthielten andere Schlüsselwörter (`cover` und `contain`) als Synonyme für die standardmäßigen `farthest-corner` und `closest-side`. Verwenden Sie nur die Standard-Schlüsselwörter, da einige Implementierungen diese älteren Varianten bereits nicht mehr unterstützen.

- `<color-stop>`
  - : Ein `color-stop` {{cssxref("&lt;color&gt;")}} Wert, gefolgt von einer optionalen Stopp-Position (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Verlaufsstrahl. Zwischenliegende Prozentwerte werden linear auf dem virtuellen Verlaufsstrahl positioniert.

## Formale Syntax

{{CSSSyntax}}

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

Der elliptische Verlauf wird 20% vom oberen linken Rand zentriert sein und wird sich 10-mal zwischen dem Zentrum und der am weitesten entfernten Ecke (der unteren rechten Ecke) wiederholen. Browser, die die Mehrfachpositionsfarbe stehen unterstützen, werden eine rot-grün gestreifte Ellipse anzeigen. Browser, die die Syntax noch nicht unterstützen, sehen einen Verlauf, der von Rot zu Schwarz und dann von Blau zu Grün geht.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot zu Blau entlang des kürzeren Bogens auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau entlang des längeren Bogens geht und dabei Grün, Gelb und Orange durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

> [!NOTE]
> Weitere Beispiele finden Sie unter [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients).

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
