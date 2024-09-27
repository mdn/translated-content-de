---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung aus strahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-radial-gradient.html")}}

## Syntax

```css
/* A gradient at the center of its container,
   starting red, changing to blue, and finishing green */
radial-gradient(circle at center, red 0, blue, green 100%)

/* hsl color space with longer hue interpolation */
radial-gradient(circle at center in hsl longer hue, red 0, blue, green 100%)
```

Ein radiales Gradientenmuster wird durch Angabe des Zentrums des Gradienten (wo die 0%-Ellipse sein wird) und die Größe und Form der _Endform_ (der 100%-Ellipse) spezifiziert.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Gradienten, interpretiert auf dieselbe Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist die Standardposition `center`.
- `<ending-shape>`
  - : Die Endform des Gradienten. Der Wert kann `circle` sein (was bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallele Ellipse ist). Wenn nicht angegeben, ist die Standardform `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Gradienten. Wenn weggelassen, ist der Standardwert farthest-corner. Es kann explizit oder durch Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter wird angenommen, dass sich die Kanten des Gradientenrahmens unendlich in beide Richtungen erstrecken und nicht als begrenzte Liniensegmente betrachtet werden.

    Sowohl Kreis- als auch Ellipsengradienten akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                           |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Gradienten trifft auf die Seite des Rahmens, die dem Zentrum am nächsten liegt (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten liegen (für Ellipsen). |
    | `closest-corner`  | Die Endform des Gradienten ist so dimensioniert, dass sie genau die nächste Ecke des Rahmens von ihrem Zentrum aus erreicht.                                                                                           |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die Seite des Rahmens erreicht, die am weitesten von ihrem Zentrum entfernt ist (oder vertikale und horizontale Seiten).             |
    | `farthest-corner` | Der Standardwert, die Endform des Gradienten ist so dimensioniert, dass sie genau die am weitesten entfernte Ecke des Rahmens von ihrem Zentrum aus erreicht.                                                          |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als ein {{cssxref("length")}} angegeben werden, das einen expliziten Kreisradius liefert. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als ein {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße bereitzustellen. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte sind relativ zur jeweiligen Dimension des Gradientenrahmens. Negative Werte sind ungültig.

    Wenn das `<ending-shape>` Schlüsselwort ausgelassen wird, wird die Form des Gradienten durch die angegebene Größe bestimmt. Ein `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>`-Wert ist ungültig.

- `<linear-color-stop>`
  - : Ein Farbhalt-{{cssxref("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Haltepositionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Gradientenachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Gradientenstrahl. Prozentsätze dazwischen sind linear auf dem Gradientenstrahl positioniert. Das Einschließen von zwei Haltepositionen entspricht der Deklaration von zwei Farbhaltepositionen mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbe-Hinweis ist ein Interpolationshinweis, der definiert, wie der Gradientenverlauf zwischen angrenzenden Farbhalten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbhalten der Farbverlauf den Mittelpunkt des Farbübergangs erreichen sollte. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbhalten.

## Beschreibung

Wie bei jedem Gradienten hat ein radialer Gradienten [keine intrinsische Größe](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen radialen Gradienten zu erstellen, der sich wiederholt, um seinen Behälter auszufüllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>` zur `<image>` Datenart gehört, können sie nur dort verwendet werden, wo `<image>` verwendet werden kann. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Gradienten

![Grafik, die radiale Gradienten erklärt: der virtuelle Strahl ist horizontal vom Mittelpunkt ausgehend. Der elliptische Gradient und damit die Endform haben dasselbe [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) wie der Rahmen, auf dem er deklariert ist.](radial_gradient.png)

Ein radialer Gradienten ist durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbhaltepunkte_ definiert.

Um einen sanften Farbverlauf zu erzeugen, zeichnet die `radial-gradient()` Funktion eine Reihe konzentrischer Formen, die vom Zentrum aus nach außen bis zur _Endform_ (und möglicherweise darüber hinaus) strahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbhaltepunkte sind auf einem _virtuellen Gradientenstrahl_ positioniert, der horizontal vom Zentrum nach rechts verläuft. Positionsangaben auf Prozentsatzbasis für Farbhalte sind relativ zum Schnittpunkt zwischen der Endform und diesem Gradientenstrahl, der `100%` darstellt. Jede Form hat eine einzige Farbe, die durch die Farbe auf dem Gradientenstrahl bestimmt wird, den sie schneidet.

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbensystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box links nutzt die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) verläuft. Die Box rechts nutzt die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und dabei Grün-, Gelb- und Orangetöne durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für radial-gradient

Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
