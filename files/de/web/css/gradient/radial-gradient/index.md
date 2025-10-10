---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausgehen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, einer speziellen Art von {{cssxref("&lt;image&gt;")}}.

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

Ein radialer Verlauf wird durch Angabe des Zentrums des Verlaufs (wo sich die 0% Ellipse befindet) sowie der Größe und Form der _Endform_ (der 100% Ellipse) spezifiziert.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in gleicher Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wird sie nicht angegeben, wird `center` als Standard verwendet.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` (bedeutet, dass die Form des Verlaufs ein gleichmäßiger Kreis ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wird nichts angegeben, ist der Standardwert `ellipse`.
- `<size>`
  - : Bestimmt die Größe der Endform des Verlaufs. Wird er nicht angegeben, ist der Standardwert `farthest-corner`. Er kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definitionen der Schlüsselwörter berücksichtigen Sie die Verlaufsfeldkanten, als ob sie sich unendlich in beide Richtungen erstrecken, anstatt als endliche Liniensegmente betrachtet zu werden.

    Sowohl Kreis- als auch Ellipsen-Verläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                             |
    | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs trifft auf die dem Zentrum am nächsten liegende Seite des Feldes (für Kreise) oder auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs ist so dimensioniert, dass sie genau die dem Zentrum am nächsten liegende Ecke des Feldes erreicht.                                                                             |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die Seite des Feldes am weitesten vom Zentrum entfernt (oder die vertikalen und horizontalen Seiten) erreicht.         |
    | `farthest-corner` | Der Standardwert; die Endform des Verlaufs ist so dimensioniert, dass sie genau die am weitesten vom Zentrum entfernte Ecke des Feldes erreicht.                                                         |

    Wird `<ending-shape>` als `circle` angegeben, kann die Größe explizit als {{cssxref("length")}} angegeben werden, die einen expliziten Kreisradius liefert. Negative Werte sind ungültig.

    Wird `<ending-shape>` als `ellipse` angegeben, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu liefern. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentwerte beziehen sich auf die entsprechende Dimension des Verlaufsfelds. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein einzelner `<length>`-Wert liefert einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse liefern. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein Farb-Stopp-Wert des Verlaufes {{cssxref("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopp-Positionen (entweder ein {{cssxref("&lt;percentage&gt;")}} oder ein {{cssxref("&lt;length&gt;")}} entlang der Achse des Verlaufs). Ein Prozentsatz von `0%`, oder eine Länge von `0`, stellt das Zentrum des Verlaufs dar; der Wert `100%` stellt den Schnittpunkt der Endform mit dem virtuellen Verlaufsstrahl dar. Prozentwerte dazwischen werden linear auf dem Verlaufsstrahl positioniert. Die Aufnahme von zwei Stopp-Positionen entspricht der Deklaration von zwei Farbstopps mit der gleichen Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Farbhinweis ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf den Mittelpunkt des Farbübergangs erreichen soll. Wenn er weggelassen wird, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}}-Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Graph zur Erklärung von radialen Verläufen: Der virtuelle Strahl des Verlaufs verläuft horizontal vom Mittelpunkt aus. Der elliptische Verlauf und damit die Endform haben das gleiche Seitenverhältnis wie das Feld, auf dem sie deklariert sind.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Zentrumspunkt_, eine _Endform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen glatten Verlauf zu erzeugen, zeichnet die Funktion `radial-gradient()` eine Reihe konzentrischer Formen, die sich vom Zentrum zur _Endform_ (und möglicherweise darüber hinaus) ausstrahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Verlaufsstrahl_ positioniert, der sich horizontal vom Zentrum nach rechts erstreckt. Prozentsatzbasierte Farbstopp-Positionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Verlaufsstrahl, der `100%` darstellt. Jede Form ist eine einzelne, durch die Farbe auf dem Verlaufsstrahl bestimmte Farbe.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegender Verlauf

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

In diesem Beispiel für die Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe von Rot direkt zu Blau geht, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Die Box rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau geht, indem der längere Bogen verwendet wird, der durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere radial-gradient-Beispiele

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
