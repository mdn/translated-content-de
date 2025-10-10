---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erzeugt ein Bild, das aus einem Verlauf mit Farbwechseln besteht, die um einen Mittelpunkt gedreht sind (anstatt vom Zentrum auszustrahlen). Beispiele für Kegelverläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Eingeleitet durch den Schlüsselbegriff `from` und mit einem Winkel als Wert definiert, bestimmt die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleichen Längen-, Ordnungs- und Schlüsselwortwerte wie die Eigenschaft [`background-position`](/de/docs/Web/CSS/background-position). Der `position`-Wert definiert das Zentrum des Verlaufs. Wenn nicht spezifiziert, ist der Standardwert für die `position` `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbhaltepunkt-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbhaltepunkten fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbhaltepunkten der Farbverlauf den Mittelpunkt des Farbwechsels erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbhaltepunkten.

> [!NOTE]
> Die Darstellung von Farbhaltepunkten in Kegelverläufen folgt den gleichen Regeln wie [Farbhaltepunkte in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein Kegelverlauf [keine intrinsischen Maße](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das es angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Um einen Kegelverlauf zu erstellen, der so wiederholt wird, dass er eine 360-Grad-Drehung füllt, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum heißt es Kegelverlauf? Wenn die Farbhaltepunkte auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines Kegelverlaufs

Die Syntax von conic-gradient ähnelt der Syntax von radial-gradient, aber die Farbhaltepunkt sind um einen Verlaufskreis, den Umfang eines Kreises, herum platziert, anstatt auf der Verlauslinie, die vom Zentrum des Verlaufs ausgeht. Bei Kegelverläufen ändern sich die Farben, als würden sie sich um das Zentrum eines Kreises drehen, beginnend oben und im Uhrzeigersinn fortlaufend. In einem radiale Gradient verlaufen die Farben vom Zentrum einer Ellipse ausgehend nach außen in alle Richtungen.

![Farbhaltepunkt entlang des Umfangs eines Kegelverlaufs und der Achse eines radialen Gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein Kegelverlauf wird durch Angabe eines Drehwinkels, des Zentrums des Verlaufs und dann durch Angabe einer Liste von Farbhaltepunkten spezifiziert. Anders als bei linearen und radialen Verläufen, deren Farbhaltepunkte durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbhaltepunkte eines Kegelverlaufs mit einem [Angle](/de/docs/Web/CSS/angle) spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radiant und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gradient, 2π Radiant und 1 Umdrehung. Browser, die Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen bietet die Syntax des Kegelverlaufs die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position ähneln der Syntax für 2-Werte-Hintergrund Position.

Der Verlaufskreis ist der Umfang des Verlaufs. Der _Ausgangspunkt_ des Verlaufs oder Kreises ist Norden bzw. 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die angewinkelten Farbhaltepunkte, ihre Ausgangspunkte, Endpunkte und dazwischen durch optionale angewinkelte Farbhaltepunktpositionen bestimmt. Die Übergänge zwischen den Farben können mit Farbhints zwischen den Farbhaltepunkten benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer angewinkelter Farbhaltepunkte auf dem Verlaufskreis können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbhaltepunkts kann explizit durch die Verwendung einer {{CSSxRef("&lt;angle&gt;")}} bestimmt werden. Wenn Sie die Position eines Farbhaltepunkts nicht angeben, wird er auf halbem Weg zwischen dem einen, der ihm vorangeht und dem einen, der ihm folgt, platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbhaltepunkt angeben, betragen deren Werte 0deg bzw. 360deg. Die folgenden zwei Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig verlaufen Farben sanft von der Farbe an einem Farbhaltepunkt zur Farbe am darauffolgenden Farbhaltepunkt, wobei der Mittelpunkt zwischen den Farben der halbe Punkt zwischen dem Farbverlaufwechsel ist. Sie können diesen Mittelpunkt verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo der Mittelteil des Farbverlaufs sein soll. Der folgende ist festes Rot vom Start bis zur 10%-Marke, wechselt von Rot zu Blau über 80% der Kurve, wobei die letzten 10% festes Blau sind. Der Mittelpunkt des Rot-zu-Blau-Farbverlaufswechsels ist jedoch an der 20%-Marke statt an der 50%-Marke, wie es ohne den 80grad oder 20% Farbhint der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbhaltepunkte an der gleichen Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Position deklarierten Farbe sein. Um conic gradients zur Erstellung von Tortendiagrammen zu verwenden — was NICHT die korrekte Methode zur Erstellung von Tortendiagrammen als Hintergrundbilder ist, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbhaltepunkte, bei denen die Winkelangaben für zwei benachbarte Farbhaltepunkte gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Farbenhaltspositionen. Die folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbhaltepunkte sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbhaltepunkte mit niedrigeren Werten werden den Wert des vorherigen Farbhaltepunktes überschreiben und einen harten Übergang erzeugen. Die folgenden wechseln von Rot zu Gelb an der 30%-Marke und dann von Gelb zu Blau über 35% des Verlaufs:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit Kegelverläufen erstellen können. Merkwürdigerweise ist ein Schachbrett einer davon. Indem Sie Quadranten mit einem weißen Quadranten links oben und rechts unten sowie einem schwarzen Quadranten links unten und rechts oben erstellen und dann den Gradienten 16 Mal (vier Mal entlang der Horizontale und vier Mal entlang der Vertikale) wiederholen, können Sie ein Schachbrett erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Ja, Sie können verschiedene Winkeleinheiten mischen und kombinieren, aber tun Sie es nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmleser wichtig, da ein Bildschirmleser seine Existenz nicht ankündigen wird und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit conic gradients zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und das durch den Kegelverlauf dargestellte Bild wird für Benutzer von Bildschirmlesern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgs-Kriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

Dieses Beispiel verwendet Farbhaltepunkte mit mehreren Positionen, wobei benachbarte Farben denselben Farbhaltepunktwert haben, was einen gestreiften Effekt erzeugt.

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

In diesem Beispiel für Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Der links platzierte Kasten verwendet eine [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot nach Blau über den kürzeren Kreisbogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verläuft. Der rechts platzierte Kasten verwendet eine [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot nach Blau über den längeren Kreisbogen, durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele zu conic-gradient

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
