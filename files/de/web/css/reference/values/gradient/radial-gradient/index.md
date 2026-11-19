---
title: CSS-Funktion `radial-gradient()`
short-title: radial-gradient()
slug: Web/CSS/Reference/Values/gradient/radial-gradient
l10n:
  sourceCommit: 249135e07efd741bcad5bac1af7f12ca0abc3b19
---

Die **`radial-gradient()`**-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) in [CSS](/de/docs/Web/CSS) erzeugt ein Bild mit einem stufenlosen Übergang zwischen zwei oder mehr Farben, der von einem Ursprung ausgeht. Der Verlauf kann kreisförmig oder elliptisch sein. Das Ergebnis der Funktion ist ein Wert des Datentyps {{cssxref("gradient")}}, einer speziellen Art von {{cssxref("image")}}.

{{InteractiveExample("CSS Demo: radial-gradient()")}}

```css interactive-example-choice
background: radial-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: radial-gradient(ellipse 75% 50% at 15% 85%, #ffff00, transparent);
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

/* A gradient with a specific ellipse size and center */
radial-gradient(ellipse 100% 25% at 0% 50%, red, blue)
```

Ein radialer Verlauf wird durch die Angabe seines Mittelpunkts (an dem die 0-%-Ellipse liegt) sowie der Größe und Form der _Endform_ (der 100-%-Ellipse) festgelegt.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs. Sie wird genauso interpretiert wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Ohne Angabe gilt `center`.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` sein (ein Kreis mit konstantem Radius) oder `ellipse` (eine an den Achsen ausgerichtete Ellipse). Ohne Angabe gilt `ellipse`.
- `<size>`
  - : Bestimmt die Größe der Endform des Verlaufs. Ohne Angabe gilt `farthest-corner`. Die Größe kann ausdrücklich oder durch ein Schlüsselwort angegeben werden. Bei der Definition der Schlüsselwörter werden die Kanten der Verlaufsbox als Geraden betrachtet, die sich in beide Richtungen unendlich erstrecken, nicht als begrenzte Strecken.

    Sowohl kreisförmige als auch elliptische Verläufe unterstützen die folgenden Schlüsselwörter für `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                         |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs berührt die dem Mittelpunkt nächstgelegene Seite der Box (bei Kreisen) beziehungsweise die nächstgelegene vertikale und horizontale Seite (bei Ellipsen).                                   |
    | `closest-corner`  | Die Endform des Verlaufs wird so bemessen, dass sie die dem Mittelpunkt nächstgelegene Ecke der Box genau berührt.                                                                                                   |
    | `farthest-side`   | Ähnlich wie `closest-side`, aber die Endform wird so bemessen, dass sie die vom Mittelpunkt am weitesten entfernte Seite der Box beziehungsweise die am weitesten entfernte vertikale und horizontale Seite berührt. |
    | `farthest-corner` | Der Standardwert. Die Endform des Verlaufs wird so bemessen, dass sie die vom Mittelpunkt am weitesten entfernte Ecke der Box genau berührt.                                                                         |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe ausdrücklich als {{cssxref("length")}} angegeben werden. Dieser Wert legt den Kreisradius fest. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe mit zwei {{cssxref("length-percentage")}}-Werten festgelegt werden. Der erste Wert bezeichnet den horizontalen Radius, der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die jeweilige Abmessung der Verlaufsbox. Negative Werte sind ungültig.

    Wenn das Schlüsselwort `<ending-shape>` weggelassen wird, bestimmt die angegebene Größe die Form des Verlaufs. Ein einzelner `<length>`-Wert ergibt einen Kreis, zwei Werte in `<length-percentage>`-Einheiten ergeben eine Ellipse. Ein einzelner `<percentage>`-Wert ist ungültig.

- `<linear-color-stop>`
  - : Der {{cssxref("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopppositionen (jeweils ein {{cssxref("&lt;percentage&gt;")}}- oder {{cssxref("&lt;length&gt;")}}-Wert entlang der Verlaufsachse). Ein Prozentwert von `0%` oder ein Längenwert von `0` bezeichnet den Mittelpunkt des Verlaufs; `100%` bezeichnet den Schnittpunkt der Endform mit dem virtuellen Verlaufsstrahl. Dazwischenliegende Prozentwerte werden linear auf dem Verlaufsstrahl positioniert. Zwei Stopppositionen anzugeben ist gleichbedeutend damit, zwei Farbstopps derselben Farbe an diesen Positionen festzulegen.
- `<color-hint>`
  - : Ein Interpolationshinweis, der bestimmt, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Der Längenwert legt fest, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe die Mitte des Farbübergangs erreichen soll. Ohne Angabe liegt diese Mitte genau zwischen den beiden Farbstopps.

## Beschreibung

Wie jeder Verlauf hat auch ein radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description): Er hat weder eine natürliche oder bevorzugte Größe noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen radialen Verlauf zu erzeugen, der sich wiederholt und so seinen Container ausfüllt, verwenden Sie stattdessen die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`-Werte zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo auch `<image>`-Werte zulässig sind. Deshalb funktioniert `radial-gradient()` nicht mit {{Cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

### Aufbau eines radialen Verlaufs

![Diagramm eines radialen Verlaufs: Der virtuelle Verlaufsstrahl verläuft vom Mittelpunkt aus horizontal nach rechts. Der elliptische Verlauf und damit die Endform haben dasselbe Seitenverhältnis wie die Box, für die der Verlauf definiert ist.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und mindestens zwei _Farbstopppunkte_ definiert.

Um einen gleichmäßigen Verlauf zu erzeugen, zeichnet die Funktion `radial-gradient()` eine Reihe konzentrischer Formen, die sich vom Mittelpunkt bis zur _Endform_ (und gegebenenfalls darüber hinaus) ausbreiten. Die Endform kann ein Kreis oder eine Ellipse sein.

Farbstopppunkte liegen auf einem _virtuellen Verlaufsstrahl_, der vom Mittelpunkt aus horizontal nach rechts verläuft. Prozentuale Farbstopppositionen beziehen sich auf den Schnittpunkt der Endform mit diesem Verlaufsstrahl; dieser Schnittpunkt entspricht `100%`. Jede konzentrische Form hat genau eine Farbe, die sich aus der Farbe an ihrem Schnittpunkt mit dem Verlaufsstrahl ergibt.

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

{{EmbedLiveSample('Basic_gradient', 120, 120)}}

### Verlauf mit versetztem Mittelpunkt

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

### Interpolation des Farbtons

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

In diesem Interpolationsbeispiel wird das Farbsystem [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

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

Die linke Box verwendet die [Interpolation über den kürzeren Weg](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter): Die Farbe wechselt auf dem {{Glossary("Color_wheel", "Farbkreis")}} über den kürzeren Bogen direkt von Rot zu Blau. Die rechte Box verwendet die [Interpolation über den längeren Weg](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer): Die Farbe wechselt über den längeren Bogen von Rot zu Blau und durchläuft dabei Grün-, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für radiale Verläufe

Weitere Beispiele finden Sie unter [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Weitere Verlaufsfunktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
