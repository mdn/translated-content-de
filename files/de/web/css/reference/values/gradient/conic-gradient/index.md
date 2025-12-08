---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: 8b13a763f6e4e5430671861bb686de5d9ad3bb9c
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Function](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem Farbverlauf besteht, dessen Farbübergänge um einen Mittelpunkt rotieren (anstatt vom Zentrum auszustrahlen). Beispiele für kegelige Farbverläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreis")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Eingeleitet durch den Schlüsselbegriff `from` und mit einem Winkel als Wert, definiert die Gradientenrotation im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen-, Reihenfolge- und Schlüsselwert-Bedingungen wie die Eigenschaft {{cssxref("background-position")}}; der `position`-Wert definiert das Zentrum des Gradienten. Wenn nicht angegeben, ist der Standardwert `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbwert einer Farbunterbrechung {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Gradientenperipherie).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie der Gradient zwischen benachbarten Farbunterbrechungen verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbunterbrechungen der Gradient die Mitte des Farbübergangs erreichen sollte. Wenn weggelassen, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farbunterbrechungen.

> [!NOTE]
> Die Darstellung von Farbverläufen in kegeligen Gradienten folgt den gleichen Regeln wie [Farbverläufe in linearen Gradienten](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Farbverlauf hat ein kegelförmiger Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat weder eine natürliche oder bevorzugte Größe noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das es angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt wird.

Um einen konischen Farbverlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung auszufüllen, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Warum wird es als "konischer" Verlauf bezeichnet? Wenn die Farbunterbrechungen auf einer Seite deutlich heller als auf der anderen sind, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines konischen Verlaufs

Die `conic-gradient`-Syntax ist ähnlich der `radial-gradient`-Syntax, aber die Farbunterbrechungen sind um einen Gradientenbogen, den Umfang eines Kreises, herum platziert, anstatt auf der Gradientenlinie, die sich vom Zentrum des Gradienten aus erstreckt. Bei konischen Verläufen verlaufen die Farben so, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Bei einem radialen Verlauf verlaufen die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen.

![Farbunterbrechungen entlang des Umfangs eines kegeligen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird durch Angabe eines Drehwinkels, des Zentrums des Gradienten und dann durch Angabe einer Liste von Farbunterbrechungen spezifiziert. Im Gegensatz zu linearen und radialen Farbverläufen, deren Farbunterbrechungen durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbunterbrechungen eines konischen Farbverlaufs mit einem [Winkel](/de/docs/Web/CSS/Reference/Values/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gon, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung. Browser, die konische Farbverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100 % 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich den radialen Farbverläufen bietet die `conic gradient`-Syntax die Möglichkeit, das Zentrum des Gradienten überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind der Syntax für 2-Wertige `background-position` ähnlich.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Ausgangspunkt_ des Gradienten oder Bogens ist Norden, oder 12:00 Uhr. Der Gradient wird dann um den _from_-Winkel gedreht. Die Farben des Gradienten werden durch die Winkel der Farbunterbrechungen, ihre Ausgangspunkte, Endpunkte, und dazwischen optionalen farblichen Unterbrechungspunkte bestimmt. Die Übergänge zwischen Farben können mit Farbenhinweisen zwischen benachbarten Farben-Farbunterbrechungen verändert werden.

#### Anpassen von Farbverläufen

Durch das Hinzufügen weiterer winkelbasierter Farbunterbrechungspunkte auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position einer Farbunterbrechung kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort einer Farbunterbrechung nicht angeben, wird sie auf halbem Weg zwischen der vorhergehenden und der folgenden platziert. Wenn Sie keinen Winkel für die erste oder letzte Farbunterbrechung angeben, sind deren Werte 0deg beziehungsweise 360deg. Die folgenden zwei Farbverläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig verlaufen die Farben sanft von der Farbe an einer Farbunterbrechung zur Farbe an der nächsten Farbunterbrechung, wobei der Mittelpunkt zwischen den Farben der halbe Punkt zwischen dem Farbübergang ist. Sie können diesen Mittelpunkt des Farbübergangs auf jeden Punkt zwischen zwei Farbunterbrechungen verschieben, indem Sie einen Farbenhinweis hinzufügen, der anzeigt, wo die Mitte des Farbübergangs sein sollte. Das folgende Beispiel ist von Anfang bis zur 10%-Marke in leuchtendem Rot, wechselt von Rot zu Blau über 80% der Drehung, wobei die letzten 10% in festen Blau sind. Der Mittelpunkt des roten zum blauen Farbverlaufswechsels ist jedoch bei der 20%-Marke anstelle der 50%-Marke, wie es ohne den 80grad oder 20% Farbenhinweis geschehen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbunterbrechungen am selben Ort sind, wird der Übergang eine harte Linie zwischen der ersten und der letzten an diesem Ort angegebenen Farbe sein. Um konische Verläufe zur Erstellung von Tortendiagrammen zu verwenden — was NICHT die richtige Methode ist, um Tortendiagramme zu erstellen, da Hintergrundbilder nicht barrierefrei sind — verwenden Sie feste Farbunterbrechungen, bei denen die Winkel der Farbstopps für zwei benachbarte Farbunterbrechungen gleich sind. Der einfachste Weg, dies zu erreichen, ist die Verwendung von mehreren Positions-Farbstopps. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbunterbrechungen sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbunterbrechungen mit niedrigeren Werten überschreiben den Wert der vorherigen Farbunterbrechung und erzeugen einen harten Übergang. Der folgende Verlauf wechselt an der 30% Marke von Rot zu Gelb und dann über 35% des Farbverlaufs von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt noch weitere Effekte, die Sie mit konischen Farbverläufen erzeugen können. Ein Schachbrettmuster ist merkwürdigerweise einer davon. Indem Sie Quadranten mit einem weißem, oberen linken und einem weißem unteren rechten Quadranten sowie schwarzen, unteren linken und oberen rechten Quadranten erstellen, und dann den Verlauf 16 Mal (vier Mal horizontal und vier Mal vertikal) wiederholen, können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white 1rad 1.5rad, black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkel-Einheiten mischen und anpassen, aber tun Sie das nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist insbesondere für Screenreader von Bedeutung, da ein Screenreader dessen Anwesenheit nicht ansagt und somit nichts an seine Benutzer weitergibt. Obwohl es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Farbverläufen zu erstellen, bietet CSS-Bilder keinen nativen Weg, um Alternativtext zuzuweisen, und daher wird das durch den konischen Farbverlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis Erfolgskriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Vom Zentrum verschobener Gradient

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

Dieses Beispiel verwendet multipositionale Farbunterbrechungen, bei denen benachbarte Farben denselben Farbstoppswert haben, wodurch ein gestreifter Effekt entsteht.

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

In diesem Beispiel wird das [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbmodell für die Interpolation verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Der Kasten auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Der Kasten auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), bedeutet, dass die Farbe von Rot zu Blau wechselt, indem der längere Bogen durchläuft, von Grün, Gelb und Orange.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für `conic-gradient`

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradientenfunktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
