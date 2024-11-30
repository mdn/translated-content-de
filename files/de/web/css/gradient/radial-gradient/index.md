---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 36197e9ff8f503d40729889367fe1ad76d2f3640
---

{{CSSRef}}

Die **`radial-gradient()`**- [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem schrittweisen Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Die Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Gradient wird angegeben, indem das Zentrum des Gradienten (wo die 0%-Ellipse sein wird) sowie die Größe und Form der _endenden Form_ (die 100%-Ellipse) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Gradienten wird genauso interpretiert wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die endende Form des Gradienten. Der Wert kann `circle` (bedeutet, die Form des Gradienten ist ein Kreis mit konstantem Radius) oder `ellipse` (bedeutet, die Form ist eine achsengerecht ausgerichtete Ellipse) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der endenden Form des Gradienten. Wenn weggelassen, ist der Standardwert farthest-corner. Dies kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter werden die Kanten des Gradientenbox als unendlich in beide Richtungen verlaufend anstatt als endliche Liniensegmente betrachtet.

    Sowohl Kreis- als auch Ellipsen-Gradienten akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                        |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die endende Form des Gradienten trifft auf die Seite der Box, die dem Zentrum am nächsten ist (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die endende Form des Gradienten ist so dimensioniert, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus trifft.                                                                                         |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die endende Form so dimensioniert ist, dass sie die Seite der Box am weitesten von ihrem Zentrum entfernt trifft (oder vertikale und horizontale Seiten).                    |
    | `farthest-corner` | Der Standardwert, die endende Form des Gradienten ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus trifft.                                                        |

    Wenn `<ending-shape>` als `circle` spezifiziert ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius bereitstellt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` spezifiziert ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße bereitzustellen. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte sind relativ zur jeweiligen Dimension der Gradientenbox. Negative Werte sind ungültig.

    Wenn das Schlüsselwort `<ending-shape>` weggelassen wird, wird die Form des Gradienten durch die angegebene Größe bestimmt. Ein `<length>`-Wert liefert einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse liefern. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein Farbstopps' {{cssxref("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopppositionen (entweder {{cssxref("&lt;percentage&gt;")}} oder {{cssxref("&lt;length&gt;")}} entlang der Achse des Gradienten). Ein Prozentwert von `0%`, oder eine Länge von `0`, repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der endenden Form mit dem virtuellen Gradientenstrahl. Prozentwerte dazwischen sind linear auf dem Gradientenstrahl positioniert. Zwei Stopp-Positionen zu inkludieren ist äquivalent dazu, zwei Farbstopps mit derselben Farbe an den beiden Positionen zu deklarieren.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge bestimmt, an welchem Punkt zwischen zwei Farbstopps die Gradientfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Gradient hat ein radialer Gradient [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird die Größe des Elements annehmen, auf das es angewendet wird.

Um einen radialen Gradient zu erstellen, der sich so wiederholt, dass er seinen Container ausfüllt, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines radialen Gradienten

![Grafik, die radiale Gradienten erklärt: der virtuelle strahlende Strahl ist horizontal und beginnt vom Mittelpunkt. Der elliptische Gradient, und daher die endende Form, hat dasselbe Seitenverhältnis wie die Box, in der er deklariert ist.](radial_gradient.png)

Ein radialer Gradient wird durch einen _Mittelpunkt_, eine _endende Form_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen fließenden Gradient zu erstellen, zeichnet die `radial-gradient()`-Funktion eine Serie von konzentrischen Formen, die vom Zentrum zur _endenden Form_ (und möglicherweise darüber hinaus) strahlen. Die endende Form kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Gradientenstrahl_ positioniert, der sich horizontal vom Zentrum nach rechts erstreckt. Prozentbasierte Farbstopp-Positionen sind relativ zu der Schnittstelle zwischen der endenden Form und diesem Gradientenstrahl, welcher `100%` repräsentiert. Jede Form ist eine einzelne Farbe, bestimmt durch die Farbe auf dem Gradientenstrahl, den sie schneidet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Gradient

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
  background-image: radial-gradient(cyan 0%, transparent 20%, salmon 40%);
}
```

{{EmbedLiveSample('Simple_gradient', 120, 120)}}

### Nicht zentrierter Gradient

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
  background-image: radial-gradient(
    farthest-corner at 40px 40px,
    #f35 0%,
    #43e 100%
  );
}
```

{{EmbedLiveSample('Non-centered_gradient', 240, 120)}}

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

In diesem Beispiel für die Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: radial-gradient(
    circle at center in hsl shorter hue,
    red,
    blue
  );
}

.longer {
  background-image: radial-gradient(
    circle at center in hsl longer hue,
    red,
    blue
  );
}
```

Die Box links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbrad")}} verläuft. Die Box rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft, der durch Grün, Gelb und Orange führt.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele mit radial-gradient

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
