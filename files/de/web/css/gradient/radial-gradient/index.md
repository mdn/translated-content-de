---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Verlauf wird durch Angabe des Zentrums des Verlaufs (wo die 0%-Ellipse sein wird) und der Größe und Form der _Endform_ (der 100%-Ellipse) angegeben.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in der gleichen Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Verlaufs. Wenn weggelassen, ist der Standardwert "farthest-corner". Es kann explizit oder durch Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter wird angenommen, dass die Ränder der Verlaufsbox unendlich in beide Richtungen verlaufen, anstatt begrenzte Liniensegmente zu sein.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                      |
    | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs erreicht die dem Zentrum am nächsten liegende Boxseite (für Kreise) oder berührt die beiden vertikalen und horizontalen Seiten, die dem Zentrum am nächsten liegen (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs wird so dimensioniert, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus erreicht.                                                              |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die Boxseite erreicht, die am weitesten von ihrem Zentrum entfernt ist (oder die vertikalen und horizontalen Seiten).            |
    | `farthest-corner` | Der Standardwert, die Endform des Verlaufs wird so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum erreicht.                                  |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius angibt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße anzugeben. Der erste Wert stellt den horizontalen Radius dar und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension der Verlaufsbox. Negative Werte sind ungültig.

    Wenn das Schlüsselwort `<ending-shape>` weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein einzelner Wert `<length>` ergibt einen Kreis, während zwei Werte in `<length-percentage>` Einheiten eine Ellipse ergeben. Ein einzelner Wert `<percentage>` ist nicht gültig.

- `<linear-color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert eines Farbhaltepunktes, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Verlauflinie). Ein Prozentsatz von `0%` oder eine Länge von `0` stellt das Zentrum des Verlaufs dar; der Wert `100%` stellt den Schnittpunkt der Endform mit dem virtuellen Verlaufradius dar. Zwischenliegende Prozentwerte werden linear auf dem Verlaufradius positioniert. Zwei Stopp-Positionen sind gleichbedeutend mit der Deklaration von zwei Farbhaltepunkten mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbhaltenpunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbhaltenpunkten die Verlaufslinie das mittlere Ende der Farbveränderung erreichen soll. Wenn es weggelassen wird, ist der Mittelpunkt der Farbveränderung der Mittelpunkt zwischen zwei Farbhaltenpunkten.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie stattdessen die {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Strahl verläuft horizontal vom Mittelpunkt aus. Der elliptische Verlauf, und somit die Endform, hat das gleiche [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) wie die Box, auf die er angewendet wird.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbhaltepunkt_ definiert.

Um einen fließenden Verlauf zu erzeugen, zeichnet die `radial-gradient()` Funktion eine Reihe von konzentrischen Formen, die sich vom Zentrum zur _Endform_ (und möglicherweise darüber hinaus) ausbreiten. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbhaltepunkte sind auf einem _virtuellen Verlaufradius_ positioniert, der horizontal von der Mitte nach rechts verläuft. Prozentsatzbasierte Farbhaltepunktpositionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Verlaufradius, der `100%` darstellt. Jede Form ist eine einfarbige Beschaffenheit, die durch die auf dem Verlaufradius befindliche Farbe bestimmt wird, die sie schneidet.

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

### Nicht zentrierter Verlauf

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

In diesem Beispiel für die Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet, und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem [Farbrad](/de/docs/Glossary/Color_wheel) wechselt. Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, durch Grün-, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient Beispiele

Bitte sehen Sie [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
