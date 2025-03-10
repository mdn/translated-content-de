---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem Farbverlauf besteht, der um einen Mittelpunkt rotiert ist (anstatt vom Zentrum auszustrahlen). Beispiele für kegelförmige Verläufe sind Kreisdiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : In Verbindung mit dem Schlüsselwort `from`, und nimmt einen Winkel als Wert an, definiert die Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleichen Längen-, Ordnungs- und Schlüsselwortwerte wie die [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaft. Der `position`-Wert definiert das Zentrum des Verlaufs. Wenn nicht angegeben, wird standardmäßig der Wert `center` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbunterbrechungspunkt mit einem {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von einem oder zwei optionalen Stopp-Positionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbunterbrechungspunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbunterbrechungspunkten der Verlauf die Mitte des Farbübergangs erreichen soll. Wenn ausgelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbunterbrechungspunkten.

> [!NOTE]
> Die Darstellung von Farbunterbrechungspunkten in kegeligen Verläufen folgt denselben Regeln wie [Farbunterbrechungspunkte in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein kegeliger Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn diese auf etwas anderes als die Elementgröße festgelegt ist.

Um einen kegeligen Verlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung auszufüllen, verwenden Sie stattdessen die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>` verwendet werden kann. Aus diesem Grund wird `conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften funktionieren, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es "kegelförmiger" Verlauf genannt? Wenn die Farbunterbrechungspunkte auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines kegeligen Verlaufs

Die Syntax von conic-gradient ist ähnlich der von radial-gradient, aber die Farbunterbrechungspunkte sind um einen Gradientenbogen herum angeordnet, dem Umfang eines Kreises, anstatt auf der Gradientenlinie, die vom Zentrum des Verlaufs ausgeht. Bei kegelförmigen Verläufen ändern sich die Farben, als ob sie um das Zentrum eines Kreises gedreht werden, beginnend oben und im Uhrzeigersinn. In einem radialen Verlauf ändern sich die Farben vom Zentrum einer Ellipse ausgehend in alle Richtungen nach außen.

![Farbunterbrechungspunkte entlang des Umfangs eines kegeligen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegeliger Verlauf wird durch Angabe eines Drehwinkels, des Zentrums des Verlaufs und dann durch Angabe einer Liste von Farbunterbrechungspunkten spezifiziert. Im Gegensatz zu linearen und radialen Verläufen, deren Farbunterbrechungspunkte durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbunterbrechungspunkte eines kegeligen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/angle) spezifiziert. Einheiten sind unter anderem `deg` für Grad, `grad` für Neugrad, `rad` für Radiant, und `turn` für Drehungen. Es gibt 360 Grad, 400 Neugrad, 2π Radiant und 1 Drehung in einem Kreis. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen bietet die kegelgradienten Syntax die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert background-position.

Der Gradientenbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder des Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die angewinkelten Farbunterbrechungspunkte, deren Startpunkte, Endpunkte und dazwischen, sowie optionale angewinkelte Farbunterbrechungspunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhints zwischen den angrenzenden Farben der Farbunterbrechungspunkte verändert werden.

#### Anpassung von Verläufen

Durch das Hinzufügen von mehr angewinkelten Farbunterbrechungspunkten auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbunterbrechungspunkts kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbunterbrechungspunkts nicht angeben, wird er in der Mitte zwischen dem vorhergehenden und dem nachfolgenden platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbunterbrechungspunkt angeben, sind ihre Werte 0deg bzw. 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig gehen die Farben sanft von der Farbe an einem Farbunterbrechungspunkt zur Farbe am nächsten Farbunterbrechungspunkt über, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt des Farbübergangs ist. Sie können diesen Mittelwert des Farbübergangs zu jedem Punkt zwischen zwei Farbunterbrechungspunkten verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo sich der Mitte des Farbübergangs befinden soll. Das folgende Beispiel ist solid Rot vom Start bis zur 10%-Markierung, geht über 80% der Drehung von Rot zu Blau, wobei die letzten 10% solid Blau sind. Der Mittelpunkt des Rot-zu-Blau-Verlaufwechsels befindet sich jedoch bei der 20%-Markierung anstatt bei der 50%-Markierung, wie es ohne den 80grad oder 20% Farbhint passiert wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbunterbrechungspunkte an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle angegebenen Farben sein. Um kegelförmige Verläufe zur Erstellung von Kreisdiagrammen zu verwenden — was NICHT der richtige Weg ist, um Kreisdiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbunterbrechungen, bei denen die Winkel für zwei benachbarte Farbunterbrechungspunkte gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positions-Farbunterbrechungspunkte. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbunterbrechungspunkte sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbunterbrechungspunkte mit niedrigerem Wert überschreiben den Wert des vorherigen Farbunterbrechungspunkts und erzeugen einen harten Übergang. Das folgende Beispiel wechselt bei der 30%-Markierung von Rot zu Gelb und geht dann über 35% des Verlaufs von Gelb zu Blau über:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erstellen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Durch das Erstellen von Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten und anschließendem Wiederholen des Verlaufs 16 Mal (viermal quer und viermal abwärts) können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkelmaßeinheiten mischen, aber tun Sie es nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten assistiver Technologie keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Screenreader wichtig, da ein Screenreader dessen Anwesenheit nicht ankündigen wird und somit seinen Benutzern nichts mitteilt. Während es möglich ist, Kreisdiagramme, Schachbretter und andere Effekte mit kegelförmigen Verläufen zu erstellen, bieten CSS-Bilder keinen nativen Weg, um Alternativtext zuzuweisen, und daher wird das Bild, das durch den kegelförmigen Verlauf dargestellt wird, für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite kritisch sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärung](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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
  background-image: conic-gradient(from 40deg, #fff, #000);
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

### Verlauf Kreisdiagramm

Dieses Beispiel verwendet mehrere Farbunterbrechungspunkte, wobei benachbarte Farben denselben Farbunterbrechungspunktwert haben und so einen gestreiften Effekt erzeugen.

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
      #fff 0.25turn,
      #000 0.25turn 0.5turn,
      #fff 0.5turn 0.75turn,
      #000 0.75turn
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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Feld links verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über die kürzere Kurve auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das Feld rechts verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über die längere Kurve geht und dabei durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient Beispiele

Bitte sehen Sie sich [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlausfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
