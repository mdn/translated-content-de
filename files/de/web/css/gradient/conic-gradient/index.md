---
title: "`conic-gradient()`"
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 8e2465af7cac389b70e83d54eeb288448f2ae08d
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem Gradienten besteht, mit Farbübergängen, die um einen Mittelpunkt rotieren (anstatt vom Mittelpunkt aus zu strahlen). Einfache conic Gradienten schließen Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}} ein. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt vom {{CSSxRef("&lt;gradient&gt;")}} Datentyp, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

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
  - : Eingeleitet durch das Schlüsselwort `from` und als Wert ein Winkel, definiert die Drehung des Gradienten im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwortwerte wie die [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaft. Der Wert `position` definiert das Zentrum des Gradienten. Wenn nicht angegeben, ist der Standardwert für `position` `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbstopwert aus {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stoppositionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Gradient zwischen angrenzenden Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Übergang sein Maximum erreicht. Wird dies ausgelassen, ist der Übergangspunkt das Mittel zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in conic Gradienten folgt denselben Regeln wie [Farbstopps in linearen Gradienten](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Gradienten hat ein conic Gradient [keine eigene Dimension](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Um einen conic Gradienten zu erstellen, der sich wiederholt, um eine 360-Grad-Drehung zu füllen, verwenden Sie stattdessen die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion.

Da `<gradient>` zum `<image>` Datentyp gehört, können sie nur dort verwendet werden, wo `<image>` verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es ein "conic" Gradient genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines conic Gradienten

Die conic-gradient Syntax ist der radial-gradient Syntax ähnlich, jedoch werden die Farbstopps um einen Gradientenbogen, den Umfang eines Kreises, nicht entlang der Gradientenlinie platziert, die vom Zentrum des Gradienten ausgeht. Bei conic Gradienten wechseln die Farben, als ob sie im Uhrzeigersinn um das Zentrum eines Kreises gedreht würden, beginnend oben. In einem radialen Gradienten wechseln die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen.

![Farbstopps entlang des Umfangs eines conic Gradienten und der Achse eines radialen Gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein conic Gradient wird spezifiziert, indem ein Drehwinkel, das Zentrum des Gradienten und dann eine Liste von Farbstopps angegeben werden. Im Gegensatz zu linearen und radialen Gradienten, deren Farbstopps durch eine {{cssxref("length")}} platziert werden, werden die Farbstopps eines conic Gradienten mit einem [Winkel](/de/docs/Web/CSS/angle) spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung. Browser, die conic Gradienten unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Ähnlich wie bei radialen Gradienten ermöglicht die Syntax eines conic Gradienten, das Zentrum des Gradienten an einer beliebigen Stelle innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich wie die Syntax für 2-Wert `background-position`.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Startpunkt_ des Gradienten oder des Bogens ist Norden, oder 12:00 Uhr. Der Gradient wird dann um den _from_ Winkel gedreht. Die Farben des Gradienten werden durch die gewinkelten Farbstopps, ihre Startpunkte, Endpunkte und dazwischen und durch optionale gewinkelte Farbstopppunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhints zwischen den angrenzenden Farbstopppunkten verändert werden.

#### Anpassen von Gradienten

Durch das Hinzufügen weiterer gewinkelter Farbstopppunkte auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit definiert werden, indem ein {{CSSxRef("&lt;angle&gt;")}} verwendet wird. Wenn die Position eines Farbstopps nicht spezifiziert wird, wird sie genau zwischen dem vorhergehenden und dem folgenden platziert. Wenn der Winkel für den ersten oder letzten Farbstop nicht angegeben wird, sind ihre Werte 0 Grad bzw. 360 Grad. Die folgenden zwei Gradienten sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe eines Farbstopps zur Farbe des darauf folgenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbwechsels ist. Sie können diesen Mittelpunkt zu jedem beliebigen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels sein soll. Im folgenden Beispiel ist der Verlauf von Rot zu Blau solide Rot bis zur 10%-Markierung und wechselt von Rot zu Blau über 80% der Drehung, wobei die restlichen 10% solid Blau sind. Der Mittelpunkt der Rot-Blau-Veränderung liegt jedoch bei der 20%-Markierung und nicht bei der 50%-Markierung, wie es ohne den 80graden oder 20%-Farbhinweis der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen den ersten und letzten Farben, die an dieser Position deklariert werden. Um conic Gradienten zum Erstellen von Tortendiagrammen zu verwenden — was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen da sie nicht zugänglich sind — verwenden Sie harte Farbstopps, bei denen die Farbstoppwinkel für zwei angrenzende Farbstopps gleich sind. Der einfachste Weg dies zu tun, ist die Verwendung von mehrfachen Positionsfarbstopps. Die folgenden zwei Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Ordnung aufgelistet werden. Nachfolgende Farbstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Der folgende Verlauf wechselt bei der 30%-Markierung von Rot zu Gelb und wechselt dann über 35% des Gradienten von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit conic Gradienten erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem oberen linken und einem unteren rechten weißen Quadranten und einem unteren linken und einem oberen rechten schwarzen Quadranten erstellen, und dann den Gradienten 16 Mal (viermal quer und viermal nach unten) wiederholen, können Sie ein Schachbrettmuster erzeugen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkelmaßeinheiten mischen, aber tun Sie das nicht. Das oben stehende ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Existenz nicht ankündigt und somit nichts an seine Benutzer weitergeben kann. Auch wenn es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit conic Gradienten zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtext zuzuweisen, und daher wird das Bild, das durch den conic Gradienten dargestellt wird, für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild wichtige Informationen enthält, die zum Verständnis des allgemeinen Zwecks der Seite erforderlich sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis von Erfolgskriterium 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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

### Dezentrierter Gradient

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

Dieses Beispiel verwendet Mehrpositionsfarbstops, wobei angrenzende Farben denselben Farbstoppwert haben, was einen gestreiften Effekt erzeugt.

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

In diesem Beispiel wird für die Interpolation das [HSL](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau übergeht, indem sie den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau geht, indem sie den längeren Bogen durchläuft und durch Grüntöne, Gelb- und Orangetöne.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient-Beispiele

Bitte sehen Sie [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

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
