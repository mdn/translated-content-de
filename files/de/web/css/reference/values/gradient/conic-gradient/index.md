---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem Verlauf mit Farbverläufen besteht, die um einen Mittelpunkt herum gedreht sind (anstatt vom Mittelpunkt aus zu strahlen). Beispielhafte kegelförmige Gradienten umfassen Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art des {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Vorangestellt durch den Schlüsselbegriff `from` und mit einem Winkel als Wert, definiert es die Gradientendrehung im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleiche Länge, Reihenfolge und Schlüsselbegriffswerte wie die [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position) Eigenschaft. Der `position` Wert definiert das Zentrum des Gradienten. Falls nicht spezifiziert, wird standardmäßig `center` für `position` verwendet, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stoppwert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopppositionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Kreisumfangsachse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Gradient die Mitte des Farbverlaufs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbverlaufs die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in kegelförmigen Verläufen folgt den gleichen Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein kegelförmiger Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird die Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe des `<image>`, falls diese anders als die Elementgröße festgelegt ist.

Um einen kegelförmigen Verlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung zu füllen, verwenden Sie die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion stattdessen.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum nennt man es einen "kegelförmigen" Verlauf? Wenn die Farbstopps auf der einen Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines kegelförmigen Verlaufs

Die conic-gradient Syntax ist der radial-gradient Syntax ähnlich, aber die Farbstopps werden um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Bei kegelförmigen Verläufen wechseln die Farben, als ob sie um den Mittelpunkt eines Kreises herumgedreht werden, beginnend oben und im Uhrzeigersinn verlaufend. In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse aus in alle Richtungen nach außen.

![Farbstopps entlang des Umfangs eines kegelförmigen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Verlauf wird spezifiziert, indem ein Drehwinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps angegeben wird. Anders als bei linearen und radialen Verläufen, bei denen die Farbstopps durch Bestimmen einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/Reference/Values/angle) angegeben. Einheiten beinhalten `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gradianen, 2π Radianten und 1 Umdrehung. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen. Dies ist jedoch nicht in der Spezifikation festgelegt.

Ähnlich wie bei radialen Verläufen ermöglicht die conic-gradient Syntax das Positionieren des Zentrums des Verlaufs irgendwo innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich der Syntax für zweistellige background-position.

Der Gradientenbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist Norden, oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die angewinkelten Farbstopps bestimmt, deren Startpunkte, Endpunkte und dazwischen, sowie optionale angewinkelte Farbstopppunkte. Die Übergänge zwischen den Farben können mit Farbhints zwischen benachbarten Farbstopps geändert werden.

#### Anpassung von Verläufen

Durch Hinzufügen von mehr angewinkelten Farbstopppunkten auf dem Gradientenbogen können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch eine {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Standort eines Farbstopps nicht angeben, wird er in der Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstop angeben, sind deren Werte 0deg bzw. 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe eines Farbstopps zur Farbe des nachfolgenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Punkt der Farbüberblendung ist. Sie können diesen Mittelpunkt der Farbüberblendung an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte der Farbüberblendung sein soll. Das folgende Beispiel ist von Anfang bis zur 10% Marke vollständig rot, wechselt von rot zu blau über 80% der Drehung, wobei die letzten 10% vollständig blau sind. Der Mittelpunkt der Übergangsänderung von rot zu blau liegt jedoch bei der 20% Marke anstatt bei der 50% Marke, wie es ohne den 80grad oder 20% Farbhint passiert wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Befinden sich zwei oder mehr Farbstopps an derselben Stelle, wird der Übergang eine harte Linie zwischen den ersten und letzten an dieser Stelle deklarierten Farben darstellen. Um kegelförmige Verläufe zur Erstellung von Tortendiagrammen zu verwenden — was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstopps, wobei die Farbstoppwinkel für zwei angrenzende Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionfarbenstopps. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt von rot zu gelb bei der 30%-Marke und wechselt dann von gelb zu blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erzielen können. Merkwürdigerweise ist ein Schachbrett einer davon. Indem man Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellt, und dann den Verlauf 16-mal (viermal horizontal und viermal vertikal) wiederholt, kann man ein Schachbrettmuster erzeugen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen, aber tun Sie es nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologie. Dies ist vorrangig für Screenreader wichtig, da ein Screenreader dessen Anwesenheit nicht meldet und daher seinen Benutzern nichts vermittelt. Während es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit kegelförmigen Verläufen zu erstellen, bietet CSS keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das von dem kegelförmigen Verlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Verlauf bei 40 Grad

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

### Außerzentrierter Verlauf

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

### Verlaufstortendiagramm

Dieses Beispiel verwendet Positionierungsfarbstopps, wobei benachbarte Farben denselben Farbstopwert haben und einen gestreiften Effekt erzeugen.

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

In diesem Beispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem zur Interpolation verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das linke Kästchen verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Das rechte Kästchen verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau wechselt und dabei den längeren Bogen durch Grüntöne, Gelb- und Orangetöne durchquert.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient Beispiele

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
