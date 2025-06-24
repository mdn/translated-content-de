---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem schrittweisen Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung aus strahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: radial-gradient()")}}

```css interactive-example-choice
background: radial-gradient(#e66465, #9198e5);
```

```css interactive-example-choice
background: radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c);
```

```css interactive-example-choice
background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
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

Ein Radialgradient wird angegeben, indem das Zentrum des Gradienten (wo die Ellipse von 0 % sein wird) und die Größe sowie die Form der _Endform_ (die Ellipse von 100 %) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Gradienten, interpretiert wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Falls nicht angegeben, ist der Standardwert `center`.
- `<ending-shape>`
  - : Die Endform des Gradienten. Der Wert kann `circle` (was bedeutet, dass die Form des Gradienten ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Falls nicht angegeben, ist der Standardwert `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Endform des Gradienten. Falls nicht angegeben, ist der Standardwert `farthest-corner`. Sie kann explizit oder per Schlüsselwort angegeben werden. Für die Definitionen der Schlüsselwörter berücksichtigen Sie, dass die Kanten des Gradientenfeldes sich in beide Richtungen unendlich erstrecken, anstatt begrenzte Liniensegmente zu sein.

    Sowohl Kreis- als auch Ellipsengradienten akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                     |
    | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Gradienten trifft die Seite des Kastens, die dem Zentrum am nächsten liegt (für Kreise) oder trifft beide vertikalen und horizontalen Seiten, die dem Zentrum am nächsten liegen (für Ellipsen). |
    | `closest-corner`  | Die Endform des Gradienten wird so dimensioniert, dass sie genau die nächste Ecke des Kastens von seinem Zentrum trifft.                                                                                         |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert wird, dass sie die Seite des Kastens trifft, die von seinem Zentrum am weitesten entfernt ist (oder vertikale und horizontale Seiten).       |
    | `farthest-corner` | Der Standardwert, die Endform des Gradienten wird so dimensioniert, dass sie genau die entfernteste Ecke des Kastens von seinem Zentrum trifft.                                                                  |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius bietet. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu bieten. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwert sind relativ zu der entsprechenden Dimension des Gradientenfeldes. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Gradientform durch die angegebene Größe bestimmt. Ein einzelner `<length>`-Wert ergibt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse ergeben. Ein einzelner `<percentage>`-Wert ist nicht zulässig.

- `<linear-color-stop>`
  - : Der {{cssxref("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Gradienten). Ein Prozentwert von `0%`, oder eine Länge von `0`, repräsentiert das Zentrum des Gradienten; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Gradientenstrahl. Prozentwerte dazwischen sind auf dem Gradientenstrahl linear positioniert. Das Einschließen von zwei Stopp-Positionen entspricht dem Deklarieren von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps voranschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Gradientenfarbe den Mittelpunkt des Farbübergangs erreichen sollte. Wenn sie weggelassen wird, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Gradienten hat ein radialer Gradient [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen radialen Gradienten zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines radialen Gradienten

![Grafik, die radiale Verläufe erklärt: Der virtuelle Strahl beginnt horizontal vom Mittelpunkt. Der elliptische Verlauf, und daher die Endform, hat dasselbe Seitenverhältnis wie das Feld, auf dem er deklariert wird.](radial_gradient.png)

Ein radialer Gradient wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen glatten Verlauf zu erzeugen, zeichnet die `radial-gradient()`-Funktion eine Serie von konzentrischen Formen, die vom Mittelpunkt zur _Endform_ (und möglicherweise darüber hinaus) strahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Gradientenstrahl_ positioniert, der horizontal vom Mittelpunkt nach rechts verläuft. Prozentbasierte Farbstopppositionen sind relativ zum Schnittpunkt zwischen der Endform und diesem Gradientenstrahl, der `100%` repräsentiert. Jede Form ist eine einzige Farbe, die durch die Farbe auf dem Gradientenstrahl bestimmt wird, den sie schneidet.

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

{{EmbedLiveSample('Basic_gradient', 120, 120)}}

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet, und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} wechselt. Die Box rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und durch Grüntöne, Gelbtöne und Orangetöne führt.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient Beispiele

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
