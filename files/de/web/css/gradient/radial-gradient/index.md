---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Seine Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des {{cssxref("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: radial-gradient()")}}

```css interactive-example-choice
background: radial-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: radial-gradient(
  circle at 100%,
  #333333,
  #333333 50%,
  #eeeeee 75%,
  #333333 75%
);
```

```css interactive-example-choice
background:
  radial-gradient(ellipse at top, #e66465, transparent),
  radial-gradient(ellipse at bottom, #4d9f0c, transparent);
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

Ein radialer Verlauf wird angegeben, indem der Mittelpunkt des Verlaufs (wo sich die 0%-Ellipse befindet) und die Größe und Form der _Endform_ (die 100%-Ellipse) festgelegt werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wenn nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` sein (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist). Wenn nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`
  - : Bestimmt die Größe der Endform des Verlaufs. Wenn es weggelassen wird, ist der Standardwert farthest-corner. Es kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter werden die Kanten der Verlaufsfläche als unendlich betrachtet, anstatt als begrenzte Liniensegmente.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                     |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `closest-side`    | Die Endform des Verlaufs trifft die dem Mittelpunkt am nächsten liegende Seite des Rechtecks (für Kreise) oder trifft sowohl die vertikale als auch die horizontale Seite (für Ellipsen).        |
    | `closest-corner`  | Die Endform des Verlaufs ist so dimensioniert, dass sie genau die dem Mittelpunkt am nächsten liegende Ecke des Rechtecks trifft.                                                                |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die dem Mittelpunkt am weitesten entfernte Seite des Rechtecks trifft (oder vertikale und horizontale Seiten). |
    | `farthest-corner` | Der Standardwert, die Endform des Verlaufs ist so dimensioniert, dass sie genau die vom Mittelpunkt am weitesten entfernte Ecke des Rechtecks trifft.                                            |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius angibt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu liefern. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension des Verlaufsrechtecks. Negative Werte sind ungültig.

    Wenn das `<ending-shape>` Schlüsselwort weggelassen wird, wird die Verlaufsgestalt durch die angegebene Größe bestimmt. Ein einziger `<length>` Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>` Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>` Wert ist ungültig.

- `<linear-color-stop>`
  - : Ein Farb-Stopp-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentanteil von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert die Schnittstelle der Endform mit dem virtuellen Verlaufsstrahl. Prozentwerte dazwischen sind linear auf dem Verlaufsstrahl positioniert. Das Einschließen von zwei Stopp-Positionen ist gleichbedeutend mit der Deklaration von zwei Farbstopps mit der gleichen Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf sich zwischen angrenzenden Farbstopps entwickelt. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe die Mitte des Farbübergangs erreichen soll. Wenn weggelassen, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen radialen Verlauf zu erstellen, der wiederholt wird, um seinen Container zu füllen, verwenden Sie die {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} Funktion stattdessen.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht auf {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Verlaufsstrahl ist horizontal und beginnt am Mittelpunkt. Der elliptische Verlauf, und daher die Endform, hat das gleiche Seitenverhältnis wie das Rechteck, auf dem es deklariert wird.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farb-Stopp-Punkte_ definiert.

Um einen gleichmäßigen Verlauf zu erstellen, zeichnet die `radial-gradient()` Funktion eine Reihe konzentrischer Formen, die sich vom Zentrum bis zur _Endform_ (und möglicherweise darüber hinaus) ausstrahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farb-Stopp-Punkte sind positioniert auf einem _virtuellen Verlaufsstrahl_, der horizontal vom Zentrum nach rechts verläuft. Auf Prozent basierende Farb-Stopp-Positionen beziehen sich auf die Schnittstelle zwischen der Endform und diesem Verlaufsstrahl, welches `100%` repräsentiert. Jede Form ist eine einzige Farbe, die durch die Farbe auf dem Verlaufsstrahl bestimmt wird, den sie schneidet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Basisverlauf

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

{{EmbedLiveSample('Basic_gradient', 120, 120)}}

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
    #ff3355 0%,
    #4433ee 100%
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

In diesem Beispiel zur Interpolation wird das [HSL Farbsystem](/de/docs/Web/CSS/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau übergeht und den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} nutzt. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und dabei durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient Beispiele

Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Weitere Verlauf-Funktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
