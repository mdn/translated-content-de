---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 695fd71c2c147dc2df123be0bfcf20bb687d76ba
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung aus strahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Verlauf wird angegeben, indem das Zentrum des Verlaufs (wo die 0%-Ellipse liegen wird) und die Größe und Form der _Endform_ (die 100%-Ellipse) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nichts angegeben ist, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsen-ausgerichtete Ellipse ist) sein. Wenn nichts angegeben ist, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Verlaufs. Wenn es weggelassen wird, ist der Standardwert `farthest-corner`. Es kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Zwecke der Schlüsselwortdefinitionen betrachten Sie die Kanten der Verlaufsbox als unendlich in beide Richtungen verlaufend, statt als endliche Liniensegmente.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                               |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs berührt die Seite der Box, die dem Zentrum am nächsten liegt (für Kreise) oder berührt beide vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs ist so dimensioniert, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus berührt.                                                                                      |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform dimensioniert ist, um die von ihrem Zentrum aus entfernteste Seite der Box zu berühren (oder vertikale und horizontale Seiten).                         |
    | `farthest-corner` | Der Standardwert, die Endform des Verlaufs ist so dimensioniert, dass sie genau die von ihrem Zentrum aus entfernteste Ecke der Box berührt.                                                               |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}}, was einen expliziten Kreisradius bereitstellt, angegeben werden. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße bereitzustellen. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte sind relativ zur entsprechenden Dimension der Verlaufsbox. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein Farbwert des Verlaufshalts, gefolgt von einer oder zwei optionalen Stopppositionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%` oder eine Länge von `0` stellt das Zentrum des Verlaufs dar; der Wert `100%` stellt die Schnittstelle der Endform mit dem virtuellen Verlaufsstrahl dar. Die dazwischenliegenden Prozentwerte sind linear auf dem Verlaufsstrahl positioniert. Das Einschließen von zwei Stopppositionen entspricht der Angabe von zwei Farbverläufen mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbe-Hinweis ist ein Interpolationstipp, der definiert, wie der Verlauf zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe die Mitte des Farbübergangs erreichen soll. Wenn er weggelassen wird, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farbstops.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Maße](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafische Erklärung radialer Verläufe: Der virtuelle Strahl verläuft horizontal vom Mittelpunkt aus. Der elliptische Verlauf und daher die Endform haben das gleiche Seitenverhältnis wie die Box, auf der er deklariert ist.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen gleichmäßigen Verlauf zu erzeugen, zeichnet die `radial-gradient()`-Funktion eine Serie konzentrischer Formen, die vom Zentrum bis zur _Endform_ (und möglicherweise darüber hinaus) strahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Verlaufsstrahl_ positioniert, der sich horizontal vom Zentrum nach rechts erstreckt. Prozentsatzbasierte Farbstopp-Positionen sind relativ zur Schnittstelle zwischen der Endform und diesem Verlaufsstrahl, was `100%` darstellt. Jede Form ist eine einzelne Farbe, bestimmt durch die Farbe auf dem Verlaufsstrahl, die sie schneidet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfacher Verlauf

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

### Nicht-zentrierter Verlauf

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbensystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot über Grün, Gelb und Orange nach Blau geht, wobei sie den längeren Bogen durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für radial-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
