---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem Gradienten mit Farbverläufen besteht, die um einen Mittelpunkt gedreht werden (statt vom Zentrum aus zu strahlen). Beispielhafte kegelförmige Gradienten umfassen Kreisdiagramme und [Farbkreise](/de/docs/Glossary/color_wheel). Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Durch den Schlüsselbegriff `from` eingeleitet und einen Winkel als Wert nehmend, definiert die Gradientenrotation im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen-, Ordnungs- und Schlüsselbegriffswerte wie die [`background-position`](/de/docs/Web/CSS/background-position)-Eigenschaft. Der `position`-Wert definiert das Zentrum des Gradienten. Wenn nicht angegeben, wird standardmäßig `center` verwendet, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Gradienten-Umfangsachse).
- `<color-hint>`
  - : Ein [Interpolations-](/de/docs/Glossary/interpolation)Hinweis, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf die Mitte des Farbwechsels erreichen soll. Wenn ausgelassen, ist die Mitte des Farbwechsels die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Gradienten](#gradient_with_multiple_color_stops) folgt denselben Regeln wie Farbstopps in [SVG-Gradienten](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Gradienten hat ein kegelförmiger Gradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Um einen kegelförmigen Gradient zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung zu füllen, verwenden Sie stattdessen die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum wird es "konischer" Gradient genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es aus der Vogelperspektive wie ein Kegel aussehen.

### Zusammensetzung eines konischen Gradienten

Die `conic-gradient`-Syntax ist ähnlich der `radial-gradient`-Syntax, aber die Farbstopps werden um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der von der Mitte des Gradienten ausgehenden Gradientenlinie. Bei konischen Gradienten verlaufen die Farben, als würden sie um das Zentrum eines Kreises gedreht, beginnend oben und im Uhrzeigersinn verlaufend. In einem radialen Gradienten verlaufen die Farben vom Zentrum einer Ellipse ausgehend in alle Richtungen nach außen.

![Farbstopps entlang des Umfangs eines konischen Gradienten und der Achse eines radialen Gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Gradient wird durch die Angabe eines Drehwinkels, des Zentrums des Gradienten und dann die Angabe einer Liste von Farbstopps spezifiziert. Im Gegensatz zu linearen und radialen Gradienten, deren Farbstopps durch die Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines konischen Gradienten mit einem [Angle](/de/docs/Web/CSS/angle) spezifiziert. Zu den Einheiten gehören `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die konische Gradienten unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Gradienten bietet die Syntax der konischen Gradienten die Möglichkeit, das Zentrum des Gradienten überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich wie die Syntax für 2-Wert `background-position`.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Ausgangspunkt_ des Gradienten oder Bogens ist Norden bzw. 12:00 Uhr. Der Gradient wird dann um den _from_-Winkel gedreht. Die Farben des Gradienten werden durch die winkligen Farbstopps bestimmt, deren Ausgangspunkte, Endpunkte und, dazwischen, optionale winklige Farbstopp-Punkte. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Gradienten

Indem mehr winklige Farbstopp-Punkte auf dem Gradientenbogen hinzugefügt werden, kann ein hochgradig angepasster Übergang zwischen mehreren Farben erstellt werden. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn die Position eines Farbstopps nicht angegeben wird, wird er auf halbem Weg zwischen dem vorhergehenden und dem darauffolgenden Farbstopp platziert. Wenn für den ersten oder letzten Farbstopp kein Winkel angegeben wird, sind deren Werte 0deg bzw. 360deg. Die folgenden zwei Gradienten sind äquivalent:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig verlaufen Farben sanft von der Farbe an einem Farbstopp zur Farbe am nachfolgenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbwechsels ist. Dieser Übergangsmittelpunkt kann durch das Hinzufügen eines Farbhinweises, der angibt, wo der Mittelpunkt des Farbwechsels sein soll, an jeden Punkt zwischen zwei Farbstopps verschoben werden. Das folgende Beispiel zeigt durchgehend Rot von Beginn bis zur 10%-Marke, wechselt von Rot zu Blau über 80% der Umdrehung, wobei die letzten 10% durchgehend Blau sind. Der Mittelpunkt des Rot-Blau-Farbwechsels liegt jedoch bei der 20%-Marke anstatt bei der 50%-Marke, wie es ohne den 80°-Farbhinweis, oder 20%, der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps am selben Ort platziert sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt deklarierten Farbe an dieser Position. Um mit konischen Gradienten Tortendiagramme zu erstellen — was NICHT der richtige Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstopps, bei denen die Winkel der angrenzenden Farbstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionsfarbenstopps. Die folgenden zwei Deklarationen sind äquivalent:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit einem niedrigeren Wert werden den Wert des vorhergehenden Farbstopps überschreiben und einen harten Übergang erzeugen. Das folgende Beispiel wechselt bei der 30%-Marke von Rot zu Gelb und wechselt dann von Gelb zu Blau über 35% des Gradienten:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt weitere Effekte, die Sie mit konischen Gradienten erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Quadranten mit einem oberen linken und unteren rechten weißen Quadrat und unteren linken und oberen rechten schwarzen Quadranten erstellt werden, dann den Gradienten 16 Mal wiederholen (viermal horizontal und viermal vertikal), kann ein Schachbrettmuster erstellt werden.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen, aber tun Sie es nicht. Es ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies ist insbesondere für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Während es möglich ist, mit konischen Gradienten Tortendiagramme, Schachbrettmuster und andere Effekte zu erzeugen, bieten CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen. Daher wird das von dem konischen Gradienten dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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

### Gradient-Tortendiagramm

Dieses Beispiel verwendet Mehrpositions-Farbstopps, bei denen benachbarte Farben denselben Farbstopp-Wert haben, wodurch ein gestreifter Effekt entsteht.

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

In diesem Beispiel wird für die Interpolation das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Fenster auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) verwendet wird. Das Fenster auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei durch Grüntöne, Gelbtöne und Orangetöne geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für konische Gradienten

Bitte sehen Sie sich [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

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
