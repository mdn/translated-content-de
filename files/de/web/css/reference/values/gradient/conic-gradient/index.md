---
title: "`conic-gradient()` CSS Funktion"
short-title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: a1da408d85bfa1fc180d15fdc29746ad5f9e9cff
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem Farbverlauf mit Farbübergängen besteht, die um einen Mittelpunkt rotieren (anstatt vom Mittelpunkt aus zu strahlen). Beispiele für konische Verläufe sind Kreisdiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des {{cssxref("gradient")}} Datentyps, der eine spezielle Art von {{cssxref("image")}} ist.

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
```

### Werte

- {{cssxref("angle")}}
  - : Gefolgt vom Schlüsselwort `from` und einem Winkelwert, definiert die Rotation des Gradienten im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft {{cssxref("background-position")}}, der `position` Wert definiert das Zentrum des Gradienten. Wird nichts angegeben, ist der Standardwert für `position` `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{cssxref("angle")}} entlang der Umfangsachse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie der Gradient zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Gradient die Mitte des Farbübergangs erreichen sollte. Wird er weggelassen, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Gradienten hat ein konischer Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, es hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird, oder der Größe des `<image>`, falls es auf etwas anderes als die Elementgröße gesetzt ist.

Um einen konischen Verlauf zu erstellen, der sich wiederholt und so eine 360-Grad-Drehung ausfüllt, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es "konischer" Verlauf genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es aussehen wie ein Kegel von oben.

### Zusammensetzung eines konischen Gradienten

Die Syntax eines konischen Verlaufs ähnelt der Syntax eines radialen Verlaufs, aber die Farbstopps werden um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Bei konischen Verläufen wechseln die Farben so, als ob sie um das Zentrum eines Kreises gedreht werden, beginnend oben und im Uhrzeigersinn verlaufend. In einem radialen Verlauf wechseln die Farben vom Zentrum einer Ellipse, nach außen, in alle Richtungen.

![farbstopps entlang des Umfangs eines konischen_gradienten und der Achse eines radialen_gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird angegeben, indem ein Drehwinkel, der Mittelpunkt des Gradienten und dann eine Liste von Farbstopps angegeben werden. Im Gegensatz zu linearen und radialen Verläufen, bei denen die Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines konischen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/Reference/Values/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Neugrad, `rad` für Radiant und `turn` für Umdrehungen. Ein Kreis umfasst 360 Grad, 400 Neugrad, 2π Radiant und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entspricht, aber dies ist nicht in der Spezifikation.

Ähnlich wie bei radialen Verläufen bietet die konische Gradienten-Syntax die Möglichkeit, den Mittelpunkt des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position ähneln der Syntax für eine 2-Werte-Background-Position.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Startpunkt_ des Gradienten oder Bogens ist Norden oder 12:00 Uhr. Der Gradient wird dann durch den _from_ Winkel gedreht. Die Farben des Gradienten werden durch die geneigten Farbstopps, ihre Startpunkte, Endpunkte und, dazwischen, optionale geneigte Farbstopp-Punkte bestimmt. Die Übergänge zwischen den Farben können mit Farbehinweisen zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Indem Sie mehr geneigte Farbstopp-Punkte auf dem Gradientenbogen hinzufügen, können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Eine Position eines Farbstopps kann explizit durch einen {{cssxref("angle")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird er auf halbem Weg zwischen dem einen, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wenn Sie für den ersten oder letzten Farbstopp keinen Winkel angeben, betragen ihre Werte 0deg bzw. 360deg. Die folgenden zwei Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben nahtlos von der Farbe an einem Farbstopp zu der Farbe am nächsten Farbstopp, wobei der Zwischenpunkt zwischen den Farben der Mittelpunkt des Farbwechsels ist. Sie können diesen Zwischenpunkt des Farbwechsels an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbehinweis hinzufügen, der angibt, wo der mittlere Punkt des Farbwechsels sein soll. Folgendes ist festes Rot vom Start bis zur 10%-Marke, wechselt von Rot zu Blau über 80% der Drehung, wobei die letzten 10% festes Blau sind. Der Zwischenpunkt des Wechsels von Rot zu Blau liegt jedoch bei der 20% Marke statt bei der 50% Marke, wie es ohne den 80grad oder 20% Farbehinweis der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an demselben Ort sind, wird der Übergang eine harte Linie zwischen der ersten und letzten Farbe, die an dieser Stelle deklariert wurde. Um mit konischen Verläufen Kreisdiagramme zu erstellen - was nicht der korrekte Weg ist, Kreisdiagramme als Hintergrundbilder zu erstellen, da diese nicht barrierefrei sind - verwenden Sie harte Farbstopps, bei denen die Winkel der Farbstopps für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg dies zu tun ist, mehrere Positionsfarbenstopps zu verwenden. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps von geringeren Werten überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Folgendes ändert sich von Rot zu Gelb bei der 30%-Marke und dann von Gelb zu Blau über 35% des Gradienten:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Mit konischen Verläufen können Sie weitere Effekte erzielen. Merkwürdigerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem weißen Quadranten oben links und unten rechts und einem schwarzen Quadranten unten links und oben rechts erstellen, und dann den Gradienten 16 Mal wiederholen (vier Mal quer und vier Mal nach unten), können Sie ein Schachbrettmuster erzeugen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white calc(pi * 1rad) calc(pi * 1.5rad), black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkelmaßeinheiten mischen und kombinieren, aber das sollten Sie nicht tun. Oben ist es schwer zu lesen.

## Formaler Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und daher seinen Benutzern nichts vermittelt. Während es möglich ist, Kreisdiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher ist das Bild, das durch den konischen Verlauf dargestellt wird, für Screenreader-Benutzer nicht zugänglich. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Außerhalb des Zentrums gelegener Gradient

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

### Gradient-Kreisdiagramm

Dieses Beispiel verwendet Multi-Positions Farbstopps, bei denen benachbarte Farben denselben Farbstoppwert haben, wodurch ein gestreifter Effekt entsteht.

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

### Schachbrettmuster

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

In diesem Beispiel wird das Interpolationsverfahren des [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystems verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box links verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau geht und dabei den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} nutzt. Die Box rechts verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau geht und dabei den längeren Bogen durchläuft, indem sie durch Grüns, Gelbs und Oranges navigiert.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Farbkreis

```html hidden
<div></div>
```

```css hidden
div {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
```

```css
div {
  background-image: conic-gradient(
    in hsl longer hue,
    hsl(360 100% 50%),
    hsl(0 100% 50%)
  );
}
```

{{EmbedLiveSample("Color Wheel", 100, 100)}}

### Weitere konische-Gradienten-Beispiele

Sehen Sie bitte [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

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
