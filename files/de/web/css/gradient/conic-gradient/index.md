---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die Funktion **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [function](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem Farbverlauf besteht, der um einen Mittelpunkt rotiert (anstatt vom Zentrum aus zu strahlen). Beispiel für konische Verläufe sind Kreisdiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der Funktion `conic-gradient()` ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, das eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

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
  - : Wird dem Schlüsselwort `from` vorangestellt und nimmt einen Winkel als Wert an, definiert die Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Längen-, Reihenfolge- und Schlüsselwortwerten wie die [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaft definiert der Wert `position` das Zentrum des Verlaufs. Wenn nicht angegeben, wird der Wert `center` standardmäßig verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbstopp mit einem {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}} Hinweis, der definiert, wie der Verlauf zwischen angrenzenden Farbstopps fortschreitet. Die Länge definiert den Punkt zwischen zwei Farbstopps, an dem der Farbverlauf den Mittelpunkt des Farbwechsels erreichen soll. Wenn nicht angegeben, befindet sich der Mittelpunkt des Farbwechsels zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. es hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt wird.

Um einen konischen Verlauf zu erstellen, der sich wiederholt, sodass eine 360-Grad-Drehung ausgefüllt wird, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Weil `<gradient>`-Elemente zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`-Elemente verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum heißt es "konischer" Verlauf? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es von oben betrachtet wie ein Kegel aussehen.

### Zusammensetzung eines konischen Verlaufs

Die Syntax des konischen Verlaufs ähnelt der des radialen Verlaufs, aber die Farbstopps sind um einen Kreisbogen, den Umfang eines Kreises, platziert, anstatt auf der vom Zentrum des Verlaufs ausgehenden Verlaufslinie. Bei konischen Verläufen wechseln die Farben, als ob sie um das Zentrum eines Kreises gedreht werden, wobei sie oben beginnen und im Uhrzeigersinn verlaufen. In einem radialen Verlauf gehen die Farben vom Zentrum einer Ellipse aus in alle Richtungen.

![Farbstopps entlang des Umfangs eines konischen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird durch die Angabe eines Drehwinkels, des Zentrums des Verlaufs und einer Liste von Farbstopps spezifiziert. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch die Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines konischen Verlaufs mit einem [angle](/de/docs/Web/CSS/angle) angegeben. Einheiten sind unter anderem `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gradienten, 2π Radianten und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies gehört nicht zur Spezifikation.

Ähnlich zu radialen Verläufen bietet die Syntax für konische Verläufe die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position ähneln der Syntax für die 2-Wert Hintergrundposition.

Der Verlausbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist Norden bzw. 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die abgewinkelten Farbstopps, ihre Start- und Endpunkte sowie die optionalen abgewinkelten Farbstopp-Punkte dazwischen bestimmt. Die Übergänge zwischen den Farben können mit Farbhinsweisen zwischen den Farbstopps angepasst werden.

#### Anpassung von Verläufen

Indem man mehr abgewinkelte Farbstopps auf dem Verlaufbogen hinzufügt, kann man einen sehr angepassten Übergang zwischen mehreren Farben erzeugen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Standort eines Farbstopps nicht angeben, wird dieser zur Hälfte zwischen dem vorhergehenden und dem folgenden platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, sind ihre Werte jeweils 0deg und 360deg. Die folgenden zwei Verläufe sind äquivalent:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben nahtlos von der Farbe an einem Farbstopp zur Farbe am folgenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt des Farbwechsels ist. Sie können diesen Mittelpunkt des Farbwechsels an irgendeinen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels sein soll. Im folgenden Beispiel ist der Anfangspunkt des Farbwechsels zwischen Rot und Blau jedoch bei der 20% Marke anstatt bei der 50% Marke, wie es ohne den 80grad, oder 20%, Farbhinweis geschehen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Position liegen, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Position deklarierten Farben. Um konische Verläufe zu verwenden, um Kreisdiagramme zu erstellen - was NICHT der richtige Weg ist, da Hintergrundbilder nicht zugänglich sind - verwenden Sie harte Farbstopps, bei denen die Farbstopp-Winkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionfarbstopps. Die folgenden zwei Deklarationen sind äquivalent:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel ändert sich von Rot zu Gelb bei der 30% Marke und wechselt dann von Gelb zu Blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit konischen Verläufen erzeugen können. Merkwürdigerweise ist ein Schachbrettmuster einer von ihnen. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen, dann den Verlauf 16 Mal (vier Mal quer und vier Mal runter) wiederholen, können Sie ein Schachbrett erzeugen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkel-Einheiten mischen, aber das sollten Sie nicht tun. Das oben ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und daher den Benutzern nichts mitteilt. Während es möglich ist, mit konischen Verläufen Kreisdiagramme, Schachbretter und andere Effekte zu erstellen, bietet CSS-Bilder keinerlei Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Verlauf Kreisdiagramm

Dieses Beispiel verwendet Multi-Position Farbstopps, bei denen benachbarte Farben denselben Farbstopp-Wert haben und dadurch einen Streifeneffekt erzeugen.

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

In diesem Beispiel wird das Interpolations-[hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau übergeht und dabei den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet. Die Box auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen übergeht und dabei durch Grüns, Gelbtöne und Orangen geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient Beispiele

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
