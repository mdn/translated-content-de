---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`conic-gradient()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erzeugt ein Bild, das aus einem Gradient mit Farbverläufen besteht, die um einen Mittelpunkt rotieren (statt vom Zentrum aus zu strahlen). Beispiele für kegelförmige Gradienten sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}}-Datentyps, das eine besondere Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{InteractiveExample("CSS Demo: conic-gradient()")}}

```css interactive-example-choice
background: conic-gradient(red, orange, yellow, green, blue);
```

```css interactive-example-choice
background: conic-gradient(
  from 0.25turn at 50% 30%,
  #f69d3c,
  10deg,
  #3f87a6,
  350deg,
  #ebf8e1
);
```

```css interactive-example-choice
background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5);
```

```css interactive-example-choice
background: conic-gradient(
  red 6deg,
  orange 6deg 18deg,
  yellow 18deg 45deg,
  green 45deg 110deg,
  blue 110deg 200deg,
  purple 200deg
);
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
conic-gradient(red)

/* A conic gradient rotated 45 degrees,
   starting blue and finishing red */
conic-gradient(from 45deg, blue, red)

/* A bluish purple box: the gradient goes from blue to red,
   but only the bottom right quadrant is visible, as the
   center of the conic gradient is at the top left corner */
conic-gradient(from 90deg at 0 0, blue, red)

/* Interpolation in polar color space
  with longer hue interpolation method */
conic-gradient(in hsl longer hue, red, blue, green, red)

/* Color wheel */
conic-gradient(
  hsl(360 100% 50%),
  hsl(315 100% 50%),
  hsl(270 100% 50%),
  hsl(225 100% 50%),
  hsl(180 100% 50%),
  hsl(135 100% 50%),
  hsl(90 100% 50%),
  hsl(45 100% 50%),
  hsl(0 100% 50%)
)
```

### Werte

- {{CSSxRef("&lt;angle&gt;")}}
  - : Durch das `from`-Schlüsselwort eingeleitet und mit einem Winkelwert versehen, definiert die Gradient-Rotation im Uhrzeigersinn.
- `<position>`
  - : Verwenden Sie die gleichen Längen-, Reihenfolge- und Schlüsselwortwerte wie die [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)-Eigenschaft. Der `position`-Wert definiert das Zentrum des Gradienten. Wenn nicht angegeben, wird standardmäßig `center` verwendet, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umkreisachse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert den Punkt zwischen zwei Farbstopps, an dem der Gradient die Mitte des Farbverlaufs erreichen sollte. Wenn er weggelassen wird, ist der Mittelpunkt des Farbverlaufs genau zwischen zwei Farbstopps.

> [!NOTE]
> Die Wiedergabe von Farbstopps in kegelförmigen Gradienten folgt denselben Regeln wie [Farbstopps in linearen Gradienten](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Gradienten hat ein kegelförmiger Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Um einen kegelförmigen Gradient zu erstellen, der so wiederholt wird, dass er eine 360-Grad-Rotation ausfüllt, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s dem Datentyp `<image>` angehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} nutzen.

> [!NOTE]
> Warum wird es "kegelförmiger" Gradient genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines kegelförmigen Gradienten

Der Syntax für kegelförmige Gradienten ist ähnlich wie bei radialen Gradienten, aber die Farbstopps werden um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Bei kegelförmigen Gradienten werden die Farben so überblendet, als würden sie um das Zentrum eines Kreises gedreht, beginnend oben und im Uhrzeigersinn fortschreitend. In einem radialen Gradienten überblenden die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Gradienten und der Achse eines radialen Gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Gradient wird angegeben, indem ein Drehwinkel, das Zentrum des Gradienten und dann eine Liste von Farbstopps angegeben werden. Anders als bei linearen und radialen Gradienten, deren Farbstopps durch die Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Gradienten mit einem [Winkel](/de/docs/Web/CSS/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die kegelförmige Gradienten unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Gradienten bietet die Syntax von kegelförmigen Gradienten die Möglichkeit, das Zentrum des Gradienten überall innerhalb oder sogar außerhalb des Bildes zu platzieren. Die Werte für die Position sind ähnlich wie die Syntax für 2-Werte-Hintergrund-Positionen.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Ausgangspunkt_ des Gradienten oder Bogens ist Norden oder 12:00 Uhr. Der Gradient wird dann um den _from_-Winkel gedreht. Die Farben des Gradienten werden durch die schrägen Farbstopps, ihre Ausgangspunkte, Endpunkte und, dazwischen, optionale schräg angeordnete Farbstopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhints zwischen den angrenzenden Farbstopps verändert werden.

#### Anpassen von Gradienten

Durch Hinzufügen weiterer schräg platzierter Farbstopp-Punkte auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er genau zwischen dem davor befindlichen und dem danach folgenden platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, sind ihre Werte standardmäßig 0deg bzw. 360deg. Die folgenden zwei Gradienten sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig überblenden Farben nahtlos von der Farbe eines Farbstopps zur Farbe des folgenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbverlaufs ist. Sie können diesen Farbverlaufs-Mittelpunkt an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte des Farbverlaufs sein soll. Das folgende Beispiel ist fest rot von Anfang bis zur 10%-Marke, überblendet von Rot zu Blau über 80% der Drehung, mit den letzten 10%, die fest Blau sind. Der Mittelpunkt der Änderung von Rot zu Blau ist jedoch bei der 20%-Marke, anstatt wie ohne den 80grad oder 20% Farbhint bei der 50%-Marke.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen den ersten und letzten an dieser Stelle deklarierten Farben sein. Um kegelförmige Gradienten zu verwenden, um Tortendiagramme zu erstellen — was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstopps, bei denen die Farbstoppwinkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, besteht darin, mehrere Farbstopppositionen zu verwenden. Die folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt bei der 30%-Marke von Rot zu Gelb und überblendet dann über 35% des Gradienten von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt weitere Effekte, die Sie mit kegelförmigen Gradienten erzeugen können. Eigenartigerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem Quadrant oben links und unten rechts weiß und einen Quadrant unten links und oben rechts schwarz erstellen und dann den Gradienten 16 Mal wiederholen (viermal über die Breite und viermal nach unten), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und kombinieren, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern zur Unterstützungstechnologie. Dies ist vor allem für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigen und somit nichts an die Nutzer vermitteln wird. Während es möglich ist, mit kegelförmigen Gradienten Tortendiagramme, Schachbrettmuster und andere Effekte zu erstellen, bieten CSS-Bilder keinen nativen Weg, um alternativen Text zuzuweisen, und daher wird das durch den kegelförmigen Gradienten dargestellte Bild für Screenreader-Nutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die zum Verständnis des Hauptzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verstehen von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Gradient bei 40 Grad

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: conic-gradient(from 40deg, white, black);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

### Abseits des Zentrums liegender Gradient

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("Off-centered_gradient", 120, 120)}}

### Kegelförmiges Tortendiagramm

Dieses Beispiel verwendet mehrere Farbstopps, wobei benachbarte Farben denselben Farbstoppwert haben, was einen Streifeneffekt erzeugt.

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%;
}
```

{{EmbedLiveSample("Gradient_pie-chart", 120, 120)}}

### Schachbrett

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(
      white 0.25turn,
      black 0.25turn 0.5turn,
      white 0.5turn 0.75turn,
      black 0.75turn
    )
    top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Checkerboard", 120, 120)}}

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

In diesem Beispiel wird zur Interpolation das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Feld links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau mit dem kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Das Feld rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei Grüntöne, Gelbtöne und Orangetöne durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für conic-gradient

Bitte sehen Sie [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
