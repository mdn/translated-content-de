---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt gedreht sind (anstatt vom Zentrum aus zu strahlen). Beispiele für kegelförmige Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datenformats {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

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
  - : Durch das Schlüsselwort `from` eingeleitet und sich auf einen Winkel stützend, definiert es die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwenden Sie die gleichen Längen-, Reihenfolgen- und Schlüsselwortwerte wie bei der [`background-position`](/de/docs/Web/CSS/background-position)-Eigenschaft. Der `position`-Wert definiert das Zentrum des Verlaufs. Wenn nicht angegeben, wird standardmäßig der Wert `center` für `position` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stopp-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Achse des Verlaufsumfangs).
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf die Mitte des Farbübergangs erreichen soll. Wird kein Hinweis angegeben, liegt die Mitte des Farbübergangs in der Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in kreisförmigen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat auch ein konischer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description), d.h. er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das es angewandt wird, oder der Größe des `<image>`, wenn sie anders als die Elementgröße festgelegt ist.

Um einen sich wiederholenden konischen Verlauf zu erstellen, der eine 360-Grad-Drehung füllt, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum wird es "konischer" Verlauf genannt? Wenn die Farbstopps auf einer Seite deutlich heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines konischen Verlaufs

Die conic-gradient-Syntax ist ähnlich zur radial-gradient-Syntax, aber die Farbstopps werden um einen Verlaufsbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Mittelpunkt des Verlaufs ausgeht. Bei konischen Verläufen bewegen sich die Farben so, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben nach im Uhrzeigersinn. In einem radialen Verlauf gehen die Farben vom Zentrum einer Ellipse aus nach außen in alle Richtungen.

![Farbstopps entlang des Umfangs eines konischen Verlaufs und die Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird durch das Angeben eines Rotationswinkels, des Zentrums des Verlaufs, und dann durch das Festlegen einer Liste von Farbstopps spezifiziert. Anders als bei linearen und radialen Verläufen, deren Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines konischen Verlaufs mit einem [angle](/de/docs/Web/CSS/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gon, `rad` für Radiant und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gon, 2π Radiant und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren ebenfalls Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Ähnlich wie bei radialen Verläufen ermöglicht die conic-gradient-Syntax, das Zentrum des Verlaufs innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Werte-Background-Position.

Der Verlaufbogen ist der Umfang des Verlaufs. Der _Ausgangspunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann durch den _from_ Winkel rotiert. Die Farben des Verlaufs werden durch die abgewinkelten Farbstopps bestimmt, ihre Ausgangspunkte, Endpunkte und, dazwischen, optionale abgewinkelte Farb-Stopp-Punkte. Die Übergänge zwischen Farben können mit Farbhilfen zwischen den benachbarten Farbstopp-Punkten verändert werden.

#### Anpassen von Verläufen

Indem Sie mehr abgewinkelte Farb-Stopp-Punkte am Verlaufbogen hinzufügen, können Sie einen sehr angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht festlegen, wird er auf halbem Weg zwischen dem davor und dem danach liegenden platziert. Wenn Sie für den ersten oder letzten Farbstopp keinen Winkel angeben, sind deren Werte 0deg bzw. 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben fließend von der Farbe an einem Farbstopp zur Farbe am nächsten Farbstopp, wobei die Mitte zwischen den Farben der Halbwegpunkt zwischen dem Farbwechsel ist. Sie können diesen Farbwechsel-Mittelpunkt „verschieben“, indem Sie einen Farbhint hinzufügen, der anzeigt, wo die Mitte des Farbwechsels sein soll. Das Folgende ist von Anfang an bis zur 10% Markierung solide rot, wechselt von rot zu blau über 80% der Umdrehung und die letzten 10% sind solide blau. Der Mittelpunkt des roten zu blauen Farbwechsels ist jedoch an der 20% Markierung statt an der 50% Markierung, wie es ohne den 80grad oder 20% Farbhint geschehen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an diesem Ort deklarierten Farbe sein. Um konische Verläufe zu verwenden, um Tortendiagramme zu erstellen — welches NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstopps, bei denen die Winkel der Farbstopps zweier benachbarter Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Position-Farbstopps. Die Folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das Folgende wechselt von rot zu gelb bei der 30% Markierung, und dann von gelb zu blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit konischen Verläufen erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer von ihnen. Durch das Erstellen von Quadranten mit einem oberen linken und unteren rechten weißen Quadranten sowie einem unteren linken und oberen rechten schwarzen Quadranten, und dann Wiederholen des Verlaufs 16 Mal (vier mal horizontal und vier mal vertikal), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten miteinander vermischen, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern, um unterstützende Technologie zu unterstützen. Dies ist vor allem für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigen wird und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen, und daher wird das von dem konischen Verlauf dargestellte Bild für Benutzer von Bildschirmlesern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtsinns der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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

### Nicht-zentrierter Verlauf

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

### Gradient Tortendiagramm

Dieses Beispiel verwendet Multi-Position-Farbstopps, wobei benachbarte Farben denselben Farbstoppwert haben und so einen Streifeneffekt erzeugen.

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

In diesem Beispiel wird das Interpolations-[hsl](/de/docs/Web/CSS/color_value/hsl)-Farbmodell verwendet, wobei der [Farbton](/de/docs/Web/CSS/hue) interpoliert wird.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Der Kasten links verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), das bedeutet, die Farbe geht direkt von rot zu blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}}. Der Kasten rechts verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau übergeht und dabei durch Grün, Gelb und Orange läuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Konical-Verlauf-Beispiele

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
