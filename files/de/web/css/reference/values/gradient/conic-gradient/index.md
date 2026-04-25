---
title: "`conic-gradient()` CSS-Funktion"
short-title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus einem Verlauf besteht, bei dem sich die Farbverläufe um einen Mittelpunkt drehen (anstatt von dort auszustrahlen). Beispiele für konische Verläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datentyps {{cssxref("gradient")}}, der eine spezielle Art von {{cssxref("image")}} ist.

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
  - : Gefolgt vom Schlüsselwort `from` und mit einem Winkel als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mit den gleichen Längen-, Reihenfolge- und Schlüsselwortwerten wie die Eigenschaft {{cssxref("background-position")}}, definiert der `position`-Wert das Zentrum des Verlaufs. Wenn nicht angegeben, ist der standardmäßige Wert für `position` `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Überblendpunkt mit einem {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von ein oder zwei optionalen Stoppositionen (ein {{cssxref("angle")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie der Verlauf zwischen benachbarten Überblendpunkten fortschreitet. Die Länge definiert den Punkt zwischen zwei Überblendpunkten, an dem der Farbübergang seinen Mittelpunkt erreicht. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Überblendpunkten.

> [!NOTE]
> Das Rendering von Überblendpunkten in konischen Verläufen folgt den gleichen Regeln wie [Überblendpunkte in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Um einen konischen Verlauf zu erstellen, der sich so wiederholt, dass eine 360-Grad-Rotation ausgefüllt wird, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>` zur Datentypkategorie `<image>` gehört, können sie nur dort verwendet werden, wo `<image>`-Typen verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Warum wird es als "konischer" Verlauf bezeichnet? Wenn die Überblendpunkte auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines konischen Verlaufs

Die Syntax von conic-gradient ist ähnlich der von radial-gradient, aber die Überblendpunkte sind um einen Verlaufsbogen, den Umfang eines Kreises, platziert, anstatt auf der Linie des Verlaufs, die vom Mittelpunkt des Verlaufs ausgeht. Bei konischen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn. Bei einem radialen Verlauf wechseln die Farben vom Mittelpunkt einer Ellipse aus in alle Richtungen.

![Überblendpunkte entlang des Umfangs eines konischen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird spezifiziert, indem ein Rotationswinkel angegeben wird, das Zentrum des Verlaufs und dann eine Liste von Überblendpunkten spezifiziert werden. Im Gegensatz zu linearen und radialen Verläufen, deren Überblendpunkte durch die Angabe einer {{cssxref("length")}} positioniert sind, werden die Überblendpunkte eines konischen Verlaufs mit einem [Winkel](/de/docs/Web/CSS/Reference/Values/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radiant und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Graden, 2π Radiant und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100 % 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen bietet die Konicsyntax die Möglichkeit, das Zentrum des Verlaufs irgendwo innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert-Hintergrund-Positionen.

Der Verlaufsbogen ist der Umfang des Verlaufs. Der _Ausgangspunkt_ des Verlaufs oder Bogens ist Norden, oder 12:00 Uhr. Der Verlauf wird dann um den _from_-Winkel gedreht. Die Farben des Verlaufs werden durch die angewinkelten Überblendpunkte, ihre Ausgangspunkte, Endpunkte und dazwischen durch optionale angewinkelte Überblendpunkte bestimmt. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen den Überblendpunkten benachbarter Farben verändert werden.

#### Verläufe anpassen

Indem Sie mehr angewinkelte Überblendpunkte auf dem Verlaufsbogen hinzufügen, können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Überblendpunktes kann explizit durch die Verwendung eines {{cssxref("angle")}} definiert werden. Wenn Sie den Standort eines Überblendpunktes nicht angeben, wird er in die Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, gesetzt. Wenn Sie keinen Winkel für den ersten oder letzten Überblendpunkt angeben, sind deren Werte 0deg und 360deg. Die folgenden zwei Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Überblendpunkt zur Farbe am darauffolgenden Überblendpunkt, wobei der Mittelpunkt zwischen den Farben der halbe Punkt zwischen dem Farbwechsel ist. Sie können diesen Farbwechselsmittelpunkt an jeden Punkt zwischen zwei Überblendpunkten verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels sein soll. Der folgende ist durchgehend rot vom Start bis zur 10%-Marke, wechselt von Rot zu Blau über 80% der Umdrehung, wobei die letzten 10% durchgehend blau sind. Der Mittelpunkt des Rot-zu-Blau-Verlaufswechsels liegt jedoch bei der 20%-Marke und nicht bei der 50%-Marke, wie es ohne den 80grad- oder 20%-Farbhint geschehen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Überblendpunkte an der gleichen Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle angegebenen Farben sein. Um konische Verläufe zu verwenden, um Tortendiagramme zu erstellen — was NICHT der richtige Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da sie nicht barrierefrei sind — verwenden Sie harte Überblendpunkte, bei denen die Winkel der Überblendpunkte zweier benachbarter Überblendpunkte gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionen von Überblendpunkten. Die folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Überblendpunkte sollten in aufsteigender Reihenfolge aufgelistet sein. Nachfolgende Überblendpunkte mit niedrigeren Werten überschreiben den Wert des vorherigen Überblendpunktes und erzeugen einen harten Übergang. Der folgende wechselt bei der 30%-Marke von Rot zu Gelb und dann zwischen Gelb und Blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit konischen Verläufen erzeugen können. Seltsamerweise ist ein Schachbrett einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadrat und einem unteren linken und oberen rechten schwarzen Quadrat erstellen und dann den Verlauf 16 Mal wiederholen (vier Mal quer und vier Mal runter), können Sie ein Schachbrett machen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white calc(pi * 1rad) calc(pi * 1.5rad), black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und anpassen, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Auch wenn es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die zum Verständnis des Hauptzwecks der Seite notwendig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgs-Kriterium 1.1.1 verstehen | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Verlaufs-Tortendiagramm

Dieses Beispiel verwendet Farbunterbrechungen mit mehreren Positionen, wobei benachbarte Farben denselben Farbunterbrechungswert haben, was einen Streifeneffekt erzeugt.

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

### Interpolierung mit Farbton

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

In diesem Beispiel wird für die Interpolation das [hsl]-Farbmodell](/de/docs/Web/CSS/Reference/Values/color_value/hsl) verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet eine [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Die Box auf der rechten Seite verwendet eine [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, durch Grün-, Gelb- und Orangetöne hindurch.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für conic-gradient

Bitte sehen Sie [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
