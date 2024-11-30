---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 36197e9ff8f503d40729889367fe1ad76d2f3640
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem Gradienten besteht, dessen Farbverläufe um einen Mittelpunkt gedreht sind (anstatt vom Zentrum auszustrahlen). Beispiele für kegelförmige Gradienten sind Kuchendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt vom {{CSSxRef("&lt;gradient&gt;")}}-Datentyp, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## Syntax

```css
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
  - : Vorangestellt mit dem Schlüsselwort `from` und nimmt einen Winkel als Wert an, definiert die Drehung des Gradienten im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen, Reihenfolgen und Schlüsselwortwerte wie die Eigenschaft [`background-position`](/de/docs/Web/CSS/background-position), der `position`-Wert definiert das Zentrum des Gradienten. Wenn nicht angegeben, wird standardmäßig `center` als Wert für `position` verwendet, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}}-Hinweis, der definiert, wie der Gradient zwischen angrenzenden Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Gradient die Mitte des Farbverlaufs erreichen soll. Wird er weggelassen, liegt der Mittelpunkt des Farbverlaufs in der Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in kegelförmigen Gradienten folgt denselben Regeln wie [Farbstopps in linearen Gradienten](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Gradienten hat ein kegelförmiger Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das es angewendet wird, oder der Größe des `<image>`, wenn diese auf etwas anderes als die Elementgröße gesetzt ist.

Um einen kegelförmigen Gradient zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung zu füllen, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum wird er „kegelförmiger“ Gradient genannt? Wenn die Farbstopps auf einer Seite viel heller als auf der anderen sind, kann es aus der Vogelperspektive wie ein Kegel aussehen.

### Zusammensetzung eines kegelförmigen Gradienten

Die Syntax von conic-gradient ist ähnlich der von radial-gradient, aber die Farbstopps werden entlang eines Gradientenbogens, dem Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Bei kegelförmigen Gradienten ändern sich die Farben, als ob sie um das Zentrum eines Kreises gewirbelt würden, beginnend oben und im Uhrzeigersinn. In einem radialen Gradient verlaufen die Farben vom Zentrum einer Ellipse aus, nach außen, in alle Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Gradienten und die Achse eines radialen Gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Gradient wird angegeben, indem ein Drehwinkel, das Zentrum des Gradienten und dann eine Liste von Farbstopps spezifiziert wird. Im Gegensatz zu linearen und radialen Gradienten, deren Farbstopps durch Angabe einer {{CSSxRef("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Gradienten mit einem [Winkel](/de/docs/Web/CSS/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gon, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung. Browser, die kegelförmige Gradienten unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Gradienten ermöglicht die Syntax der kegelförmigen Gradienten, das Zentrum des Gradienten überall im Bild oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Werte-Hintergrundpositionen.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Startpunkt_ des Gradienten oder Bogens ist Norden, oder 12:00 Uhr. Der Gradient wird dann um den _from_-Winkel gedreht. Die Farben des Gradienten werden durch die angewinkelten Farbstopps, ihre Startpunkte, Endpunkte und die optionalen angewinkelten Farbstopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhints zwischen den Farbstopp-Punkten benachbarter Farben verändert werden.

#### Gradienten anpassen

Durch das Hinzufügen weiterer angewinkelter Farbstopp-Punkte auf dem Gradientenbogen können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Eine Farbstoppposition kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er auf halbem Weg zwischen dem vorhergehenden und dem folgenden platziert. Wenn Sie keinen Winkel für den ersten oder den letzten Farbstopp angeben, beträgt ihr Wert 0deg bzw. 360deg. Die folgenden zwei Gradienten sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig verlaufen die Farben fließend vom Farbstopp einer Farbe bis zum Farbstopp der folgenden Farbe, wobei der Mittelpunkt der Farben der halbe Weg zwischen dem Farbverlauf ist. Sie können diesen Farbverlaufsmittelpunkt an einen beliebigen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo der Mittelpunkt des Farbverlaufs liegen soll. Das folgende Beispiel ist durchgehend rot vom Start bis zur 10%-Marke, verläuft von rot zu blau über 80% der Umdrehung, wobei die letzten 10% durchgehend blau sind. Der Mittelpunkt des roten zu blauen Gradientenwechsels liegt jedoch bei der 20%-Marke anstatt bei der 50%-Marke, wie es ohne den 80grad- oder 20%-Farbhint der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Position sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein. Um kegelförmige Gradienten zur Erstellung von Kuchendiagrammen zu verwenden — was NICHT der korrekte Weg ist, um Kuchendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht barrierefrei sind — verwenden Sie harte Farbstopps, bei denen die Farbstopp-Winkel für zwei benachbarte Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung von multiplen Positionsfarbstopps. Die folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgeführt werden. Nachfolgende Farbstopps mit niedrigeren Werten überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Folgendes ändert sich von rot zu gelb an der 30%-Marke und wechselt dann von gelb zu blau über 35% des Gradienten:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Gradienten erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Durch die Erstellung von Quadranten mit einem weißen oberen linken und unteren rechten Quadranten und schwarzen unteren linken und oberen rechten Quadranten und dann dem Wiederholen des Gradienten 16 Mal (viermal quer und viermal nach unten) können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und kombinieren, aber tun Sie es nicht. Das oben erwähnte Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmleseprogramme wichtig, da ein Bildschirmleseprogramm seine Anwesenheit nicht ankündigt und daher dem Benutzer nichts vermittelt. Obwohl es möglich ist, Kuchendiagramme, Schachbretter und andere Effekte mit kegelförmigen Gradienten zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den kegelförmigen Gradient dargestellte Bild für Bildschirmleser-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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
  background-image: conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

### Versetzter Gradient

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

### Gradient-Kuchendiagramm

Dieses Beispiel verwendet Farbstopps mit mehreren Positionen, wobei angrenzende Farben denselben Farbstoppwert haben und so einen Streifeneffekt erzeugen.

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

In diesem Beispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsytem für die Interpolation verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Feld auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), das bedeutet, dass die Farbe direkt von rot nach blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} wechselt. Das Feld auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), das bedeutet, dass die Farbe von rot nach blau über den längeren Bogen wechselt und dabei durch Grüntöne, Gelbtöne und Orangetöne geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient-Beispiele

Bitte sehen Sie die [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
