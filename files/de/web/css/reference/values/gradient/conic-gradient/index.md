---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus einem Verlauf besteht, dessen Farbwechsel sich um einen Mittelpunkt drehen (anstatt vom Zentrum zu strahlen). Beispielhafte kegelförmige Verläufe umfassen Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine besondere Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

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
  - : Wird durch das Schlüsselwort `from` eingeleitet und nimmt einen Winkel als Wert an, der die Rotation des Verlaufs im Uhrzeigersinn definiert.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwort-Werte wie die [`background-position`](/de/docs/Web/CSS/Reference/Properties/background-position)-Eigenschaft. Der `position`-Wert definiert das Zentrum des Verlaufs. Falls nicht angegeben, ist der Standardwert für `position` `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Verlauf die Mitte des Farbwechsels erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbwechsels die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in kegelförmigen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein kegelförmiger Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird an die Größe des Elements angepasst, auf das es angewendet wird, oder die Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Um einen kegelförmigen Verlauf zu erstellen, der sich so wiederholt, dass er eine 360-Grad-Drehung füllt, verwenden Sie stattdessen die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es "kegelförmiger" Verlauf genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es aus der Vogelperspektive wie ein Kegel aussehen.

### Zusammensetzung eines kegelförmigen Verlaufs

Die Syntax von conic-gradient ähnelt der von radial-gradient, aber die Farbstopps sind um einen Verlaufsbogen, den Umfang eines Kreises, platziert, anstatt auf der Verlaufsachse, die vom Zentrum des Verlaufs ausgeht. Bei kegelförmigen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn. In einem radialsymmetrischen Verlauf gehen die Farben vom Zentrum einer Ellipse in alle Richtungen nach außen über.

![Farbstopps entlang des Umfangs eines kegelförmigen Verlaufs und der Achse eines radialsymmetrischen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Verlauf wird durch Angabe eines Rotationswinkels, des Zentrums des Verlaufs und Angeben einer Liste von Farbstopps definiert. Im Gegensatz zu linearen und radialsymmetrischen Verläufen, deren Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Verlaufs mit einem [angle](/de/docs/Web/CSS/Reference/Values/angle) spezifiziert. Einheiten beinhalten `deg` für Grad, `grad` für Grads, `rad` für Radianten und `turn` für Drehungen. Ein Kreis enthält 360 Grad, 400 Grads, 2π Radianten und 1 Drehung. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen bietet die kegelförmige Verlaufssyntax die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich wie die Syntax für den 2-Wert background-position.

Der Verlaufsbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die gewinkelten Farbstopps, ihre Startpunkte, Endpunkte sowie, dazwischen, optionale gewinkelte Farbhaltepunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen angrenzenden Farben modifiziert werden.

#### Anpassung von Verläufen

Indem Sie mehr gewinkelte Farbhaltepunkte auf dem Verlaufsbogen hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, befindet er sich genau in der Mitte zwischen dem vorhergehenden und dem nachfolgenden Stopp. Wenn Sie keinen Winkel für den ersten oder letzten Farbhalt angeben, sind deren Werte 0deg beziehungsweise 360deg. Die folgenden zwei Verläufe sind äquivalent:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft vom Farbhalt einer Farbe zum Farbhalt der nachfolgenden Farbe, wobei der Mittelpunkt zwischen den Farben der halbe Punkt des Farbübergangs ist. Sie können diesen Übergangsmittelpunkt an einen beliebigen Punkt zwischen zwei Farbhaltepunkten verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo der mittlere Punkt des Farbübergangs liegen soll. Das folgende ist solide Rot vom Startpunkt bis zur 10%-Markierung, wechselt von Rot zu Blau über 80% der Drehung, wobei die letzten 10% solide Blau sind. Der Mittelpunkt des Rot zu Blau Verlaufswechsels liegt jedoch bei der 20%-Markierung anstelle der 50%-Markierung, wie es ohne den 80grad oder 20% Farbhint der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, ist der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle angegebenen Farbe. Um mit kegelförmigen Verläufen Tortendiagramme zu erstellen — was NICHT der korrekte Weg ist, Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstopps, wobei die Farbstopp-Winkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung von mehrfachen Farbpositions-Stops. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Verlauf wechselt bei der 30%-Markierung von Rot zu Gelb und wechselt dann von Gelb zu Blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erstellen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen und dann den Verlauf 16 Mal wiederholen (viermal horizontal und viermal vertikal), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und anpassen, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigt und daher den Benutzern nichts vermittelt. Obwohl es möglich ist, mit kegelförmigen Verläufen Tortendiagramme, Schachbretter und andere Effekte zu erzeugen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, weshalb das durch den kegelförmigen Verlauf dargestellte Bild für Benutzer von Screenreadern nicht zugänglich sein wird. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite kritisch sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Nicht zentrierter Verlauf

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

### Verlauf als Tortendiagramm

Dieses Beispiel verwendet Farbstopps mit mehreren Positionen, wobei benachbarte Farben denselben Farbstopp-Wert haben, was einen gestreiften Effekt erzeugt.

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Hue](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} wechselt. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei durch Grüntöne, Gelbtöne und Orangetöne geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr conic-gradient Beispiele

Bitte lesen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
