---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem Verlauf mit Farbübergängen besteht, die um einen Mittelpunkt gedreht werden (statt vom Zentrum aus zu strahlen). Beispielhafte kegelförmige Verläufe beinhalten Tortendiagramme und {{Glossary("color_wheel", "Farbräder")}}. Das Ergebnis der Funktion `conic-gradient()` ist ein Objekt des {{cssxref("gradient")}} Datentyps, der eine spezielle Art von {{cssxref("image")}} ist.

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

- {{cssxref("angle")}}
  - : Vom `from` Schlüsselwort gefolgt und nimmt einen Winkel als Wert, definiert die Gradationsrotation im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Länge-, Reihenfolge- und Schlüsselwortwerten wie die {{cssxref("background-position")}} Eigenschaft verwendet, definiert der `position` Wert das Zentrum des Verlaufs. Wenn nicht angegeben, wird standardmäßig der Wert `center` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbstopps {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von einem oder zwei optionalen Haltepunkten (ein {{cssxref("angle")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Verlauf die Mitte des Farbübergangs erreichen sollte. Wenn weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Das Rendering von Farbstopps in kegelförmigen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie jeder Verlauf hat ein kegelförmiger Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn es als etwas Anderes als die Elementgröße gesetzt ist.

Um einen kegelförmigen Verlauf zu erstellen, der sich so wiederholt, dass eine 360-Grad-Drehung gefüllt wird, sollten Sie die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion verwenden.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es ein "kegelförmiger" Verlauf genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines kegelförmigen Verlaufs

Die Syntax von conic-gradient ist der von radial-gradient ähnlich, aber die Farbstopps sind um einen Gradientenbogen, den Umfang eines Kreises, herum platziert und nicht auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Bei kegelförmigen Verläufen ändern die Farben sich so, als ob sie um das Zentrum eines Kreises gedreht werden und oben beginnen, im Uhrzeigersinn. In einem radialen Verlauf ändern sich die Farben vom Zentrum einer Ellipse ausgehend, nach außen, in alle Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Verlaufs und die Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Verlauf wird durch die Angabe eines Drehwinkels, des Zentrums des Verlaufs und einer Liste von Farbstopps spezifiziert. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch die Angabe einer {{cssxref("length")}} gesetzt werden, werden die Farbstopps eines kegelförmigen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/Reference/Values/angle) spezifiziert. Einheiten sind `deg` für Grad, `grad` für Gon, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation festgelegt.

Ähnlich wie bei radialen Verläufen bietet die Syntax von kegelförmigen Verläufen die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich zur Syntax für 2-Werte Hintergrund-Position.

Der Verlaufsbogen ist der Umfang des Gradienten. Der _Ausgangspunkt_ des Verlaufs oder Bogens ist der Norden, oder 12:00 Uhr. Der Verlauf wird dann um den _vom_ Winkel gedreht. Die Farben des Verlaufs werden durch die angewinkelten Farbstopps bestimmt, ihre Ausgangspunkte, Endpunkte und dazwischen mögliche angewinkelte Farbstopppunkte. Die Übergänge zwischen den Farben können mit Farbhilfen zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Indem Sie mehr angewinkelte Farbstopppunkte auf dem Verlaufsbogen hinzufügen, können Sie einen sehr angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{cssxref("angle")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er in der Mitte zwischen dem, der ihm vorausgeht und dem, der ihm folgt, platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstop angeben, betragen ihre Werte 0deg beziehungsweise 360deg. Die folgenden zwei Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig ändern sich die Farben reibungslos von der Farbe eines Farbstopps zur Farbe des nachfolgenden Farbstopps, wobei die Mitte zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Farbübergangs-Mittelpunkt an jede Stelle zwischen zwei Farbstopps verschieben, indem Sie eine Farbhilfe hinzufügen, die angibt, wo die Mitte des Farbübergangs sein soll. Der folgende Verlauf ist bis zur 10%-Marke durchgehend rot, geht dann über 80% der Umdrehung von Rot zu Blau über, wobei die letzten 10% durchgehend blau sind. Der Mittelpunkt der Rot-Blau Verlauf-Änderung liegt jedoch bei der 20%-Marke anstatt bei der 50%-Marke, was ohne die 80grad- oder 20%-Farbhilfe passiert wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle deklarierten Farbe sein. Um kegelförmige Verläufe zu verwenden, um Tortendiagramme zu erstellen — was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — sollten harte Farbstopps verwendet werden, bei denen die Farbstoppwinkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionsfarbstopps. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps niedrigerer Werte überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Verlauf wechselt bei der 30%-Marke von Rot zu Gelb und geht dann über 35% des Gradienten von Gelb zu Blau über:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erstellen können. Seltsamerweise ist ein Schachbrett einer davon. Durch die Erstellung von Quadranten mit einem weißen Quadranten oben links und unten rechts und einem schwarzen Quadranten unten links und oben rechts sowie der Wiederholung des Verlaufs 16 Mal (viermal quer und viermal hoch) können Sie ein Schachbrett erzeugen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, mit kegelförmigen Verläufen Tortendiagramme, Schachbretter und andere Effekte zu erstellen, bietet CSS-Bilder keinen nativen Weg, um Alternativtext zuzuweisen, und daher wird das durch den kegelförmigen Verlauf dargestellte Bild für Benutzer nicht zugänglich sein, die Screenreader verwenden. Wenn das Bild Informationen enthält, die wichtig sind, um den Gesamtsinn der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Erklärung zu WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Abseits zentrierter Verlauf

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

### Verlauf-Tortendiagramm

Dieses Beispiel verwendet Mehrpositionsfarbstopps, wobei benachbarte Farben denselben Wert für den Farbstopp haben, wodurch ein Streifeneffekt entsteht.

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

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und [hue](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Feld links verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau übergeht und den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet. Das Feld rechts verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau übergeht, indem sie den längeren Bogen durchläuft, durch Grüntöne, Gelb und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
