---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung aus strahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis dieser Funktion ist ein Objekt des Datentyps {{cssxref("&lt;gradient&gt;")}}, der eine spezielle Art von {{cssxref("&lt;image&gt;")}} ist.

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

Ein radialer Verlauf wird spezifiziert, indem der Mittelpunkt des Verlaufs (wo die 0%-Ellipse sein wird) sowie die Größe und Form der _Abschlussform_ (der 100%-Ellipse) angegeben werden.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert auf die gleiche Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Falls nicht angegeben, ist die Standardeinstellung `center`.
- `<ending-shape>`
  - : Die Abschlussform des Verlaufs. Der Wert kann `circle` (was bedeutet, dass die Verlaufsform ein Kreis mit konstantem Radius ist) oder `ellipse` (was bedeutet, dass die Form eine achsenparallele Ellipse ist) sein. Wenn nichts angegeben ist, lautet die Standardeinstellung `ellipse`.
- `<size>`

  - : Bestimmt die Größe der Abschlussform des Verlaufs. Wenn nicht angegeben, ist die Standardeinstellung `farthest-corner`. Es kann explizit oder per Schlüsselwort angegeben werden. Zum Zwecke der Schlüsselwortdefinitionen sollten die Kanten des Verlaufsfeldes als unendlich in beide Richtungen verlängert betrachtet werden, anstatt als endliche Liniensegmente.

    Sowohl Kreis- als auch Ellipsenverläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                             |
    | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `closest-side`    | Die Abschlussform des Verlaufs trifft auf die Seite der Box, die ihrem Zentrum am nächsten liegt (für Kreise) oder trifft auf die vertikalen und horizontalen Seiten, die dem Zentrum am nächsten liegen (für Ellipsen). |
    | `closest-corner`  | Die Abschlussform des Verlaufs ist so bemessen, dass sie genau die nächstgelegene Ecke der Box von ihrem Zentrum aus erreicht.                                                                                           |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Abschlussform so bemessen ist, dass sie die am weitesten vom Zentrum entfernte Seite der Box trifft (oder vertikale und horizontale Seiten).                                  |
    | `farthest-corner` | Der Standardwert: Die Abschlussform des Verlaufs ist so bemessen, dass sie genau die am weitesten vom Zentrum entfernte Ecke der Box erreicht.                                                                           |

    Wenn `<ending-shape>` als `circle` spezifiziert ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, was einen expliziten Kreisradius liefert. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` spezifiziert ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße zu bieten. Der erste Wert repräsentiert den horizontalen Radius und der zweite den vertikalen Radius. Prozentangaben beziehen sich auf die entsprechende Dimension des Verlaufsfeldes. Negative Werte sind ungültig.

    Wenn das `<ending-shape>`-Schlüsselwort weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein `<length>`-Wert erzeugt einen Kreis, während zwei Werte in `<length-percentage>`-Einheiten eine Ellipse erzeugen. Ein einzelner `<percentage>`-Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein {{cssxref("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder einem {{cssxref("&lt;percentage&gt;")}} oder einem {{cssxref("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert den Mittelpunkt des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der Abschlussform mit dem virtuellen Verlaufsstrahl. Prozentuale Werte dazwischen sind linear auf dem Verlaufsstrahl positioniert. Das Hinzufügen von zwei Stopp-Positionen entspricht der Deklaration von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der Color-Hint ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen angrenzenden Farbstopps fortschreitet. Die Länge gibt an, an welchem Punkt zwischen zwei Farbstopps der Verlauf das mittlere Punkt der Farbüberblendung erreichen soll. Wenn weggelassen, ist der Mittelpunkt der Farbüberblendung der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d. h. es gibt keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird.

Um einen radialen Verlauf zu erstellen, der sich wiederholt, um seinen Container zu füllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht bei {{Cssxref("background-color")}} und anderen Eigenschaften, die den Datentyp {{cssxref("&lt;color&gt;")}} verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik, die radiale Verläufe erklärt: Der virtuelle Strahl ist horizontal und beginnt vom Mittelpunkt. Der elliptische Verlauf und somit die Abschlussform haben dasselbe Seitenverhältnis wie die Box, auf der sie deklariert sind.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Abschlussform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen glatten Verlauf zu erzeugen, zeichnet die `radial-gradient()`-Funktion eine Serie von konzentrischen Formen, die vom Mittelpunkt bis zur _Abschlussform_ (und möglicherweise darüber hinaus) ausstrahlen. Die Abschlussform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Verlaufsstrahl_ positioniert, der sich horizontal vom Zentrum nach rechts erstreckt. Proportionale Farbstopp-Positionen beziehen sich auf den Schnittpunkt zwischen der Abschlussform und diesem Verlaufsstrahl, der `100%` darstellt. Jede Form hat eine feste Farbe, die durch die Farbe des Verlaufsstrahls bestimmt wird, den sie schneidet.

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot nach Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} geht. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot nach Blau über den längeren Bogen geht und hierbei Grüntöne, Gelbtöne und Orangetöne durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für radial-gradient

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
