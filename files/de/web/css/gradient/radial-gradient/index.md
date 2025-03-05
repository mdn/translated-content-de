---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 9f8f926dd4a27c1d3ec622cade9ba34818851951
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Die Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} darstellt.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* A gradient with a single color of red */
radial-gradient(red)

/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Verlauf wird angegeben, indem der Mittelpunkt des Verlaufs (wo die 0%-Ellipsen sein werden) und die Größe und Form der _Endform_ (der 100%-Ellipsen) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in gleicher Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wird diese nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` sein (was bedeutet, dass die Verlaufsform ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass es sich um eine achsengerechte Ellipse handelt). Wird nichts angegeben, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Verlaufs. Wenn weggelassen, ist der Standardwert "farthest-corner". Sie kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definitionen der Schlüsselwörter gelten die Verlaufsrahmenkanten als unendlich in beide Richtungen erstreckend, anstatt endliche Liniensegmente zu sein.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                                 |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs trifft auf die Seite des Kastens, die dem Zentrum am nächsten liegt (für Kreise) oder trifft sowohl die vertikalen als auch horizontalen Seiten, die dem Zentrum am nächsten stehen (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs wird so dimensioniert, dass sie genau die nächste Ecke des Kastens von seinem Zentrum aus erreicht.                                                                                                 |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die Seite des Kastens erreicht, die am weitesten von seinem Zentrum entfernt ist (oder vertikale und horizontale Seiten).                  |
    | `farthest-corner` | Der Standardwert, die Endform des Verlaufs ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke des Kastens von seinem Zentrum aus erreicht.                                                                 |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, die einen expliziten Kreisradius bereitstellt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu definieren. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension der Verlaufsbox. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>`-Wert ist ungültig.

- `<linear-color-stop>`
  - : Ein Farbstopps {{cssxref("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Verlaufsstrahl. Zwischenliegende Prozentwerte sind linear auf dem Verlaufsstrahl positioniert. Zwei Stopp-Positionen einbeziehen entspricht der Deklaration von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich so wiederholt, dass er seine Box füllt, verwenden Sie stattdessen die {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Strahl ist horizontal und beginnt vom Mittelpunkt aus. Der elliptische Verlauf, und daher die Endform, hat dasselbe Seitenverhältnis wie die Box, auf der er deklariert wurde.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen sanften Verlauf zu erzeugen, zeichnet die `radial-gradient()` Funktion eine Serien von konzentrischen Formen, die vom Zentrum zur _Endform_ (und möglicherweise darüber hinaus) ausstrahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Verlaufsstrahl_ positioniert, der horizontal vom Zentrum nach rechts verläuft. Auf Prozentsätzen basierende Farbstopppositionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Verlaufsstrahl, der `100%` repräsentiert. Jede Form ist eine einzelne Farbe, die durch die Farbe auf dem Verlaufsstrahl, den sie schneidet, bestimmt wird.

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und [Farbton](/de/docs/Web/CSS/hue) interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} genutzt wird. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau wechselt, indem der längere Bogen genutzt wird und durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient-Beispiele

Sehen Sie bitte den [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

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
