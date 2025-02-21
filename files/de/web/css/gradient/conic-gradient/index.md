---
title: conic-gradient()
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem Verlauf besteht, dessen Farbverläufe um einen Mittelpunkt gedreht werden (anstatt vom Mittelpunkt auszustrahlen). Beispielhafte Kegelgradienten sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

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
  - : Eingeleitet vom Schlüsselwort `from` und mit einem Winkel als Wert, definiert es die Rotation des Gradienten im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft [`background-position`](/de/docs/Web/CSS/background-position) und definiert den Mittelpunkt des Gradienten. Wenn nicht angegeben, wird der Wert `center` als Standardwert für `position` verwendet, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbenstopp-Wert mit einem {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopp-Positionen (einem {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Gradienten).
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie der Verlauf zwischen benachbarten Farbenstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbenstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbenstopps.

> [!NOTE]
> Die Darstellung von Farbenstopps in Kegelgradienten folgt denselben Regeln wie die Darstellung von [Farbstops in linearen Gradienten](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Gradienten hat ein Kegelgradient [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); das bedeutet, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das es angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes eingestellt ist als die Elementgröße.

Um einen Kegelgradienten zu erstellen, der sich so wiederholt, dass er eine 360-Grad-Drehung ausfüllt, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur an Stellen verwendet werden, an denen `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Warum wird es "Kegel"-Gradient genannt? Wenn die Farbverläufe auf einer Seite viel heller sind als auf der anderen, kann es von oben wie ein Kegel aussehen.

### Zusammensetzung eines Kegelgradienten

Die Syntax von Kegelgradienten ist ähnlich der von radial-gradients, aber die Farbenstopps werden um einen Gradientbogen, den Umfang eines Kreises, gelegt, anstatt auf der Gradientenlinie gesetzt zu werden, die vom Mittelpunkt des Gradienten ausgeht. Bei Kegelgradienten wechseln die Farben, als ob sie um das Zentrum eines Kreises herumgedreht würden, beginnend oben und im Uhrzeigersinn verlaufend. Bei einem Radialgradienten wechseln die Farben vom Mittelpunkt einer Ellipse in alle Richtungen nach außen.

![Farbenstopps entlang des Umfangs eines Kegelgradienten und der Achse eines Radialgradienten.](screenshot_2018-11-29_21.09.19.png)

Ein Kegelgradient wird durch Angabe eines Drehwinkels, des Zentrums des Gradienten und dann durch Festlegung einer Liste von Farbenstopps spezifiziert. Im Gegensatz zu linearen und radialen Gradienten, deren Farbenstopps durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbenstopps eines Kegelgradienten durch einen [angle](/de/docs/Web/CSS/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Gradienten, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die Kegelgradienten unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Ähnlich wie bei Radialgradients ermöglicht die Kegelgradienten-Syntax das Positionieren des Zentrums des Gradienten überall innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich der Syntax für 2-Wert background-position.

Der Gradientenbogen ist der Umfang des Gradienten. Der _Ausgangspunkt_ des Gradienten oder Bogens ist Norden oder 12:00 Uhr. Der Gradienten wird dann um den _from_ Winkel gedreht. Die Farben des Gradienten werden durch die angewinkelten Farbenstopps, ihre Ausgangspunkte, Endpunkte und, dazwischen, durch optionale angewinkelte Farbenstopppunkte bestimmt. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen den Farbenstopps benachbarter Farben verändert werden.

#### Anpassung von Gradienten

Durch Hinzufügen weiterer angewinkelter Farbenstopppunkte auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbenstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Standort eines Farbenstopps nicht angeben, wird er auf halbem Weg zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbenstopp angeben, sind deren Werte 0deg und 360deg. Die folgenden beiden Gradienten sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbenstopp zur Farbe am nachfolgenden Farbenstopp, wobei der Mittelpunkt zwischen den Farben die Mitte zwischen dem Farbübergang ist. Sie können diesen Farbübergangsmittelpunkt an einen beliebigen Punkt zwischen zwei Farbenstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo die Mitte des Farbübergangs sein soll. Das folgende Beispiel ist durchgehend rot vom Anfang bis zur 10%-Marke, wechselt von Rot zu Blau über 80% der Drehung, wobei die letzten 10% durchgehend blau sind. Der Mittelpunkt des von Rot zu Blau verlaufenden Farbwechsels liegt jedoch bei der 20%-Marke und nicht bei der 50%-Marke, wie ohne den 80 grad oder 20%, Farbhinweis geschehen würde.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbenstopps an derselben Stelle sind, wird der Übergang ein harter Strich zwischen den ersten und letzten an dieser Stelle deklarierten Farben sein. Um Kegelgradienten zur Erstellung von Tortendiagrammen zu verwenden — was NICHT der korrekte Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbenstops, wobei die Farbenstoppwinkel für zwei nebeneinanderliegende Farbenstopps gleich sind. Der einfachste Weg, dies zu tun, ist die Verwendung mehrerer Positionsfarbenstopps. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbenstopps sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbenstopps mit niedrigerem Wert überschreiben den Wert des vorherigen Farbenstopps und erzeugen einen harten Übergang. Das folgende Beispiel wechselt von Rot zu Gelb bei der 30%-Marke und dann von Gelb zu Blau über 35% des Gradienten:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt andere Effekte, die Sie mit Kegelgradienten erzeugen können. Seltsamerweise ist ein Schachbrettmuster einer davon. Indem Sie Quadranten mit einem oberen linken und unteren rechten weißen Quadranten und unteren linken und oberen rechten schwarzen Quadranten erstellen und dann den Gradienten 16 Mal (vier Mal quer und vier Mal abwärts) wiederholen, können Sie ein Schachbrettmuster erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und kombinieren, aber das sollten Sie nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten assistiven Technologien keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und daher seinen Nutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit Kegelgradienten zu erstellen, bietet CSS-Bilder keinen nativen Weg, um alternativen Text zuzuweisen, und daher wird das durch den Kegelgradienten dargestellte Bild für Bildschirmleser-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend sind, um den allgemeinen Zweck der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verstehen von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Gradienten bei 40 Grad

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

### Außerhalb-zentrierter Gradient

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

Dieses Beispiel verwendet Mehrfachpositionsfarbenstops, bei denen benachbarte Farben denselben Farbenstoppwert haben, wodurch ein Streifeneffekt entsteht.

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

In diesem Beispiel wird das Interpolieren des [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystems verwendet und [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Das Kästchen auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass der Farbverlauf direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das Kästchen auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und dabei durch Grüns, Gelbtöne und Orangetöne verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere conic-gradient Beispiele

Bitte sehen Sie [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Gradienten-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
