---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem allmählichen Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung aus strahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* Ein Gradient in der Mitte seines Containers,
   beginnt rot, wechselt zu blau und endet grün */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl-Farbraum mit längerer Farbtoninterpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radialer Gradient wird durch Angabe des Zentrums des Gradienten (wo die 0%-Ellipse sein wird) sowie der Größe und Form der _Endform_ (der 100%-Ellipse) spezifiziert.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Gradienten, interpretiert in gleicher Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Gradienten. Der Wert kann `circle` sein (bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenausgerichtete Ellipse ist). Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Gradienten. Wenn es weggelassen wird, ist der Standardwert farthest-corner. Es kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Zweckmäßigkeit der Schlüsselwortdefinitionen werden die Kanten des Gradientenfelds als unendlich in beide Richtungen verlaufend betrachtet, anstatt als endliche Liniensegmente.

    Sowohl Kreis- als auch Ellipsen-Gradienten akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                      |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Gradienten erreicht die Seite der Box, die am nächsten zu ihrem Zentrum liegt (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten am nächsten zum Zentrum (für Ellipsen). |
    | `closest-corner`  | Die Endform des Gradienten ist so dimensioniert, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus erreicht.                                                           |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform dimensioniert ist, um die Boxseite zu treffen, die am weitesten von ihrem Zentrum entfernt ist (oder vertikale und horizontale Seiten).                           |
    | `farthest-corner` | Der Standardwert, die Endform des Gradienten ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke der Box von ihrem Zentrum aus erreicht.                                                |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius angibt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße bereitzustellen. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension des Gradientenfelds. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Form des Gradienten durch die angegebene Größe bestimmt. Ein `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein Farb-Stop-Wert eines Color-Stops ({{cssxref("&lt;color&gt;")}}), gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Gradienten). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit der virtuellen Gradientenstrahlung. Prozentwerte dazwischen werden linear auf der Gradientenstrahlung positioniert. Das Einfügen von zwei Stopp-Positionen entspricht der Definition von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Gradientenfarbe die Mitte des Farbübergangs erreichen soll. Wird sie weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Gradienten hat ein radialer Gradient [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen radialen Gradient zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie die {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} Funktion.

Da `<gradient>` zu dem `<image>` Datentyp gehört, können sie nur dort verwendet werden, wo `<image>` verwendet werden kann. Aus diesem Grund funktioniert `radial-gradient()` nicht auf {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Gradienten

![Grafik, die radiale Gradienten erklärt: der virtuelle strahlende Strahl ist horizontal und beginnt von der Mitte. Der elliptische Gradient und damit die Endform hat das gleiche {{glossary("Seitenverhältnis")}} wie die Box, auf die es deklariert ist.](radial_gradient.png)

Ein radialer Gradient wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farb-Stopp-Punkte_ definiert.

Um einen sanften Verlauf zu erstellen, zeichnet die `radial-gradient()`-Funktion eine Serie von konzentrischen Formen, die vom Zentrum zur _Endform_ (und möglicherweise darüber hinaus) strahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farb-Stopp-Punkte sind auf einem _virtuellen Gradientenstrahl_ positioniert, der sich horizontal vom Zentrum nach rechts erstreckt. Prozentuale Farb-Stopp-Positionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Gradientenstrahl, der `100%` darstellt. Jede Form hat eine einzelne Farbe, die durch die Farbe auf dem Gradientenstrahl bestimmt wird, den sie schneidet.

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

### Nicht-zentrierter Gradient

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbmodell verwendet, und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen im [Farbkreis](/de/docs/Glossary/Color_wheel) verwendet wird. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), wobei die Farbe von Rot zu Blau über den längeren Bogen geht und dabei Grün, Gelb und Orange durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr radial-gradient Beispiele

Bitte sehen Sie [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

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
