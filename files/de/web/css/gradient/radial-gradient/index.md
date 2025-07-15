---
title: radial-gradient()
slug: Web/CSS/gradient/radial-gradient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`radial-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht, die von einem Ursprung ausstrahlen. Ihre Form kann ein Kreis oder eine Ellipse sein. Das Ergebnis der Funktion ist ein Objekt vom Datentyp {{cssxref("&lt;gradient&gt;")}}, der eine besondere Art von {{cssxref("&lt;image&gt;")}} ist.

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

Ein radialer Verlauf wird durch Angabe des Zentrums des Verlaufs (wo die 0% Ellipse sein wird) und der Größe und Form der _Endform_ (der 100% Ellipse) spezifiziert.

### Werte

- {{cssxref("&lt;position&gt;")}}
  - : Die Position des Verlaufs, interpretiert in gleicher Weise wie {{cssxref("background-position")}} oder {{cssxref("transform-origin")}}. Wird sie nicht angegeben, ist sie standardmäßig auf `center` gesetzt.
- `<ending-shape>`
  - : Die Endform des Verlaufs. Der Wert kann `circle` sein (bedeutet, dass die Form des Verlaufs ein Kreis mit konstantem Radius ist) oder `ellipse` (bedeutet, dass die Form eine achsenparallele Ellipse ist). Wird sie nicht angegeben, ist sie standardmäßig auf `ellipse` gesetzt.
- `<size>`
  - : Bestimmt die Größe der Endform des Verlaufs. Wenn sie weggelassen wird, ist sie standardmäßig auf "farthest-corner" gesetzt. Sie kann explizit oder durch ein Schlüsselwort angegeben werden. Für die Definition der Schlüsselwörter wird angenommen, dass die Kanten des Verlaufsrahmens sich in beide Richtungen unendlich erstrecken, statt finite Liniensegmente zu sein.

    Sowohl Kreis- als auch Ellipsen-Verläufe akzeptieren die folgenden Schlüsselwörter für ihre `<size>`:

    | Schlüsselwort     | Beschreibung                                                                                                                                                                                                                |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `closest-side`    | Die Endform des Verlaufs trifft auf die Seite der Box, die dem Zentrum am nächsten liegt (für Kreise), oder trifft sowohl die vertikalen als auch die horizontalen Seiten, die dem Zentrum am nächsten sind (für Ellipsen). |
    | `closest-corner`  | Die Endform des Verlaufs ist so dimensioniert, dass sie genau die nächste Ecke der Box von ihrem Zentrum aus trifft.                                                                                                        |
    | `farthest-side`   | Ähnlich wie `closest-side`, außer dass die Endform so dimensioniert ist, dass sie die Seite der Box am weitesten von ihrem Zentrum entfernt trifft (oder vertikale und horizontale Seiten).                                 |
    | `farthest-corner` | Der Standardwert, die Endform des Verlaufs ist so dimensioniert, dass sie genau die weiteste Ecke der Box von ihrem Zentrum aus trifft.                                                                                     |

    Wenn `<ending-shape>` als `circle` angegeben ist, kann die Größe explizit als {{cssxref("length")}} angegeben werden, die einen expliziten Kreisradius bereitstellt. Negative Werte sind ungültig.

    Wenn `<ending-shape>` als `ellipse` angegeben ist, kann die Größe als {{cssxref("length-percentage")}} mit zwei Werten angegeben werden, um eine explizite Ellipsengröße bereitzustellen. Der erste Wert repräsentiert den horizontalen Radius und der zweite ist der vertikale Radius. Prozentuale Werte beziehen sich auf die entsprechende Dimension des Verlaufsrahmens. Negative Werte sind ungültig.

    Wenn das `<ending-shape>` Schlüsselwort weggelassen wird, wird die Verlaufsform durch die angegebene Größe bestimmt. Ein `<length>` Wert liefert einen Kreis, während zwei Werte in `<length-percentage>` Einheiten eine Ellipse liefern. Ein einzelner `<percentage>` Wert ist nicht gültig.

- `<linear-color-stop>`
  - : Ein Farbstopps {{cssxref("&lt;color&gt;")}} Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (entweder eine {{cssxref("&lt;percentage&gt;")}} oder eine {{cssxref("&lt;length&gt;")}} entlang der Verlaufsachse). Ein Prozentsatz von `0%` oder eine Länge von `0` repräsentiert das Zentrum des Verlaufs; der Wert `100%` repräsentiert den Schnittpunkt der Endform mit dem virtuellen Verlaufstrahl. Prozentuale Werte dazwischen sind linear auf dem Verlaufstrahl positioniert. Das Einbeziehen von zwei Stopp-Positionen ist gleichbedeutend mit der Deklaration von zwei Farbstopps mit derselben Farbe an den beiden Positionen.
- `<color-hint>`
  - : Der color-hint ist ein Interpolationshinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn sie weggelassen wird, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

## Beschreibung

Wie bei jedem Verlauf hat ein radialer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

Um einen radialen Verlauf zu erzeugen, der sich wiederholt, um seinen Behälter auszufüllen, verwenden Sie die Funktion {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo auch `<image>`s verwendet werden können. Aus diesem Grund funktioniert `radial-gradient()` nicht auf {{Cssxref("background-color")}} und anderen Eigenschaften, die den {{cssxref("&lt;color&gt;")}} Datentyp verwenden.

### Zusammensetzung eines radialen Verlaufs

![Grafik erklärt radiale Verläufe: der virtuelle stahlende Strahl ist horizontal und beginnt am Mittelpunkt. Der elliptische Verlauf, und daher die Endform, hat dasselbe Seitenverhältnis wie die Box, auf der er deklariert ist.](radial_gradient.png)

Ein radialer Verlauf wird durch einen _Mittelpunkt_, eine _Endform_ und zwei oder mehr _Farbstopp-Punkte_ definiert.

Um einen fließenden Verlauf zu erzeugen, zeichnet die `radial-gradient()` Funktion eine Reihe konzentrischer Formen, die vom Zentrum zur _Endform_ (und möglicherweise darüber hinaus) ausstrahlen. Die Endform kann entweder ein Kreis oder eine Ellipse sein.

Farbstopp-Punkte sind auf einem _virtuellen Verlaufstrahl_ positioniert, der sich horizontal vom Zentrum nach rechts erstreckt. Prozentuale Farbstopp-Positionen beziehen sich auf den Schnittpunkt zwischen der Endform und diesem Verlaufstrahl, der `100%` repräsentiert. Jede Form hat eine einheitliche Farbe, die durch die Farbe auf dem Verlaufstrahl bestimmt wird, den sie schneidet.

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, der durch Grüntöne, Gelbtöne und Orangetöne führt.

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
