---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem Farbverlauf mit Farbübergängen besteht, die um einen Mittelpunkt rotieren (anstatt vom Zentrum zu strahlen). Beispiele für kegelförmige Farbverläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

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
  - : Der von dem Schlüsselwort `from` gefolgt wird und einen Winkel als Wert nimmt, definiert die Rotation des Farbverlaufs im Uhrzeigersinn.
- `<position>`
  - : Unter Verwendung der gleichen Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft [`background-position`](/de/docs/Web/CSS/background-position), definiert der Wert `position` das Zentrum des Farbverlaufs. Wenn nicht angegeben, ist der Standardwert für `position` `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Der Wert eines Farbstopps {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Farbverlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Farbverlauf zwischen benachbarten Farbstopps verläuft. Die Länge legt fest, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf die Mitte des Farbwechsels erreichen soll. Wenn weggelassen, ist die Mitte des Farbwechsels die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in kegelförmigen Farbverläufen folgt den gleichen Regeln wie [Farbstopps in linearen Farbverläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Verlauf hat ein kegelförmiger Verlauf [keine intrinsischen Maße](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird die Größe des Elements annehmen, auf das er angewendet wird, oder die Größe des \<image>, wenn es auf etwas anderes als die Größe des Elements gesetzt ist.

Um einen kegelförmigen Farbverlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Rotation auszufüllen, verwenden Sie die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Warum wird es "kegelförmiger" Farbverlauf genannt? Wenn die Farbstopps auf einer Seite viel heller sind als auf der anderen, kann es aussehen wie ein Kegel von oben.

### Zusammensetzung eines kegelförmigen Farbverlaufs

Die Syntax des conic-gradient ist der Syntax von radial-gradient ähnlich, jedoch werden die Farbstopps um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Mittelpunkt des Gradienten ausgeht. Bei kegelförmigen Farbverläufen ändern sich die Farben, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Bei einem radialen Verlauf ändern sich die Farben vom Zentrum einer Ellipse nach außen in alle Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Farbverlaufs und der Achse eines radialen Farbverlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Verlauf wird spezifiziert, indem ein Rotationswinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps angegeben werden. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstopps eines kegelförmigen Verlaufs mit einem [angle](/de/docs/Web/CSS/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradianten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gradianten, 2π Radianten und 1 Umdrehung. Browser, die kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen bietet die kegelförmige Verlaufssyntax die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind der Syntax für 2-Wert-Hintergrundposition ähnlich.

Der Gradientenbogen ist der Umfang des Farbverlaufs. Der _Ausgangspunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann um den _from_ Winkel gedreht. Die Farben des Farbverlaufs werden durch die abgewinkelten Farbstopps, ihre Ausgangspunkte, Endpunkte und dazwischen sowie optionale abgewinkelte Farbstopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhilfen zwischen angrenzenden Farben der Farbstopps verändert werden.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer abgewinkelter Farbstopp-Punkte auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben schaffen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird er zur Hälfte zwischen dem vorhergehenden und dem nachfolgenden Stopp platziert. Wenn Sie für den ersten oder letzten Farbstopp keinen Winkel angeben, sind deren Werte 0deg bzw. 360deg. Die folgenden zwei Verläufe sind identisch:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Stopp zur Farbe am nachfolgenden Stopp, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt des Farbwechsels ist. Sie können diesen Mittelpunkt des Farbwechsels an jeden Punkt zwischen zwei Stopps verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte des Farbwechsels sein soll. Das folgende Beispiel zeigt reines Rot vom Anfang bis zur 10%-Marke, wechselt von Rot zu Blau über 80% der Umdrehung mit den letzten 10%, die rein blau sind. Der Mittelpunkt der Rot-zu-Blau-Gradientenänderung liegt jedoch bei der 20%-Marke anstelle der 50%-Marke, wie es ohne den 80grad oder 20% Farbhint der Fall gewesen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten Farbe, die an dieser Stelle deklariert ist. Um mit kegelförmigen Farbverläufen Tortendiagramme zu erstellen – was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind – verwenden Sie harte Farbstopps, bei denen die Farbstoppwinkel für zwei angrenzende Farbstopps gleich sind. Der einfachste Weg dies zu tun, ist die Verwendung von mehrfach positionierten Farbstopps. Die folgenden beiden Deklarationen sind äquivalent:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstopps mit einem niedrigeren Wert überschreiben den Wert des vorherigen Farbstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt von Rot zu Gelb bei der 30%-Marke und dann von Gelb zu Blau über 35% des Gradienten:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit kegelförmigen Verläufen erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen und den Verlauf 16 mal wiederholen (vier mal über und vier mal nach unten), können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkelmaßeinheiten mischen und abstimmen, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten Assistenztechnologien keine speziellen Informationen über Hintergrundbilder. Dies ist hauptsächlich für Screenreader wichtig, denn ein Screenreader wird seine Anwesenheit nicht ankündigen und daher seinen Nutzern nichts vermitteln. Obwohl es möglich ist, mit kegelförmigen Verläufen Tortendiagramme, Schachbretter und andere Effekte zu erstellen, bieten CSS-Bilder keine nativen Möglichkeiten, alternativen Text zuzuweisen, und daher wird das durch den kegelförmigen Verlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die zum Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es im Dokument semantisch zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
  background-image: conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

### Dezentrierter Verlauf

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

Dieses Beispiel verwendet mehrere Positionsfarbstopps, wobei benachbarte Farben denselben Farbstoppwert aufweisen und einen gestreiften Effekt erzeugen.

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

In diesem Beispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem zur Interpolation verwendet und [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das linke Kästchen verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), das bedeutet, die Farbe wechselt direkt von Rot zu Blau unter Verwendung des kürzeren Bogens auf dem {{Glossary("Color_wheel", "Farbkreis")}}. Das rechte Kästchen verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei durch Grüns, Gelbs und Orangen läuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient Beispiele

Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Weitere Verlaufseigenschaften: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
