---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem Farbverlauf mit Farbwechseln besteht, die um einen Mittelpunkt rotieren (anstatt vom Zentrum aus zu strahlen). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der Funktion `conic-gradient()` ist ein Objekt vom {{CSSxRef("&lt;gradient&gt;")}} Datentyp, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Geht dem Schlüsselbegriff `from` voraus und nimmt einen Winkel als Wert, der die Rotation des Verlaufs im Uhrzeigersinn definiert.
- `<position>`
  - : Verwendet die gleiche Länge, Reihenfolge und Schlüsselbegriffe wie die Eigenschaft {{cssxref("background-position")}}, der `position` Wert definiert das Zentrum des Verlaufs. Wenn nicht angegeben, wird standardmäßig `center` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbwert des {{CSSxRef("&lt;color&gt;")}} eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}} Hinweis, der definiert, wie der Verlauf zwischen den angrenzenden Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Verlauf die Mitte des Farbübergangs erreichen soll. Wird dies weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe oder bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Um einen konischen Verlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Rotation zu füllen, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es ein "konischer" Verlauf genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines konischen Verlaufs

Die Syntax für konische Verläufe ist der Syntax für radiale Verläufe ähnlich, aber die Farbstopps werden um einen Verlaufskreis, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Zentrum des Verlaufs ausgeht. Mit konischen Verläufen ändern sich die Farben, als würden sie um das Zentrum eines Kreises gedreht, beginnend oben und im Uhrzeigersinn verlaufend. In einem radialen Verlauf ändern sich die Farben vom Zentrum einer Ellipse aus in alle Richtungen.

![Farbstopps entlang des Umfangs eines konischen Verlaufs und die Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird durch Angabe eines Drehwinkels, des Zentrums des Verlaufs und anschließend einer Liste von Farbstopps spezifiziert. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines konischen Verlaufs mit einem [angle](/de/docs/Web/CSS/Reference/Values/angle) angegeben. Einheiten enthalten `deg` für Grad, `grad` für Gradien, `rad` für Bogenmaß und `turn` für Drehungen. Es gibt 360 Grad, 400 Graden, 2π Bogenmaß und 1 Drehung in einem Kreis. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% gleichbedeutend mit 360 Grad sind, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen ermöglicht die Syntax für konische Verläufe das Positionieren des Verlaufszentrums an einer beliebigen Stelle innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich wie die Syntax für die 2-Wert background-position.

Der Verlaufsbogen ist der Umfang des Verlaufs. Der _Ausgangspunkt_ des Verlaufs oder Bogens ist Norden, oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die Winkel-Farbstopps, ihre Ausgangspunkte, Endpunkte und dazwischen gelegene optionale Winkel-Farbstopppunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhints zwischen den Farbstopps der angrenzenden Farben verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer Winkel-Farbstopppunkte auf dem Verlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Eine Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird sie in der Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wenn Sie für den ersten oder letzten Farbstopp keinen Winkel angeben, sind ihre Werte 0deg bzw. 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig erfolgt der Farbübergang fließend von der Farbe an einem Farbstopp zur Farbe am nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt des Farbwechsels ist. Sie können diesen Farbübergangsmittelpunkt an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbverlaufs sein soll. Der folgende Verlauf ist von Anfang an bis zur 10-%-Marke einheitlich rot, wechselt über 80% der Drehung von Rot zu Blau, wobei die letzten 10% einheitlich blau sind. Der Mittelpunkt des Farbwechsels von Rot zu Blau liegt jedoch bei der 20-%-Marke anstatt bei der 50-%-Marke, was ohne den 80grad oder 20% Farbhinweis der Fall wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt an diesem Ort deklarierten Farbe sein. Um mit konischen Verläufen Tortendiagramme zu erstellen — was NICHT der richtige Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstopps, bei denen die Farbstoppwinkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionsfarbstopps. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Übergang ändert sich bei der 30-%-Marke von Rot zu Gelb und wechselt dann über 35% des Verlaufs von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit konischen Verläufen erstellen können. Merkwürdigerweise ist ein Schachbrett einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen und dann den Verlauf 16 Mal wiederholen (vier Mal über die Breite und vier Mal in die Höhe), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können unterschiedliche Winkeleinheiten mischen und anpassen, aber das sollten Sie nicht. Das obige Beispiel ist schwer lesbar.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten assistiver Technologie keine besonderen Informationen über Hintergrundbilder. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Während es möglich ist, mit konischen Verläufen Tortendiagramme, Schachbretter und andere Effekte zu erstellen, bieten CSS-Bilder keinen nativen Weg, um alternativen Text zuzuweisen, und daher wird das Bild, das durch den konischen Verlauf dargestellt wird, für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Erklärung der WCAG, Leitlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Erklärung der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Verlauf-Tortendiagramm

Dieses Beispiel verwendet Mehrpositions-Farbstopps, wobei angrenzende Farben denselben Farbstoppwert haben, was einen Streifeneffekt erzeugt.

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

### Interpolieren mit Farbton

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

In diesem Interpolationsbeispiel wird das [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet, und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot nach Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot nach Blau über den längeren Bogen verläuft, der durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere konische Farbverlaufsbeispiele

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
